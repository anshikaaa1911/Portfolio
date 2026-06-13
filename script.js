const projects = [
  {
    title: 'Doctor Prescription OCR System',
    desc: 'A computer vision and OCR-based application that digitizes prescription images using OpenCV image preprocessing and Tesseract OCR for accurate text extraction.',
    tags: ['Python', 'OpenCV', 'Tesseract OCR', 'Computer Vision'],
    screenshot: '',
    demo: '#',
    code: '#'
  },
  {
    title: 'College Marketplace with ML Recommendations',
    desc: 'A peer-to-peer student resale platform with an ML recommendation system built from user interaction and behavioral data to improve product discovery.',
    tags: ['Recommendation System', 'ML', 'Data Preprocessing', 'Marketplace'],
    screenshot: '',
    demo: '#',
    code: 'https://github.com/inshivank/College-Market-Place'
  },
  {
    title: 'Employee Goal Management Portal',
    desc: 'A MERN-based portal for goal setting, approvals, performance tracking, audit logs, user administration, role-based access, and CSV/Excel report exports.',
    tags: ['MERN', 'JWT', 'MongoDB', 'REST APIs'],
    screenshot: '',
    demo: '#',
    code: '#'
  },
  {
    title: 'Behavioral Fraud Awareness Simulation Platform',
    desc: 'An interactive platform that simulates real-world cyber fraud scenarios and uses CNN-based deep learning models, including XceptionNet, to classify scams and improve user awareness.',
    tags: ['Deep Learning', 'CNN', 'XceptionNet', 'Cyber Fraud'],
    screenshot: '',
    demo: '#',
    code: 'https://github.com/anshikaaa1911/Behavioral-Fraud-Awareness---Simulation-Platform'
  },
  {
    title: 'GROWNET Trust-Based Community Platform',
    desc: 'A scalable community platform concept with trust scoring, SOS alerts, and recommendation features for safer, more reliable community interaction.',
    tags: ['Trust Scoring', 'Recommendations', 'Safety', 'Scalable Design'],
    screenshot: '',
    demo: '#',
    code: '#'
  },
  {
    title: 'Student Result Analysis and Prediction System',
    desc: 'A student performance analytics project that predicts pass/fail outcomes using academic activity data. The project includes data generation, ETL, SQLite warehousing, machine learning, model visualization, and a static website.',
    tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Predictive Analytics', 'Data Analytics', 'ETL Pipeline', 'Data Visualization', 'Web Development'],
    screenshot: '',
    demo: '#',
    code: '#'
  }
];

const skillGroups = [
  {
    title: 'Machine Learning',
    items: ['Feature Engineering', 'Model Evaluation', 'Regression', 'Classification', 'Clustering', 'CNNs', 'XceptionNet']
  },
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'MERN Stack', 'JWT Authentication', 'SQLite']
  },
  {
    title: 'Data and Tools',
    items: ['EDA', 'Statistics', 'Data Preprocessing', 'MongoDB', 'Mongoose', 'CSV/Excel Reports', 'GitHub', 'VS Code', 'Jupyter Notebooks', 'Google Colab', 'Figma', 'Canva', 'Tableau', 'Power BI']
  }
];

const activities = [
  {
    title: 'JYC Literary and Debating Coordinator',
    detail: 'Serving as coordinator for the 2025-2026 session, supporting literary events, debate activities, and student participation.'
  },
  {
    title: 'Hackathon Participation',
    detail: 'Participated in multiple hackathons, collaborating on fast-paced problem solving, prototyping, and technical presentations.'
  },
  {
    title: 'MUN and Cultural Event Organization',
    detail: 'Actively participated in organizing Model United Nations events and cultural activities, fostering teamwork, communication, and event management skills.'
  },
  {
    title: 'Anchoring and Stage Management',
    detail: 'Anchored events and managed anchors, coordinating stage flow, speaker transitions, and audience engagement.'
  },
  {
    title: 'Debate Competitions',
    detail: 'Won multiple debate competitions, strengthening public speaking, critical thinking, and argumentation skills.'
  }
];

const certifications = [
  'Functional Data Structures and Algorithms',
  'Deloitte Data Analytics Virtual Experience Program',
  'Agentic AI and Generative AI applications'
];

function makeTagList(tags) {
  return tags.map((tag) => `<span>${tag}</span>`).join('');
}

function projectScreenshot(project, index) {
  if (project.screenshot) {
    return `<img src="${project.screenshot}" alt="${project.title} screenshot" />`;
  }

  return `
    <div class="screenshot-placeholder" aria-label="${project.title} screenshot placeholder">
      <div class="browser-bar"><span></span><span></span><span></span></div>
      <div class="placeholder-layout"><div></div><div></div><div></div></div>
      <p>Project Screenshot ${index + 1}</p>
    </div>
  `;
}

function renderProjects() {
  const grid = document.querySelector('#projects-grid');
  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-screenshot">${projectScreenshot(project, index)}</div>
      <div class="project-body">
        <h4>${project.title}</h4>
        <p>${project.desc}</p>
        <div class="project-tags">${makeTagList(project.tags)}</div>
        <div class="project-actions">
          <a class="${project.demo === '#' ? 'disabled-link' : ''}" href="${project.demo}" target="_blank" rel="noreferrer" aria-disabled="${project.demo === '#'}">Live Demo</a>
          <a class="secondary-link ${project.code === '#' ? 'disabled-link' : ''}" href="${project.code}" target="_blank" rel="noreferrer" aria-disabled="${project.code === '#'}">Source Code</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const list = document.querySelector('#skills-list');
  list.innerHTML = skillGroups.map((group) => `
    <div class="skill-group">
      <h4>${group.title}</h4>
      <div>${makeTagList(group.items)}</div>
    </div>
  `).join('');
}

function renderActivities() {
  const list = document.querySelector('#co-curricular-list');
  list.innerHTML = activities.map((activity) => `
    <div class="co-curricular-card">
      <h4>${activity.title}</h4>
      <p>${activity.detail}</p>
    </div>
  `).join('');
}

function renderCertifications() {
  const list = document.querySelector('#certifications-list');
  list.innerHTML = certifications.map((certification) => `
    <div class="certification-card"><p>${certification}</p></div>
  `).join('');
}

function setActiveSection(sectionId) {
  document.querySelectorAll('.dashboard-section').forEach((section) => {
    section.hidden = section.id !== sectionId;
  });

  document.querySelectorAll('.nav button').forEach((button) => {
    button.classList.toggle('active', button.dataset.section === sectionId);
  });
}

document.querySelectorAll('.nav button').forEach((button) => {
  button.addEventListener('click', () => setActiveSection(button.dataset.section));
});

renderProjects();
renderSkills();
renderActivities();
renderCertifications();
