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
  const media = project.video
    ? `<video class="thumb-video" muted playsinline preload="metadata" src="${project.video}#t=0.5"></video>`
    : '';

  return `
    <div class="project-thumb ${project.video ? 'has-media' : ''}" aria-label="${project.thumbnailLabel}">
      ${media}
      <div class="thumb-window">
        <span></span><span></span><span></span>
      </div>
      <strong>${project.shortTitle}</strong>
      <small>${project.thumbnailLabel}</small>
    </div>
  `;
}

function projectCard(project) {
  const isBuilding = project.category === 'building';
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
          <a class="primary-link" href="project.html?id=${project.id}">${isBuilding ? 'View Details' : 'View Project'}</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjectShowcase() {
  const builtGrid = document.querySelector('#built-projects');
  const buildingGrid = document.querySelector('#building-projects');
  if (!builtGrid || !buildingGrid || !window.portfolioProjects) return;

  builtGrid.innerHTML = window.portfolioProjects.filter((project) => project.category === 'built').map(projectCard).join('');
  buildingGrid.innerHTML = window.portfolioProjects.filter((project) => project.category === 'building').map(projectCard).join('');
}

function renderScreenshotGallery(project) {
  return `
    <div class="screenshot-strip" tabindex="0" aria-label="Project screenshots">
      ${project.screenshots.map((shot, index) => `
        <figure class="screenshot-card">
          <div class="screenshot-mock ${project.video ? 'has-video' : ''}">
            ${project.video ? `<video class="screenshot-video" muted playsinline preload="metadata" src="${project.video}#t=${index + 1}"></video>` : ''}
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
        <p>${project.video ? 'Playable project demo embedded directly on the page.' : 'Demo video will be added as the build matures.'}</p>
      </div>
      ${project.video ? `<video class="demo-video" controls preload="metadata" src="${project.video}"></video>` : '<div class="empty-state">Demo video coming soon.</div>'}
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

function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"], a[href*="index.html#"]').forEach((link) => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('visible'));
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

  targets.forEach((target) => observer.observe(target));
}

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

  sections.forEach((section) => observer.observe(section));
}

renderSkills();
renderActivities();
renderCertifications();
renderProjectShowcase();
renderProjectDetail();
initTheme();
initNavigation();
initScrollReveal();
initActiveNavigation();
