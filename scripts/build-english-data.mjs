import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..');
const ENGLISH_DIR = path.join(ROOT_DIR, 'english');
const CONTENT_DIR = path.join(ENGLISH_DIR, 'content');
const OUTPUT_FILE = path.join(ENGLISH_DIR, 'catalog.js');
const EXPECTED_DOCUMENTS = 66;
const EXPECTED_SOURCE_PAGES = 760;

function buildExpectedDocuments() {
  const documents = [];
  let order = 0;

  for (let module = 1; module <= 3; module += 1) {
    const moduleNumber = String(module).padStart(2, '0');

    for (const type of ['textbook', 'handbook']) {
      documents.push({
        id: `ef1-m${moduleNumber}-${type}`,
        level: 'EF1',
        module,
        lesson: null,
        type,
        path: `ef1/module-${moduleNumber}/${type}.md`,
        order: order += 1,
      });
    }
  }

  for (let module = 1; module <= 3; module += 1) {
    const moduleNumber = String(module).padStart(2, '0');

    for (let lesson = 1; lesson <= 20; lesson += 1) {
      const lessonNumber = String(lesson).padStart(2, '0');
      documents.push({
        id: `ef2-m${moduleNumber}-l${lessonNumber}`,
        level: 'EF2',
        module,
        lesson,
        type: 'lesson',
        path: `ef2/module-${moduleNumber}/lesson-${lessonNumber}.md`,
        order: order += 1,
      });
    }
  }

  return documents;
}

const EXPECTED = buildExpectedDocuments();
const EXPECTED_BY_ID = new Map(EXPECTED.map((document) => [document.id, document]));
const EXPECTED_BY_PATH = new Map(EXPECTED.map((document) => [document.path, document]));

function normalizeNewlines(value) {
  return value.replace(/^\uFEFF/u, '').replace(/\r\n?/gu, '\n');
}

function normalizeRelativePath(value) {
  return value.split(path.sep).join('/');
}

function parseScalar(value, file, lineNumber, errors) {
  const trimmed = value.trim();

  if (!trimmed) return '';
  if (trimmed === 'null' || trimmed === '~') return null;
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^[+-]?\d+$/u.test(trimmed)) return Number(trimmed);

  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      errors.push(`${file}:${lineNumber}: invalid double-quoted front matter value.`);
      return trimmed.slice(1, -1);
    }
  }

  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1).replaceAll("''", "'");
  }

  return trimmed;
}

function parseFrontMatter(markdown, file, errors) {
  const normalized = normalizeNewlines(markdown);

  if (!normalized.startsWith('---\n')) {
    errors.push(`${file}: missing front matter opening delimiter.`);
    return { metadata: {}, content: normalized.trim() };
  }

  const closingIndex = normalized.indexOf('\n---\n', 4);
  if (closingIndex === -1) {
    errors.push(`${file}: missing front matter closing delimiter.`);
    return { metadata: {}, content: '' };
  }

  const metadata = {};
  const lines = normalized.slice(4, closingIndex).split('\n');

  lines.forEach((line, index) => {
    const lineNumber = index + 2;
    if (!line.trim() || line.trimStart().startsWith('#')) return;

    const match = /^([A-Za-z][A-Za-z0-9_-]*):(?:\s*(.*))?$/u.exec(line);
    if (!match) {
      errors.push(`${file}:${lineNumber}: unsupported front matter syntax.`);
      return;
    }

    const [, key, rawValue = ''] = match;
    if (Object.hasOwn(metadata, key)) {
      errors.push(`${file}:${lineNumber}: duplicate front matter key "${key}".`);
      return;
    }

    metadata[key] = parseScalar(rawValue, file, lineNumber, errors);
  });

  return {
    metadata,
    content: normalized.slice(closingIndex + 5).trim(),
  };
}

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name, 'en'));
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.toLocaleLowerCase('en').endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function requireString(metadata, key, file, errors) {
  const value = metadata[key];
  if (typeof value !== 'string' || !value.trim()) {
    errors.push(`${file}: front matter "${key}" must be a non-empty string.`);
    return '';
  }
  return value.trim();
}

function requirePositiveInteger(value, key, file, errors) {
  if (!Number.isInteger(value) || value <= 0) {
    errors.push(`${file}: front matter "${key}" must be a positive integer.`);
    return null;
  }
  return value;
}

function sourceMatchesExpected(source, expected) {
  if (!expected) return true;
  if (expected.level === 'EF1') {
    const label = expected.type === 'textbook' ? 'M' : 'Module\\s+';
    return new RegExp(`^F1_${label}0?${expected.module}_${expected.type}\\.pdf$`, 'iu').test(source);
  }

  return new RegExp(
    `^F2_M0?${expected.module}_L0?${expected.lesson}(?:_v[0-9.]+)?\\.pdf$`,
    'iu',
  ).test(source);
}

function validatePageMarkers(content, source, sourcePages, file, errors) {
  const markers = [...content.matchAll(/<!--\s*Source:\s*(.*?),\s*page\s+(\d+)\s*-->/giu)];
  if (Number.isInteger(sourcePages) && markers.length !== sourcePages) {
    errors.push(`${file}: found ${markers.length} source page markers; expected ${sourcePages}.`);
  }

  markers.forEach((match, index) => {
    const markerSource = match[1].trim();
    const markerPage = Number(match[2]);
    if (source && markerSource !== source) {
      errors.push(`${file}: page marker ${index + 1} names "${markerSource}" instead of "${source}".`);
    }
    if (markerPage !== index + 1) {
      errors.push(`${file}: source page markers are not sequential at marker ${index + 1} (page ${markerPage}).`);
    }
  });

  if (/copyright\s+fpt\s+software|level\s+of\s+confidentiality/iu.test(content)) {
    errors.push(`${file}: repeated copyright/confidentiality chrome remains in the Markdown body.`);
  }
  if (/\[[^\]\n]*\n[^\]]*\]\([^\n)]+\)/u.test(content)) {
    errors.push(`${file}: contains a Markdown link label split across lines.`);
  }
}

async function validateReferences(content, absoluteFile, relativePath, errors) {
  const referencePattern = /(!?)\[[^\]\n]*\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)/gu;
  const contentRoot = path.resolve(CONTENT_DIR);

  for (const match of content.matchAll(referencePattern)) {
    const isImage = match[1] === '!';
    const rawTarget = match[2];
    const scheme = /^([a-z][a-z\d+.-]*):/iu.exec(rawTarget)?.[1]?.toLocaleLowerCase('en');
    const allowed = isImage ? new Set(['http', 'https']) : new Set(['http', 'https', 'mailto', 'tel']);

    if (scheme) {
      if (!allowed.has(scheme)) {
        errors.push(`${relativePath}: disallowed ${isImage ? 'image' : 'link'} scheme in "${rawTarget}".`);
      } else {
        try {
          new URL(rawTarget);
        } catch {
          errors.push(`${relativePath}: invalid URL "${rawTarget}".`);
        }
      }
      continue;
    }

    if (rawTarget.startsWith('//') || rawTarget.includes('\\')) {
      errors.push(`${relativePath}: invalid relative target "${rawTarget}".`);
      continue;
    }

    let pathname;
    try {
      pathname = decodeURIComponent(rawTarget.split(/[?#]/u, 1)[0]);
    } catch {
      errors.push(`${relativePath}: target is not valid percent-encoding: "${rawTarget}".`);
      continue;
    }

    const resolved = path.resolve(path.dirname(absoluteFile), pathname);
    const allowedRoot = `${path.resolve(ROOT_DIR)}${path.sep}`;
    if (resolved !== path.resolve(ROOT_DIR) && !resolved.startsWith(allowedRoot)) {
      errors.push(`${relativePath}: relative target escapes the repository: "${rawTarget}".`);
      continue;
    }

    try {
      await access(resolved);
    } catch {
      errors.push(`${relativePath}: missing referenced file "${rawTarget}".`);
    }

    if (isImage && resolved.startsWith(`${contentRoot}${path.sep}`)) {
      errors.push(`${relativePath}: generated images must live outside english/content: "${rawTarget}".`);
    }
  }
}

function buildSearchText(document) {
  return [
    document.id,
    document.level,
    `module ${String(document.module).padStart(2, '0')}`,
    document.lesson ? `lesson ${String(document.lesson).padStart(2, '0')}` : document.type,
    document.title,
    document.source,
    document.content,
  ]
    .join('\n')
    .replace(/<!--[\s\S]*?-->/gu, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/gu, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/gu, '$1')
    .replace(/<[^>]+>/gu, ' ')
    .replace(/[`*_#>|~]/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .toLocaleLowerCase('en');
}

function serializeForJavaScript(value) {
  return JSON.stringify(value, null, 2)
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
}

function generatedJavaScript(documents, stats) {
  return `// AUTO-GENERATED by scripts/build-english-data.mjs. Do not edit manually.\nwindow.ENGLISH_CATALOG = ${serializeForJavaScript(documents)};\nwindow.ENGLISH_STATS = ${serializeForJavaScript(stats)};\n`;
}

function validateDocument({ metadata, content, relativePath }, errors) {
  const id = requireString(metadata, 'id', relativePath, errors);
  const level = requireString(metadata, 'level', relativePath, errors);
  const title = requireString(metadata, 'title', relativePath, errors);
  const source = requireString(metadata, 'source', relativePath, errors);
  const module = requirePositiveInteger(metadata.module, 'module', relativePath, errors);
  const sourcePagesValue = metadata.source_pages ?? metadata.sourcePages;
  const sourcePages = requirePositiveInteger(sourcePagesValue, 'source_pages', relativePath, errors);
  const expectedById = EXPECTED_BY_ID.get(id);
  const expectedByPath = EXPECTED_BY_PATH.get(relativePath);

  if (Object.hasOwn(metadata, 'source_pages') && Object.hasOwn(metadata, 'sourcePages')
    && metadata.source_pages !== metadata.sourcePages) {
    errors.push(`${relativePath}: "source_pages" and "sourcePages" disagree.`);
  }

  if (!expectedById) {
    errors.push(`${relativePath}: unexpected document ID "${id || '(missing)'}".`);
  } else {
    if (relativePath !== expectedById.path) {
      errors.push(`${relativePath}: ID "${id}" must be stored at ${expectedById.path}.`);
    }
    if (level !== expectedById.level) {
      errors.push(`${relativePath}: level must be ${expectedById.level} for ID "${id}".`);
    }
    if (module !== expectedById.module) {
      errors.push(`${relativePath}: module must be ${expectedById.module} for ID "${id}".`);
    }

    if (expectedById.lesson === null) {
      if (metadata.lesson !== undefined && metadata.lesson !== null && metadata.lesson !== '') {
        errors.push(`${relativePath}: EF1 documents must not define a lesson number.`);
      }
    } else if (metadata.lesson !== expectedById.lesson) {
      errors.push(`${relativePath}: lesson must be ${expectedById.lesson} for ID "${id}".`);
    }

    if (metadata.type !== undefined && metadata.type !== expectedById.type) {
      errors.push(`${relativePath}: type must be "${expectedById.type}" for ID "${id}".`);
    }
  }

  if (expectedByPath && id && expectedByPath.id !== id) {
    errors.push(`${relativePath}: expected ID "${expectedByPath.id}", received "${id}".`);
  }

  if (source && (!/\.pdf$/iu.test(source) || /[\\/]/u.test(source))) {
    errors.push(`${relativePath}: "source" must be a PDF file name without a directory path.`);
  }
  if (source && expectedById && !sourceMatchesExpected(source, expectedById)) {
    errors.push(`${relativePath}: source PDF "${source}" does not match ID "${id}".`);
  }

  if (!content.replace(/<!--[\s\S]*?-->/gu, '').trim()) {
    errors.push(`${relativePath}: Markdown body is empty.`);
  }
  validatePageMarkers(content, source, sourcePages, relativePath, errors);

  const type = expectedById?.type || metadata.type || (level === 'EF2' ? 'lesson' : 'document');
  const lesson = expectedById?.lesson ?? (Number.isInteger(metadata.lesson) ? metadata.lesson : null);
  const document = {
    id,
    level,
    module,
    lesson,
    type,
    title,
    source,
    sourcePages,
    path: `content/${relativePath}`,
    content,
  };

  document.searchText = buildSearchText(document);
  return { document, expected: expectedById };
}

async function main() {
  const errors = [];
  let markdownFiles = [];

  try {
    markdownFiles = await findMarkdownFiles(CONTENT_DIR);
  } catch (error) {
    if (error?.code === 'ENOENT') {
      errors.push('english/content: directory does not exist. Run the English extractor first.');
    } else {
      throw error;
    }
  }

  if (errors.length > 0) {
    console.error(`Build failed with ${errors.length} error(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    console.error(`Errors: ${errors.length}`);
    process.exitCode = 1;
    return;
  }

  const contentFiles = markdownFiles.filter((file) => {
    const relativePath = normalizeRelativePath(path.relative(CONTENT_DIR, file));
    return relativePath.toLocaleLowerCase('en') !== '00_index.md';
  });
  const documents = [];
  const seenFiles = new Set();
  const seenIds = new Set();
  const seenSources = new Set();

  for (const file of contentFiles) {
    const relativePath = normalizeRelativePath(path.relative(CONTENT_DIR, file));
    const normalizedFile = relativePath.toLocaleLowerCase('en');

    if (seenFiles.has(normalizedFile)) {
      errors.push(`${relativePath}: duplicate Markdown file path.`);
      continue;
    }
    seenFiles.add(normalizedFile);

    const markdown = await readFile(file, 'utf8');
    const parsed = parseFrontMatter(markdown, relativePath, errors);
    const { document, expected } = validateDocument({ ...parsed, relativePath }, errors);
    await validateReferences(parsed.content, file, relativePath, errors);
    documents.push({ ...document, order: expected?.order ?? Number.MAX_SAFE_INTEGER });

    if (document.id) {
      if (seenIds.has(document.id)) errors.push(`${relativePath}: duplicate ID "${document.id}".`);
      seenIds.add(document.id);
    }

    if (document.source) {
      const normalizedSource = document.source.toLocaleLowerCase('en');
      if (seenSources.has(normalizedSource)) {
        errors.push(`${relativePath}: duplicate source PDF "${document.source}".`);
      }
      seenSources.add(normalizedSource);
    }
  }

  for (const expected of EXPECTED) {
    if (!seenIds.has(expected.id)) errors.push(`Missing document ID "${expected.id}" (${expected.path}).`);
  }

  if (contentFiles.length !== EXPECTED_DOCUMENTS) {
    errors.push(`Found ${contentFiles.length} content Markdown files; expected ${EXPECTED_DOCUMENTS}.`);
  }

  const ef1Count = documents.filter(({ level }) => level === 'EF1').length;
  const ef2Count = documents.filter(({ level }) => level === 'EF2').length;
  if (ef1Count !== 6) errors.push(`EF1 has ${ef1Count} documents; expected 6.`);
  if (ef2Count !== 60) errors.push(`EF2 has ${ef2Count} lessons; expected 60.`);

  const ef2Modules = {};
  for (let module = 1; module <= 3; module += 1) {
    const moduleKey = String(module).padStart(2, '0');
    const lessons = documents
      .filter((document) => document.level === 'EF2' && document.module === module)
      .map(({ lesson }) => lesson)
      .filter(Number.isInteger);
    const uniqueLessons = new Set(lessons);
    ef2Modules[moduleKey] = uniqueLessons.size;

    const missingLessons = [];
    for (let lesson = 1; lesson <= 20; lesson += 1) {
      if (!uniqueLessons.has(lesson)) missingLessons.push(String(lesson).padStart(2, '0'));
    }

    if (lessons.length !== 20 || uniqueLessons.size !== 20 || missingLessons.length > 0) {
      errors.push(`EF2 Module ${moduleKey} is incomplete; missing lesson(s): ${missingLessons.join(', ') || 'none (check duplicates)'}.`);
    }
  }

  const sourcePages = documents.reduce(
    (total, document) => total + (Number.isInteger(document.sourcePages) ? document.sourcePages : 0),
    0,
  );
  if (sourcePages !== EXPECTED_SOURCE_PAGES) {
    errors.push(`Source pages total ${sourcePages}; expected ${EXPECTED_SOURCE_PAGES}.`);
  }

  if (errors.length > 0) {
    console.error(`Build failed with ${errors.length} error(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    console.error(`Errors: ${errors.length}`);
    process.exitCode = 1;
    return;
  }

  documents.sort((left, right) => left.order - right.order);
  const catalog = documents.map(({ order, ...document }) => document);
  const stats = {
    documents: catalog.length,
    pages: sourcePages,
    levels: 2,
    ef1Documents: ef1Count,
    ef2Documents: ef2Count,
    ef2Modules,
  };

  await mkdir(ENGLISH_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, generatedJavaScript(catalog, stats), 'utf8');

  console.log(`EF1: ${ef1Count} documents`);
  for (let module = 1; module <= 3; module += 1) {
    const moduleKey = String(module).padStart(2, '0');
    console.log(`EF2 Module ${moduleKey}: ${ef2Modules[moduleKey]} lessons`);
  }
  console.log(`Total: ${catalog.length} documents`);
  console.log(`Source pages: ${sourcePages}`);
  console.log('Errors: 0');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
