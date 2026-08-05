import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..');
const SOURCE_DIR = path.join(ROOT_DIR, 'ban_dich_markdown');
const OUTPUT_DIR = path.join(ROOT_DIR, 'japanese');
const MATERIALS_DIR = path.join(OUTPUT_DIR, 'materials');

const QUIZ_TOPICS = [
  {
    id: '01',
    file: '01_NhatBan_quiz_CO_DUYEN.md',
    titleVi: 'Kiến thức Nhật Bản – Có duyên',
    titleJa: '日本クイズ・ご縁',
    descriptionVi: 'Kiến thức tổng hợp về đời sống, xã hội và văn hóa Nhật Bản.',
    descriptionJa: '日本の生活・社会・文化に関する総合問題。',
  },
  {
    id: '02',
    file: '02_Dia_ly_Nhat_Ban.md',
    titleVi: 'Địa lý Nhật Bản',
    titleJa: '日本の地理',
    descriptionVi: 'Địa danh, vùng miền, khí hậu và đặc điểm tự nhiên.',
    descriptionJa: '地域、気候、自然など日本地理の問題。',
  },
  {
    id: '03',
    file: '03_The_thao_va_am_nhac.md',
    titleVi: 'Thể thao và âm nhạc',
    titleJa: 'スポーツと音楽',
    descriptionVi: 'Các sự kiện, nhân vật và kiến thức thể thao, âm nhạc.',
    descriptionJa: 'スポーツと音楽の出来事や人物に関する問題。',
  },
  {
    id: '04',
    file: '04_Quiz_Nhat_Ban_cap_do_1.md',
    titleVi: 'Quiz Nhật Bản – Cấp độ 1',
    titleJa: '日本クイズ・レベル1',
    descriptionVi: 'Bộ câu hỏi nền tảng dành cho người mới bắt đầu.',
    descriptionJa: '初級者向けの基礎問題。',
  },
  {
    id: '05',
    file: '05_Quiz_Nhat_Ban_cap_do_2.md',
    titleVi: 'Quiz Nhật Bản – Cấp độ 2',
    titleJa: '日本クイズ・レベル2',
    descriptionVi: 'Bộ câu hỏi mở rộng ở mức độ trung cấp.',
    descriptionJa: '中級レベルの発展問題。',
  },
  {
    id: '06',
    file: '06_Quiz_Nhat_Ban_cap_do_3.md',
    titleVi: 'Quiz Nhật Bản – Cấp độ 3',
    titleJa: '日本クイズ・レベル3',
    descriptionVi: 'Bộ câu hỏi nâng cao về Nhật Bản.',
    descriptionJa: '日本に関する上級問題。',
  },
  {
    id: '07',
    file: '07_Quan_hon_tang_te.md',
    titleVi: 'Quan – Hôn – Tang – Tế',
    titleJa: '冠婚葬祭',
    descriptionVi: 'Phong tục và nghi lễ quan trọng trong đời sống người Nhật.',
    descriptionJa: '日本の人生儀礼や慣習に関する問題。',
  },
  {
    id: '08',
    file: '08_Su_kien_trong_nam.md',
    titleVi: 'Sự kiện trong năm',
    titleJa: '年中行事',
    descriptionVi: 'Ngày lễ và các sự kiện truyền thống diễn ra trong năm.',
    descriptionJa: '日本の祝日や伝統的な年中行事。',
  },
];

const MATERIAL_TOPICS = [
  {
    id: '09',
    type: 'material',
    file: '09_Van_hoa_lich_su_va_tu_duy_Nhat_Ban.md',
    output: '09.html',
    titleVi: 'Văn hóa, lịch sử và tư duy Nhật Bản',
    titleJa: '日本の文化・歴史・思想',
    descriptionVi: 'Tài liệu đọc về sự hình thành văn hóa và tư duy của người Nhật.',
    descriptionJa: '日本人の文化、歴史、考え方を学ぶ読み物。',
  },
  {
    id: '10',
    type: 'material',
    file: '10_Van_hoc_Nhat_Ban.md',
    output: '10.html',
    titleVi: 'Văn học Nhật Bản',
    titleJa: '日本文学',
    descriptionVi: 'Tổng quan các tác phẩm, tác giả và giai đoạn văn học Nhật Bản.',
    descriptionJa: '日本文学の作品、作家、時代を学ぶ読み物。',
  },
];

const CIRCLED_NUMBERS = new Map([
  ['①', 1],
  ['②', 2],
  ['③', 3],
  ['④', 4],
  ['⑤', 5],
  ['⑥', 6],
  ['⑦', 7],
  ['⑧', 8],
  ['⑨', 9],
  ['⑩', 10],
]);

const EXPECTED_COUNTS = new Map([
  ['01', 328],
  ['02', 48],
  ['03', 25],
  ['04', 200],
  ['05', 260],
  ['06', 240],
  ['07', 40],
  ['08', 51],
]);

const errors = [];

function normalizeNewlines(value) {
  return value.replace(/^\uFEFF/u, '').replace(/\r\n?/gu, '\n');
}

function cleanInlineMarkdown(value) {
  return value
    .replace(/^>\s*/gmu, '')
    .replace(/\*\*(.*?)\*\*/gu, '$1')
    .replace(/\*(.*?)\*/gu, '$1')
    .replace(/`([^`]+)`/gu, '$1')
    .replace(/[ \t]+/gu, ' ')
    .replace(/\s*\n\s*/gu, ' ')
    .trim();
}

function comparable(value) {
  return value
    .normalize('NFKC')
    .toLocaleLowerCase('vi')
    .replace(/[“”"'`]/gu, '')
    .replace(/[.,;:!?。、！？]/gu, '')
    .replace(/\s+/gu, ' ')
    .trim();
}

function optionId(index) {
  return String.fromCharCode(65 + index);
}

function addError(topicId, questionNumber, message) {
  const prefix = questionNumber ? `${topicId}-${String(questionNumber).padStart(3, '0')}` : topicId;
  errors.push(`${prefix}: ${message}`);
}

function parseQuestionBlock(topic, number, body) {
  const sourceMatch = /^\*\*Nguồn:\*\*\s*(.+)$/mu.exec(body);
  const japaneseQuestionMatch = /^>\s*\*\*Nhật gốc:\*\*\s*(.+)$/mu.exec(body);
  const answerMatch = /^\*\*Đáp án đúng:\*\*\s*([①②③④⑤⑥⑦⑧⑨⑩])\s*(.*)$/mu.exec(body);
  const japaneseAnswerMatch = /^>\s*\*\*Đáp án Nhật gốc:\*\*\s*(.+)$/mu.exec(body);

  if (!japaneseQuestionMatch) {
    addError(topic.id, number, 'thiếu câu hỏi tiếng Nhật.');
  }
  if (!answerMatch) {
    addError(topic.id, number, 'không tìm thấy dòng đáp án đúng.');
  }

  const questionStart = sourceMatch ? sourceMatch.index + sourceMatch[0].length : 0;
  const questionEnd = japaneseQuestionMatch ? japaneseQuestionMatch.index : body.length;
  const questionVi = cleanInlineMarkdown(body.slice(questionStart, questionEnd));
  const questionJa = japaneseQuestionMatch ? cleanInlineMarkdown(japaneseQuestionMatch[1]) : questionVi;

  if (!questionVi) {
    addError(topic.id, number, 'thiếu nội dung câu hỏi tiếng Việt.');
  }

  const optionPattern = /^(\d+)\.\s+([^\n]+)\n(?:[ \t]*\n)*[ \t]+\*Nhật gốc:\*\s*([^\n]+)$/gmu;
  const options = [...body.matchAll(optionPattern)].map((match, index) => ({
    id: optionId(index),
    sourceNumber: Number(match[1]),
    vi: cleanInlineMarkdown(match[2]),
    ja: cleanInlineMarkdown(match[3]) || cleanInlineMarkdown(match[2]),
  }));

  if (options.length < 2) {
    addError(topic.id, number, `chỉ parse được ${options.length} lựa chọn.`);
  }

  options.forEach((option, index) => {
    if (option.sourceNumber !== index + 1) {
      addError(topic.id, number, `thứ tự lựa chọn không liên tục tại lựa chọn ${option.sourceNumber}.`);
    }
    if (!option.vi) addError(topic.id, number, `lựa chọn ${option.id} thiếu tiếng Việt.`);
    if (!option.ja) addError(topic.id, number, `lựa chọn ${option.id} thiếu tiếng Nhật.`);
  });

  const correctNumber = answerMatch ? CIRCLED_NUMBERS.get(answerMatch[1]) : undefined;
  const correctOption = correctNumber ? options[correctNumber - 1] : undefined;

  if (!correctOption) {
    addError(topic.id, number, 'đáp án đúng không khớp với một lựa chọn.');
  }

  const answerVi = answerMatch ? cleanInlineMarkdown(answerMatch[2]) : '';
  const answerJa = japaneseAnswerMatch ? cleanInlineMarkdown(japaneseAnswerMatch[1]) : '';

  if (correctOption && answerVi && comparable(answerVi) !== comparable(correctOption.vi)) {
    addError(topic.id, number, `nội dung đáp án tiếng Việt không khớp lựa chọn ${correctOption.id}.`);
  }
  if (correctOption && answerJa && comparable(answerJa) !== comparable(correctOption.ja)) {
    addError(topic.id, number, `nội dung đáp án tiếng Nhật không khớp lựa chọn ${correctOption.id}.`);
  }

  const correctVi = correctOption?.vi || answerVi;
  const correctJa = correctOption?.ja || answerJa || correctVi;

  return {
    id: `${topic.id}-${String(number).padStart(3, '0')}`,
    topicId: topic.id,
    number,
    source: sourceMatch ? cleanInlineMarkdown(sourceMatch[1]) : '',
    question: {
      vi: questionVi,
      ja: questionJa || questionVi,
    },
    options: options.map(({ id, vi, ja }) => ({ id, vi, ja })),
    correctOptionId: correctOption?.id || '',
    explanation: {
      vi: `Đáp án đúng: ${correctVi}`,
      ja: `正解：${correctJa}`,
    },
  };
}

function parseQuiz(topic, markdown) {
  const normalized = normalizeNewlines(markdown);
  const headingPattern = /^###\s+Câu\s+(\d+)\s*$/gmu;
  const headings = [...normalized.matchAll(headingPattern)];
  const questions = [];
  const seenNumbers = new Set();

  if (headings.length === 0) {
    addError(topic.id, null, `không tìm thấy heading câu hỏi trong ${topic.file}.`);
    return questions;
  }

  headings.forEach((heading, index) => {
    const number = Number(heading[1]);
    if (seenNumbers.has(number)) addError(topic.id, number, 'số câu bị trùng.');
    seenNumbers.add(number);

    const bodyStart = heading.index + heading[0].length;
    const bodyEnd = index + 1 < headings.length ? headings[index + 1].index : normalized.length;
    questions.push(parseQuestionBlock(topic, number, normalized.slice(bodyStart, bodyEnd)));
  });

  const expected = EXPECTED_COUNTS.get(topic.id);
  if (headings.length !== expected) {
    addError(topic.id, null, `có ${headings.length} heading, dự kiến ${expected}.`);
  }
  if (questions.length !== headings.length) {
    addError(topic.id, null, `parse được ${questions.length}/${headings.length} câu.`);
  }

  return questions;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderInline(value) {
  let rendered = escapeHtml(value);
  rendered = rendered.replace(/`([^`]+)`/gu, '<code>$1</code>');
  rendered = rendered.replace(/\*\*([^*]+)\*\*/gu, '<strong>$1</strong>');
  rendered = rendered.replace(/\*([^*]+)\*/gu, '<em>$1</em>');
  rendered = rendered.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gu, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return rendered;
}

function markdownToHtml(markdown) {
  const lines = normalizeNewlines(markdown).split('\n');
  const output = [];
  let paragraph = [];
  let listType = null;

  const closeParagraph = () => {
    if (paragraph.length > 0) {
      output.push(`<p>${paragraph.map(renderInline).join('<br>')}</p>`);
      paragraph = [];
    }
  };

  const closeList = () => {
    if (listType) {
      output.push(`</${listType}>`);
      listType = null;
    }
  };

  const ensureList = (type) => {
    closeParagraph();
    if (listType !== type) {
      closeList();
      output.push(`<${type}>`);
      listType = type;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      closeParagraph();
      closeList();
      continue;
    }

    if (/^<\/?details>$|^<summary>.*<\/summary>$/u.test(trimmed)) {
      closeParagraph();
      closeList();
      output.push(trimmed);
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/u.exec(trimmed);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^(?:={3,}|-{3,})$/u.test(trimmed)) {
      closeParagraph();
      closeList();
      output.push('<hr>');
      continue;
    }

    const quote = /^>\s?(.*)$/u.exec(trimmed);
    if (quote) {
      closeParagraph();
      closeList();
      output.push(`<blockquote>${renderInline(quote[1])}</blockquote>`);
      continue;
    }

    const unordered = /^[-*]\s+(.+)$/u.exec(trimmed);
    if (unordered) {
      ensureList('ul');
      output.push(`<li>${renderInline(unordered[1])}</li>`);
      continue;
    }

    const ordered = /^(\d+)[.)]\s+(.+)$/u.exec(trimmed);
    if (ordered) {
      ensureList('ol');
      output.push(`<li value="${ordered[1]}">${renderInline(ordered[2])}</li>`);
      continue;
    }

    closeList();
    paragraph.push(trimmed);
  }

  closeParagraph();
  closeList();
  return output.join('\n');
}

function renderMaterialPage(topic, markdown) {
  const article = markdownToHtml(markdown);
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(topic.descriptionVi)}">
  <title>${escapeHtml(topic.titleVi)} | Học về Nhật Bản</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body class="material-page">
  <header class="site-header material-header">
    <a class="back-link" href="../" aria-label="Quay lại danh sách chủ đề">← Chủ đề</a>
    <span class="brand-mark" aria-hidden="true">日</span>
    <span class="header-title">Học về Nhật Bản</span>
    <a class="home-link" href="../../">Trang chủ</a>
  </header>
  <main class="material-shell">
    <article class="material-content">
${article}
    </article>
  </main>
</body>
</html>
`;
}

function generatedJavaScript(name, value) {
  return `// AUTO-GENERATED by scripts/build-japanese-data.mjs. Do not edit manually.\nconst ${name} = ${JSON.stringify(value, null, 2)};\n`;
}

async function main() {
  await mkdir(MATERIALS_DIR, { recursive: true });

  const allQuestions = [];
  const topicManifest = [];

  for (const topic of QUIZ_TOPICS) {
    const markdown = await readFile(path.join(SOURCE_DIR, topic.file), 'utf8');
    const questions = parseQuiz(topic, markdown);
    allQuestions.push(...questions);
    topicManifest.push({
      id: topic.id,
      type: 'quiz',
      title: { vi: topic.titleVi, ja: topic.titleJa },
      description: { vi: topic.descriptionVi, ja: topic.descriptionJa },
      count: questions.length,
      source: topic.file,
    });
  }

  const seenIds = new Set();
  for (const question of allQuestions) {
    if (seenIds.has(question.id)) errors.push(`${question.id}: ID bị trùng.`);
    seenIds.add(question.id);
  }

  for (const topic of MATERIAL_TOPICS) {
    const markdown = await readFile(path.join(SOURCE_DIR, topic.file), 'utf8');
    const html = renderMaterialPage(topic, markdown);
    await writeFile(path.join(MATERIALS_DIR, topic.output), html, 'utf8');
    topicManifest.push({
      id: topic.id,
      type: topic.type,
      title: { vi: topic.titleVi, ja: topic.titleJa },
      description: { vi: topic.descriptionVi, ja: topic.descriptionJa },
      href: `./materials/${topic.output}`,
      source: topic.file,
    });
  }

  if (errors.length > 0) {
    console.error(`Build failed with ${errors.length} error(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  await writeFile(
    path.join(OUTPUT_DIR, 'questions_data.js'),
    generatedJavaScript('JAPANESE_QUESTIONS', allQuestions),
    'utf8',
  );
  await writeFile(
    path.join(OUTPUT_DIR, 'topics.js'),
    generatedJavaScript('JAPANESE_TOPICS', topicManifest),
    'utf8',
  );

  for (const topic of topicManifest.filter(({ type }) => type === 'quiz')) {
    console.log(`${topic.id}: ${topic.count} questions`);
  }
  console.log(`Total: ${allQuestions.length} questions`);
  console.log('Skipped: 0');
  console.log('Errors: 0');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
