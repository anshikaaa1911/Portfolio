const skillGroups = [
  {
    title: 'Machine Learning',
    items: ['Feature Engineering', 'Model Evaluation', 'Regression', 'Classification', 'Clustering', 'CNNs', 'XceptionNet']
  },
  {
    title: 'Programming',
    items: ['Python', 'C++', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'MERN Stack', 'JWT Authentication', 'SQLite']
  },
  {
    title: 'Data and Tools',
    items: ['EDA', 'Statistics', 'Data Preprocessing', 'MongoDB', 'Mongoose', 'CSV/Excel Reports', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Figma', 'Canva', 'Tableau', 'Power BI']
  }
];

const activities = [
  {
    title: 'JYC Literary and Debating Coordinator',
    detail: 'Serving as coordinator for the 2025-2026 session, supporting literary events, debate activities, and student participation.'
  },
  {
    title: 'Hackathon Participation',
    detail: 'Collaborated on fast-paced problem solving, prototyping, and technical presentations across hackathon environments.'
  },
  {
    title: 'MUN and Cultural Event Organization',
    detail: 'Helped organize Model United Nations events and cultural activities, strengthening teamwork, communication, and event management.'
  },
  {
    title: 'Anchoring and Stage Management',
    detail: 'Anchored events and coordinated stage flow, speaker transitions, and audience engagement.'
  },
  {
    title: 'Debate Competitions',
    detail: 'Won multiple debate competitions, building public speaking, critical thinking, and argumentation skills.'
  }
];

const certifications = [
  'Functional Data Structures and Algorithms',
  'Deloitte Data Analytics Virtual Experience Program',
  'Agentic AI and Generative AI applications'
];

function makeTagList(tags = []) {
  return tags.map((tag) => `<span>${tag}</span>`).join('');
}

function makeList(items = []) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

function isAvailable(url) {
  return url && url !== '#';
}

function renderSkills() {
  const list = document.querySelector('#skills-list');
  if (!list) return;

  list.innerHTML = skillGroups.map((group) => `
    <article class="skill-group">
      <h3>${group.title}</h3>
      <div>${makeTagList(group.items)}</div>
    </article>
  `).join('');
}

function renderActivities() {
  const list = document.querySelector('#co-curricular-list');
  if (!list) return;

  list.innerHTML = activities.map((activity) => `
    <article class="co-curricular-card">
      <h3>${activity.title}</h3>
      <p>${activity.detail}</p>
    </article>
  `).join('');
}

function renderCertifications() {
  const list = document.querySelector('#certifications-list');
  if (!list) return;

  list.innerHTML = certifications.map((certification) => `
    <article class="certification-card"><p>${certification}</p></article>
  `).join('');
}

function projectThumbnail(project) {
  const vidSrc    = project.video?.src || project.video || '';
  const doAutoplay = project.video?.autoplay !== false; // default true for plain strings

  // Render autoplay + loop directly as HTML attributes - browsers require
  // these to be present at parse time, not just set via JS afterwards.
  const media = vidSrc
    ? `<video
         class="thumb-video"
         src="${vidSrc}"
         ${doAutoplay ? 'autoplay' : ''}
         muted
         loop
         playsinline
         preload="auto"
       ></video>`
    : '';

  return `
    <div class="project-thumb ${vidSrc ? 'has-media' : ''}" aria-label="${project.thumbnailLabel}">
      ${media}
      <strong>${project.shortTitle}</strong>
      <small>${project.thumbnailLabel}</small>
    </div>
  `;
}

function projectCard(project) {
  const isBuilding = project.category === 'building';
  const repoIsAvailable = isAvailable(project.repo);
  return `
    <article class="project-card reveal">
      ${projectThumbnail(project)}
      <div class="project-body">
        ${isBuilding ? '<span class="status-badge">Currently Building</span>' : ''}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${makeTagList(project.tech)}</div>
        ${isBuilding && project.planned ? `<div class="planned-list"><strong>Planned Features</strong><ul>${makeList(project.planned.slice(0, 3))}</ul></div>` : ''}
        <div class="project-actions">
          <a class="primary-link ${repoIsAvailable ? '' : 'disabled-link'}" href="${repoIsAvailable ? project.repo : '#'}" target="_blank" rel="noreferrer" aria-disabled="${!repoIsAvailable}">View Repository</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjectShowcase() {
  const builtGrid = document.querySelector('#built-projects');
  const buildingGrid = document.querySelector('#building-projects');
  if (!window.portfolioProjects) {
    setTimeout(renderProjectShowcase, 50);
    return;
  }

  if (builtGrid) {
    builtGrid.innerHTML = window.portfolioProjects.filter((p) => p.category === 'built').map(projectCard).join('');
  }

  if (buildingGrid) {
    buildingGrid.innerHTML = window.portfolioProjects.filter((p) => p.category === 'building').map(projectCard).join('');
  }

  initScrollReveal();
  initProjectVideos();
}

function renderScreenshotGallery(project) {
  const vidSrc = project.video?.src || project.video || '';
  return `
    <div class="screenshot-strip" tabindex="0" aria-label="Project screenshots">
      ${project.screenshots.map((shot, index) => `
        <figure class="screenshot-card">
          <div class="screenshot-mock ${vidSrc ? 'has-video' : ''}">
            ${vidSrc
              ? `<video class="screenshot-video" src="${vidSrc}" autoplay muted loop playsinline preload="auto"></video>`
              : ''}
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${shot}</strong>
          </div>
          <figcaption>${shot}</figcaption>
        </figure>
      `).join('')}
    </div>
  `;
}

function renderProjectDetail() {
  const detail = document.querySelector('#project-detail');
  if (!detail || !window.portfolioProjects) return;

  const params = new URLSearchParams(window.location.search);
  const project = window.portfolioProjects.find((item) => item.id === params.get('id')) || window.portfolioProjects[0];
  const vidSrc = project.video?.src || project.video || '';
  document.title = `${project.title} | Anshika Bharti`;

  detail.innerHTML = `
    <section class="hero compact-hero project-hero reveal">
      <div class="hero-content">
        <a class="back-link" href="index.html#hero">Back to Portfolio</a>
        <p class="eyebrow">${project.category === 'building' ? 'Currently Building' : 'Project Documentation'}</p>
        <h1>${project.title}</h1>
        <p>${project.overview}</p>
        <div class="project-tags hero-tags">${makeTagList(project.tech)}</div>
        <div class="hero-actions">
          <a class="primary-link ${isAvailable(project.live) ? '' : 'disabled-link'}" href="${isAvailable(project.live) ? project.live : '#'}" target="_blank" rel="noreferrer" aria-disabled="${!isAvailable(project.live)}">Visit Website</a>
          <a class="secondary-link ${isAvailable(project.repo) ? '' : 'disabled-link'}" href="${isAvailable(project.repo) ? project.repo : '#'}" target="_blank" rel="noreferrer" aria-disabled="${!isAvailable(project.repo)}">View Repository</a>
          <a class="secondary-link" href="projects.html">Back to Projects</a>
        </div>
      </div>
      ${projectThumbnail(project)}
    </section>

    <section class="section reveal">
      <div class="detail-grid">
        <article><h2>Problem Statement</h2><p>${project.problem}</p></article>
        <article><h2>Objective</h2><p>${project.objective}</p></article>
        <article><h2>Solution</h2><p>${project.solution}</p></article>
        <article><h2>Impact</h2><p>${project.impact}</p></article>
      </div>
    </section>

    <section class="section reveal">
      <div class="section-heading">
        <h2>Demo Video</h2>
        <p>${vidSrc ? 'Playable project demo embedded directly on the page.' : 'Demo video will be added as the build matures.'}</p>
      </div>
      ${vidSrc
        ? `<video class="demo-video" src="${vidSrc}" controls autoplay muted loop playsinline preload="auto"></video>`
        : '<div class="empty-state">Demo video coming soon.</div>'}
    </section>

    <section class="section reveal">
      <div class="section-heading">
        <h2>Project Screenshots</h2>
        <p>A horizontal gallery for the key project screens and flows.</p>
      </div>
      ${renderScreenshotGallery(project)}
    </section>

    <section class="section reveal">
      <div class="section-heading">
        <h2>Features</h2>
        <p>Core capabilities and user-facing functionality.</p>
      </div>
      <div class="feature-grid">${project.features.map((feature) => `<article class="feature-card">${feature}</article>`).join('')}</div>
    </section>

    <section class="section reveal">
      <div class="section-heading">
        <h2>Technical Details</h2>
        <p>Architecture notes across frontend, backend, data, APIs, and model logic.</p>
      </div>
      <div class="technical-grid">
        ${Object.entries(project.technical).map(([label, value]) => `
          <article class="technical-card">
            <h3>${label === 'ml' ? 'Machine Learning / Algorithms' : label.charAt(0).toUpperCase() + label.slice(1)}</h3>
            <p>${value}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section reveal">
      <div class="split-grid">
        <article>
          <h2>Challenges & Learnings</h2>
          <ul class="clean-list">${makeList(project.challenges)}</ul>
        </article>
        <article>
          <h2>Future Enhancements</h2>
          <ul class="clean-list">${makeList(project.future)}</ul>
        </article>
      </div>
    </section>
  `;
}

/* THEME */
function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';

  function syncLabel() {
    if (!toggle) return;
    toggle.textContent = document.documentElement.dataset.theme === 'dark' ? 'Light' : 'Dark';
  }

  syncLabel();
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
    syncLabel();
  });
}

/* NAVIGATION */
function initNavigation() {
  const header = document.querySelector('header') || document.querySelector('.header');
  const existingNav = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const anchorPrefix = currentPage === 'index.html' ? '' : 'index.html';

  // -- Primary nav links (always visible on desktop) --
  const primaryLinks = [
    { label: 'Projects',  href: 'projects.html' },
    { label: 'Contact',   href: `${anchorPrefix}#contact`  },
    { label: 'Resume',    href: 'public/RESUME1.pdf', external: true }
  ];

  // -- Secondary links that collapse into the "More" dropdown --
  const secondaryLinks = [
    { label: 'Ongoing Projects', href: 'ongoing.html' },
    { label: 'About',          href: `${anchorPrefix}#about`          },
    { label: 'Education',      href: `${anchorPrefix}#education`      },
    { label: 'Experience',     href: `${anchorPrefix}#experience`     },
    { label: 'Skills',         href: `${anchorPrefix}#skills`         },
    { label: 'Certifications', href: `${anchorPrefix}#certifications` },
    { label: 'Leadership',     href: `${anchorPrefix}#leadership`     },
    { label: 'Achievements',   href: `${anchorPrefix}#achievements`   }
  ];

  if (!header) return;

  // Clear whatever nav markup currently exists so we rebuild cleanly
  if (existingNav) existingNav.remove();
  if (menuToggle) menuToggle.remove();

  // -- Build the new nav --
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('aria-label', 'Main navigation');

  // Primary links
  const primaryGroup = document.createElement('ul');
  primaryGroup.className = 'nav-primary';
  primaryLinks.forEach(({ label, href, external }) => {
    const li  = document.createElement('li');
    const a   = document.createElement('a');
    a.href        = href;
    a.textContent = label;
    if (external) { a.target = '_blank'; a.rel = 'noreferrer'; }
    li.appendChild(a);
    primaryGroup.appendChild(li);
  });

  // "More" dropdown trigger
  const moreItem = document.createElement('li');
  moreItem.className = 'nav-more';
  moreItem.innerHTML = `
    <button class="more-btn" aria-haspopup="true" aria-expanded="false">
      More <span class="more-caret" aria-hidden="true">v</span>
    </button>
    <ul class="more-dropdown" role="menu">
      ${secondaryLinks.map(({ label, href }) =>
        `<li role="none"><a role="menuitem" href="${href}">${label}</a></li>`
      ).join('')}
    </ul>
  `;

  primaryGroup.appendChild(moreItem);
  nav.appendChild(primaryGroup);
  header.appendChild(nav);

  // -- Dropdown open/close logic --
  const moreBtn      = moreItem.querySelector('.more-btn');
  const moreDropdown = moreItem.querySelector('.more-dropdown');

  function openDropdown() {
    moreDropdown.classList.add('open');
    moreBtn.setAttribute('aria-expanded', 'true');
  }
  function closeDropdown() {
    moreDropdown.classList.remove('open');
    moreBtn.setAttribute('aria-expanded', 'false');
  }
  function toggleDropdown() {
    moreDropdown.classList.contains('open') ? closeDropdown() : openDropdown();
  }

  // Hover (desktop)
  moreItem.addEventListener('mouseenter', openDropdown);
  moreItem.addEventListener('mouseleave', closeDropdown);

  // Click (touch / keyboard)
  moreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!moreItem.contains(e.target)) closeDropdown();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });

  // Close dropdown when any link inside it is clicked
  moreDropdown.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeDropdown);
  });

  // Mobile: hamburger toggle for the whole primary group
  const hamburger = document.createElement('button');
  hamburger.className = 'menu-toggle';
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  header.appendChild(hamburger);

  hamburger.addEventListener('click', () => {
    const isOpen = primaryGroup.classList.toggle('mobile-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu on any nav link click
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      primaryGroup.classList.remove('mobile-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* CSS injected at runtime for the new nav layout. */
(function injectNavStyles() {
  if (document.getElementById('nav-override-styles')) return;
  const style = document.createElement('style');
  style.id = 'nav-override-styles';
  style.textContent = `
    /* -- Header layout -- */
    header,
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
      gap: 1rem;
    }

    /* Logo stays left - no change needed, flex handles it */

    /* -- Primary nav group (right-aligned) -- */
    .nav {
      margin-left: auto;   /* push everything to the right */
    }

    .nav-primary {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      list-style: none;
      margin: 0;
      padding: 0;
      flex-wrap: nowrap;
    }

    .nav-primary > li > a {
      padding: 0.45rem 0.85rem;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.15s, color 0.15s;
    }

    .nav-primary > li > a:hover,
    .nav-primary > li > a.active {
      background: rgba(0,0,0,0.06);
    }

    [data-theme="dark"] .nav-primary > li > a:hover,
    [data-theme="dark"] .nav-primary > li > a.active {
      background: rgba(255,255,255,0.1);
    }

    /* -- More dropdown -- */
    .nav-more {
      position: relative;
      list-style: none;
    }

    .more-btn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.45rem 0.85rem;
      border: none;
      background: transparent;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      border-radius: 6px;
      white-space: nowrap;
      transition: background 0.15s;
      color: inherit;
    }

    .more-btn:hover {
      background: rgba(0,0,0,0.06);
    }

    [data-theme="dark"] .more-btn:hover {
      background: rgba(255,255,255,0.1);
    }

    .more-caret {
      font-size: 0.7rem;
      transition: transform 0.2s;
    }

    .more-btn[aria-expanded="true"] .more-caret {
      transform: rotate(180deg);
    }

    .more-dropdown {
      display: none;
      position: absolute;
      right: 0;
      top: calc(100% + 6px);
      min-width: 170px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      list-style: none;
      margin: 0;
      padding: 0.35rem 0;
      background: var(--bg, #fff);
      border: 1px solid rgba(0,0,0,0.08);
      z-index: 200;
    }

    [data-theme="dark"] .more-dropdown {
      background: var(--bg-dark, #1e1e2e);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }

    .more-dropdown.open {
      display: block;
      animation: dropIn 0.18s ease;
    }

    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .more-dropdown li a {
      display: block;
      padding: 0.55rem 1.1rem;
      font-size: 0.88rem;
      font-weight: 500;
      text-decoration: none;
      color: inherit;
      transition: background 0.12s;
    }

    .more-dropdown li a:hover {
      background: rgba(0,0,0,0.05);
    }

    [data-theme="dark"] .more-dropdown li a:hover {
      background: rgba(255,255,255,0.08);
    }

    /* -- Mobile: hamburger visible, primary links stacked -- */
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      margin-left: 0.5rem;
    }

    .menu-toggle span {
      display: block;
      width: 22px;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
      transition: transform 0.2s, opacity 0.2s;
    }

    @media (max-width: 700px) {
      .menu-toggle {
        display: flex;
      }

      .nav-primary {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        background: var(--bg, #fff);
        border-top: 1px solid rgba(0,0,0,0.08);
        padding: 0.5rem 0;
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }

      [data-theme="dark"] .nav-primary {
        background: var(--bg-dark, #1e1e2e);
      }

      .nav-primary.mobile-open {
        display: flex;
      }

      .nav-primary > li > a,
      .more-btn {
        display: block;
        padding: 0.75rem 1.5rem;
        border-radius: 0;
        font-size: 1rem;
        width: 100%;
        text-align: left;
      }

      .more-dropdown {
        position: static;
        box-shadow: none;
        border: none;
        border-top: 1px solid rgba(0,0,0,0.06);
        border-radius: 0;
        padding: 0;
      }

      .more-dropdown li a {
        padding-left: 2.25rem;
        font-size: 0.92rem;
      }
    }
  `;
  document.head.appendChild(style);
})();

/* SCROLL REVEAL */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length || !('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((t) => observer.observe(t));
}

/* ACTIVE NAV HIGHLIGHT */
function initActiveNavigation() {
  const sectionLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  if (!sectionLinks.length || !('IntersectionObserver' in window)) return;

  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

  sections.forEach((s) => observer.observe(s));
}

/* VIDEO AUTOPLAY */
// Attributes (autoplay, muted, loop, playsinline) are already written into
// the HTML by projectThumbnail() and renderProjectDetail(). This function
// calls .load() + .play() explicitly because browsers don't always honour
// those attributes on elements injected via innerHTML after page load.
function initProjectVideos() {
  document.querySelectorAll('video[autoplay]').forEach(el => {
    el.muted       = true;   // must be a property, not just an attribute
    el.playsInline = true;
    el.load();               // re-parse src set by innerHTML
    el.play().catch(() => {
      // Blocked by browser autoplay policy; will play on first user gesture.
    });
  });
}

/* INIT */
renderSkills();
renderActivities();
renderCertifications();
renderProjectShowcase();
renderProjectDetail();
initTheme();
initNavigation();      // must run after DOM is ready
initScrollReveal();
initActiveNavigation();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectVideos);
} else {
  initProjectVideos();
}
