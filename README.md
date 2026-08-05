# Learning Hub

Static GitHub Pages website with two independent learning modules:

- **GitHub Copilot GH-300** – 125 questions in English, Vietnamese, and Japanese, with Practice, Exam, and Study modes.
- **Học về Nhật Bản** – 1,192 bilingual Vietnamese/Japanese questions across 8 quiz topics, plus 2 reading materials.

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
├── scripts/
│   └── build-japanese-data.mjs
└── ban_dich_markdown/          # Source Markdown content
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

## Run locally

All application data is loaded through regular script tags, so the pages can be opened directly or served with any static web server. No backend is required.

Open `index.html`, then use the two module links. Before publishing changes to the Markdown sources, rerun the Node.js build command and commit the regenerated files.

## Deployment

Publish the repository root with GitHub Pages. All internal links are relative and work when the site is hosted under a repository subpath.

## License

[MIT](LICENSE)
