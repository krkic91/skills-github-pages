(function () {
  'use strict';

  const TYPE_ORDER = Object.freeze({ textbook: 1, handbook: 2, lesson: 3 });
  const TYPE_LABELS = Object.freeze({
    textbook: { singular: 'Textbook', plural: 'Textbooks' },
    handbook: { singular: 'Handbook', plural: 'Handbooks' },
    lesson: { singular: 'Lesson', plural: 'Lessons' },
  });
  const GROUP_ORDER = ['textbook', 'handbook', 'lesson'];
  const SEARCH_DEBOUNCE_MS = 140;

  document.addEventListener('DOMContentLoaded', initialize);

  function initialize() {
    const page = document.body.dataset.page;
    const documents = readCatalog();

    if (page === 'catalog') {
      initializeCatalog(documents);
    } else if (page === 'reader') {
      initializeReader(documents);
    }
  }

  function readCatalog() {
    const source = window.ENGLISH_CATALOG;
    const records = Array.isArray(source)
      ? source
      : source && Array.isArray(source.documents)
        ? source.documents
        : [];

    return records
      .map(normalizeDocument)
      .filter((documentRecord) => documentRecord.id)
      .sort(compareDocuments);
  }

  function normalizeDocument(record, sourceIndex) {
    const raw = record && typeof record === 'object' ? record : {};
    const id = stringValue(raw.id).trim();
    const level = stringValue(raw.level).trim().toUpperCase() || inferLevel(id);
    const moduleNumber = positiveInteger(raw.module ?? raw.moduleNumber) || inferNumber(id, /-m(\d{1,2})(?:-|$)/i);
    const lessonNumber = positiveInteger(raw.lesson ?? raw.lessonNumber) || inferNumber(id, /-l(\d{1,2})(?:-|$)/i);
    const type = normalizeType(raw.type, id, raw.path);
    const title = stringValue(raw.title).trim() || fallbackTitle(level, moduleNumber, lessonNumber, type);
    const source = stringValue(raw.source ?? raw.sourceFile).trim();
    const sourcePages = positiveInteger(raw.sourcePages ?? raw.source_pages ?? raw.pages) || 0;
    const path = stringValue(raw.path ?? raw.file ?? raw.filePath).trim();
    const content = stringValue(raw.content ?? raw.markdown ?? raw.body).trim();
    const suppliedSearchText = stringValue(raw.searchText ?? raw.search_text);
    const bodyText = markdownToPlainText(content);
    const searchableBody = suppliedSearchText || bodyText;
    const haystack = normalizeSearchText([
      id,
      level,
      moduleNumber ? `module ${moduleNumber} module ${pad2(moduleNumber)}` : '',
      lessonNumber ? `lesson ${lessonNumber} lesson ${pad2(lessonNumber)}` : '',
      type,
      title,
      source,
      searchableBody,
    ].join(' '));

    return {
      id,
      level,
      module: moduleNumber,
      lesson: lessonNumber,
      type,
      title,
      source,
      sourcePages,
      path,
      content,
      searchText: suppliedSearchText,
      plainText: bodyText,
      haystack,
      sourceIndex,
    };
  }

  function normalizeType(rawType, id, path) {
    const value = `${stringValue(rawType)} ${id} ${stringValue(path)}`.toLowerCase();
    if (value.includes('textbook')) return 'textbook';
    if (value.includes('handbook')) return 'handbook';
    return 'lesson';
  }

  function inferLevel(id) {
    const match = stringValue(id).match(/^ef(\d+)/i);
    return match ? `EF${match[1]}` : '';
  }

  function inferNumber(value, pattern) {
    const match = stringValue(value).match(pattern);
    return match ? positiveInteger(match[1]) : null;
  }

  function fallbackTitle(level, moduleNumber, lessonNumber, type) {
    if (type === 'lesson' && lessonNumber) return `Lesson ${pad2(lessonNumber)}`;
    const typeLabel = TYPE_LABELS[type]?.singular || 'Document';
    return [level, moduleNumber ? `Module ${pad2(moduleNumber)}` : '', typeLabel].filter(Boolean).join(' ');
  }

  function compareDocuments(a, b) {
    const levelDifference = levelRank(a.level) - levelRank(b.level);
    if (levelDifference) return levelDifference;

    const moduleDifference = (a.module || 0) - (b.module || 0);
    if (moduleDifference) return moduleDifference;

    if (a.level === 'EF1' || b.level === 'EF1') {
      const typeDifference = (TYPE_ORDER[a.type] || 99) - (TYPE_ORDER[b.type] || 99);
      if (typeDifference) return typeDifference;
    }

    const lessonDifference = (a.lesson || 0) - (b.lesson || 0);
    if (lessonDifference) return lessonDifference;

    return a.id.localeCompare(b.id, 'en', { numeric: true });
  }

  function levelRank(level) {
    const number = positiveInteger(stringValue(level).replace(/\D/g, ''));
    return number || 999;
  }

  function initializeCatalog(documents) {
    const groupsContainer = document.getElementById('catalog-groups');
    const error = document.getElementById('catalog-error');

    if (!documents.length) {
      groupsContainer.setAttribute('aria-busy', 'false');
      error.hidden = false;
      document.getElementById('result-summary').textContent = 'Library data could not be loaded.';
      return;
    }

    const state = {
      query: '',
      level: 'all',
      module: 'all',
      renderTimer: null,
    };

    const controls = {
      form: document.getElementById('catalog-filters'),
      search: document.getElementById('catalog-search'),
      levelButtons: Array.from(document.querySelectorAll('[data-level]')),
      module: document.getElementById('module-filter'),
      clear: document.getElementById('clear-filters'),
      emptyClear: document.getElementById('empty-clear-filters'),
      summary: document.getElementById('result-summary'),
      activeSummary: document.getElementById('active-filter-summary'),
      empty: document.getElementById('empty-results'),
      groups: groupsContainer,
    };

    applyCatalogStats(documents);
    restoreCatalogState(state, controls);
    bindCatalogEvents(documents, state, controls);
    renderCatalog(documents, state, controls);
  }

  function applyCatalogStats(documents) {
    const supplied = window.ENGLISH_STATS && typeof window.ENGLISH_STATS === 'object'
      ? window.ENGLISH_STATS
      : {};
    const computedPages = documents.reduce((sum, documentRecord) => sum + documentRecord.sourcePages, 0);
    const computedLevels = new Set(documents.map((documentRecord) => documentRecord.level).filter(Boolean)).size;
    setText('stat-documents', supplied.documents ?? documents.length);
    setText('stat-pages', supplied.pages ?? computedPages);
    setText('stat-levels', supplied.levels ?? computedLevels);
  }

  function restoreCatalogState(state, controls) {
    const parameters = readSearchParameters();
    const query = stringValue(parameters.get('q')).trim();
    const level = stringValue(parameters.get('level')).toUpperCase();
    const moduleValue = stringValue(parameters.get('module'));

    state.query = query;
    state.level = ['EF1', 'EF2'].includes(level) ? level : 'all';
    state.module = ['1', '2', '3'].includes(moduleValue) ? moduleValue : 'all';

    controls.search.value = state.query;
    controls.module.value = state.module;
    updateLevelButtons(controls.levelButtons, state.level);
  }

  function bindCatalogEvents(documents, state, controls) {
    controls.form.addEventListener('submit', (event) => event.preventDefault());

    controls.search.addEventListener('input', () => {
      state.query = controls.search.value.trim();
      window.clearTimeout(state.renderTimer);
      state.renderTimer = window.setTimeout(() => renderCatalog(documents, state, controls), SEARCH_DEBOUNCE_MS);
    });

    controls.search.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && controls.search.value) {
        event.preventDefault();
        controls.search.value = '';
        state.query = '';
        renderCatalog(documents, state, controls);
      }
    });

    controls.levelButtons.forEach((button) => {
      button.addEventListener('click', () => {
        state.level = button.dataset.level;
        updateLevelButtons(controls.levelButtons, state.level);
        renderCatalog(documents, state, controls);
      });
    });

    controls.module.addEventListener('change', () => {
      state.module = controls.module.value;
      renderCatalog(documents, state, controls);
    });

    const clear = () => clearCatalogFilters(documents, state, controls);
    controls.clear.addEventListener('click', clear);
    controls.emptyClear.addEventListener('click', clear);

    document.addEventListener('keydown', (event) => {
      const target = event.target;
      const isEditing = target instanceof HTMLInputElement
        || target instanceof HTMLTextAreaElement
        || target instanceof HTMLSelectElement
        || target?.isContentEditable;
      if (event.key === '/' && !isEditing && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        controls.search.focus();
      }
    });
  }

  function clearCatalogFilters(documents, state, controls) {
    window.clearTimeout(state.renderTimer);
    state.query = '';
    state.level = 'all';
    state.module = 'all';
    controls.search.value = '';
    controls.module.value = 'all';
    updateLevelButtons(controls.levelButtons, 'all');
    renderCatalog(documents, state, controls);
    controls.search.focus();
  }

  function updateLevelButtons(buttons, activeLevel) {
    buttons.forEach((button) => {
      const active = button.dataset.level === activeLevel;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderCatalog(documents, state, controls) {
    const normalizedQuery = normalizeSearchText(state.query);
    const visibleDocuments = documents.filter((documentRecord) => {
      const levelMatches = state.level === 'all' || documentRecord.level === state.level;
      const moduleMatches = state.module === 'all' || String(documentRecord.module) === state.module;
      const queryMatches = !normalizedQuery || documentRecord.haystack.includes(normalizedQuery);
      return levelMatches && moduleMatches && queryMatches;
    });

    const fragment = document.createDocumentFragment();
    GROUP_ORDER.forEach((type) => {
      const groupDocuments = visibleDocuments.filter((documentRecord) => documentRecord.type === type);
      if (groupDocuments.length) fragment.append(createDocumentGroup(type, groupDocuments, state.query));
    });

    controls.groups.replaceChildren(fragment);
    controls.groups.setAttribute('aria-busy', 'false');
    controls.groups.hidden = visibleDocuments.length === 0;
    controls.empty.hidden = visibleDocuments.length !== 0;

    const total = documents.length;
    controls.summary.replaceChildren(
      textNode('Showing '),
      strongNode(String(visibleDocuments.length)),
      textNode(` of ${total} ${pluralize(total, 'document')}`),
    );

    const activeParts = [];
    if (state.query) activeParts.push(`Search: “${state.query}”`);
    if (state.level !== 'all') activeParts.push(state.level);
    if (state.module !== 'all') activeParts.push(`Module ${pad2(state.module)}`);
    controls.activeSummary.textContent = activeParts.join(' · ');
    controls.clear.disabled = activeParts.length === 0;
    syncCatalogUrl(state);
  }

  function createDocumentGroup(type, documents, query) {
    const section = element('section', 'document-group');
    section.dataset.group = type;
    const heading = element('div', 'group-heading');
    const title = document.createElement('h3');
    const headingId = `group-${type}`;
    title.id = headingId;
    title.textContent = TYPE_LABELS[type]?.plural || 'Documents';
    const count = document.createElement('span');
    count.textContent = `${documents.length} ${pluralize(documents.length, 'document')}`;
    heading.append(title, count);
    section.setAttribute('aria-labelledby', headingId);

    const grid = element('div', 'document-grid');
    documents.forEach((documentRecord) => grid.append(createDocumentCard(documentRecord, query)));
    section.append(heading, grid);
    return section;
  }

  function createDocumentCard(documentRecord, query) {
    const link = element('a', `document-card type-${documentRecord.type}`);
    link.href = readerUrl(documentRecord.id);

    const topline = element('div', 'card-topline');
    const type = element('span', 'document-type');
    type.textContent = TYPE_LABELS[documentRecord.type]?.singular || 'Document';
    const code = element('span', 'document-code');
    code.textContent = documentCode(documentRecord);
    topline.append(type, code);

    const title = document.createElement('h4');
    title.textContent = documentRecord.title;
    const excerpt = element('p', 'document-excerpt');
    excerpt.textContent = documentExcerpt(documentRecord, query);

    const metadata = element('div', 'document-meta');
    const pages = document.createElement('span');
    pages.textContent = documentRecord.sourcePages
      ? `${documentRecord.sourcePages} ${pluralize(documentRecord.sourcePages, 'page')}`
      : 'Page count unavailable';
    const open = element('span', 'open-label');
    open.textContent = 'Read →';
    metadata.append(pages, open);

    link.append(topline, title, excerpt, metadata);
    return link;
  }

  function documentExcerpt(documentRecord, query) {
    const fallback = `${documentRecord.level} · Module ${pad2(documentRecord.module)} · ${TYPE_LABELS[documentRecord.type]?.singular || 'Document'}`;
    const text = documentRecord.plainText.replace(/\s+/g, ' ').trim();
    if (!text) return fallback;

    const cleanText = stripRepeatedTitle(text, documentRecord.title);
    const rawQuery = stringValue(query).trim().toLocaleLowerCase('en');
    const source = cleanText || text;
    const matchIndex = rawQuery ? source.toLocaleLowerCase('en').indexOf(rawQuery) : -1;
    const start = matchIndex > 55 ? matchIndex - 55 : 0;
    const excerpt = source.slice(start, start + 185).trim();
    return `${start > 0 ? '…' : ''}${excerpt}${start + 185 < source.length ? '…' : ''}`;
  }

  function stripRepeatedTitle(text, title) {
    const compactTitle = stringValue(title).replace(/\s+/g, ' ').trim();
    if (!compactTitle) return text;
    return text.toLocaleLowerCase('en').startsWith(compactTitle.toLocaleLowerCase('en'))
      ? text.slice(compactTitle.length).replace(/^\s*[-—:|]?\s*/, '')
      : text;
  }

  function syncCatalogUrl(state) {
    try {
      const url = new URL(window.location.href);
      if (state.query) url.searchParams.set('q', state.query);
      else url.searchParams.delete('q');
      if (state.level !== 'all') url.searchParams.set('level', state.level);
      else url.searchParams.delete('level');
      if (state.module !== 'all') url.searchParams.set('module', state.module);
      else url.searchParams.delete('module');
      window.history.replaceState(null, '', url.href);
    } catch (_error) {
      // Some browsers restrict history updates on local file URLs. Filtering still works.
    }
  }

  function initializeReader(documents) {
    const errorView = document.getElementById('reader-error');
    const readerView = document.getElementById('reader-view');

    if (!documents.length) {
      showReaderError('Library data unavailable', 'Run node scripts/build-english-data.mjs, then reload this page.');
      return;
    }

    const requestedId = stringValue(readSearchParameters().get('id')).trim();
    if (!requestedId) {
      showReaderError('Choose a document', 'No document ID was provided. Return to the catalog and choose a document to read.');
      return;
    }

    const documentRecord = documents.find((item) => item.id.toLowerCase() === requestedId.toLowerCase());
    if (!documentRecord) {
      showReaderError('Document not found', `There is no English Foundation document with the ID “${requestedId}”.`);
      return;
    }

    if (!documentRecord.content) {
      showReaderError('Document content unavailable', `The catalog entry “${documentRecord.id}” does not contain Markdown content.`);
      return;
    }

    errorView.hidden = true;
    readerView.hidden = false;
    populateReaderHeader(documentRecord);
    populateBreadcrumbs(documentRecord);

    const article = document.getElementById('document-content');
    try {
      article.innerHTML = renderMarkdown(documentRecord.content, { documentRecord, documents });
    } catch (error) {
      console.error('Unable to render English Foundation Markdown.', error);
      readerView.hidden = true;
      showReaderError('Unable to render this document', 'The document data could not be displayed safely. Try rebuilding the English catalog.');
      return;
    }

    buildTableOfContents(article);
    configureDocumentNavigation(documents, documentRecord);
    initializeDocumentSearch(article);
    initializeBackToTop();
    scrollToInitialHash();
  }

  function showReaderError(title, message) {
    const view = document.getElementById('reader-error');
    setText('reader-error-title', title);
    setText('reader-error-message', message);
    view.hidden = false;
    document.getElementById('reader-view').hidden = true;
    document.title = `${title} | English Foundation`;
  }

  function populateReaderHeader(documentRecord) {
    const typeLabel = TYPE_LABELS[documentRecord.type]?.singular || 'Document';
    setText('document-kicker', `${documentRecord.level} · ${typeLabel}`);
    setText('document-title', documentRecord.title);
    setText('document-source', documentRecord.source ? `Source: ${documentRecord.source}` : 'English Foundation learning material');
    setText('fact-level', documentRecord.level || '—');
    setText('fact-module', documentRecord.module ? pad2(documentRecord.module) : '—');
    setText('fact-pages', documentRecord.sourcePages || '—');
    document.title = `${documentRecord.title} | English Foundation`;

    const description = documentRecord.plainText.replace(/\s+/g, ' ').trim().slice(0, 155);
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description && metaDescription) metaDescription.setAttribute('content', description);
  }

  function populateBreadcrumbs(documentRecord) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    const items = [
      { label: 'Library', href: './index.html' },
      { label: documentRecord.level, href: `index.html?level=${encodeURIComponent(documentRecord.level)}` },
      {
        label: `Module ${pad2(documentRecord.module)}`,
        href: `index.html?level=${encodeURIComponent(documentRecord.level)}&module=${encodeURIComponent(documentRecord.module)}`,
      },
      {
        label: documentRecord.type === 'lesson' && documentRecord.lesson
          ? `Lesson ${pad2(documentRecord.lesson)}`
          : TYPE_LABELS[documentRecord.type]?.singular || 'Document',
        href: null,
      },
      { label: documentRecord.title, href: null, current: true },
    ];

    const fragment = document.createDocumentFragment();
    items.filter((item) => item.label).forEach((item, index, filteredItems) => {
      const node = item.href ? document.createElement('a') : document.createElement('span');
      node.textContent = item.label;
      if (item.href) node.href = item.href;
      if (item.current) node.setAttribute('aria-current', 'page');
      fragment.append(node);
      if (index < filteredItems.length - 1) {
        const separator = element('span', 'breadcrumb-separator');
        separator.textContent = '/';
        separator.setAttribute('aria-hidden', 'true');
        fragment.append(separator);
      }
    });
    breadcrumbs.replaceChildren(fragment);
  }

  function configureDocumentNavigation(documents, currentDocument) {
    const currentIndex = documents.findIndex((item) => item.id === currentDocument.id);
    configureNavigationLink(document.getElementById('previous-document'), documents[currentIndex - 1], 'Beginning of library');
    configureNavigationLink(document.getElementById('next-document'), documents[currentIndex + 1], 'End of library');
  }

  function configureNavigationLink(link, documentRecord, boundaryLabel) {
    const title = link.querySelector('strong');
    const metadata = link.querySelector('small');
    if (!documentRecord) {
      link.removeAttribute('href');
      link.classList.add('disabled');
      link.setAttribute('aria-disabled', 'true');
      title.textContent = boundaryLabel;
      metadata.textContent = '';
      return;
    }

    link.href = readerUrl(documentRecord.id);
    link.classList.remove('disabled');
    link.removeAttribute('aria-disabled');
    title.textContent = documentRecord.title;
    metadata.textContent = documentCode(documentRecord);
  }

  function buildTableOfContents(article) {
    const container = document.getElementById('table-of-contents');
    const headings = Array.from(article.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    if (!headings.length) {
      const empty = element('p', 'toc-empty');
      empty.textContent = 'This document has no section headings.';
      container.replaceChildren(empty);
      return;
    }

    const list = document.createElement('ul');
    headings.forEach((heading) => {
      heading.tabIndex = -1;
      const item = element('li', `toc-level-${heading.tagName.slice(1)}`);
      const link = document.createElement('a');
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent.trim();
      link.dataset.headingId = heading.id;
      item.append(link);
      list.append(item);
    });
    container.replaceChildren(list);

    container.addEventListener('click', (event) => {
      const link = event.target.closest('a[data-heading-id]');
      if (!link) return;
      const heading = document.getElementById(link.dataset.headingId);
      if (!heading) return;
      window.setTimeout(() => heading.focus({ preventScroll: true }), 0);
    });

    initializeActiveHeading(headings, container);
    configureResponsiveToc();
  }

  function initializeActiveHeading(headings, container) {
    const links = new Map(
      Array.from(container.querySelectorAll('a[data-heading-id]')).map((link) => [link.dataset.headingId, link]),
    );
    let activeId = '';

    const setActive = (headingId) => {
      if (!headingId || headingId === activeId) return;
      activeId = headingId;
      links.forEach((link, id) => {
        const isActive = id === headingId;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };

    setActive(headings[0].id);
    if (!('IntersectionObserver' in window)) return;

    const visibleHeadings = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleHeadings.set(entry.target.id, entry.target.offsetTop);
        else visibleHeadings.delete(entry.target.id);
      });

      if (visibleHeadings.size) {
        const firstVisibleId = Array.from(visibleHeadings.entries()).sort((a, b) => a[1] - b[1])[0][0];
        setActive(firstVisibleId);
        return;
      }

      const currentScroll = window.scrollY + 190;
      const preceding = headings.filter((heading) => heading.offsetTop <= currentScroll).at(-1);
      if (preceding) setActive(preceding.id);
    }, { rootMargin: '-145px 0px -68% 0px', threshold: [0, 1] });

    headings.forEach((heading) => observer.observe(heading));
  }

  function configureResponsiveToc() {
    const panel = document.getElementById('toc-panel');
    const media = window.matchMedia('(max-width: 52rem)');
    const update = (event) => {
      panel.open = !event.matches;
    };
    update(media);
    if (typeof media.addEventListener === 'function') media.addEventListener('change', update);
    else if (typeof media.addListener === 'function') media.addListener(update);
  }

  function initializeDocumentSearch(article) {
    const input = document.getElementById('document-search-input');
    const output = document.getElementById('document-search-count');
    const previous = document.getElementById('previous-match');
    const next = document.getElementById('next-match');
    const state = { matches: [], current: -1, timer: null };

    const run = () => {
      clearDocumentHighlights(article);
      state.matches = highlightTextMatches(article, input.value.trim());
      state.current = state.matches.length ? 0 : -1;
      updateSearchMatchState(state, output, previous, next, false);
    };

    input.addEventListener('input', () => {
      window.clearTimeout(state.timer);
      state.timer = window.setTimeout(run, SEARCH_DEBOUNCE_MS);
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        moveToSearchMatch(state, event.shiftKey ? -1 : 1, output, previous, next);
      } else if (event.key === 'Escape' && input.value) {
        event.preventDefault();
        input.value = '';
        window.clearTimeout(state.timer);
        run();
      }
    });

    previous.addEventListener('click', () => moveToSearchMatch(state, -1, output, previous, next));
    next.addEventListener('click', () => moveToSearchMatch(state, 1, output, previous, next));

    document.addEventListener('keydown', (event) => {
      const target = event.target;
      const isEditing = target instanceof HTMLInputElement
        || target instanceof HTMLTextAreaElement
        || target instanceof HTMLSelectElement
        || target?.isContentEditable;
      if (event.key === '/' && !isEditing && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        input.focus();
      }
    });
  }

  function clearDocumentHighlights(article) {
    article.querySelectorAll('mark[data-search-match]').forEach((mark) => {
      const parent = mark.parentNode;
      mark.replaceWith(document.createTextNode(mark.textContent));
      parent?.normalize();
    });
  }

  function highlightTextMatches(article, query) {
    if (!query) return [];
    const normalizedQuery = query.toLocaleLowerCase('en');
    const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.toLocaleLowerCase('en').includes(normalizedQuery)) {
          return NodeFilter.FILTER_REJECT;
        }
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, mark[data-search-match]')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const matches = [];
    textNodes.forEach((textNode) => {
      const value = textNode.nodeValue;
      const lowerValue = value.toLocaleLowerCase('en');
      const fragment = document.createDocumentFragment();
      let cursor = 0;
      let matchIndex = lowerValue.indexOf(normalizedQuery, cursor);

      while (matchIndex !== -1) {
        if (matchIndex > cursor) fragment.append(document.createTextNode(value.slice(cursor, matchIndex)));
        const mark = document.createElement('mark');
        mark.className = 'document-search-match';
        mark.dataset.searchMatch = '';
        mark.textContent = value.slice(matchIndex, matchIndex + query.length);
        fragment.append(mark);
        matches.push(mark);
        cursor = matchIndex + query.length;
        matchIndex = lowerValue.indexOf(normalizedQuery, cursor);
      }

      if (cursor < value.length) fragment.append(document.createTextNode(value.slice(cursor)));
      textNode.replaceWith(fragment);
    });
    return matches;
  }

  function moveToSearchMatch(state, direction, output, previous, next) {
    if (!state.matches.length) return;
    state.current = (state.current + direction + state.matches.length) % state.matches.length;
    updateSearchMatchState(state, output, previous, next, true);
  }

  function updateSearchMatchState(state, output, previous, next, shouldScroll) {
    state.matches.forEach((match, index) => match.classList.toggle('current', index === state.current));
    const hasMatches = state.matches.length > 0;
    previous.disabled = !hasMatches;
    next.disabled = !hasMatches;
    output.textContent = hasMatches ? `${state.current + 1} / ${state.matches.length}` : '0 matches';

    if (shouldScroll && hasMatches) {
      state.matches[state.current].scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'center',
      });
    }
  }

  function initializeBackToTop() {
    const button = document.getElementById('back-to-top');
    const update = () => {
      button.hidden = window.scrollY < 700;
    };
    window.addEventListener('scroll', update, { passive: true });
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
    update();
  }

  function scrollToInitialHash() {
    if (!window.location.hash) return;
    window.requestAnimationFrame(() => {
      let id;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch (_error) {
        id = window.location.hash.slice(1);
      }
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ block: 'start' });
    });
  }

  /* Safe, dependency-free Markdown renderer. Raw HTML is escaped except for a
     deliberately small, sanitized table subset used by source worksheets. */

  function renderMarkdown(markdown, context) {
    const sourceMarkers = [];
    let source = stringValue(markdown).replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
    source = stripRepeatedDocumentHeading(
      stripFrontMatter(source),
      context.documentRecord?.title,
    );
    source = source.replace(/<!--\s*Source:\s*([\s\S]*?)-->/gi, (_match, label) => {
      const markerIndex = sourceMarkers.push(label.replace(/\s+/g, ' ').trim()) - 1;
      return `\n\n\u0002SOURCE_${markerIndex}\u0002\n\n`;
    });
    source = source.replace(/<!--[\s\S]*?-->/g, '');

    const headingIds = new Map();
    return renderMarkdownBlocks(source.split('\n'), {
      ...context,
      sourceMarkers,
      headingIds,
    });
  }

  function renderMarkdownBlocks(lines, context) {
    const output = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim()) {
        index += 1;
        continue;
      }

      const sourceMarker = line.match(/^\u0002SOURCE_(\d+)\u0002$/);
      if (sourceMarker) {
        const label = context.sourceMarkers[Number(sourceMarker[1])] || '';
        output.push(`<p class="source-marker">Source: ${escapeHtml(label)}</p>`);
        index += 1;
        continue;
      }

      const fence = line.match(/^\s*(`{3,}|~{3,})\s*([\w-]+)?\s*$/);
      if (fence) {
        const marker = fence[1];
        const language = fence[2] && /^[\w-]{1,30}$/.test(fence[2]) ? fence[2] : '';
        const codeLines = [];
        index += 1;
        while (index < lines.length && !new RegExp(`^\\s*${escapeRegExp(marker[0])}{${marker.length},}\\s*$`).test(lines[index])) {
          codeLines.push(lines[index]);
          index += 1;
        }
        if (index < lines.length) index += 1;
        const languageClass = language ? ` class="language-${escapeAttribute(language)}"` : '';
        output.push(`<pre><code${languageClass}>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        continue;
      }

      if (/^\s*<table(?:\s|>)/i.test(line)) {
        const tableLines = [line];
        index += 1;
        while (index < lines.length && !/<\/table\s*>/i.test(tableLines.at(-1))) {
          tableLines.push(lines[index]);
          index += 1;
        }
        output.push(sanitizeHtmlTable(tableLines.join('\n'), context));
        continue;
      }

      const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
      if (heading) {
        const level = heading[1].length;
        const rawLabel = heading[2].trim();
        const label = markdownToPlainText(rawLabel) || `Section ${index + 1}`;
        const id = uniqueHeadingId(slugify(label), context.headingIds);
        output.push(`<h${level} id="${escapeAttribute(id)}">${renderInline(rawLabel, context)}</h${level}>`);
        index += 1;
        continue;
      }

      if (/^\s{0,3}((\*\s*){3,}|(-\s*){3,}|(_\s*){3,})$/.test(line)) {
        output.push('<hr>');
        index += 1;
        continue;
      }

      if (/^\s{0,3}>/.test(line)) {
        const quoteLines = [];
        while (index < lines.length && (/^\s{0,3}>/.test(lines[index]) || !lines[index].trim())) {
          quoteLines.push(lines[index].replace(/^\s{0,3}>\s?/, ''));
          index += 1;
        }
        output.push(`<blockquote>${renderMarkdownBlocks(quoteLines, context)}</blockquote>`);
        continue;
      }

      const listMatch = parseListLine(line);
      if (listMatch) {
        const ordered = listMatch.ordered;
        const start = ordered ? listMatch.start : 1;
        const items = [];

        while (index < lines.length) {
          const current = parseListLine(lines[index]);
          if (!current || current.ordered !== ordered) break;
          const item = { text: current.text, task: null };
          const taskMatch = item.text.match(/^\[([ xX])\]\s+(.*)$/);
          if (taskMatch) {
            item.task = taskMatch[1].toLowerCase() === 'x';
            item.text = taskMatch[2];
          }
          index += 1;

          while (index < lines.length && lines[index].trim() && !parseListLine(lines[index]) && !isMarkdownBlockStart(lines, index)) {
            item.text += `\n${lines[index].trim()}`;
            index += 1;
          }
          items.push(item);
          if (index < lines.length && !lines[index].trim()) break;
        }

        const tag = ordered ? 'ol' : 'ul';
        const startAttribute = ordered && start !== 1 ? ` start="${start}"` : '';
        const itemsHtml = items.map((item) => {
          const taskClass = item.task !== null ? ' class="task-list-item"' : '';
          const checkbox = item.task !== null
            ? `<input type="checkbox" disabled${item.task ? ' checked' : ''} aria-label="${item.task ? 'Completed' : 'Not completed'}">`
            : '';
          return `<li${taskClass}>${checkbox}${renderInline(item.text, context)}</li>`;
        }).join('');
        output.push(`<${tag}${startAttribute}>${itemsHtml}</${tag}>`);
        continue;
      }

      if (isMarkdownTable(lines, index)) {
        const headerCells = splitTableRow(lines[index]);
        const alignments = splitTableRow(lines[index + 1]).map(tableAlignment);
        const bodyRows = [];
        index += 2;
        while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
          bodyRows.push(splitTableRow(lines[index]));
          index += 1;
        }
        output.push(renderMarkdownTable(headerCells, alignments, bodyRows, context));
        continue;
      }

      const paragraphLines = [line.trim()];
      index += 1;
      while (index < lines.length && lines[index].trim() && !isMarkdownBlockStart(lines, index)) {
        paragraphLines.push(lines[index].trim());
        index += 1;
      }
      output.push(`<p>${renderInline(paragraphLines.join('\n'), context)}</p>`);
    }

    return output.join('\n');
  }

  function isMarkdownBlockStart(lines, index) {
    const line = lines[index] || '';
    return /^\u0002SOURCE_\d+\u0002$/.test(line)
      || /^\s*(`{3,}|~{3,})/.test(line)
      || /^\s*<table(?:\s|>)/i.test(line)
      || /^\s{0,3}#{1,6}\s+/.test(line)
      || /^\s{0,3}>/.test(line)
      || /^\s{0,3}((\*\s*){3,}|(-\s*){3,}|(_\s*){3,})$/.test(line)
      || Boolean(parseListLine(line))
      || isMarkdownTable(lines, index);
  }

  function parseListLine(line) {
    const match = stringValue(line).match(/^\s{0,3}([-+*]|(\d+)[.)])\s+(.+)$/);
    if (!match) return null;
    return {
      ordered: Boolean(match[2]),
      start: match[2] ? positiveInteger(match[2]) || 1 : 1,
      text: match[3],
    };
  }

  function isMarkdownTable(lines, index) {
    if (index + 1 >= lines.length || !lines[index].includes('|')) return false;
    const separators = splitTableRow(lines[index + 1]);
    return separators.length > 0 && separators.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
  }

  function splitTableRow(line) {
    let value = stringValue(line).trim();
    if (value.startsWith('|')) value = value.slice(1);
    if (value.endsWith('|') && !value.endsWith('\\|')) value = value.slice(0, -1);

    const cells = [];
    let cell = '';
    let escaped = false;
    for (const character of value) {
      if (escaped) {
        cell += character === '|' || character === '\\' ? character : `\\${character}`;
        escaped = false;
      } else if (character === '\\') {
        escaped = true;
      } else if (character === '|') {
        cells.push(cell.trim());
        cell = '';
      } else {
        cell += character;
      }
    }
    if (escaped) cell += '\\';
    cells.push(cell.trim());
    return cells;
  }

  function tableAlignment(separator) {
    const value = separator.trim();
    if (value.startsWith(':') && value.endsWith(':')) return 'center';
    if (value.endsWith(':')) return 'right';
    return 'left';
  }

  function renderMarkdownTable(headers, alignments, rows, context) {
    const headerHtml = headers.map((header, index) => {
      const alignment = alignments[index] || 'left';
      return `<th scope="col" class="align-${alignment}">${renderInline(header, context)}</th>`;
    }).join('');
    const rowsHtml = rows.map((row) => {
      const cells = headers.map((_header, index) => {
        const alignment = alignments[index] || 'left';
        return `<td class="align-${alignment}">${renderInline(row[index] || '', context)}</td>`;
      }).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<div class="table-wrapper" role="region" aria-label="Scrollable table" tabindex="0"><table><thead><tr>${headerHtml}</tr></thead><tbody>${rowsHtml}</tbody></table></div>`;
  }

  function renderInline(value, context) {
    const tokens = [];
    const token = (safeHtml) => `\u0000TOKEN_${tokens.push(safeHtml) - 1}\u0000`;
    let text = stringValue(value).replace(/\u0000/g, '');

    text = text.replace(/\\([\\`*_[\]{}()#+.!~>-])/g, (_match, character) => token(escapeHtml(character)));
    text = text.replace(/(`+)([\s\S]*?)\1/g, (_match, _ticks, code) => token(`<code>${escapeHtml(code.trim())}</code>`));
    text = text.replace(/<br\s*\/?\s*>/gi, () => token('<br>'));

    text = text.replace(/!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)/g, (_match, alt, rawUrl, title) => {
      const safeUrl = resolveSafeUrl(rawUrl, context, 'image');
      if (!safeUrl) return token(escapeHtml(alt ? `[Image: ${alt}]` : '[Image]'));
      const titleAttribute = title ? ` title="${escapeAttribute(title)}"` : '';
      return token(`<img src="${escapeAttribute(safeUrl.href)}" alt="${escapeAttribute(markdownToPlainText(alt))}" loading="lazy" decoding="async"${titleAttribute}>`);
    });

    text = text.replace(/\[([^\]]+)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)/g, (_match, label, rawUrl, title) => {
      const safeUrl = resolveSafeUrl(rawUrl, context, 'link');
      if (!safeUrl) return token(renderInline(label, context));
      const titleAttribute = title ? ` title="${escapeAttribute(title)}"` : '';
      const externalAttributes = safeUrl.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return token(`<a href="${escapeAttribute(safeUrl.href)}"${titleAttribute}${externalAttributes}>${renderInline(label, context)}</a>`);
    });

    text = text.replace(/<(https?:\/\/[^\s<>]+)>/gi, (_match, rawUrl) => {
      const safeUrl = resolveSafeUrl(rawUrl, context, 'link');
      if (!safeUrl) return token(escapeHtml(rawUrl));
      return token(`<a href="${escapeAttribute(safeUrl.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(rawUrl)}</a>`);
    });

    let html = escapeHtml(text);
    html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_\n]+)__/g, '<strong>$1</strong>');
    html = html.replace(/~~([^~\n]+)~~/g, '<del>$1</del>');
    html = html.replace(/(^|[^\w])\*([^*\n]+)\*(?!\w)/g, '$1<em>$2</em>');
    html = html.replace(/(^|[^\w])_([^_\n]+)_(?!\w)/g, '$1<em>$2</em>');
    html = html.replace(/ {2}\n/g, '<br>');
    html = html.replace(/\n/g, ' ');
    html = html.replace(/\u0000TOKEN_(\d+)\u0000/g, (_match, tokenIndex) => tokens[Number(tokenIndex)] || '');
    return html;
  }

  function resolveSafeUrl(rawValue, context, kind) {
    let rawUrl = stringValue(rawValue).trim();
    if (rawUrl.startsWith('<') && rawUrl.endsWith('>')) rawUrl = rawUrl.slice(1, -1).trim();
    if (!rawUrl || /[\u0000-\u001F\u007F]/.test(rawUrl)) return null;

    const explicitScheme = rawUrl.match(/^([a-z][a-z\d+.-]*):/i)?.[1]?.toLowerCase();
    const allowedSchemes = kind === 'image'
      ? ['http', 'https']
      : ['http', 'https', 'mailto', 'tel'];
    if (explicitScheme && !allowedSchemes.includes(explicitScheme)) return null;

    if (rawUrl.startsWith('#')) {
      return { href: rawUrl, external: false };
    }

    try {
      const documentPath = context.documentRecord?.path || '';
      const documentUrl = new URL(documentPath || '.', window.location.href);
      const resolved = new URL(rawUrl, documentUrl);
      const protocol = resolved.protocol.replace(':', '').toLowerCase();
      const isRelative = !explicitScheme && !rawUrl.startsWith('//');
      const protocolAllowed = allowedSchemes.includes(protocol)
        || (isRelative && protocol === 'file' && window.location.protocol === 'file:');
      if (!protocolAllowed) return null;

      const internalDocument = findLinkedDocument(resolved, context.documents || []);
      if (kind === 'link' && internalDocument) {
        return {
          href: `${readerUrl(internalDocument.id)}${resolved.hash || ''}`,
          external: false,
        };
      }

      const external = ['http:', 'https:'].includes(resolved.protocol)
        && resolved.origin !== window.location.origin;
      return { href: resolved.href, external };
    } catch (_error) {
      return null;
    }
  }

  function findLinkedDocument(resolvedUrl, documents) {
    if (!/\.md$/i.test(resolvedUrl.pathname)) return null;
    const target = comparableUrlPath(resolvedUrl);
    return documents.find((documentRecord) => {
      if (!documentRecord.path) return false;
      try {
        return comparableUrlPath(new URL(documentRecord.path, window.location.href)) === target;
      } catch (_error) {
        return false;
      }
    }) || null;
  }

  function comparableUrlPath(url) {
    const pathname = decodeURIComponent(url.pathname).replace(/\\/g, '/');
    return url.protocol === 'file:' ? pathname.toLowerCase() : pathname;
  }

  function sanitizeHtmlTable(rawHtml, context) {
    if (typeof DOMParser === 'undefined') return `<pre><code>${escapeHtml(rawHtml)}</code></pre>`;
    const parser = new DOMParser();
    const parsed = parser.parseFromString(rawHtml, 'text/html');
    const table = parsed.querySelector('table');
    if (!table) return `<pre><code>${escapeHtml(rawHtml)}</code></pre>`;
    return `<div class="table-wrapper" role="region" aria-label="Scrollable table" tabindex="0">${serializeSanitizedNode(table, context)}</div>`;
  }

  function serializeSanitizedNode(node, context) {
    if (node.nodeType === Node.TEXT_NODE) return escapeHtml(node.nodeValue || '');
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tag = node.tagName.toLowerCase();
    const dangerous = new Set(['script', 'style', 'iframe', 'object', 'embed', 'svg', 'math', 'template', 'form', 'input', 'button']);
    if (dangerous.has(tag)) return '';

    const allowed = new Set([
      'table', 'caption', 'colgroup', 'col', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
      'p', 'span', 'strong', 'b', 'em', 'i', 'code', 'br', 'ul', 'ol', 'li', 'a', 'img',
    ]);
    const children = Array.from(node.childNodes).map((child) => serializeSanitizedNode(child, context)).join('');
    if (!allowed.has(tag)) return children;

    if (tag === 'br') return '<br>';
    if (tag === 'a') {
      const safeUrl = resolveSafeUrl(node.getAttribute('href'), context, 'link');
      if (!safeUrl) return children;
      const externalAttributes = safeUrl.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeAttribute(safeUrl.href)}"${externalAttributes}>${children}</a>`;
    }
    if (tag === 'img') {
      const safeUrl = resolveSafeUrl(node.getAttribute('src'), context, 'image');
      if (!safeUrl) return '';
      return `<img src="${escapeAttribute(safeUrl.href)}" alt="${escapeAttribute(node.getAttribute('alt') || '')}" loading="lazy" decoding="async">`;
    }

    let attributes = '';
    if (['th', 'td'].includes(tag)) {
      const colSpan = boundedInteger(node.getAttribute('colspan'), 1, 100);
      const rowSpan = boundedInteger(node.getAttribute('rowspan'), 1, 100);
      const scope = node.getAttribute('scope');
      if (colSpan && colSpan !== 1) attributes += ` colspan="${colSpan}"`;
      if (rowSpan && rowSpan !== 1) attributes += ` rowspan="${rowSpan}"`;
      if (['row', 'col', 'rowgroup', 'colgroup'].includes(scope)) attributes += ` scope="${scope}"`;
    } else if (tag === 'ol') {
      const start = boundedInteger(node.getAttribute('start'), 1, 10000);
      if (start && start !== 1) attributes += ` start="${start}"`;
    } else if (tag === 'col') {
      const span = boundedInteger(node.getAttribute('span'), 1, 100);
      if (span && span !== 1) attributes += ` span="${span}"`;
    }

    return `<${tag}${attributes}>${children}</${tag}>`;
  }

  function stripFrontMatter(markdown) {
    return markdown.replace(/^\s*---\s*\n[\s\S]*?\n---\s*(?:\n|$)/, '');
  }

  function stripRepeatedDocumentHeading(markdown, title) {
    const match = stringValue(markdown).match(/^\s*#\s+(.+?)(?:\n|$)/);
    if (!match) return markdown;

    const heading = normalizeSearchText(markdownToPlainText(match[1]));
    const documentTitle = normalizeSearchText(title);
    if (!documentTitle || (heading !== documentTitle && !heading.endsWith(documentTitle))) {
      return markdown;
    }
    return markdown.slice(match[0].length).replace(/^\s*\n/, '');
  }

  function markdownToPlainText(markdown) {
    return stringValue(markdown)
      .replace(/^\s*---\s*\n[\s\S]*?\n---\s*(?:\n|$)/, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/^\s{0,3}#{1,6}\s+/gm, '')
      .replace(/^\s{0,3}>\s?/gm, '')
      .replace(/^\s{0,3}(?:[-+*]|\d+[.)])\s+/gm, '')
      .replace(/[*_~`|]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function uniqueHeadingId(baseId, seenIds) {
    const base = baseId || 'section';
    const count = seenIds.get(base) || 0;
    seenIds.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  }

  function slugify(value) {
    return stringValue(value)
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('en')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
  }

  function normalizeSearchText(value) {
    return stringValue(value)
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('en')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function readerUrl(id) {
    return `reader.html?id=${encodeURIComponent(id)}`;
  }

  function documentCode(documentRecord) {
    const parts = [documentRecord.level];
    if (documentRecord.module) parts.push(`M${pad2(documentRecord.module)}`);
    if (documentRecord.type === 'lesson' && documentRecord.lesson) parts.push(`L${pad2(documentRecord.lesson)}`);
    return parts.filter(Boolean).join(' · ');
  }

  function readSearchParameters() {
    try {
      return new URLSearchParams(window.location.search);
    } catch (_error) {
      return new URLSearchParams();
    }
  }

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = stringValue(value);
  }

  function positiveInteger(value) {
    const number = Number.parseInt(value, 10);
    return Number.isInteger(number) && number > 0 ? number : null;
  }

  function boundedInteger(value, minimum, maximum) {
    const number = Number.parseInt(value, 10);
    return Number.isInteger(number) && number >= minimum && number <= maximum ? number : null;
  }

  function pad2(value) {
    const number = positiveInteger(value);
    return number ? String(number).padStart(2, '0') : '—';
  }

  function pluralize(count, singular) {
    return Number(count) === 1 ? singular : `${singular}s`;
  }

  function stringValue(value) {
    return value === null || value === undefined ? '' : String(value);
  }

  function escapeHtml(value) {
    return stringValue(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }

  function escapeRegExp(value) {
    return stringValue(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function element(tagName, className) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    return node;
  }

  function textNode(value) {
    return document.createTextNode(value);
  }

  function strongNode(value) {
    const node = document.createElement('strong');
    node.textContent = value;
    return node;
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
})();
