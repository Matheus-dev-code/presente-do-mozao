/* =========================================================
   NOSSO UNIVERSO — main.js
   ========================================================= */

/* ---------- 1. Gerador de placeholders SVG ---------- */
function makePlaceholder(label, w, h, opts = {}) {
  const c1 = opts.c1 || '#F8F1E9';
  const c2 = opts.c2 || '#D7A8A0';
  const tc = opts.tc || '#35252A';
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">` +
    `<defs>` +
    `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>` +
    `</linearGradient>` +
    `<radialGradient id="h" cx="0.8" cy="0.2" r="0.6">` +
    `<stop offset="0" stop-color="#ffffff" stop-opacity="0.4"/>` +
    `<stop offset="1" stop-color="#ffffff" stop-opacity="0"/>` +
    `</radialGradient>` +
    `</defs>` +
    `<rect width="100%" height="100%" fill="url(#g)"/>` +
    `<rect width="100%" height="100%" fill="url(#h)"/>` +
    `<g fill="none" stroke="${tc}" stroke-opacity="0.15" stroke-width="2">` +
    `<circle cx="${w * 0.15}" cy="${h * 0.85}" r="${Math.min(w, h) * 0.32}"/>` +
    `<circle cx="${w * 0.85}" cy="${h * 0.15}" r="${Math.min(w, h) * 0.22}"/>` +
    `</g>` +
    `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" ` +
    `font-family="Georgia, 'Times New Roman', serif" font-style="italic" ` +
    `font-size="${Math.min(w, h) * 0.075}" fill="${tc}" fill-opacity="0.7">${label}</text>` +
    `</svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/* =========================================================
   2. CONFIG — FONTE ÚNICA DE PERSONALIZAÇÃO
   ========================================================= */
const CONFIG = {
  /* ---------- Identidade ---------- */
  brand: {
    name: "NOSSO UNIVERSO",
    tagline: "Uma história só nossa",
    coverMessage: "Preparei algo especial para você."
  },

  /* ---------- Casal ---------- */
  couple: {
    firstName: "Matheus",
    secondName: "Gabrielly",
    displayNames: "Matheus & Gabrielly",
    startDate: "2025-02-23",
    anniversaryDate: ""
  },

  /* ---------- Tema ---------- */
  theme: {
    primary: "#793449",
    background: "#F8F1E9",
    surface: "#FFFDF9",
    text: "#35252A",
    accent: "#D7A8A0",
    gold: "#C8A66B"
  },

  /* ---------- Fotografias ---------- */
  photos: {
    heroImage: "assets/images/hero.webp",
    finalImage: "assets/images/final.webp",
    puzzleImage: "assets/images/puzzle.webp",

    printerImages: [
      {
        src: "assets/images/memoria-1.webp",
        date: "2025",
        caption: "Te peguei hehehehe",
        description: "Aquele dia em que o universo conspirou a nosso favor."
      },
      {
        src: "assets/images/memoria-2.webp",
        date: "2025",
        caption: "Nossa primeira copa do mundo",
        description: "Descobrir o mundo do seu lado virou o meu lugar favorito."
      },
      {
        src: "assets/images/memoria-3.webp",
        date: "2025",
        caption: "Seu aniversario",
        description: "Quatro paredes, muitas risadas e a certeza de que era você."
      },
      {
        src: "assets/images/memoria-4.webp",
        date: "2025",
        caption: "Meu aniversario do MIRANHA HIHIHI",
        description: "Daquelas que a gente guarda para contar aos netos."
      },
      {
        src: "assets/images/memoria-5.webp",
        date: "2025",
        caption: "Mais um capítulo",
        description: "E o melhor de tudo é saber que isso é só o começo."
      }
    ]
  },

  /* ---------- Música / Spotify ---------- */
  music: {
    title: "Nossa canção",
    artist: "Artista favorito",
    coverImage: makePlaceholder("♫", 600, 600, { c1: "#793449", c2: "#D7A8A0", tc: "#F8F1E9" }),
    description: "A música que sempre nos faz lembrar de nós dois.",
    spotifyUrl: "",
    spotifyEmbedUrl: ""
  },

  /* ---------- Memórias extras (opcional) ---------- */
  memories: [],

  /* ---------- Linha do tempo (com imagens) ---------- */
  timeline: [
    {
      date: "2025-02-23",
      title: "A piloto de Fuga",
      description: "Um Dia de visita ao seu pai se tornou uma aventura inesquecível.",
      image: "assets/images/timeline-1.webp"
    },
    {
      date: "2025-04-15",
      title: "Dia Dos Namorados",
      description: "Descobri o mundo ao seu lado.",
      image: "assets/images/timeline-2.webp"
    },
    {
      date: "2025-07-10",
      title: "Chá de bebe da Natasha",
      description: "Você sorriu e eu percebi que era isso.",
      image: "assets/images/timeline-3.webp"
    },
    {
      date: "2026-02-23",
      title: "Um novo capítulo",
      description: "Mais uma data para comemorar e mais uma razão para agradecer.",
      image: "assets/images/timeline-4.webp"
    }
  ],

  /* ---------- Quebra-cabeça ---------- */
  puzzle: {
    rows: 3,
    columns: 3,
    // Se vazio (""), usa a proporção natural da imagem.
    // Se preenchido (ex.: "4 / 3" ou "16 / 9"), força a proporção horizontal.
    forceAspectRatio: "",
    successMessage: "Cada pedacinho dessa história vale a pena."
  },

  /* ---------- Carta ---------- */
  letter: {
    title: "Uma mensagem para você",
    greeting: "Meu amor,",
    paragraphs: [
      "Escreva aqui a sua mensagem. Este é um espaço só seu, com a sua voz.",
      "Você pode adicionar quantos parágrafos quiser. Fale sobre o que sente, sobre o que viveu, sobre o que ainda vai viver.",
      "Cada linha desta carta é uma parte da história que a gente construiu — e continua construindo."
    ],
    signature: "Com todo o meu carinho,",
    date: ""
  },

  /* ---------- Encerramento ---------- */
  ending: {
    title: "E essa história continua",
    message: "Ainda temos muitas memórias para criar — e eu mal posso esperar por cada uma delas."
  },

  /* ---------- Demonstração ---------- */
  demo: {
    showDemoNotice: true
  }
};

/* =========================================================
   3. Utilidades
   ========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const sleep = (ms) =>
  new Promise((r) => setTimeout(r, prefersReducedMotion ? Math.min(ms, 30) : ms));

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function formatDatePtBr(value) {
  if (!value) return '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const d = new Date(value + 'T00:00:00');
  if (isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric'
  }).format(d);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Falha ao carregar imagem: ' + src));
    img.src = src;
  });
}

/* =========================================================
   4. Tema
   ========================================================= */
function applyTheme() {
  const root = document.documentElement;
  const map = {
    '--color-primary': CONFIG.theme.primary,
    '--color-bg': CONFIG.theme.background,
    '--color-surface': CONFIG.theme.surface,
    '--color-text': CONFIG.theme.text,
    '--color-accent': CONFIG.theme.accent,
    '--color-gold': CONFIG.theme.gold
  };
  Object.entries(map).forEach(([k, v]) => {
    if (v) root.style.setProperty(k, v);
  });
}

/* =========================================================
   5. Bind de textos estáticos
   ========================================================= */
function bindStaticText() {
  const brand = $('#openingBrand');
  if (brand) brand.textContent = CONFIG.brand.name;

  const openingTitle = $('#openingTitle');
  if (openingTitle) openingTitle.textContent = CONFIG.brand.tagline;

  const openingMsg = $('#openingMessage');
  if (openingMsg) openingMsg.textContent = CONFIG.brand.coverMessage;

  $$('[data-bind="displayNames"]').forEach((el) => {
    el.textContent = CONFIG.couple.displayNames;
  });

  const heroDate = $('[data-bind="startDatePretty"]');
  if (heroDate) {
    const pretty = formatDatePtBr(CONFIG.couple.startDate);
    heroDate.textContent = pretty ? `Desde ${pretty}` : '';
  }

  const taglineEl = $('[data-bind="tagline"]');
  if (taglineEl) taglineEl.textContent = CONFIG.brand.tagline;

  const endingTitleEl = $('[data-bind="endingTitle"]');
  if (endingTitleEl) endingTitleEl.textContent = CONFIG.ending.title;

  const endingMsg = $('#endingMessage');
  if (endingMsg) endingMsg.textContent = CONFIG.ending.message;

  const heroImg = $('#heroImage');
  if (heroImg && CONFIG.photos.heroImage) heroImg.src = CONFIG.photos.heroImage;

  const finalImg = $('#finalImage');
  if (finalImg && CONFIG.photos.finalImage) finalImg.src = CONFIG.photos.finalImage;

  if (CONFIG.demo.showDemoNotice) {
    const badge = $('#demoBadge');
    badge?.classList.remove('hidden');
    $('#demoBadgeClose')?.addEventListener('click', () => badge.classList.add('hidden'));
  }
}

/* =========================================================
   6. Abertura do presente
   ========================================================= */
function initOpening() {
  const openBtn = $('#openGiftBtn');
  const gift = $('#giftBox');
  const openingScreen = $('#openingScreen');
  const experience = $('#experience');
  if (!openBtn || !openingScreen || !experience) return;

  openBtn.addEventListener('click', async () => {
    openBtn.disabled = true;
    openBtn.textContent = 'Abrindo…';
    gift?.classList.add('is-opening');

    await sleep(1200);

    openingScreen.classList.add('is-leaving');
    experience.classList.remove('hidden');
    experience.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = '';

    setTimeout(() => {
      $('#heroTitle')?.focus?.();
    }, 300);
  });

  document.body.style.overflow = 'hidden';
}

/* =========================================================
   7. Hero + contador
   ========================================================= */
function initHero() {
  updateCounter();
  setInterval(updateCounter, 60_000);

  $$('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scrollTo);
      if (!target) return;
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });
}

function computeTogether(startDateStr) {
  if (!startDateStr || !/^\d{4}-\d{2}-\d{2}$/.test(startDateStr)) {
    return { error: 'Data de início inválida em CONFIG.couple.startDate.' };
  }
  const start = new Date(startDateStr + 'T00:00:00');
  if (isNaN(start.getTime())) {
    return { error: 'Data de início inválida em CONFIG.couple.startDate.' };
  }
  const now = new Date();
  if (start > now) {
    return { future: true, error: 'A data de início está no futuro.' };
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prev = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prev.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

function plural(n, sing, plur) {
  return n === 1 ? sing : plur;
}

function updateCounter() {
  const el = $('#counterValue');
  if (!el) return;

  const res = computeTogether(CONFIG.couple.startDate);
  if (res.error) {
    el.textContent = res.error;
    el.style.fontSize = '.95rem';
    el.style.fontFamily = 'var(--font-body)';
    el.style.color = 'var(--color-text)';
    return;
  }
  const { years, months, days } = res;
  const parts = [];
  if (years) parts.push(`<strong>${years}</strong> ${plural(years, 'ano', 'anos')}`);
  if (months) parts.push(`<strong>${months}</strong> ${plural(months, 'mês', 'meses')}`);
  parts.push(`<strong>${days}</strong> ${plural(days, 'dia', 'dias')}`);

  const text = parts.length > 1
    ? parts.slice(0, -1).join(', ') + ' e ' + parts.slice(-1)
    : parts[0];

  el.innerHTML = text;
}

/* =========================================================
   8. Impressora
   ========================================================= */
const Printer = {
  gallery: null,
  printBtn: null,
  skipBtn: null,
  reprintBtn: null,
  printer: null,
  light: null,
  playing: false,
  timers: [],

  init() {
    this.gallery = $('#gallery');
    this.printBtn = $('#printMemoriesBtn');
    this.skipBtn = $('#skipPrinterBtn');
    this.reprintBtn = $('#reprintBtn');
    this.printer = $('#printer');
    this.light = $('#printerLight');
    if (!this.gallery) return;

    const list = Array.isArray(CONFIG.photos.printerImages)
      ? CONFIG.photos.printerImages
      : [];

    if (list.length === 0) {
      this.gallery.classList.add('is-empty');
      this.gallery.innerHTML =
        'Nenhuma memória configurada ainda. Adicione fotos em <code>CONFIG.photos.printerImages</code>.';
      this.printBtn?.setAttribute('disabled', 'disabled');
      return;
    }

    this.renderPlaceholders(list);

    this.printBtn?.addEventListener('click', () => this.play());
    this.skipBtn?.addEventListener('click', () => this.skipAll());
    this.reprintBtn?.addEventListener('click', () => this.reset());
  },

  renderPlaceholders(list) {
    this.gallery.innerHTML = '';
    list.forEach((item, i) => {
      const fig = document.createElement('figure');
      fig.className = 'memory-card';
      fig.style.setProperty('--rotation', `${(i % 2 === 0 ? 1 : -1) * (1 + (i % 3))}deg`);
      fig.dataset.index = String(i);

      const img = document.createElement('img');
      img.src = item.src || '';
      img.alt = item.caption ? `Memória: ${item.caption}` : 'Fotografia de memória';
      img.loading = 'lazy';
      img.onerror = () => {
        img.src = makePlaceholder('Foto indisponível', 600, 600, { c1: '#efe6d8', c2: '#d9cdbb' });
      };

      const cap = document.createElement('figcaption');
      const dateHtml = item.date
        ? `<span class="memory-date">${escapeHtml(item.date)}</span>`
        : '';
      cap.innerHTML = dateHtml + escapeHtml(item.caption || '');
      cap.title = item.caption || '';

      fig.appendChild(img);
      fig.appendChild(cap);

      fig.addEventListener('click', () => Modal.open(item));

      this.gallery.appendChild(fig);
    });
  },

  async play() {
    if (this.playing) return;
    this.playing = true;
    this.printBtn?.classList.add('hidden');
    this.reprintBtn?.classList.add('hidden');
    this.skipBtn?.classList.remove('hidden');

    this.printer?.classList.add('is-printing');
    this.light?.classList.add('is-on');

    const cards = $$('.memory-card', this.gallery);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.classList.add('is-visible');
      await sleep(950);
    }

    this.finish();
  },

  finish() {
    this.playing = false;
    this.printer?.classList.remove('is-printing');
    this.light?.classList.remove('is-on');
    this.skipBtn?.classList.add('hidden');
    this.reprintBtn?.classList.remove('hidden');
  },

  skipAll() {
    this.clearTimers();
    const cards = $$('.memory-card', this.gallery);
    cards.forEach((c) => c.classList.add('is-visible'));
    this.finish();
  },

  reset() {
    this.clearTimers();
    const cards = $$('.memory-card', this.gallery);
    cards.forEach((c) => c.classList.remove('is-visible'));
    this.reprintBtn?.classList.add('hidden');
    setTimeout(() => this.play(), 100);
  },

  clearTimers() {
    this.timers.forEach((t) => clearTimeout(t));
    this.timers = [];
  }
};

/* =========================================================
   9. Modal
   ========================================================= */
const Modal = {
  el: null,
  img: null,
  caption: null,
  date: null,
  description: null,
  lastFocused: null,

  init() {
    this.el = $('#photoModal');
    this.img = $('#photoModalImage');
    this.caption = $('#photoModalCaption');
    this.date = $('#photoModalDate');
    this.description = $('#photoModalDescription');
    if (!this.el) return;

    $('#photoModalClose')?.addEventListener('click', () => this.close());
    this.el.querySelectorAll('[data-modal-close]').forEach((n) =>
      n.addEventListener('click', () => this.close())
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.el.classList.contains('hidden')) {
        this.close();
      }
    });
  },

  open(item) {
    if (!this.el || !item) return;
    this.lastFocused = document.activeElement;
    this.img.src = item.src || '';
    this.img.alt = item.caption ? `Foto: ${item.caption}` : 'Foto ampliada';
    this.caption.textContent = item.caption || '';
    this.date.textContent = item.date || '';
    this.description.textContent = item.description || '';
    this.el.classList.remove('hidden');
    this.el.querySelector('.modal-close')?.focus();
  },

  close() {
    if (!this.el) return;
    this.el.classList.add('hidden');
    this.img.src = '';
    if (this.lastFocused && typeof this.lastFocused.focus === 'function') {
      this.lastFocused.focus();
    }
  }
};

/* =========================================================
   10. Quebra-cabeça — arrastar, soltar e travar peças certas
   ========================================================= */
const Puzzle = {
  rows: 3,
  cols: 3,
  board: [],
  selected: -1,
  moves: 0,
  solved: false,
  grid: null,
  frame: null,
  pieces: [],
  imageSrc: '',
  movesEl: null,
  progressEl: null,
  successEl: null,

  dragging: null,
  dragEl: null,
  dragStartX: 0,
  dragStartY: 0,
  dragPointerId: null,
  dragMoved: false,
  lastDragOver: null,

  async init() {
    this.grid = $('#puzzleGrid');
    this.frame = $('#puzzleFrame');
    this.movesEl = $('#puzzleMoves');
    this.progressEl = $('#puzzleProgress');
    this.successEl = $('#puzzleSuccess');
    const preview = $('#puzzlePreview');
    if (!this.grid) return;

    this.rows = Math.max(2, Math.min(6, parseInt(CONFIG.puzzle.rows, 10) || 3));
    this.cols = Math.max(2, Math.min(6, parseInt(CONFIG.puzzle.columns, 10) || 3));

    const msgEl = $('#puzzleSuccessMessage');
    if (msgEl) msgEl.textContent = CONFIG.puzzle.successMessage || '';

    this.imageSrc = CONFIG.photos.puzzleImage || '';

    if (this.frame) this.frame.style.aspectRatio = '4 / 3';

    let loaded;
    try {
      loaded = await loadImage(this.imageSrc);
    } catch (err) {
      this.grid.innerHTML =
        '<div style="position:absolute;inset:0;display:grid;place-items:center;padding:2rem;text-align:center;font-style:italic;opacity:.7;">' +
        'Não foi possível carregar a imagem do quebra-cabeça.<br>' +
        'Verifique <code>CONFIG.photos.puzzleImage</code>.</div>';
      return;
    }

    if (preview) preview.src = this.imageSrc;

    const forced = (CONFIG.puzzle.forceAspectRatio || '').replace(/\s+/g, '');
    const imageRatio = `${loaded.naturalWidth} / ${loaded.naturalHeight}`;
    const finalRatio = forced || imageRatio;

    if (this.frame) this.frame.style.aspectRatio = finalRatio;

    console.log(
      '[Puzzle] Imagem:', loaded.naturalWidth, '×', loaded.naturalHeight,
      '→ ratio natural:', imageRatio,
      '→ ratio aplicada:', finalRatio,
      forced ? '(forçada por CONFIG)' : '(natural da imagem)'
    );

    this.grid.innerHTML = '';
    this.grid.style.display = 'grid';
    this.grid.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
    this.grid.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;
    this.grid.style.width = '100%';
    this.grid.style.height = '100%';
    this.grid.style.aspectRatio = '';

    const total = this.rows * this.cols;
    this.pieces = [];

    for (let i = 0; i < total; i++) {
      const cell = document.createElement('div');
      cell.className = 'puzzle-piece';
      cell.setAttribute('role', 'gridcell');
      cell.setAttribute('tabindex', '0');
      cell.dataset.slot = String(i);

      cell.addEventListener('pointerdown', (e) => this.onPointerDown(e, i));
      cell.addEventListener('pointermove', (e) => this.onPointerMove(e));
      cell.addEventListener('pointerup', (e) => this.onPointerUp(e));
      cell.addEventListener('pointercancel', (e) => this.onPointerCancel(e));

      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.onPieceClick(i);
        }
      });

      this.grid.appendChild(cell);
      this.pieces.push(cell);
    }

    $('#shuffleBtn')?.addEventListener('click', () => this.shuffle(true));

    this.shuffle(false);
  },

  shuffle(force) {
    const total = this.rows * this.cols;
    this.board = Array.from({ length: total }, (_, i) => i);

    let attempts = 0;
    do {
      for (let i = this.board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.board[i], this.board[j]] = [this.board[j], this.board[i]];
      }
      attempts++;
    } while (this.board.some((v, i) => v === i) && attempts < 200);

    if (this.board.every((v, i) => v === i)) {
      [this.board[0], this.board[1]] = [this.board[1], this.board[0]];
    }

    this.selected = -1;
    this.moves = 0;
    this.solved = false;
    this.dragging = null;
    this.dragEl = null;
    this.lastDragOver = null;

    this.updateMovesLabel();
    this.successEl?.classList.add('hidden');
    this.frame?.classList.remove('is-solved');
    this.render();

    if (force && !prefersReducedMotion && this.frame) {
      this.frame.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(.98)' }, { transform: 'scale(1)' }],
        { duration: 220, easing: 'ease-out' }
      );
    }
  },

  isSolvedBoard() {
    return this.board.every((v, i) => v === i);
  },

  isLocked(slot) {
    return this.board[slot] === slot;
  },

  updateMovesLabel() {
    if (this.movesEl) this.movesEl.textContent = `Movimentos: ${this.moves}`;
  },

  updateProgress() {
    if (!this.progressEl) return;
    const total = this.rows * this.cols;
    const locked = this.board.filter((p, s) => p === s).length;
    this.progressEl.textContent = locked === total
      ? `Todas as ${total} peças no lugar!`
      : `${locked} de ${total} peças no lugar`;
  },

  render() {
    this.board.forEach((pieceId, slot) => {
      const cell = this.pieces[slot];
      if (!cell) return;
      const r = Math.floor(pieceId / this.cols);
      const c = pieceId % this.cols;

      cell.style.backgroundImage = `url("${this.imageSrc}")`;
      cell.style.backgroundSize = `${this.cols * 100}% ${this.rows * 100}%`;
      cell.style.backgroundPosition = this.cols > 1
        ? `${(c / (this.cols - 1)) * 100}% ${(r / (this.rows - 1)) * 100}%`
        : '0% 0%';

      const locked = this.isLocked(slot);
      cell.classList.toggle('locked', locked);
      cell.classList.toggle('selected', this.selected === slot && !locked);
      cell.setAttribute('aria-pressed', this.selected === slot ? 'true' : 'false');
      cell.setAttribute(
        'aria-label',
        `Peça ${slot + 1} de ${this.board.length}${locked ? ', no lugar certo' : ', livre'}`
      );
      cell.setAttribute('tabindex', locked ? '-1' : '0');
    });

    this.updateProgress();
  },

  onPointerDown(e, slot) {
    if (this.solved || this.isLocked(slot)) return;
    if (e.button !== undefined && e.button !== 0) return;
    if (this.dragging !== null) return;

    const el = this.pieces[slot];
    this.dragging = slot;
    this.dragEl = el;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragPointerId = e.pointerId;
    this.dragMoved = false;

    try { el.setPointerCapture(e.pointerId); } catch {}
  },

  onPointerMove(e) {
    if (this.dragging === null || e.pointerId !== this.dragPointerId) return;

    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;

    if (!this.dragMoved) {
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      this.dragMoved = true;
      this.dragEl.classList.add('dragging');
      this.selected = -1;
      this.render();
    }

    this.dragEl.style.transform = `translate(${dx}px, ${dy}px) scale(1.06)`;

    const target = this.getTargetSlotAt(e.clientX, e.clientY);
    if (target !== this.lastDragOver) {
      if (this.lastDragOver !== null) {
        this.pieces[this.lastDragOver]?.classList.remove('drag-over');
      }
      if (target !== null && target !== this.dragging && !this.isLocked(target)) {
        this.pieces[target]?.classList.add('drag-over');
      }
      this.lastDragOver = target;
    }
  },

  onPointerUp(e) {
    if (this.dragging === null || e.pointerId !== this.dragPointerId) return;

    const from = this.dragging;
    const moved = this.dragMoved;
    const target = this.getTargetSlotAt(e.clientX, e.clientY);
    const el = this.dragEl;

    if (el) {
      el.style.transform = '';
      el.classList.remove('dragging');
      try { el.releasePointerCapture(e.pointerId); } catch {}
    }
    if (this.lastDragOver !== null) {
      this.pieces[this.lastDragOver]?.classList.remove('drag-over');
    }

    this.dragging = null;
    this.dragEl = null;
    this.dragPointerId = null;
    this.lastDragOver = null;
    this.dragMoved = false;

    if (!moved) {
      this.onPieceClick(from);
      return;
    }

    if (target !== null && target !== from && !this.isLocked(target)) {
      this.swapPieces(from, target);
    }
  },

  onPointerCancel(e) {
    if (this.dragging === null) return;
    if (this.dragEl) {
      this.dragEl.style.transform = '';
      this.dragEl.classList.remove('dragging');
    }
    if (this.lastDragOver !== null) {
      this.pieces[this.lastDragOver]?.classList.remove('drag-over');
    }
    this.dragging = null;
    this.dragEl = null;
    this.dragPointerId = null;
    this.lastDragOver = null;
    this.dragMoved = false;
  },

  getTargetSlotAt(x, y) {
    for (let i = 0; i < this.pieces.length; i++) {
      if (i === this.dragging) continue;
      const rect = this.pieces[i].getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return i;
      }
    }
    return null;
  },

  onPieceClick(slot) {
    if (this.solved || this.isLocked(slot)) return;

    if (this.selected === -1) {
      this.selected = slot;
      this.render();
      return;
    }
    if (this.selected === slot) {
      this.selected = -1;
      this.render();
      return;
    }

    const from = this.selected;
    this.selected = -1;
    this.swapPieces(from, slot);
  },

  swapPieces(from, to) {
    if (from === to) return;
    if (this.isLocked(from) || this.isLocked(to)) return;

    [this.board[from], this.board[to]] = [this.board[to], this.board[from]];
    this.moves += 1;
    this.updateMovesLabel();
    this.render();

    const nowLocked = [];
    if (this.isLocked(from)) nowLocked.push(from);
    if (this.isLocked(to)) nowLocked.push(to);

    if (!prefersReducedMotion) {
      [from, to].forEach((s) => {
        const el = this.pieces[s];
        el.classList.remove('just-swapped');
        void el.offsetWidth;
        el.classList.add('just-swapped');
      });
      nowLocked.forEach((s) => {
        const el = this.pieces[s];
        el.classList.remove('just-locked');
        void el.offsetWidth;
        el.classList.add('just-locked');
      });
    }

    if (this.isSolvedBoard()) {
      this.solved = true;
      this.frame?.classList.add('is-solved');
      setTimeout(() => {
        this.successEl?.classList.remove('hidden');
        this.successEl?.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'nearest'
        });
      }, prefersReducedMotion ? 0 : 500);
    }
  }
};

/* =========================================================
   11. Música / Spotify
   ========================================================= */
function initMusic() {
  const cover = $('#musicCover');
  const title = $('#musicTitleText');
  const artist = $('#musicArtist');
  const desc = $('#musicDescription');
  const embedWrap = $('#musicEmbedWrap');
  const spotifyLink = $('#spotifyLink');
  const fallback = $('#musicFallback');

  const m = CONFIG.music || {};
  const hasAny = m.title || m.artist || m.spotifyUrl || m.spotifyEmbedUrl;

  if (cover && m.coverImage) cover.src = m.coverImage;
  if (title) title.textContent = m.title || '—';
  if (artist) artist.textContent = m.artist || '—';
  if (desc) desc.textContent = m.description || '';

  const validEmbed =
    typeof m.spotifyEmbedUrl === 'string' &&
    /^https:\/\/open\.spotify\.com\/embed\//.test(m.spotifyEmbedUrl);

  const validLink =
    typeof m.spotifyUrl === 'string' &&
    /^https:\/\/open\.spotify\.com\//.test(m.spotifyUrl);

  if (validEmbed && embedWrap) {
    embedWrap.innerHTML =
      `<iframe style="border-radius:12px" src="${m.spotifyEmbedUrl}" ` +
      `width="100%" height="152" frameborder="0" allowfullscreen="" ` +
      `allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ` +
      `loading="lazy" title="Player do Spotify"></iframe>`;
    embedWrap.classList.remove('hidden');
  } else if (validLink && spotifyLink) {
    spotifyLink.href = m.spotifyUrl;
    spotifyLink.classList.remove('hidden');
  } else if (fallback) {
    fallback.classList.remove('hidden');
    if (hasAny && validLink === false) {
      fallback.innerHTML =
        'A URL do Spotify configurada não é válida. ' +
        'Use o formato <code>https://open.spotify.com/...</code>.';
    }
  }
}

/* =========================================================
   12. Linha do tempo (com imagens)
   ========================================================= */
function initTimeline() {
  const list = $('#timelineList');
  if (!list) return;

  const items = Array.isArray(CONFIG.timeline) ? CONFIG.timeline : [];
  if (items.length === 0) {
    list.innerHTML =
      '<li class="timeline-empty">Nenhum acontecimento configurado em <code>CONFIG.timeline</code>.</li>';
    return;
  }

  list.innerHTML = '';
  items.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'timeline-item';
    li.style.transitionDelay = `${i * 90}ms`;

    const dot = document.createElement('span');
    dot.className = 'timeline-dot';
    dot.setAttribute('aria-hidden', 'true');

    const card = document.createElement('div');
    card.className = 'timeline-card';

    const dateStr = item.date ? formatDatePtBr(item.date) : '';
    let inner = '';
    if (dateStr) inner += `<span class="timeline-date">${escapeHtml(dateStr)}</span>`;
    inner += `<h3>${escapeHtml(item.title || '')}</h3>`;

    if (item.image) {
      const alt = item.title ? `Foto: ${item.title}` : 'Foto da linha do tempo';
      inner += `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(alt)}" ` +
               `loading="lazy" onerror="this.style.display='none'" />`;
    }

    if (item.description) inner += `<p>${escapeHtml(item.description)}</p>`;

    card.innerHTML = inner;

    li.appendChild(dot);
    li.appendChild(card);
    list.appendChild(li);
  });

  observeElements($$('.timeline-item'), (el) => el.classList.add('is-visible'));
}

/* =========================================================
   13. Carta
   ========================================================= */
const Letter = {
  opened: false,
  timers: [],

  init() {
    const openBtn = $('#openLetterBtn');
    const revealBtn = $('#revealLetterBtn');
    const envelope = $('#letterEnvelope');
    const paper = $('#letterPaper');
    if (!openBtn || !envelope || !paper) return;

    $('#letterTitle').textContent = CONFIG.letter.title || '';
    $('#letterGreeting').textContent = CONFIG.letter.greeting || '';
    $('#letterSignature').textContent = CONFIG.letter.signature || '';
    const dateEl = $('#letterDate');
    const d = CONFIG.letter.date ? formatDatePtBr(CONFIG.letter.date) : '';
    dateEl.textContent = d;

    const parasWrap = $('#letterParagraphs');
    parasWrap.innerHTML = '';
    (CONFIG.letter.paragraphs || []).forEach((p) => {
      const el = document.createElement('p');
      el.textContent = p;
      parasWrap.appendChild(el);
    });

    openBtn.addEventListener('click', () => this.open());
    revealBtn?.addEventListener('click', () => this.revealAll());
  },

  async open() {
    if (this.opened) return;
    this.opened = true;

    const envelope = $('#letterEnvelope');
    const paper = $('#letterPaper');
    const openBtn = $('#openLetterBtn');
    const revealBtn = $('#revealLetterBtn');

    envelope?.classList.add('is-open');
    openBtn?.classList.add('hidden');

    await sleep(700);

    paper?.classList.remove('hidden');
    paper?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center'
    });

    revealBtn?.classList.remove('hidden');

    const paras = $$('#letterParagraphs p');
    for (let i = 0; i < paras.length; i++) {
      paras[i].classList.add('is-visible');
      await sleep(600);
    }
    revealBtn?.classList.add('hidden');
  },

  revealAll() {
    $$('#letterParagraphs p').forEach((p) => p.classList.add('is-visible'));
    $('#revealLetterBtn')?.classList.add('hidden');
  }
};

/* =========================================================
   14. Observação de revelações no scroll
   ========================================================= */
function observeElements(elements, onVisible) {
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => onVisible(el));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onVisible(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  elements.forEach((el) => io.observe(el));
}

function setupReveal() {
  $$('.section').forEach((s) => s.classList.add('reveal'));
  observeElements($$('.section'), (el) => el.classList.add('is-visible'));
}

/* =========================================================
   15. Inicialização
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  try {
    applyTheme();
    bindStaticText();
    initOpening();
    initHero();
    Printer.init();
    Modal.init();
    Puzzle.init();
    initMusic();
    initTimeline();
    Letter.init();
    setupReveal();
  } catch (err) {
    console.error('[NOSSO UNIVERSO] Erro na inicialização:', err);
  }
});