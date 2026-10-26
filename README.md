# Learning Hub

Static GitHub Pages website with nine independent learning modules:

- **GitHub Copilot GH-300** – 125 questions in English, Vietnamese, and Japanese, with Practice, Exam, and Study modes.
- **Học về Nhật Bản** – 1,192 bilingual Vietnamese/Japanese questions across 8 quiz topics, plus 2 reading materials.
- **English Foundation** – 66 structured English documents across EF1 and EF2, covering 760 source pages.
- **Microsoft AI-103** – 135 questions on its own practice page.
- **Microsoft AB-100** – 114 questions on its own practice page.
- **Claude CCAR-P** – 113-question original bank plus a separate 330-question Mock Test child module.
- **Anthropic CCAO-F** – 109 questions across two practice sets.
- **Claude CCDV-F** – 95 Claude Certified Developer – Foundations questions.
- **Claude CCAR-F** – 179 Claude Certified Architect – Foundations questions.

The Microsoft and Claude modules offer practice, answer review, and search. Most include Vietnamese source explanations; the CCAO-F source does not provide explanations. Each page loads its own question bank and is linked directly from the landing page.

## Microsoft question banks

`microsoft/ai-103.html` and `microsoft/ab-100.html` load their respective question banks from `microsoft/ai-103-questions.js` and `microsoft/ab-100-questions.js`, with shared images under `microsoft/assets/`. These are static files with no Python dependency.

The supplied sources contain 249 questions and 57 available images. The AB-100 saved page references 34 missing images; placeholders identify those gaps. Answer keys and explanations are preserved from the supplied sources and have not been independently fact-checked.

## Claude question banks

`claude/ccar-p.html` is the original question bank and loads `claude/ccar-p-questions.js` with 113 questions across two sets (63 and 50). It supports single-answer, multiple-answer, and matching questions.

`claude/mock-test/index.html` is a separate child module with 330 additional questions across six sets: Sets 1–5 have 63 questions each and Set 6 has 15. It loads `claude/mock-test/questions.js` and reuses `claude/app.js` and `claude/style.css`. The two banks have no overlapping normalized question text.

`claude/ccao-f.html` loads 109 Anthropic CCAO-F questions across two sets (60 and 49), including 81 single-answer and 28 multiple-answer questions. CertLab does not provide source explanations for this bank, so all 109 questions display a clearly marked fallback note.

`claude/ccdv-f.html` loads 95 Claude Certified Developer – Foundations questions across two sets (53 and 42). All questions are single-answer and include source explanations.

`claude/ccar-f.html` loads 179 Claude Certified Architect – Foundations questions across three sets (60, 60, and 59). All questions are single-answer and include source explanations.

The question content, answer keys, and available Vietnamese explanations were synced from CertLab on 2026-10-26 and have not been independently fact-checked. The original CCAR-P bank has 6 questions without a source explanation; all Mock Test, CCDV-F, and CCAR-F questions include a source explanation.

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
├── claude/                    # Claude certification question banks
│   ├── app.js
│   ├── ccar-p-questions.js    # Original 113-question bank
│   ├── ccar-p.html            # Original bank UI
│   ├── ccao-f-questions.js    # Anthropic CCAO-F bank
│   ├── ccao-f.html            # CCAO-F UI
│   ├── ccdv-f-questions.js    # Claude Developer Foundations bank
│   ├── ccdv-f.html            # CCDV-F UI
│   ├── ccar-f-questions.js    # Claude Architect Foundations bank
│   ├── ccar-f.html            # CCAR-F UI
│   ├── mock-test/
│   │   ├── index.html         # Mock Test child module
│   │   └── questions.js       # Additional 330-question bank
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

Open `index.html`, then use any of the nine module links. Before publishing source changes, rerun the corresponding build command and commit the regenerated static files.

## Deployment

Publish the repository root with GitHub Pages. All internal links are relative and work when the site is hosted under a repository subpath.

## License

[MIT](LICENSE)
