#!/usr/bin/env python3
"""Extract the English Foundation PDFs into deterministic, structured Markdown.

The source files are slide-like PDFs rather than conventional flowing documents.
This extractor therefore uses font and position information, table geometry, and
link annotations in addition to the plain text layer.  It deliberately applies a
very conservative image policy: full-page backgrounds, branding, decorations,
and repeated images are ignored; an image is only retained when nearby page text
explicitly refers to a visual that a learner needs.

Run from any directory:

    python scripts/extract-english-markdown.py

PyMuPDF (the ``pymupdf`` package, imported as ``fitz``) is the only dependency.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import textwrap
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable, Sequence
from urllib.parse import urlparse

try:
    import fitz  # PyMuPDF
except ImportError as exc:  # pragma: no cover - environment-specific failure
    raise SystemExit(
        "PyMuPDF is required. Install it with: python -m pip install pymupdf"
    ) from exc


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE_ROOT = REPO_ROOT / "ban_dich_markdown" / "EN"
DEFAULT_CONTENT_ROOT = REPO_ROOT / "english" / "content"
DEFAULT_ASSET_ROOT = REPO_ROOT / "english" / "assets"
DEFAULT_REPORT = REPO_ROOT / "english" / "extraction-report.json"

COPYRIGHT_RE = re.compile(
    r"copyright\s+fpt\s+software\s*[–—-]\s*level\s+of\s+confidentiality",
    re.IGNORECASE,
)
MODULE_LABEL_RE = re.compile(r"^F[12]\s*[–—-]\s*Module\s+0?\d{1,2}$", re.I)
LESSON_LABEL_RE = re.compile(r"^Lesson\s+0?\d{1,2}$", re.I)
TEMPLATE_ARTIFACT_RE = re.compile(r"^(?:s|sxx\s+sx)$", re.I)
NUMBERED_RE = re.compile(r"^(\d{1,3}[.)]|[A-Za-z][.)])\s+(.+)$")
NUMBERED_ONLY_RE = re.compile(r"^(?:\d{1,3}|[A-Za-z])[.)]$")
DIALOGUE_RE = re.compile(
    r"^(?P<speaker>[A-Z][A-Za-z0-9 .&/'’_-]{0,35}):\s*(?P<speech>.+)$"
)
URL_RE = re.compile(r"(?<!\()https?://[^\s<>]+", re.I)

BULLET_CHARS = "•●▪◦‣⁃✓✔"
BULLET_ONLY_RE = re.compile(rf"^[{re.escape(BULLET_CHARS)}]$")
BULLET_RE = re.compile(rf"^[{re.escape(BULLET_CHARS)}]\s*(.*)$")

SECTION_RE = re.compile(
    r"^(?:"
    r"warm[ -]?up|vocabulary|key vocabulary|pronunciation|stressed syllables|"
    r"intonation(?: practice)?(?: [a-z])?|reading|listening|video|video analysis|"
    r"dialogue|role[ -]?play(?: analysis| dialogue)?|practice|production|"
    r"reflection|lesson reflection|summary|end[ -]of[ -]lesson task|answer key|"
    r"discussion|motivation questions|language focus|grammar|writing|speaking|"
    r"case study|scenario|instructions?|objectives?|learning objectives?|"
    r"table of content|table of contents|review|revision|quiz|exercise|task|"
    r"useful (?:language|expressions|phrases)|key (?:phrases|takeaways|points)|"
    r"assessment|feedback"
    r")(?:\s*[:–—-].*)?$",
    re.I,
)

VISUAL_REFERENCE_RE = re.compile(
    r"(?:"
    r"look at (?:the )?(?:picture|image|photo|chart|diagram|graph)|"
    r"(?:picture|image|photo|chart|diagram|graph) (?:below|above)|"
    r"based on (?:the )?(?:picture|image|photo|chart|diagram|graph)|"
    r"describe (?:this|the) (?:picture|image|photo|chart|diagram|graph)|"
    r"what (?:can|do) you (?:see|notice)|"
    r"study (?:this|the|the following) (?:visual|chart|diagram|graph)|"
    r"following (?:visual|picture|image|photo|chart|diagram|graph)|"
    r"infographic"
    r")",
    re.I,
)


@dataclass(frozen=True)
class DocumentSpec:
    source: Path
    doc_id: str
    level: str
    module: int
    lesson: int | None
    doc_type: str
    relative_output: Path

    @property
    def sort_key(self) -> tuple[int, int, int, int]:
        level_order = 1 if self.level == "EF1" else 2
        type_order = {"textbook": 0, "handbook": 1, "lesson": 2}[self.doc_type]
        return (level_order, self.module, self.lesson or 0, type_order)


@dataclass
class RawLine:
    text: str
    bbox: tuple[float, float, float, float]
    font_size: float
    bold: bool
    block_no: int
    sequence: int

    @property
    def x0(self) -> float:
        return self.bbox[0]

    @property
    def y0(self) -> float:
        return self.bbox[1]

    @property
    def y1(self) -> float:
        return self.bbox[3]


@dataclass
class TableData:
    bbox: tuple[float, float, float, float]
    rows: list[list[str | None]]
    sequence: int

    @property
    def x0(self) -> float:
        return self.bbox[0]

    @property
    def y0(self) -> float:
        return self.bbox[1]


@dataclass
class DocumentStats:
    doc_id: str
    source: str
    pages: int
    output: str
    title: str = ""
    text_characters: int = 0
    tables_kept: int = 0
    link_annotations_found: int = 0
    links_kept: int = 0
    image_candidates: int = 0
    images_kept: int = 0
    pages_without_text: list[int] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source-root",
        type=Path,
        default=DEFAULT_SOURCE_ROOT,
        help="Directory recursively containing the English PDFs",
    )
    parser.add_argument(
        "--content-root",
        type=Path,
        default=DEFAULT_CONTENT_ROOT,
        help="Destination directory for generated Markdown",
    )
    parser.add_argument(
        "--asset-root",
        type=Path,
        default=DEFAULT_ASSET_ROOT,
        help="Destination directory for selected instructional images",
    )
    parser.add_argument(
        "--report",
        type=Path,
        default=DEFAULT_REPORT,
        help="Destination JSON extraction report",
    )
    parser.add_argument(
        "--skip-tables",
        action="store_true",
        help="Skip geometric table detection (faster, lower fidelity)",
    )
    parser.add_argument(
        "--skip-images",
        action="store_true",
        help="Do not retain even explicitly referenced instructional images",
    )
    return parser.parse_args()


def normalize_space(value: str) -> str:
    replacements = {
        "\u00a0": " ",
        "\u200b": "",
        "\ufb00": "ff",
        "\ufb01": "fi",
        "\ufb02": "fl",
        "\ufb03": "ffi",
        "\ufb04": "ffl",
        "\ufffd": "",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    return re.sub(r"\s+", " ", value).strip()


def yaml_string(value: str) -> str:
    """JSON strings are valid quoted YAML scalars and escape safely."""

    return json.dumps(value, ensure_ascii=False)


def write_if_changed(path: Path, data: str | bytes) -> bool:
    """Write atomically only when bytes changed; return whether a write occurred."""

    payload = data.encode("utf-8") if isinstance(data, str) else data
    if path.exists() and path.read_bytes() == payload:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(f".{path.name}.tmp")
    temporary.write_bytes(payload)
    temporary.replace(path)
    return True


def parse_source(path: Path) -> DocumentSpec:
    name = path.name
    ef1 = re.fullmatch(
        r"F1_(?:M|Module\s+)(?P<module>\d{1,2})_(?P<type>Textbook|Handbook)\.pdf",
        name,
        re.I,
    )
    if ef1:
        module = int(ef1.group("module"))
        doc_type = ef1.group("type").lower()
        return DocumentSpec(
            source=path,
            doc_id=f"ef1-m{module:02d}-{doc_type}",
            level="EF1",
            module=module,
            lesson=None,
            doc_type=doc_type,
            relative_output=Path("ef1") / f"module-{module:02d}" / f"{doc_type}.md",
        )

    ef2 = re.fullmatch(
        r"F2_M(?P<module>\d{1,2})_L(?P<lesson>\d{1,2})"
        r"(?:_v[0-9.]+)?\.pdf",
        name,
        re.I,
    )
    if ef2:
        module = int(ef2.group("module"))
        lesson = int(ef2.group("lesson"))
        return DocumentSpec(
            source=path,
            doc_id=f"ef2-m{module:02d}-l{lesson:02d}",
            level="EF2",
            module=module,
            lesson=lesson,
            doc_type="lesson",
            relative_output=(
                Path("ef2") / f"module-{module:02d}" / f"lesson-{lesson:02d}.md"
            ),
        )

    raise ValueError(f"Unrecognized English PDF filename: {name}")


def expected_ids() -> set[str]:
    ids = {
        f"ef1-m{module:02d}-{doc_type}"
        for module in range(1, 4)
        for doc_type in ("textbook", "handbook")
    }
    ids.update(
        f"ef2-m{module:02d}-l{lesson:02d}"
        for module in range(1, 4)
        for lesson in range(1, 21)
    )
    return ids


def discover_sources(source_root: Path) -> list[DocumentSpec]:
    if not source_root.is_dir():
        raise FileNotFoundError(f"Source directory does not exist: {source_root}")
    pdfs = sorted(source_root.rglob("*.pdf"), key=lambda path: path.as_posix().lower())
    specs = [parse_source(path) for path in pdfs]

    by_id: dict[str, list[Path]] = {}
    for spec in specs:
        by_id.setdefault(spec.doc_id, []).append(spec.source)
    duplicates = {doc_id: paths for doc_id, paths in by_id.items() if len(paths) > 1}
    if duplicates:
        detail = "; ".join(
            f"{doc_id}: {', '.join(path.name for path in paths)}"
            for doc_id, paths in sorted(duplicates.items())
        )
        raise ValueError(f"Duplicate normalized document IDs: {detail}")

    actual = set(by_id)
    expected = expected_ids()
    if actual != expected:
        missing = ", ".join(sorted(expected - actual)) or "none"
        extra = ", ".join(sorted(actual - expected)) or "none"
        raise ValueError(
            f"English source set is incomplete or unexpected. Missing: {missing}. Extra: {extra}."
        )
    return sorted(specs, key=lambda spec: spec.sort_key)


def page_lines(page: fitz.Page) -> list[RawLine]:
    data = page.get_text("dict", sort=True)
    result: list[RawLine] = []
    sequence = 0
    for block_no, block in enumerate(data.get("blocks", [])):
        for line in block.get("lines", []):
            spans = line.get("spans", [])
            if not spans:
                continue
            text = normalize_space("".join(str(span.get("text", "")) for span in spans))
            if not text:
                continue
            fonts = " ".join(str(span.get("font", "")) for span in spans)
            bold = "bold" in fonts.lower() or any(
                int(span.get("flags", 0)) & 16 for span in spans
            )
            result.append(
                RawLine(
                    text=text,
                    bbox=tuple(float(value) for value in line["bbox"]),
                    font_size=max(float(span.get("size", 0)) for span in spans),
                    bold=bold,
                    block_no=block_no,
                    sequence=sequence,
                )
            )
            sequence += 1
    return result


def discover_title(document: fitz.Document, spec: DocumentSpec) -> str:
    if spec.level == "EF1":
        label = "Textbook" if spec.doc_type == "textbook" else "Handbook"
        module_titles = {
            1: "Business English Essentials for Teams",
            2: "Business English for Customer Interaction",
            3: "Business English for Real-World Applications",
        }
        return f"{module_titles[spec.module]} — Module {spec.module:02d} {label}"

    lines = page_lines(document[0])
    candidates = [
        line
        for line in lines
        if 55 <= line.y0 <= 155
        and line.font_size >= 17
        and not LESSON_LABEL_RE.fullmatch(line.text)
        and not MODULE_LABEL_RE.fullmatch(line.text)
    ]
    if candidates:
        # Titles normally sit around y=100. Prefer the largest font, then that location.
        candidates.sort(key=lambda line: (-line.font_size, abs(line.y0 - 105), line.sequence))
        return candidates[0].text

    text = document[0].get_text("text")
    patterns = (
        r"Lesson[ \t]+0?\d{1,2}[ \t]*\r?\n(?P<title>.*?)(?:\r?\n[ \t]*F2[ \t]*[–—-][ \t]*Module)",
        r"F2[ \t]*[–—-][ \t]*Module[ \t]+0?\d{1,2}[ \t]*\r?\n[ \t]*Lesson[ \t]+0?\d{1,2}[ \t]*\r?\n(?P<title>[^\r\n]+)",
    )
    for pattern in patterns:
        match = re.search(pattern, text, re.I | re.S)
        if match:
            fragments = [
                normalize_space(part)
                for part in match.group("title").splitlines()
                if normalize_space(part)
            ]
            if fragments:
                return " ".join(fragments)
    return f"Lesson {spec.lesson:02d}"


def is_repeated_chrome(
    line: RawLine,
    page: fitz.Page,
    spec: DocumentSpec,
    title: str,
) -> bool:
    text = line.text.strip()
    if COPYRIGHT_RE.search(text):
        return True
    if line.y0 < page.rect.height * 0.16 and TEMPLATE_ARTIFACT_RE.fullmatch(text):
        return True
    if line.y0 < page.rect.height * 0.16 and re.fullmatch(r"\d{1,3}", text):
        return True
    if MODULE_LABEL_RE.fullmatch(text):
        return True
    if line.y0 > page.rect.height * 0.92 and re.fullmatch(r"(?:Page\s*)?\d+", text, re.I):
        return True
    if spec.level == "EF2":
        if LESSON_LABEL_RE.fullmatch(text):
            return True
        if text.casefold() == title.casefold():
            return True
    return False


def rect_intersection_ratio(
    inner: tuple[float, float, float, float],
    outer: tuple[float, float, float, float],
) -> float:
    ix0 = max(inner[0], outer[0])
    iy0 = max(inner[1], outer[1])
    ix1 = min(inner[2], outer[2])
    iy1 = min(inner[3], outer[3])
    if ix1 <= ix0 or iy1 <= iy0:
        return 0.0
    intersection = (ix1 - ix0) * (iy1 - iy0)
    area = max((inner[2] - inner[0]) * (inner[3] - inner[1]), 1.0)
    return intersection / area


def extract_tables(
    page: fitz.Page,
    page_number: int,
    stats: DocumentStats,
    skip_tables: bool,
) -> list[TableData]:
    if skip_tables:
        return []
    try:
        found = page.find_tables().tables
    except Exception as exc:  # PyMuPDF table inference should not abort all 760 pages.
        stats.warnings.append(f"page {page_number}: table detection failed: {exc}")
        return []

    result: list[TableData] = []
    for index, table in enumerate(found):
        if table.row_count < 2 or table.col_count < 2:
            continue
        rows = table.extract()
        populated = sum(
            1 for row in rows for cell in row if cell is not None and normalize_space(cell)
        )
        bbox = tuple(float(value) for value in table.bbox)
        page_area = max(page.rect.width * page.rect.height, 1.0)
        table_area = max((bbox[2] - bbox[0]) * (bbox[3] - bbox[1]), 0.0)
        if populated < 2 or table_area / page_area < 0.003:
            continue
        result.append(TableData(bbox=bbox, rows=rows, sequence=100_000 + index))
    stats.tables_kept += len(result)
    return result


def compact_table(rows: Sequence[Sequence[str | None]]) -> list[list[str]]:
    normalized = [
        [normalize_space((cell or "").replace("\n", " <br> ")) for cell in row]
        for row in rows
    ]
    width = max((len(row) for row in normalized), default=0)
    normalized = [row + [""] * (width - len(row)) for row in normalized]
    # Preserve the inferred grid, including empty worksheet cells. Removing sparse
    # columns can shift answers under the wrong heading and loses fill-in spaces.
    return normalized


def escape_table_cell(value: str) -> str:
    value = value.replace("|", r"\|")
    value = re.sub(r"\s*<br>\s*", "<br>", value)
    return value or " "


def render_table(table: TableData) -> list[str]:
    rows = compact_table(table.rows)
    if not rows or not rows[0]:
        return []
    width = len(rows[0])
    rows = [row[:width] + [""] * max(0, width - len(row)) for row in rows]
    header = rows[0]
    output = [
        "| " + " | ".join(escape_table_cell(cell) for cell in header) + " |",
        "| " + " | ".join("---" for _ in range(width)) + " |",
    ]
    output.extend(
        "| " + " | ".join(escape_table_cell(cell) for cell in row) + " |"
        for row in rows[1:]
    )
    return output


def merge_marker_lines(lines: list[RawLine]) -> list[RawLine]:
    merged: list[RawLine] = []
    index = 0
    while index < len(lines):
        current = lines[index]
        marker_only = BULLET_ONLY_RE.fullmatch(current.text) or NUMBERED_ONLY_RE.fullmatch(
            current.text
        )
        if marker_only and index + 1 < len(lines):
            following = lines[index + 1]
            vertical_distance = abs(current.y0 - following.y0)
            if (
                following.x0 >= current.x0
                and vertical_distance
                <= max(current.font_size, following.font_size) * 0.55
            ):
                if NUMBERED_ONLY_RE.fullmatch(current.text):
                    marker = current.text
                else:
                    marker = "✓" if current.text in "✓✔" else "•"
                current = RawLine(
                    text=f"{marker} {following.text}",
                    bbox=(current.bbox[0], current.bbox[1], following.bbox[2], following.bbox[3]),
                    font_size=following.font_size,
                    bold=following.bold,
                    block_no=following.block_no,
                    sequence=current.sequence,
                )
                index += 2
                merged.append(current)
                continue
        merged.append(current)
        index += 1
    return merged


def is_all_caps_heading(text: str) -> bool:
    letters = [char for char in text if char.isalpha()]
    return (
        2 <= len(letters)
        and len(text) <= 100
        and all(not char.islower() for char in letters)
        and not NUMBERED_RE.match(text)
    )


def heading_level(line: RawLine, body_size: float) -> int | None:
    text = line.text.strip()
    if line.font_size >= 16.5:
        return 2
    if line.font_size >= max(13.5, body_size + 1.5) and len(text) <= 120:
        return 3
    if SECTION_RE.fullmatch(text):
        return 3
    if is_all_caps_heading(text):
        return 3
    if line.bold and text.endswith(":") and len(text) <= 80:
        return 3
    return None


def markdown_escape_label(value: str) -> str:
    return value.replace("\\", r"\\").replace("[", r"\[").replace("]", r"\]")


def linkify_visible_urls(value: str) -> str:
    def replace(match: re.Match[str]) -> str:
        url = match.group(0).rstrip(".,;:!?)")
        suffix = match.group(0)[len(url) :]
        return f"<{url}>{suffix}"

    return URL_RE.sub(replace, value)


def join_wrapped(previous: str, continuation: str) -> str:
    if previous.endswith("-") and continuation and continuation[0].isalnum():
        return previous + continuation
    return previous.rstrip() + " " + continuation.lstrip()


def render_text_items(
    lines: list[RawLine],
    tables: list[TableData],
    page: fitz.Page,
    spec: DocumentSpec,
    title: str,
) -> list[str]:
    table_boxes = [table.bbox for table in tables]
    filtered = [
        line
        for line in lines
        if not is_repeated_chrome(line, page, spec, title)
        and not any(rect_intersection_ratio(line.bbox, bbox) >= 0.45 for bbox in table_boxes)
    ]
    filtered = merge_marker_lines(filtered)

    rounded_sizes = [round(line.font_size * 2) / 2 for line in filtered if line.font_size < 16]
    body_size = Counter(rounded_sizes).most_common(1)[0][0] if rounded_sizes else 12.0

    items: list[tuple[float, float, int, str, RawLine | TableData]] = []
    items.extend((line.y0, line.x0, line.sequence, "line", line) for line in filtered)
    items.extend((table.y0, table.x0, table.sequence, "table", table) for table in tables)
    items.sort(key=lambda item: (round(item[0], 1), item[1], item[2]))

    output: list[str] = []
    paragraph = ""
    paragraph_block: int | None = None
    paragraph_y1 = 0.0
    previous_special: tuple[str, RawLine, int] | None = None

    def append_block(block_lines: Iterable[str]) -> None:
        block = [line.rstrip() for line in block_lines]
        if not block:
            return
        if output and output[-1] != "":
            output.append("")
        output.extend(block)
        output.append("")

    def flush_paragraph() -> None:
        nonlocal paragraph, paragraph_block, paragraph_y1, previous_special
        if paragraph:
            append_block([linkify_visible_urls(paragraph)])
        paragraph = ""
        paragraph_block = None
        paragraph_y1 = 0.0
        previous_special = None

    for _y, _x, _sequence, kind, value in items:
        if kind == "table":
            flush_paragraph()
            append_block(render_table(value))  # type: ignore[arg-type]
            previous_special = None
            continue

        line = value  # type: ignore[assignment]
        assert isinstance(line, RawLine)
        text = line.text.strip()
        if not text:
            continue

        level = heading_level(line, body_size)
        if level is not None:
            flush_paragraph()
            append_block([f"{'#' * level} {text.rstrip(':').strip()}"])
            previous_special = None
            continue

        bullet = BULLET_RE.match(text)
        if bullet:
            flush_paragraph()
            checked = text[0] in "✓✔"
            content = bullet.group(1).strip()
            marker = "- [x]" if checked else "-"
            append_block([f"{marker} {linkify_visible_urls(content)}"])
            previous_special = ("list", line, len(output) - 2)
            continue

        numbered = NUMBERED_RE.match(text)
        if numbered:
            flush_paragraph()
            marker, content = numbered.groups()
            append_block([f"{marker} {linkify_visible_urls(content)}"])
            previous_special = ("list", line, len(output) - 2)
            continue

        dialogue = DIALOGUE_RE.match(text)
        if dialogue:
            flush_paragraph()
            speaker = markdown_escape_label(dialogue.group("speaker").strip())
            speech = linkify_visible_urls(dialogue.group("speech").strip())
            append_block([f"**{speaker}:** {speech}"])
            previous_special = ("dialogue", line, len(output) - 2)
            continue

        if previous_special is not None:
            _special_kind, previous_line, output_index = previous_special
            gap = line.y0 - previous_line.y1
            likely_continuation = (
                line.block_no == previous_line.block_no
                or (
                    -2 <= gap <= max(body_size * 1.35, 20)
                    and line.x0 >= previous_line.x0 - 2
                    and not text[0].isupper()
                )
            )
            if likely_continuation and 0 <= output_index < len(output):
                output[output_index] = join_wrapped(output[output_index], text)
                previous_special = (_special_kind, line, output_index)
                continue
            previous_special = None

        gap = line.y0 - paragraph_y1 if paragraph else 0.0
        can_join = bool(paragraph) and (
            line.block_no == paragraph_block
            or paragraph.endswith("-")
            or (-2 <= gap <= max(body_size * 0.9, 13) and not text[0].isupper())
        )
        if can_join:
            paragraph = join_wrapped(paragraph, text)
        else:
            flush_paragraph()
            paragraph = text
            paragraph_block = line.block_no
        paragraph_y1 = line.y1

    flush_paragraph()
    while output and output[-1] == "":
        output.pop()
    return output


def valid_external_uri(uri: str) -> bool:
    parsed = urlparse(uri)
    return parsed.scheme.lower() in {"http", "https", "mailto"} and bool(
        parsed.netloc or parsed.path
    )


def extract_page_links(
    page: fitz.Page,
    page_number: int,
    stats: DocumentStats,
) -> list[str]:
    rendered: list[str] = []
    for annotation_number, link in enumerate(page.get_links(), start=1):
        uri = normalize_space(str(link.get("uri", "")))
        if not uri:
            continue
        stats.link_annotations_found += 1
        if not valid_external_uri(uri):
            stats.warnings.append(
                f"page {page_number}: ignored unsupported link annotation {uri!r}"
            )
            continue

        rect = fitz.Rect(link.get("from", (0, 0, 0, 0)))
        label = ""
        if not rect.is_empty and rect.get_area() > 1:
            label = normalize_space(page.get_textbox(rect))
        # Annotation rectangles sometimes overlap a printed URL and clipped title
        # fragments. Prefer a stable resource label over leaking that layout noise.
        if URL_RE.search(label):
            label = ""
        if not label or len(label) > 140:
            host = urlparse(uri).netloc.removeprefix("www.")
            label = f"Open linked resource ({host})" if host else "Open linked resource"
        # Keep every annotation occurrence, including duplicate/zero-area annotations.
        # This mirrors the source PDF and makes the report auditable against all 20 links.
        rendered.append(f"- [{markdown_escape_label(label)}]({uri})")
        stats.links_kept += 1
    return rendered


def image_occurrences(document: fitz.Document) -> Counter[bytes]:
    occurrences: Counter[bytes] = Counter()
    for page in document:
        for info in page.get_image_info(hashes=True, xrefs=True):
            digest = info.get("digest")
            if isinstance(digest, bytes):
                occurrences[digest] += 1
    return occurrences


def select_instructional_images(
    document: fitz.Document,
    page: fitz.Page,
    page_number: int,
    spec: DocumentSpec,
    asset_root: Path,
    digest_occurrences: Counter[bytes],
    stats: DocumentStats,
    skip_images: bool,
) -> list[str]:
    if skip_images:
        return []
    page_text = page.get_text("text")
    if not VISUAL_REFERENCE_RE.search(page_text):
        return []

    selected: list[str] = []
    seen_on_page: set[bytes] = set()
    image_number = 0
    for info in page.get_image_info(hashes=True, xrefs=True):
        digest = info.get("digest")
        xref = int(info.get("xref", 0))
        bbox = tuple(float(value) for value in info.get("bbox", (0, 0, 0, 0)))
        if not isinstance(digest, bytes) or digest in seen_on_page or xref <= 0:
            continue
        seen_on_page.add(digest)
        width = bbox[2] - bbox[0]
        height = bbox[3] - bbox[1]
        area_ratio = (width * height) / max(page.rect.width * page.rect.height, 1.0)
        if not (0.04 <= area_ratio <= 0.70):
            continue
        if width < 100 or height < 50:
            continue
        if digest_occurrences[digest] > 2:
            continue
        stats.image_candidates += 1

        try:
            extracted = document.extract_image(xref)
            payload = extracted.get("image")
            extension = str(extracted.get("ext", "bin")).lower()
            if not isinstance(payload, bytes) or not payload:
                raise ValueError("PyMuPDF returned no image bytes")
            if extension not in {"png", "jpg", "jpeg", "webp"}:
                extension = "png"
                pixmap = fitz.Pixmap(document, xref)
                payload = pixmap.tobytes("png")
            image_number += 1
            digest_short = hashlib.sha256(payload).hexdigest()[:10]
            filename = f"page-{page_number:03d}-image-{image_number:02d}-{digest_short}.{extension}"
            destination = asset_root / spec.doc_id / filename
            write_if_changed(destination, payload)
            selected.append(
                f"![Instructional visual from page {page_number}]"
                f"(../../../assets/{spec.doc_id}/{filename})"
            )
            stats.images_kept += 1
        except Exception as exc:
            stats.warnings.append(f"page {page_number}: image {xref} extraction failed: {exc}")
    return selected


def document_header(spec: DocumentSpec, title: str, pages: int) -> list[str]:
    header = [
        "---",
        f"id: {spec.doc_id}",
        f"level: {spec.level}",
        f"module: {spec.module}",
    ]
    if spec.lesson is not None:
        header.append(f"lesson: {spec.lesson}")
    header.extend(
        [
            f"type: {spec.doc_type}",
            f"title: {yaml_string(title)}",
            f"source: {yaml_string(spec.source.name)}",
            f"source_pages: {pages}",
            "---",
            "",
        ]
    )
    if spec.level == "EF2":
        header.append(f"# Lesson {spec.lesson:02d} — {title}")
    else:
        header.append(f"# {title}")
    header.extend(
        [
            "",
            f"> Source: `{spec.source.name}` — {pages} pages",
            "",
        ]
    )
    return header


def extract_document(
    spec: DocumentSpec,
    content_root: Path,
    asset_root: Path,
    skip_tables: bool,
    skip_images: bool,
) -> tuple[DocumentStats, bool]:
    output_path = content_root / spec.relative_output
    document = fitz.open(spec.source)
    stats = DocumentStats(
        doc_id=spec.doc_id,
        source=spec.source.name,
        pages=document.page_count,
        output=spec.relative_output.as_posix(),
    )
    try:
        title = discover_title(document, spec)
        stats.title = title
        markdown = document_header(spec, title, document.page_count)
        occurrences = image_occurrences(document) if not skip_images else Counter()

        for page_index, page in enumerate(document):
            page_number = page_index + 1
            marker = f"<!-- Source: {spec.source.name}, page {page_number} -->"
            markdown.extend([marker, ""])

            raw_text = normalize_space(page.get_text("text"))
            if not raw_text or not any(char.isalnum() for char in raw_text):
                stats.pages_without_text.append(page_number)

            lines = page_lines(page)
            tables = extract_tables(page, page_number, stats, skip_tables)
            page_markdown = render_text_items(lines, tables, page, spec, title)
            if page_markdown:
                markdown.extend(page_markdown)
                markdown.append("")
                stats.text_characters += sum(len(line) for line in page_markdown)

            images = select_instructional_images(
                document,
                page,
                page_number,
                spec,
                asset_root,
                occurrences,
                stats,
                skip_images,
            )
            if images:
                markdown.extend(["### Instructional visual", "", *images, ""])

            links = extract_page_links(page, page_number, stats)
            if links:
                markdown.extend(["### Resources", "", *links, ""])

        content = "\n".join(markdown).rstrip() + "\n"
        changed = write_if_changed(output_path, content)
        return stats, changed
    finally:
        document.close()


def render_index(specs: Sequence[DocumentSpec], stats: Sequence[DocumentStats]) -> str:
    by_id = {entry.doc_id: entry for entry in stats}
    total_pages = sum(entry.pages for entry in stats)
    lines = [
        "# English Foundation — Content Index",
        "",
        "> Generated by `scripts/extract-english-markdown.py`. Do not edit by hand.",
        "",
        f"- Documents: {len(specs)}",
        f"- Source pages: {total_pages}",
        "",
    ]
    current_level = ""
    current_module = -1
    for spec in specs:
        if spec.level != current_level:
            current_level = spec.level
            current_module = -1
            lines.extend([f"## {current_level}", ""])
        if spec.module != current_module:
            current_module = spec.module
            lines.extend([f"### Module {current_module:02d}", ""])
        entry = by_id[spec.doc_id]
        if spec.level == "EF1":
            label = f"{spec.doc_type.title()} — {entry.title}"
        else:
            label = f"Lesson {spec.lesson:02d} — {entry.title}"
        lines.append(f"- [{label}]({spec.relative_output.as_posix()}) — {entry.pages} pages")
    return "\n".join(lines).rstrip() + "\n"


def make_report(
    specs: Sequence[DocumentSpec],
    stats: Sequence[DocumentStats],
    changed_markdown: int,
    index_changed: bool,
) -> dict[str, Any]:
    warnings = [f"{entry.doc_id}: {warning}" for entry in stats for warning in entry.warnings]
    pages_without_text = [
        {"id": entry.doc_id, "page": page}
        for entry in stats
        for page in entry.pages_without_text
    ]
    return {
        "pdf_count": len(specs),
        "source_pages": sum(entry.pages for entry in stats),
        "markdown_count": len(stats),
        "changed_markdown_files": changed_markdown,
        "index_changed": index_changed,
        "pages_without_text": pages_without_text,
        "link_annotations_found": sum(entry.link_annotations_found for entry in stats),
        "links_kept": sum(entry.links_kept for entry in stats),
        "tables_kept": sum(entry.tables_kept for entry in stats),
        "image_candidates": sum(entry.image_candidates for entry in stats),
        "images_kept": sum(entry.images_kept for entry in stats),
        "warnings": warnings,
        "documents": [
            {
                "id": entry.doc_id,
                "source": entry.source,
                "source_pages": entry.pages,
                "output": entry.output,
                "title": entry.title,
                "text_characters": entry.text_characters,
                "tables_kept": entry.tables_kept,
                "link_annotations_found": entry.link_annotations_found,
                "links_kept": entry.links_kept,
                "image_candidates": entry.image_candidates,
                "images_kept": entry.images_kept,
                "pages_without_text": entry.pages_without_text,
                "warnings": entry.warnings,
            }
            for entry in stats
        ],
    }


def print_summary(report: dict[str, Any], report_path: Path) -> None:
    print(f"PDFs: {report['pdf_count']}")
    print(f"Source pages: {report['source_pages']}")
    print(f"Markdown documents: {report['markdown_count']}")
    print(f"Pages without text: {len(report['pages_without_text'])}")
    print(
        "Links kept: "
        f"{report['links_kept']}/{report['link_annotations_found']} annotations"
    )
    print(f"Tables kept: {report['tables_kept']}")
    print(
        f"Images kept: {report['images_kept']} "
        f"({report['image_candidates']} instructional candidates)"
    )
    print(f"Warnings: {len(report['warnings'])}")
    print(f"Report: {report_path}")


def main() -> int:
    args = parse_args()
    source_root = args.source_root.resolve()
    content_root = args.content_root.resolve()
    asset_root = args.asset_root.resolve()
    report_path = args.report.resolve()

    try:
        specs = discover_sources(source_root)
    except (FileNotFoundError, ValueError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    all_stats: list[DocumentStats] = []
    changed_markdown = 0
    for number, spec in enumerate(specs, start=1):
        print(f"[{number:02d}/{len(specs)}] {spec.source.name} -> {spec.relative_output}")
        try:
            stats, changed = extract_document(
                spec,
                content_root,
                asset_root,
                args.skip_tables,
                args.skip_images,
            )
        except Exception as exc:
            print(f"error: extraction failed for {spec.source.name}: {exc}", file=sys.stderr)
            return 3
        all_stats.append(stats)
        changed_markdown += int(changed)

    index_changed = write_if_changed(content_root / "00_INDEX.md", render_index(specs, all_stats))
    report = make_report(specs, all_stats, changed_markdown, index_changed)
    # Change counters describe this invocation; keeping them in the report would make
    # the second run differ from the first. Normalize them before the deterministic write.
    report["changed_markdown_files"] = 0
    report["index_changed"] = False
    report_payload = json.dumps(report, ensure_ascii=False, indent=2, sort_keys=True) + "\n"
    write_if_changed(report_path, report_payload)
    print_summary(report, report_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
