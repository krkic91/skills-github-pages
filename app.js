// State management
let quizState = {
  mode: null, // 'practice', 'exam', 'study'
  questions: [], // raw and translated database
  currentQuestionIndex: 0,
  selectedOptions: [], // original keys like ['A', 'C']
  answersState: [], // Array of { id, selected: [], isCorrect: false, isAnswered: false, optionsOrder: [] }
  currentLanguage: 'en', // 'en', 'vi', 'ja'
  timerInterval: null,
  timeRemaining: 7200, // 120 minutes in seconds
  examDuration: 7200,
  studySearchQuery: '',
  score: 0
};

// Initialize elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Try loading questions from global variable QUESTIONS (from questions_data.js)
  if (typeof QUESTIONS !== 'undefined') {
    quizState.questions = QUESTIONS;
    initApp();
  } else {
    // Fallback: If questions_data.js isn't loaded yet, try fetching json
    fetch('questions_translated.json')
      .then(response => response.json())
      .then(data => {
        quizState.questions = data;
        initApp();
      })
      .catch(err => {
        console.error('Failed to load questions:', err);
        alert('Could not load questions database. Please ensure questions_data.js or questions_translated.json is present.');
      });
  }
});

function initApp() {
  setupEventListeners();
  showScreen('welcome-screen');
}

function setupEventListeners() {
  // Mode selection
  document.getElementById('practice-card').addEventListener('click', () => selectMode('practice'));
  document.getElementById('exam-card').addEventListener('click', () => selectMode('exam'));
  document.getElementById('study-card').addEventListener('click', () => selectMode('study'));
  
  document.getElementById('btn-start').addEventListener('click', startQuiz);
  
  // Navigation buttons
  document.getElementById('btn-prev').addEventListener('click', prevQuestion);
  document.getElementById('btn-submit').addEventListener('click', submitAnswer);
  document.getElementById('btn-next').addEventListener('click', nextQuestion);
  
  // Translation buttons
  document.getElementById('btn-lang-en').addEventListener('click', () => switchLanguage('en'));
  document.getElementById('btn-lang-vi').addEventListener('click', () => switchLanguage('vi'));
  document.getElementById('btn-lang-ja').addEventListener('click', () => switchLanguage('ja'));
  
  // Drawer controls
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('drawer');
  
  document.getElementById('btn-menu').addEventListener('click', () => {
    overlay.classList.add('open');
    drawer.classList.add('open');
  });
  
  document.getElementById('btn-close-drawer').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  
  // Close drawer with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
  
  // Finish exam from drawer
  document.getElementById('btn-drawer-finish').addEventListener('click', () => {
    if (confirm('Are you sure you want to finish the exam and view results?')) {
      closeDrawer();
      finishExam();
    }
  });
  
  // Restart quiz (from Results screen)
  document.getElementById('btn-restart').addEventListener('click', () => {
    clearInterval(quizState.timerInterval);
    resetQuizState();
    showScreen('welcome-screen');
  });

  // Back to Modes (from Study screen)
  const btnRestartStudy = document.getElementById('btn-restart-study');
  if (btnRestartStudy) {
    btnRestartStudy.addEventListener('click', () => {
      resetQuizState();
      showScreen('welcome-screen');
    });
  }
  
  // Search in Study mode
  const searchInput = document.getElementById('study-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      quizState.studySearchQuery = e.target.value.toLowerCase();
      renderStudyMode();
    });
  }
}

function closeDrawer() {
  document.getElementById('drawer-overlay').classList.remove('open');
  document.getElementById('drawer').classList.remove('open');
}

function selectMode(mode) {
  quizState.mode = mode;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`${mode}-card`).classList.add('selected');
  document.getElementById('btn-start').disabled = false;
}

function resetQuizState() {
  quizState.mode = null;
  quizState.currentQuestionIndex = 0;
  quizState.selectedOptions = [];
  quizState.answersState = [];
  quizState.timeRemaining = 7200;
  quizState.score = 0;
  quizState.studySearchQuery = '';
  document.getElementById('btn-start').disabled = true;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('timer-container').style.display = 'none';
  document.getElementById('btn-drawer-finish').style.display = 'none';
  document.getElementById('btn-submit').style.display = 'inline-flex';
  document.getElementById('btn-next').style.display = 'none';
}

function startQuiz() {
  if (!quizState.mode) return;
  
  // Initialize answers state for all questions
  quizState.answersState = quizState.questions.map(q => {
    // Generate randomized order of option keys
    const keys = Object.keys(q.options);
    // Shuffle using Fisher-Yates
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    
    return {
      id: q.id,
      selected: [],
      isAnswered: false,
      isCorrect: false,
      optionsOrder: keys
    };
  });
  
  // Setup interface according to mode
  if (quizState.mode === 'practice') {
    showScreen('quiz-screen');
    document.getElementById('timer-container').style.display = 'none';
    document.getElementById('btn-submit').style.display = 'inline-flex';
    document.getElementById('btn-submit').innerText = 'Submit';
    renderQuestion();
    renderDrawerGrid();
  } else if (quizState.mode === 'exam') {
    showScreen('quiz-screen');
    document.getElementById('timer-container').style.display = 'flex';
    document.getElementById('btn-submit').style.display = 'none'; // No submit in exam mode, just prev/next
    document.getElementById('btn-drawer-finish').style.display = 'block';
    startTimer();
    renderQuestion();
    renderDrawerGrid();
  } else if (quizState.mode === 'study') {
    showScreen('study-screen');
    renderStudyMode();
  }
}

// Timer logic
function startTimer() {
  updateTimerDisplay();
  quizState.timerInterval = setInterval(() => {
    quizState.timeRemaining--;
    updateTimerDisplay();
    if (quizState.timeRemaining <= 0) {
      clearInterval(quizState.timerInterval);
      alert('Time is up! Submitting your exam automatically.');
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(quizState.timeRemaining / 60);
  const secs = quizState.timeRemaining % 60;
  document.getElementById('timer').innerText = 
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Switching language
function switchLanguage(lang) {
  quizState.currentLanguage = lang;
  document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-lang-${lang}`).classList.add('active');
  
  if (quizState.mode === 'study') {
    renderStudyMode();
  } else {
    renderQuestion();
  }
}

// Render single question in Quiz Mode (Practice / Exam)
function renderQuestion() {
  const qIndex = quizState.currentQuestionIndex;
  const q = quizState.questions[qIndex];
  const aState = quizState.answersState[qIndex];
  
  // Update progress bar
  const progressPercent = ((qIndex + 1) / quizState.questions.length) * 100;
  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('progress-text').innerText = `Question ${qIndex + 1} of ${quizState.questions.length}`;
  
  // Set question text
  let qText = q.question;
  if (quizState.currentLanguage === 'vi' && q.question_vi) {
    qText = q.question_vi;
  } else if (quizState.currentLanguage === 'ja' && q.question_ja) {
    qText = q.question_ja;
  }
  document.getElementById('question-text').innerText = `${q.id}. ${qText}`;
  
  // Clear options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  // Options text set based on language
  let opts = q.options;
  if (quizState.currentLanguage === 'vi' && q.options_vi) {
    opts = q.options_vi;
  } else if (quizState.currentLanguage === 'ja' && q.options_ja) {
    opts = q.options_ja;
  }
  
  // Multi-select info
  const isMultiSelect = q.answer.length > 1;
  const selectInfo = isMultiSelect ? `(Select ${q.answer.length} options)` : '(Select 1 option)';
  document.getElementById('select-info-badge').innerText = selectInfo;
  
  // Render options according to shuffled order in answersState
  aState.optionsOrder.forEach((optKey, index) => {
    const optText = opts[optKey];
    const card = document.createElement('div');
    card.className = 'option-card';
    card.dataset.key = optKey;
    
    // Check if selected
    if (aState.selected.includes(optKey)) {
      card.classList.add('selected');
    }
    
    // If answered in practice mode, apply validation colors
    if (quizState.mode === 'practice' && aState.isAnswered) {
      const isCorrectOption = q.answer.includes(optKey);
      const isSelected = aState.selected.includes(optKey);
      
      if (isCorrectOption) {
        card.classList.add('correct');
      } else if (isSelected) {
        card.classList.add('incorrect');
      }
    }
    
    const badgeLetter = String.fromCharCode(65 + index); // A, B, C, D...
    card.innerHTML = `
      <div class="option-badge">${badgeLetter}</div>
      <div class="option-text">${optText}</div>
    `;
    
    // Event listener for selecting options (only if not answered in practice mode)
    if (quizState.mode === 'exam' || !aState.isAnswered) {
      card.addEventListener('click', () => selectOption(optKey, card, isMultiSelect, q.answer.length));
    }
    
    optionsContainer.appendChild(card);
  });
  
  // Render Explanation (only in Practice mode, if answered)
  const expPanel = document.getElementById('explanation-panel');
  if (quizState.mode === 'practice' && aState.isAnswered) {
    expPanel.style.display = 'block';
    
    let expText = q.explanation || 'No detailed explanation available.';
    if (quizState.currentLanguage === 'vi' && q.explanation_vi) {
      expText = q.explanation_vi;
    } else if (quizState.currentLanguage === 'ja' && q.explanation_ja) {
      expText = q.explanation_ja;
    }
    
    document.getElementById('explanation-text').innerText = expText;
    document.getElementById('explanation-refs').innerText = q.references ? `References: ${q.references}` : '';
  } else {
    expPanel.style.display = 'none';
  }
  
  // Configure action buttons
  document.getElementById('btn-prev').disabled = qIndex === 0;
  
  if (quizState.mode === 'practice') {
    if (aState.isAnswered) {
      document.getElementById('btn-submit').style.display = 'none';
      document.getElementById('btn-next').style.display = 'inline-flex';
      if (qIndex === quizState.questions.length - 1) {
        document.getElementById('btn-next').innerText = 'Finish & Results';
      } else {
        document.getElementById('btn-next').innerText = 'Next';
      }
    } else {
      document.getElementById('btn-submit').style.display = 'inline-flex';
      document.getElementById('btn-submit').disabled = aState.selected.length === 0;
      document.getElementById('btn-next').style.display = 'none';
    }
  } else {
    // Exam mode
    document.getElementById('btn-submit').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline-flex';
    if (qIndex === quizState.questions.length - 1) {
      document.getElementById('btn-next').innerText = 'Finish Exam';
    } else {
      document.getElementById('btn-next').innerText = 'Next';
    }
  }
  
  // Update Active in Drawer
  document.querySelectorAll('.btn-q-nav').forEach((btn, idx) => {
    if (idx === qIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function selectOption(key, element, isMultiSelect, maxChoices) {
  const qIndex = quizState.currentQuestionIndex;
  const aState = quizState.answersState[qIndex];
  
  if (isMultiSelect) {
    if (aState.selected.includes(key)) {
      aState.selected = aState.selected.filter(k => k !== key);
      element.classList.remove('selected');
    } else {
      if (aState.selected.length < maxChoices) {
        aState.selected.push(key);
        element.classList.add('selected');
      } else {
        // Replace oldest select if max choice reached
        const removedKey = aState.selected.shift();
        aState.selected.push(key);
        
        // Update UI
        document.querySelectorAll('.option-card').forEach(card => {
          if (card.dataset.key === removedKey) card.classList.remove('selected');
          if (card.dataset.key === key) card.classList.add('selected');
        });
      }
    }
  } else {
    // Single select
    aState.selected = [key];
    document.querySelectorAll('.option-card').forEach(card => {
      card.classList.remove('selected');
    });
    element.classList.add('selected');
  }
  
  // Update submit button disabled status in Practice Mode
  if (quizState.mode === 'practice') {
    document.getElementById('btn-submit').disabled = aState.selected.length === 0;
  } else {
    // Save state as answered in exam mode
    aState.isAnswered = aState.selected.length > 0;
    updateDrawerButtonState(qIndex);
  }
}

function submitAnswer() {
  const qIndex = quizState.currentQuestionIndex;
  const q = quizState.questions[qIndex];
  const aState = quizState.answersState[qIndex];
  
  if (aState.selected.length === 0) return;
  
  // Prevent double-submission
  if (aState.isAnswered) return;
  
  aState.isAnswered = true;
  
  // Validate correct answers (must match exactly)
  const isCorrect = q.answer.length === aState.selected.length && 
                    q.answer.every(ans => aState.selected.includes(ans));
  aState.isCorrect = isCorrect;
  
  if (isCorrect) {
    quizState.score = (quizState.score || 0) + 1;
  }
  
  // Re-render to show explanation and colored cards
  renderQuestion();
  updateDrawerButtonState(qIndex);
}

function nextQuestion() {
  if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
    quizState.currentQuestionIndex++;
    renderQuestion();
  } else {
    // On last question
    if (quizState.mode === 'practice') {
      const lastState = quizState.answersState[quizState.currentQuestionIndex];
      // Only show results if last question was answered
      if (lastState && lastState.isAnswered) {
        finishPractice();
      }
    } else {
      if (confirm('Do you want to finish the exam and view results?')) {
        finishExam();
      }
    }
  }
}

function prevQuestion() {
  if (quizState.currentQuestionIndex > 0) {
    quizState.currentQuestionIndex--;
    renderQuestion();
  }
}

// Generate Question Navigator Drawer Buttons
function renderDrawerGrid() {
  const grid = document.getElementById('drawer-grid');
  grid.innerHTML = '';
  
  quizState.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn-q-nav';
    btn.innerText = q.id;
    
    // Highlight if active
    if (idx === quizState.currentQuestionIndex) {
      btn.classList.add('active');
    }
    
    btn.addEventListener('click', () => {
      quizState.currentQuestionIndex = idx;
      renderQuestion();
      closeDrawer();
    });
    
    grid.appendChild(btn);
    updateDrawerButtonState(idx, btn);
  });
}

function updateDrawerButtonState(idx, btnElement = null) {
  const btn = btnElement || document.querySelector(`.drawer-grid button:nth-child(${idx + 1})`);
  if (!btn) return;
  
  const aState = quizState.answersState[idx];
  
  btn.className = 'btn-q-nav';
  if (idx === quizState.currentQuestionIndex) {
    btn.classList.add('active');
  }
  
  if (aState.isAnswered) {
    if (quizState.mode === 'practice') {
      if (aState.isCorrect) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('incorrect');
      }
    } else {
      // Exam mode
      btn.classList.add('answered');
    }
  }
}

// Results Calculation & Render
function finishPractice() {
  showScreen('results-screen');
  renderResultsSummary();
}

function finishExam() {
  clearInterval(quizState.timerInterval);
  
  // Calculate exam score
  let correctCount = 0;
  quizState.answersState.forEach((aState, idx) => {
    const q = quizState.questions[idx];
    const isCorrect = q.answer.length === aState.selected.length && 
                      q.answer.every(ans => aState.selected.includes(ans));
    aState.isCorrect = isCorrect;
    if (isCorrect) correctCount++;
  });
  
  quizState.score = correctCount;
  showScreen('results-screen');
  renderResultsSummary();
}

function renderResultsSummary() {
  const total = quizState.questions.length;
  const score = quizState.score;
  const percent = Math.round((score / total) * 100);
  
  // Set Radial progress
  const circle = document.getElementById('radial-progress');
  const circumference = 440; // 2 * pi * r (r=70)
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Check pass mark (usually 70% for Microsoft exams)
  const isPass = percent >= 70;
  const textLabel = isPass ? 'PASSED' : 'FAILED';
  document.getElementById('results-title').innerText = isPass ? 'Congratulations! 🎉' : 'Keep Studying! 💪';
  
  // Trigger Confetti if passed
  if (isPass && typeof confetti !== 'undefined') {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  }
  
  document.getElementById('score-num').innerText = `${percent}%`;
  document.getElementById('score-label').innerText = textLabel;
  document.getElementById('score-label').style.color = isPass ? 'var(--success-color)' : 'var(--danger-color)';
  circle.style.stroke = isPass ? 'var(--success-color)' : 'var(--danger-color)';
  
  // Details stats
  document.getElementById('stat-correct').innerText = score;
  document.getElementById('stat-incorrect').innerText = total - score;
  
  const timeSpentSecs = quizState.mode === 'exam' ? (quizState.examDuration - quizState.timeRemaining) : 0;
  const timeString = formatTime(timeSpentSecs);
  document.getElementById('stat-time-val').innerText = quizState.mode === 'exam' ? timeString : 'N/A';
  document.getElementById('stat-time-label').innerText = quizState.mode === 'exam' ? 'Time Taken' : 'Practice Mode';
  
  // Generate incorrect answers review
  renderReviewList();
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}m ${secs}s`;
}

function renderReviewList() {
  const reviewContainer = document.getElementById('review-list-container');
  reviewContainer.innerHTML = '';
  
  const incorrectStates = quizState.answersState.filter(a => !a.isCorrect);
  
  if (incorrectStates.length === 0) {
    reviewContainer.innerHTML = '<p style="color: var(--success-color); text-align: center; font-weight: 600;">Perfect Score! No mistakes to review.</p>';
    return;
  }
  
  incorrectStates.forEach(aState => {
    const qIndex = quizState.questions.findIndex(q => q.id === aState.id);
    const q = quizState.questions[qIndex];
    
    const item = document.createElement('div');
    item.className = 'review-item';
    
    // Texts
    let qText = q.question;
    let expText = q.explanation || 'No detailed explanation available.';
    let opts = q.options;
    
    if (quizState.currentLanguage === 'vi') {
      if (q.question_vi) qText = q.question_vi;
      if (q.explanation_vi) expText = q.explanation_vi;
      if (q.options_vi) opts = q.options_vi;
    } else if (quizState.currentLanguage === 'ja') {
      if (q.question_ja) qText = q.question_ja;
      if (q.explanation_ja) expText = q.explanation_ja;
      if (q.options_ja) opts = q.options_ja;
    }
    
    // Options HTML
    let optionsHtml = '';
    Object.keys(q.options).forEach(optKey => {
      const isCorrect = q.answer.includes(optKey);
      const isSelected = aState.selected.includes(optKey);
      
      let optClass = '';
      if (isCorrect) optClass = 'correct';
      else if (isSelected) optClass = 'user-selected';
      
      optionsHtml += `
        <div class="review-option ${optClass}">
          <strong>Option ${optKey}:</strong> ${opts[optKey]}
          ${isCorrect ? ' (Correct Answer)' : ''}
          ${isSelected && !isCorrect ? ' (Your Choice)' : ''}
        </div>
      `;
    });
    
    item.innerHTML = `
      <div class="review-item-header">
        <span>Question ${q.id}</span>
        <span style="color: var(--danger-color); font-weight:600;">Incorrect</span>
      </div>
      <div class="review-question">${qText}</div>
      <div class="review-options">${optionsHtml}</div>
      <div class="review-explanation">
        <strong style="color: var(--success-color); display:block; margin-bottom:0.25rem;">Explanation:</strong>
        ${expText}
        ${q.references ? `<div style="margin-top:0.5rem; font-size:0.8rem; color: var(--text-muted);">References: ${q.references}</div>` : ''}
      </div>
    `;
    
    reviewContainer.appendChild(item);
  });
}

// Render all questions in Study/Cheat Sheet Mode
function renderStudyMode() {
  const container = document.getElementById('study-list-container');
  container.innerHTML = '';
  
  let filteredQuestions = quizState.questions;
  
  // Filter by search
  if (quizState.studySearchQuery) {
    filteredQuestions = quizState.questions.filter(q => {
      let qText = q.question.toLowerCase();
      let expText = q.explanation.toLowerCase();
      
      if (quizState.currentLanguage === 'vi') {
        if (q.question_vi) qText = q.question_vi.toLowerCase();
        if (q.explanation_vi) expText = q.explanation_vi.toLowerCase();
      } else if (quizState.currentLanguage === 'ja') {
        if (q.question_ja) qText = q.question_ja.toLowerCase();
        if (q.explanation_ja) expText = q.explanation_ja.toLowerCase();
      }
      
      return qText.includes(quizState.studySearchQuery) || expText.includes(quizState.studySearchQuery) || q.id.toString() === quizState.studySearchQuery;
    });
  }
  
  if (filteredQuestions.length === 0) {
    container.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No questions matched your search query.</p>';
    return;
  }
  
  filteredQuestions.forEach(q => {
    const item = document.createElement('div');
    item.className = 'review-item';
    
    let qText = q.question;
    let expText = q.explanation || 'No detailed explanation available.';
    let opts = q.options;
    
    if (quizState.currentLanguage === 'vi') {
      if (q.question_vi) qText = q.question_vi;
      if (q.explanation_vi) expText = q.explanation_vi;
      if (q.options_vi) opts = q.options_vi;
    } else if (quizState.currentLanguage === 'ja') {
      if (q.question_ja) qText = q.question_ja;
      if (q.explanation_ja) expText = q.explanation_ja;
      if (q.options_ja) opts = q.options_ja;
    }
    
    let optionsHtml = '';
    Object.keys(q.options).forEach(optKey => {
      const isCorrect = q.answer.includes(optKey);
      let optClass = isCorrect ? 'correct' : '';
      
      optionsHtml += `
        <div class="review-option ${optClass}">
          <strong>Option ${optKey}:</strong> ${opts[optKey]}
          ${isCorrect ? ' (Correct Answer)' : ''}
        </div>
      `;
    });
    
    item.innerHTML = `
      <div class="review-item-header">
        <span>Question ${q.id}</span>
      </div>
      <div class="review-question">${qText}</div>
      <div class="review-options">${optionsHtml}</div>
      <div class="review-explanation">
        <strong style="color: var(--success-color); display:block; margin-bottom:0.25rem;">Explanation:</strong>
        ${expText}
        ${q.references ? `<div style="margin-top:0.5rem; font-size:0.8rem; color: var(--text-muted);">References: ${q.references}</div>` : ''}
      </div>
    `;
    
    container.appendChild(item);
  });
}

// Helper to switch screens
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  
  // Header menu visibility
  if (screenId === 'quiz-screen') {
    document.getElementById('btn-menu').style.display = 'flex';
  } else {
    document.getElementById('btn-menu').style.display = 'none';
  }
}
