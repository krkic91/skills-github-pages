"""Extract only quiz content from locally saved Practice Cert pages.

Usage: python scripts/import-microsoft-questions.py AI_103.html "Practice Session · Practice Cert.html"
Requires BeautifulSoup 4 at import time; the published site has no dependencies.
"""
import argparse
import json
import re
import shutil
from pathlib import Path
from urllib.parse import unquote, urlparse

from bs4 import BeautifulSoup, Comment

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "microsoft"
MISSING = []
ALLOWED = {"p", "br", "strong", "b", "em", "i", "ul", "ol", "li", "code", "pre", "table", "thead", "tbody", "tr", "td", "th", "h3", "h4", "img", "a", "sub", "sup"}


def clean_html(markup, source, exam, assets):
    soup = BeautifulSoup(str(markup), "html.parser")
    for tag in soup.find_all(["script", "style", "iframe", "object", "input", "button"]):
        tag.decompose()
    for comment in soup.find_all(string=lambda value: isinstance(value, Comment)):
        comment.extract()
    for paragraph in soup.find_all("p"):
        if "This is a case study. Case studies are not timed" in paragraph.get_text(" ", strip=True):
            paragraph.decompose()
    for tag in list(soup.find_all(True)):
        if tag.name not in ALLOWED:
            tag.unwrap()
            continue
        attrs = {}
        if tag.name == "img":
            path = unquote(urlparse(tag.get("src", "")).path)
            original = (source.parent / path).resolve()
            if source.parent.resolve() not in original.parents:
                raise ValueError(f"Invalid question image: {path}")
            if not original.is_file():
                MISSING.append({"exam": exam, "image": original.name})
                tag.name = "p"
                tag.attrs = {}
                tag.string = f"[Hình {original.name} chưa có trong bản lưu nguồn.]"
                continue
            target = f"{exam.lower()}-{original.name}"
            shutil.copyfile(original, OUTPUT / "assets" / target)
            assets.add(target)
            attrs = {"src": f"assets/{target}", "alt": tag.get("alt") or "Hình minh họa câu hỏi", "loading": "lazy"}
        elif tag.name == "a":
            href = tag.get("href", "")
            if href.startswith("https://"):
                attrs = {"href": href, "target": "_blank", "rel": "noopener noreferrer"}
        elif tag.name in {"td", "th"}:
            attrs = {key: value for key, value in tag.attrs.items() if key in {"colspan", "rowspan"} and str(value).isdigit()}
        tag.attrs = attrs
    return str(soup).strip()


def extract(source, exam, assets):
    soup = BeautifulSoup(source.read_text(encoding="utf-8"), "html.parser")
    questions = []
    for index, card in enumerate(soup.select("form.exam-os-question-card"), 1):
        options = {label["data-option-label"]: clean_html(label.select_one(".exam-os-option-content"), source, exam, assets)
                   for label in card.select(".exam-os-options [data-option-label]")}
        answers = card.get("data-correct-labels", "").split(",")
        if not options or any(key not in options for key in answers):
            raise ValueError(f"Invalid answers in {exam} question {index}")
        if len(answers) != int(card["data-required-selection-count"]):
            raise ValueError(f"Answer count mismatch: {exam} question {index}")
        explanation = card.select_one("[data-study-feedback] .exam-os-feedback-panel > div > span")
        if explanation is None:
            raise ValueError(f"Missing explanation: {exam} question {index}")
        # Keep the substantive explanation and distractor analysis, dropping repeated summaries.
        headings = explanation.find_all("h4", recursive=False)
        if any(re.match(r"4\.", h.get_text(strip=True)) for h in headings):
            keep = False
            for child in list(explanation.children):
                if getattr(child, "name", None) == "h4":
                    keep = bool(re.match(r"[45]\.", child.get_text(strip=True)))
                if not keep:
                    child.extract()
            for heading in explanation.find_all("h4", recursive=False):
                heading.string = re.sub(r"^\d+\.\s*", "", heading.get_text(" ", strip=True))
        content = clean_html(card.select_one(".exam-os-question-content"), source, exam, assets)
        missing_images = [unquote(urlparse(img.get("src", "")).path) for img in card.select(".exam-os-question-content img")
                          if not (source.parent / unquote(urlparse(img.get("src", "")).path)).is_file()]
        questions.append({"id": f"{exam}-{index:03}", "exam": exam, "number": index, "missingImages": len(missing_images),
                          "question": content, "options": dict(sorted(options.items())),
                          "answer": answers, "explanation": clean_html(explanation, source, exam, assets)})
    if not questions:
        raise ValueError(f"No questions found in {source}")
    return questions


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ai103", type=Path)
    parser.add_argument("ab100", type=Path)
    args = parser.parse_args()
    (OUTPUT / "assets").mkdir(parents=True, exist_ok=True)
    assets = set()
    questions = extract(args.ai103, "AI-103", assets) + extract(args.ab100, "AB-100", assets)
    for exam in ["AI-103", "AB-100"]:
        subset = [q for q in questions if q["exam"] == exam]
        (OUTPUT / f"{exam.lower()}-questions.js").write_text("const MICROSOFT_QUESTIONS = " + json.dumps(subset, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    report = {"AI-103": sum(q["exam"] == "AI-103" for q in questions), "AB-100": sum(q["exam"] == "AB-100" for q in questions), "total": len(questions), "images": len(assets), "missingImages": MISSING}
    (OUTPUT / "import-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: len(value) if key == "missingImages" else value for key, value in report.items()}, indent=2))


if __name__ == "__main__":
    main()
