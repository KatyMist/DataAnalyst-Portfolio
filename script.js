'use strict';

/* ---------- i18n ---------- */
const EN = {
  'hero.eyebrow': 'Portfolio · Big Data',
  'hero.t1': 'Data',
  'hero.t2': 'Analyst',
  'hero.name': 'Vladimir Tumanov',
  'hero.cv': 'Download CV',
  'hero.contact': 'Get in touch',

  'about.title': 'About',
  'about.big': 'Data Analyst with a <em>computer science</em> degree and experience building a company’s analytics from scratch.',
  'about.p1': 'At Tenderplan I am the only analyst: I designed the data collection and storage architecture (ClickHouse, PostgreSQL), built a tree of 75+ metrics, created 10+ dashboards in Superset and DataLens for every department, and set up annual revenue and MRR planning with less than 5% deviation.',
  'about.p2': 'I actively use LLMs and AI tools: with their help I built data import tools, Superset plugins and a semantic-query analytics tool; I have also deployed local models.',
  'about.p3': 'I work directly with stakeholders at every level — from sales managers to the CEO: I gather requirements and take tasks all the way to a finished report or self-service data tool. Equally comfortable working autonomously and in a team: at SberMarket in a team of analysts, at Tenderplan in close collaboration with development, sales and marketing. I easily build cooperation with adjacent departments and own the result.',
  'about.meta': 'Ulyanovsk, Russia · remote / hybrid · open to business trips',
  'about.s1': 'years in data analytics',
  'about.s2': 'metrics in the metric tree',
  'about.s3': 'dashboards for every department',
  'about.s4': 'university degrees, incl. computer science',

  'exp.title': 'Experience',
  'exp.j1.p': 'Oct 2024 — present',
  'exp.j1.c': 'Tenderplan',
  'exp.j1.r': 'Data Analyst',
  'exp.j1.l': 'The only analyst in the company — built the analytics system from scratch.',
  'exp.j1.b1': 'Built a tree of 75+ metrics broken down by department (20–30 metrics each)',
  'exp.j1.b2': 'Created and maintain 10+ dashboards for sales, marketing, development and management',
  'exp.j1.b3': 'Set up annual planning of revenue, MRR and customer base — less than 5% plan vs. actual deviation',
  'exp.j1.b4': 'Designed the data collection and storage architecture, set tasks for developers and control data quality',
  'exp.j1.b5': 'Developed Superset plugins (custom JS visualisations) and a semantic-query analytics tool',
  'exp.j1.b6': 'Deployed local LLMs, introducing AI tools and automating company processes',
  'exp.j1.b7': 'Implemented a role-based data access model; maintain the knowledge base, Jira tasks and Atlas projects',
  'exp.j2.p': 'Dec 2023 — Oct 2024',
  'exp.j2.c': 'SberMarket',
  'exp.j2.r': 'Analyst',
  'exp.j2.l': 'Customer care contact centre analytics.',
  'exp.j2.b1': 'Plan vs. actual reporting on key contact centre metrics: FCR, CSI, AHT and more',
  'exp.j2.b2': 'Built and maintained dashboards and reports in Metabase and Tableau',
  'exp.j2.b3': 'Ad-hoc analytics for team leads',
  'exp.j2.b4': 'Metric analysis, finding growth opportunities, analytical research',
  'exp.j3.p': 'Dec 2021 — Dec 2023',
  'exp.j3.c': 'MTS Kassa',
  'exp.j3.r': 'Finance Department Analyst',
  'exp.j3.l': 'Sales reporting, customer base and accounts receivable.',
  'exp.j3.b1': 'Daily sales reports across all channels, monthly gross profit reports',
  'exp.j3.b2': 'Supporting customer processes and debt collection, weekly receivables monitoring',
  'exp.j3.b3': 'Weekly tNPS reporting and cohort analysis of the customer base (LT, RR)',
  'exp.j3.b4': 'Forecasting metrics and justifying plan targets',
  'exp.j3.b5': 'Data quality: collection, validation, anomaly detection',
  'exp.j4.p': 'Dec 2016 — Dec 2021',
  'exp.j4.c': 'Ministry of Natural Resources, Ulyanovsk Region',
  'exp.j4.r': 'Consultant, Chief Specialist-Expert',
  'exp.j4.b1': 'Processing and analysing forest inventory data: tabular, raster and GIS formats',
  'exp.j4.b2': 'Analytical reporting and technical specifications for public procurement',
  'exp.j4.b3': 'Organising auctions and e-tenders for forest land leases',
  'exp.j4.b4': 'Since 2021 — responsible for the digital transformation of the regional forestry sector',
  'exp.j5.p': 'Nov 2012 — Jul 2015',
  'exp.j5.c': 'Union of Foresters and Timber Industrialists',
  'exp.j5.r': 'Consultant',
  'exp.j5.b1': 'Developing forest-use projects for recreational activities',

  'skills.title': 'Skills',
  'skills.g1': 'Data & Databases',
  'skills.g2': 'Analytics',
  'skills.g3': 'Python, AI & Automation',
  'skills.g4': 'BI & Visualisation',
  'skills.prep': 'Data preprocessing',
  'skills.prod': 'Product analytics',
  'skills.ab': 'A/B tests',
  'skills.cohort': 'Cohort analysis',
  'skills.stat': 'Statistics',
  'skills.fc': 'Forecasting',
  'skills.req': 'Requirements gathering',
  'skills.auto': 'Process automation',
  'skills.mgmt': 'Management reporting',
  'skills.ru': 'Russian',
  'skills.native': 'native',
  'skills.en': 'English',

  'edu.title': 'Education',
  'edu.higher': 'Higher education',
  'edu.u1': 'Ulyanovsk State Technical University',
  'edu.u1d': 'Computer Science and Engineering, “Intelligent Systems” track',
  'edu.u2': 'Ulyanovsk State University',
  'edu.u2d': 'Forestry, engineer',
  'edu.courses': 'Courses & certificates',
  'edu.k1': 'Artificial Intelligence, Robotics and Sensorics',
  'edu.k1d': 'Ulyanovsk State Technical University',
  'edu.k2': 'Python Programming Fundamentals',
  'edu.k2d': 'HSE University',
  'edu.k3': 'Digital Transformation',
  'edu.k3d': 'RANEPA, Digital Transformation Leadership Centre',
  'edu.k4': 'Small Academy of Public Administration',
  'edu.k4d': 'Ulyanovsk State Technical University',

  'contacts.title': 'Contacts',
  'contacts.big': 'Let’s turn your data into <em>decisions</em>.',
  'contacts.phone': 'Phone',
  'contacts.cv': 'Résumé',
  'contacts.hh': 'Profile on hh.ru',
  'contacts.copy': 'Copy e-mail',
  'contacts.copied': 'Copied ✓',
  'footer.name': 'Vladimir Tumanov',
  'footer.role': 'Data Analyst · Big Data',
  'title': 'Vladimir Tumanov — Data Analyst',
};

const i18nEls = document.querySelectorAll('[data-i18n]');
const RU = {};
i18nEls.forEach((el) => { RU[el.dataset.i18n] = el.innerHTML; });
RU.title = document.title;
RU['contacts.copied'] = 'Скопировано ✓';

let lang = 'ru';
function setLang(next) {
  lang = next;
  const dict = next === 'en' ? EN : RU;
  i18nEls.forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.lang = next;
  document.title = dict.title;
  document.querySelectorAll('.lang__btn').forEach((b) => b.classList.toggle('is-active', b.dataset.lang === next));
  try { localStorage.setItem('lang', next); } catch (e) { /* storage unavailable */ }
}
document.querySelectorAll('.lang__btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
try { const saved = localStorage.getItem('lang'); if (saved === 'en') setLang('en'); } catch (e) { /* ignore */ }

/* ---------- intro ---------- */
window.addEventListener('load', () => requestAnimationFrame(() => document.body.classList.add('loaded')));
setTimeout(() => document.body.classList.add('loaded'), 1500);

/* ---------- reveal on scroll ---------- */
document.querySelectorAll('.about__cols, .stats, .skills__grid, .timeline, .edu__col').forEach((group) => {
  group.querySelectorAll('.reveal').forEach((el, i) => el.style.setProperty('--d', `${i * 0.08}s`));
});
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-visible');
    const num = e.target.querySelector('[data-count]');
    if (num) countUp(num);
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

/* ---------- counters ---------- */
function countUp(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const dur = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- section pager, topbar, progress, parallax ---------- */
const sections = [...document.querySelectorAll('.section')];
const topbar = document.querySelector('.topbar');
const current = document.querySelector('.pager__current');
const progress = document.querySelector('.progress');
const heroImg = document.querySelector('.hero__photo img');
document.querySelector('.pager__total').textContent = String(sections.length).padStart(2, '0');
let activeIdx = 0;

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  topbar.classList.toggle('is-scrolled', y > 40);

  const probe = y + innerHeight * 0.4;
  sections.forEach((s, i) => { if (s.offsetTop <= probe) activeIdx = i; });
  current.textContent = String(activeIdx + 1).padStart(2, '0');
  const sec = sections[activeIdx];
  topbar.classList.toggle('is-dark', y > 40 && (sec.classList.contains('skills') || sec.classList.contains('contacts')));

  if (heroImg && y < innerHeight && document.body.classList.contains('loaded')) {
    heroImg.style.transform = `translateY(${y * -0.12}px)`;
  }
}
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });
onScroll();

document.querySelectorAll('.pager__btn').forEach((b) => b.addEventListener('click', () => {
  const next = Math.max(0, Math.min(sections.length - 1, activeIdx + +b.dataset.dir));
  sections[next].scrollIntoView({ behavior: 'smooth' });
}));

/* ---------- skill card glow follows cursor ---------- */
document.querySelectorAll('.skill').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  });
});

/* ---------- copy e-mail ---------- */
const copyBtn = document.querySelector('.copy');
if (copyBtn) copyBtn.addEventListener('click', async () => {
  const text = copyBtn.dataset.copy;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (err) { /* ignore */ }
    ta.remove();
  }
  const label = copyBtn.querySelector('span');
  const prev = label.innerHTML;
  label.innerHTML = (lang === 'en' ? EN : RU)['contacts.copied'];
  copyBtn.classList.add('is-done');
  setTimeout(() => { label.innerHTML = prev; copyBtn.classList.remove('is-done'); }, 1800);
});

/* after intro, make parallax instant */
setTimeout(() => { if (heroImg) heroImg.style.transition = 'opacity 1.4s ease'; }, 2200);

/* magnetic buttons */
if (matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.18;
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}
