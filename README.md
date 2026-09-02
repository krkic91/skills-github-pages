# Learning Hub

Static GitHub Pages website with three independent learning modules:

- **GitHub Copilot GH-300** – 125 questions in English, Vietnamese, and Japanese, with Practice, Exam, and Study modes.
- **Học về Nhật Bản** – 1,192 bilingual Vietnamese/Japanese questions across 8 quiz topics, plus 2 reading materials.
- **English Foundation** – 66 structured English documents across EF1 and EF2, covering 760 source pages.

## Project structure

```text
.
├── index.html                  # Landing page
├── style.css                   # Landing page styles
├── copilot/                    # Existing GH-300 quiz
├── japanese/                   # Japanese quiz and generated data
│   ├── materials/              # Generated reading pages
│   ├── app.js
│   ├── index.html
│   ├── questions_data.js       # Generated; do not edit manually
│   ├── style.css
│   └── topics.js               # Generated; do not edit manually
├── english/                    # English Foundation catalog and reader
│   ├── assets/                 # Generated instructional visuals (when needed)
│   ├── content/                # Generated index + 66 Markdown documents
│   │   ├── 00_INDEX.md
│   │   ├── ef1/
│   │   └── ef2/
│   ├── app.js
│   ├── catalog.js              # Generated; do not edit manually
│   ├── extraction-report.json  # Generated extraction audit report
│   ├── index.html
│   ├── reader.html
│   └── style.css
├── scripts/
│   ├── build-japanese-data.mjs
│   ├── extract-english-markdown.py
│   └── build-english-data.mjs
└── ban_dich_markdown/          # Japanese Markdown and English source PDFs
```

## Build Japanese data

Python is not used. The build script only requires Node.js and has no package dependencies:

```powershell
node scripts/build-japanese-data.mjs
```

The command validates the 8 quiz sources, generates `japanese/questions_data.js` and `japanese/topics.js`, and converts source files 09–10 into static HTML reading pages. Generated files are committed so GitHub Pages does not need Node.js at runtime.

Expected result:

```text
01: 328 questions
02: 48 questions
03: 25 questions
04: 200 questions
05: 260 questions
06: 240 questions
07: 40 questions
08: 51 questions
Total: 1192 questions
Skipped: 0
Errors: 0
```

## Build English data

Extract the source PDFs into structured Markdown, then validate all documents and generate the browser-ready catalog:

```powershell
python scripts/extract-english-markdown.py
node scripts/build-english-data.mjs
```

The extractor requires Python 3 and [PyMuPDF](https://pymupdf.readthedocs.io/) at build time (`python -m pip install pymupdf` if it is not already installed). It regenerates `english/content/`, `english/extraction-report.json`, and any selected instructional images under `english/assets/`. The Node.js build validates the 6 EF1 documents, all 60 EF2 lessons, canonical IDs and paths, page markers, local references, and the 760-page metadata total before generating `english/catalog.js`.

`english/content/`, `english/assets/`, `english/extraction-report.json`, and `english/catalog.js` are generated outputs and should not be edited manually. Both scripts run only at build time; the published site has no package or backend dependency.

Expected validation result:

```text
EF1: 6 documents
EF2 Module 01: 20 lessons
EF2 Module 02: 20 lessons
EF2 Module 03: 20 lessons
Total: 66 documents
Source pages: 760
Errors: 0
```

## Run locally

All application data is loaded through regular script tags, so the pages can be opened directly or served with any static web server. No backend is required.

Open `index.html`, then use any of the three module links. Before publishing source changes, rerun the corresponding build command and commit the regenerated static files.

## Deployment

Publish the repository root with GitHub Pages. All internal links are relative and work when the site is hosted under a repository subpath.

## License

[MIT](LICENSE)
