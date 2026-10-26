const QUESTIONS = CCAR_QUESTIONS;
const state = { filtered: [], index: 0, mode: 'practice', responses: new Map() };
const el = id => document.getElementById(id);

const plainText = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.textContent;
};

const typeLabels = { single: 'Một đáp án', multiple: 'Nhiều đáp án', matching: 'Nối lựa chọn' };

const searchText = new Map(QUESTIONS.map(q => {
  const optionText = Object.values(q.options || {}).join(' ');
  const matchingText = (q.matching || []).map(row => `${row.text} ${row.choices.join(' ')}`).join(' ');
  return [q.id, plainText(`CCAR-P ${q.set} ${q.number} ${q.question} ${optionText} ${matchingText}`).toLocaleLowerCase()];
}));

function getResponse(q) {
  if (!state.responses.has(q.id)) {
    state.responses.set(q.id, { selected: q.type === 'matching' ? {} : [], checked: false });
  }
  return state.responses.get(q.id);
}

function hasCompleteSelection(q, response) {
  if (q.type === 'matching') return q.matching.every(row => response.selected[row.letter]);
  return response.selected.length === q.answer.length;
}

function isCorrect(q, response) {
  if (q.type === 'matching') return q.matching.every(row => response.selected[row.letter] === row.answer);
  return response.selected.length === q.answer.length && q.answer.every(key => response.selected.includes(key));
}

function filterQuestions() {
  const query = el('search').value.trim().toLocaleLowerCase();
  const selectedSet = el('set-filter').value;
  state.filtered = QUESTIONS.filter(q =>
    (selectedSet === 'all' || String(q.set) === selectedSet) && searchText.get(q.id).includes(query)
  );
  state.index = 0;
  render();
}

function renderMap() {
  const map = el('question-map');
  map.replaceChildren();
  let lastSet = null;
  for (const [index, q] of state.filtered.entries()) {
    if (q.set !== lastSet) {
      const label = document.createElement('p');
      label.className = 'map-set-label';
      label.textContent = `Set ${q.set}`;
      map.append(label);
      lastSet = q.set;
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = String(q.number);
    button.title = `Set ${q.set} · Câu ${q.number} · ${typeLabels[q.type]}`;
    button.setAttribute('aria-label', `Set ${q.set}, câu ${q.number}, ${typeLabels[q.type]}`);
    if (index === state.index) button.setAttribute('aria-current', 'true');
    const response = state.responses.get(q.id);
    if (response?.checked) {
      button.classList.add(response.correct ? 'correct' : 'incorrect');
      button.setAttribute('aria-label', `${button.getAttribute('aria-label')}, ${response.correct ? 'đã trả lời đúng' : 'đã trả lời sai'}`);
    }
    button.addEventListener('click', () => { state.index = index; render(); });
    map.append(button);
  }
}

function renderFeedback(q, response) {
  const shown = state.mode === 'study' || response.checked;
  el('feedback').hidden = !shown;
  el('check').hidden = shown;
  if (!shown) return;

  if (q.type === 'matching') {
    const correctCount = q.matching.filter(row => response.selected[row.letter] === row.answer).length;
    el('result').textContent = state.mode === 'study'
      ? 'Đáp án đúng được hiển thị cho từng mục.'
      : `${response.correct ? 'Chính xác!' : 'Chưa chính xác.'} ${correctCount}/${q.matching.length} mục đúng.`;
    for (const row of q.matching) {
      const rowEl = el('matching-row-' + row.letter);
      const select = el('matching-select-' + row.letter);
      const note = el('matching-note-' + row.letter);
      if (!rowEl || !select || !note) continue;
      const chosen = state.mode === 'study' ? row.answer : response.selected[row.letter];
      if (state.mode === 'study') select.value = row.answer;
      select.disabled = true;
      const correct = chosen === row.answer;
      rowEl.classList.toggle('correct', correct);
      rowEl.classList.toggle('incorrect', !correct);
      note.hidden = false;
      note.textContent = state.mode === 'study'
        ? `Đáp án: ${row.answer}`
        : correct ? `Đúng — ${row.answer}` : `Đáp án đúng: ${row.answer}`;
    }
  } else {
    el('result').textContent = state.mode === 'study'
      ? `Đáp án: ${q.answer.join(', ')}`
      : `${response.correct ? 'Chính xác!' : 'Chưa chính xác.'} Đáp án: ${q.answer.join(', ')}`;
    for (const label of el('options').querySelectorAll('label')) {
      const input = label.querySelector('input');
      label.classList.toggle('correct', q.answer.includes(input.value));
      label.classList.toggle('incorrect', response.checked && input.checked && !q.answer.includes(input.value));
      input.disabled = true;
    }
  }
  el('explanation').innerHTML = q.explanation;
}

function renderMatching(q, response) {
  const list = document.createElement('div');
  list.className = 'matching-list';
  for (const row of q.matching) {
    const rowEl = document.createElement('div');
    rowEl.className = 'matching-row';
    rowEl.id = 'matching-row-' + row.letter;

    const letter = document.createElement('span');
    letter.className = 'matching-letter';
    letter.textContent = row.letter;

    const text = document.createElement('div');
    text.className = 'matching-text';
    text.textContent = row.text;

    const select = document.createElement('select');
    select.id = 'matching-select-' + row.letter;
    select.setAttribute('aria-label', `Đáp án cho mục ${row.letter}`);
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = '— Chọn —';
    select.append(placeholder);
    for (const choice of row.choices) {
      const option = document.createElement('option');
      option.value = choice;
      option.textContent = choice;
      select.append(option);
    }
    select.value = state.mode === 'study' ? row.answer : (response.selected[row.letter] || '');
    select.addEventListener('change', () => {
      if (select.value) response.selected[row.letter] = select.value;
      else delete response.selected[row.letter];
      el('check').disabled = !hasCompleteSelection(q, response);
    });

    const note = document.createElement('small');
    note.className = 'matching-answer';
    note.id = 'matching-note-' + row.letter;
    note.hidden = true;

    rowEl.append(letter, text, select, note);
    list.append(rowEl);
  }
  el('options').append(list);
}

function renderOptions(q, response) {
  for (const [key, html] of Object.entries(q.options)) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = q.answer.length > 1 ? 'checkbox' : 'radio';
    input.name = 'answer';
    input.value = key;
    input.checked = response.selected.includes(key);
    const letter = document.createElement('strong');
    letter.textContent = key;
    const content = document.createElement('div');
    content.innerHTML = html;
    label.append(input, letter, content);
    input.addEventListener('change', () => {
      response.selected = [...el('options').querySelectorAll('input:checked')].map(item => item.value);
      el('check').disabled = !hasCompleteSelection(q, response);
    });
    el('options').append(label);
  }
}

function render() {
  const q = state.filtered[state.index];
  const answered = state.filtered.filter(item => state.responses.get(item.id)?.checked);
  const correct = answered.filter(item => state.responses.get(item.id).correct).length;
  el('progress').textContent = `${state.filtered.length} câu hỏi · Đã làm ${answered.length} · Đúng ${correct}${q ? ` · Đang xem ${state.index + 1}/${state.filtered.length}` : ''}`;
  el('question-card').hidden = !q;
  el('empty').hidden = Boolean(q);
  renderMap();
  if (!q) return;

  const response = getResponse(q);
  const difficulty = q.difficulty ? ` · ${q.difficulty}` : '';
  el('question-label').textContent = `Set ${q.set} · Câu ${q.number} · ${typeLabels[q.type]}${difficulty}`;
  el('selection-hint').textContent = state.mode === 'study'
    ? 'Đang hiển thị đáp án'
    : q.type === 'matching'
      ? `Chọn đáp án cho ${q.matching.length} mục`
      : q.type === 'multiple' ? `Chọn ${q.answer.length} đáp án` : 'Chọn 1 đáp án';
  el('question-content').innerHTML = q.question;

  const legend = document.createElement('legend');
  legend.className = 'sr-only';
  legend.textContent = q.type === 'matching' ? 'Chọn đáp án cho từng mục' : 'Chọn đáp án';
  el('options').replaceChildren(legend);
  if (q.type === 'matching') renderMatching(q, response);
  else renderOptions(q, response);

  el('check').disabled = !hasCompleteSelection(q, response);
  renderFeedback(q, response);
  el('prev').disabled = state.index === 0;
  el('next').disabled = state.index === state.filtered.length - 1;
}

el('answer-form').addEventListener('submit', event => {
  event.preventDefault();
  const q = state.filtered[state.index];
  const response = q && getResponse(q);
  if (!q || !response || response.checked || !hasCompleteSelection(q, response)) return;
  response.checked = true;
  response.correct = isCorrect(q, response);
  render();
});
el('search').addEventListener('input', filterQuestions);
el('set-filter').addEventListener('change', filterQuestions);
el('mode').addEventListener('change', () => { state.mode = el('mode').value; render(); });
el('prev').addEventListener('click', () => { if (state.index > 0) { state.index--; render(); } });
el('next').addEventListener('click', () => { if (state.index < state.filtered.length - 1) { state.index++; render(); } });
filterQuestions();
