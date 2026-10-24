const state = { filtered: [], index: 0, mode: 'practice', responses: new Map() };
const el = id => document.getElementById(id);
const plainText = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.textContent;
};
const searchText = new Map(MICROSOFT_QUESTIONS.map(q => [q.id,
  plainText(`${q.id} ${q.question} ${Object.values(q.options).join(' ')}`).toLocaleLowerCase()]));

function filterQuestions() {
  const query = el('search').value.trim().toLocaleLowerCase();
  state.filtered = MICROSOFT_QUESTIONS.filter(q => searchText.get(q.id).includes(query));
  state.index = 0;
  render();
}

function renderMap() {
  const map = el('question-map');
  map.replaceChildren();
  for (const [index, q] of state.filtered.entries()) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `${q.exam} · ${q.number}`;
    button.setAttribute('aria-label', `Câu ${q.number}, ${q.exam}`);
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
  el('result').textContent = state.mode === 'study'
    ? `Đáp án: ${q.answer.join(', ')}`
    : `${response.correct ? 'Chính xác!' : 'Chưa chính xác.'} Đáp án: ${q.answer.join(', ')}`;
  el('explanation').innerHTML = shown ? q.explanation : '';
  for (const label of el('options').querySelectorAll('label')) {
    const input = label.querySelector('input');
    label.classList.toggle('correct', shown && q.answer.includes(input.value));
    label.classList.toggle('incorrect', shown && input.checked && !q.answer.includes(input.value));
    input.disabled = shown;
  }
  el('check').hidden = shown;
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
  const response = state.responses.get(q.id) || { selected: [], checked: false };
  el('question-label').textContent = `${q.exam} / Câu ${q.number}`;
  el('selection-hint').textContent = `Chọn ${q.answer.length} đáp án`;
  el('question-content').innerHTML = q.question;
  el('options').replaceChildren();
  const legend = document.createElement('legend');
  legend.className = 'sr-only';
  legend.textContent = `Chọn ${q.answer.length} đáp án`;
  el('options').append(legend);
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
      state.responses.set(q.id, response);
      el('check').disabled = response.selected.length !== q.answer.length;
    });
    el('options').append(label);
  }
  el('check').disabled = response.selected.length !== q.answer.length;
  renderFeedback(q, response);
  el('prev').disabled = state.index === 0;
  el('next').disabled = state.index === state.filtered.length - 1;
}

el('answer-form').addEventListener('submit', event => {
  event.preventDefault();
  const q = state.filtered[state.index];
  const response = q && state.responses.get(q.id);
  if (!response || response.checked || response.selected.length !== q.answer.length) return;
  response.checked = true;
  response.correct = response.selected.length === q.answer.length && q.answer.every(key => response.selected.includes(key));
  render();
});
el('search').addEventListener('input', filterQuestions);
el('mode').addEventListener('change', () => { state.mode = el('mode').value; render(); });
el('prev').addEventListener('click', () => { if (state.index > 0) { state.index--; render(); } });
el('next').addEventListener('click', () => { if (state.index < state.filtered.length - 1) { state.index++; render(); } });
filterQuestions();
