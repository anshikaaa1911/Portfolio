window.portfolioProjects = [
  {
    id: 'employee-goal-management-portal',
    category: 'built',
    title: 'Employee Goal Management Portal',
    shortTitle: 'Employee Goals',
    description: 'A full-stack MERN portal that centralizes goal setting, manager approvals, progress tracking, audit logs, and exportable reports — all behind role-based access control.',
    thumbnailLabel: 'Goal Tracking Dashboard',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'CSV/Excel'],
    video: {
      src: './public/videos/employee-goal-management-demo.mp4',
      autoplay: true,
      muted: true,
      loop: true,
      playsInline: true
    },
    live: 'https://employee-management-0cu9.onrender.com/',
    repo: 'https://github.com/anshikaaa1911/Employee-Management',
    overview: 'A role-aware goal management platform that gives employees, managers, and admins a single place to create, review, approve, and monitor measurable goals — replacing fragmented spreadsheets with a structured, permission-driven workflow.',
    problem: 'Most teams track goals across scattered spreadsheets, emails, and chat messages. This makes approval chains unclear, accountability hard to enforce, and progress history nearly impossible to audit.',
    objective: 'Build a centralized system where every stakeholder — employee, manager, admin — sees exactly what they need, can act on it immediately, and leaves a clear record behind.',
    solution: 'Engineered a MERN stack application with JWT-secured role-based routing, a full goal lifecycle (draft → submitted → approved → completed), audit trail storage, and one-click CSV/Excel exports for reporting.',
    impact: 'Cuts manual follow-up, makes goal ownership visible at a glance, and gives managers a reliable audit trail — turning scattered check-ins into a repeatable, transparent process.',
    features: [
      'Role-based login with protected routes per permission level',
      'Full goal lifecycle: create, submit, review, approve, and track progress',
      'Admin controls for user management and system-wide visibility',
      'One-click CSV and Excel exports for reporting and review cycles'
    ],
    screenshots: ['Goals dashboard', 'Approval workflow', 'Admin user controls'],
    technical: {
      frontend: 'React SPA with reusable components for dashboards, goal forms, status tables, and role-specific action panels.',
      backend: 'Node.js + Express REST API with JWT authentication, role-based middleware, and clean separation of concerns across controllers.',
      database: 'MongoDB with collections for users, goals, status transition history, and audit records — designed for fast filtered queries by role and goal state.',
      apis: 'REST endpoints covering auth, goal CRUD, status transitions, user management, and export generation.',
      ml: 'No ML layer — the project focuses on workflow automation, access control, and auditability.'
    },
    challenges: [
      'Designing clean role boundaries without duplicating dashboard logic across three user types.',
      'Keeping goal status transitions predictable and irreversible where needed, without confusing the UX.'
    ],
    future: [
      'Analytics dashboards showing goal completion rates by team and time period.',
      'In-app notifications and reminders for pending approvals and upcoming deadlines.',
      'Richer performance insights with trend lines and comparison views across review cycles.'
    ]
  },
  {
    id: 'college-marketplace-recommendation-system',
    category: 'built',
    title: 'College Marketplace with Recommendation System',
    shortTitle: 'College Marketplace',
    description: 'A peer-to-peer student resale platform with a built-in recommendation engine that surfaces relevant listings based on browsing behavior and product attributes.',
    thumbnailLabel: 'Student Marketplace',
    tech: ['JavaScript', 'Recommendation System', 'HTML', 'CSS', 'Data Preprocessing'],
    video: {
      src: './public/videos/college-marketplace-demo.mp4',
      autoplay: true,
      muted: true,
      loop: true,
      playsInline: true
    },
    live: 'https://inshivank.github.io/College-Market-Place/',
    repo: 'https://github.com/inshivank/College-Market-Place',
    overview: 'A campus-focused resale marketplace that makes it easy for students to list, browse, and discover second-hand items — with a recommendation layer that cuts through noise to surface what\'s actually relevant.',
    problem: 'Generic resale apps feel impersonal and overwhelming for students. Listings from unrelated sellers drown out what peers are actually selling nearby, making useful items hard to find and trust hard to build.',
    objective: 'Build a lightweight, campus-first marketplace where discovery is driven by relevance — not just recency — so students spend less time scrolling and more time connecting with the right listings.',
    solution: 'Built product listing flows, category browsing, and a recommendation-oriented discovery layer that uses listing attributes and interaction signals to surface more relevant items for each user.',
    impact: 'Makes student resale more approachable, reduces the noise of irrelevant listings, and increases the chance students find useful items within their own campus community.',
    features: [
      'Student-friendly product listing cards with category tagging',
      'Category-based browsing for faster, focused discovery',
      'Recommendation-driven product surfacing based on listing signals',
      'Fully responsive layout optimized for mobile browsing'
    ],
    screenshots: ['Marketplace home', 'Product listing cards', 'Recommended products'],
    technical: {
      frontend: 'Pure HTML, CSS, and JavaScript — optimized for static deployment with zero build overhead, keeping it fast and portable.',
      backend: 'Client-side logic handles all marketplace behavior, enabling GitHub Pages deployment without a server.',
      database: 'Structured product data consumed directly by the marketplace UI and recommendation logic.',
      apis: 'Client-side data access patterns simulate listing retrieval and recommendation filtering.',
      ml: 'Content-based recommendation approach using listing attributes (category, price range, condition) and user-oriented interaction signals to rank and surface relevant products.'
    },
    challenges: [
      'Delivering a real marketplace feel within the constraints of a fully static deployment.',
      'Building useful recommendations without persistent user data or server-side state.'
    ],
    future: [
      'Add authentication and seller profiles so buyers can message and rate sellers.',
      'Persist listing data with a backend database and real-time sync.',
      'Upgrade recommendations to collaborative filtering as interaction data accumulates.'
    ]
  },
  {
    id: 'behavioral-fraud-awareness-platform',
    category: 'built',
    title: 'Behavioral Fraud Awareness & Simulation Platform',
    shortTitle: 'Fraud Awareness',
    description: 'An interactive cyber fraud simulation platform that uses deep learning to classify scam patterns and trains users to recognize real-world digital threats through scenario-based learning.',
    thumbnailLabel: 'Fraud Simulation Lab',
    tech: ['Deep Learning', 'CNN', 'XceptionNet', 'Cybersecurity', 'Python'],
    video: {
      src: './public/videos/behavioral-fraud-awareness-demo.mp4',
      autoplay: true,
      muted: true,
      loop: true,
      playsInline: true
    },
    live: '#',
    repo: 'https://github.com/anshikaaa1911/Behavioral-Fraud-Awareness---Simulation-Platform',
    overview: 'A simulation-first platform that puts users inside realistic fraud scenarios — phishing attempts, impersonation, social engineering — and uses CNN-backed classification to explain what made each case suspicious.',
    problem: 'Most people encounter fraud only when it\'s too late. Awareness campaigns rely on passive reading, which doesn\'t build the pattern recognition needed to catch sophisticated scams in the moment.',
    objective: 'Create an active learning environment where users practice identifying fraud cues through realistic simulations, backed by a model that explains classification decisions in plain language.',
    solution: 'Built interactive fraud scenarios across common attack vectors and integrated CNN/XceptionNet-based classification logic to detect scam patterns and deliver targeted, explainable feedback after each scenario.',
    impact: 'Turns passive awareness into active skill-building — users leave with sharper instincts for spotting digital fraud, grounded in practice rather than theory.',
    features: [
      'Realistic fraud scenario simulations across phishing, impersonation, and social engineering',
      'CNN + XceptionNet classification for pattern-based scam detection',
      'Explainable feedback showing what cues triggered each classification',
      'Progressive difficulty to build confidence across skill levels'
    ],
    screenshots: ['Scenario simulation', 'Fraud classification', 'Awareness feedback'],
    technical: {
      frontend: 'Interactive web interface that presents fraud scenarios, collects user decisions, and renders classification feedback in context.',
      backend: 'Application logic managing scenario flow, user response tracking, and result routing to the classification layer.',
      database: 'Scenario and content data organized by fraud category, difficulty level, and classification labels.',
      apis: 'Endpoints for scenario delivery, user response capture, and returning classification results with explanations.',
      ml: 'CNN-based deep learning pipeline using XceptionNet architecture, trained to classify scam patterns across phishing, impersonation, and behavioral fraud categories.'
    },
    challenges: [
      'Translating abstract cybersecurity risk into scenarios that feel realistic without being alarming or confusing.',
      'Making model classification results meaningful to non-technical users without oversimplifying the underlying logic.'
    ],
    future: [
      'Expand scam categories to cover voice phishing, deepfake impersonation, and QR code fraud.',
      'Track awareness progress over sessions to personalize difficulty and content.',
      'Improve model evaluation with larger, more diverse labeled datasets from real-world fraud cases.'
    ]
  },
  {
    id: 'grownet-trust-community-platform',
    category: 'building',
    title: 'GROWNET Trust-Based Community Platform',
    shortTitle: 'GROWNET',
    description: 'A scalable community platform being built around trust scoring, SOS alerts, and intelligent recommendations — designed to make local interaction safer and more reliable.',
    thumbnailLabel: 'Trust Community Network',
    tech: ['Trust Scoring', 'Recommendations', 'Safety Workflows', 'Scalable Design'],
    video: {
      src: '',
      autoplay: false
    },
    live: '#',
    repo: 'https://github.com/anshikaaa1911/GROWNET-Trust-Based-Community-Platform',
    overview: 'GROWNET is a community platform that puts trust at the center of every interaction — using verifiable trust scores, emergency SOS workflows, and behavior-informed recommendations to make local collaboration safer and more human.',
    problem: 'Community platforms suffer from low accountability, irrelevant content, and no safety net for urgent situations. When trust is unclear and recommendations are generic, people disengage — especially in high-stakes moments.',
    objective: 'Design a platform where every community interaction is anchored to a trust layer — making it easier to know who to rely on, what to act on, and how to get help fast when it matters.',
    solution: 'Designing a system with composable trust scoring, real-time SOS alert routing, community-informed recommendations, and transparent moderation — built to scale without sacrificing accountability.',
    impact: 'Aims to turn anonymous community platforms into high-trust networks where people feel confident acting, helping, and connecting — even with strangers.',
    features: [
      'Trust score engine currently in development — composable, explainable, and tamper-resistant',
      'Planned SOS alert workflows with priority routing and verified responder escalation',
      'Community recommendation system surfacing relevant posts, people, and resources',
      'Moderation and reporting architecture designed for scale without manual bottlenecks'
    ],
    planned: [
      'Trust-based user profiles with visible, explainable score breakdowns',
      'SOS and emergency support flow with geo-aware alert routing',
      'Recommendation engine for community posts, resources, and trusted members',
      'Moderation and reporting tools with configurable escalation rules'
    ],
    screenshots: ['Trust profile concept', 'SOS flow concept', 'Community feed concept'],
    technical: {
      frontend: 'Planned responsive dashboard for feed, trust profiles, alerts, recommendations, and community action flows.',
      backend: 'Planned service layer handling users, trust score computation, alert lifecycle, moderation queues, and recommendation delivery.',
      database: 'Planned schema for profiles, posts, trust signals, ratings, event logs, and alert records — optimized for real-time reads.',
      apis: 'Planned REST APIs for all community actions, trust updates, SOS alert creation, moderation decisions, and recommendation retrieval.',
      ml: 'Planned trust-ranking and recommendation algorithms using behavioral signals, peer ratings, activity history, and safety event patterns.'
    },
    challenges: [
      'Building a trust score that feels fair, transparent, and hard to game — without becoming a social credit system.',
      'Making SOS workflows fast enough to be useful in emergencies while maintaining identity verification and accountability.'
    ],
    future: [
      'Pilot the trust model with a real community cohort to validate scoring fairness.',
      'Add explainable trust indicators so users understand exactly what affects their score.',
      'Scale alert routing and recommendations with stronger ranking algorithms and real usage data.'
    ]
  },
  {
    id: 'handwriting-ocr-system',
    category: 'building',
    title: 'Handwriting OCR System',
    shortTitle: 'Handwriting OCR',
    description: 'A computer vision pipeline that extracts clean, machine-readable text from handwritten notes and scanned documents using OpenCV preprocessing and Tesseract OCR.',
    thumbnailLabel: 'OCR Extraction Workspace',
    tech: ['Computer Vision', 'OCR', 'OpenCV', 'Tesseract', 'Python'],
    video: {
      src: '',
      autoplay: false
    },
    live: '#',
    repo: 'https://github.com/anshikaaa1911/HandWriting',
    overview: 'An OCR system being built to convert handwritten notes and printed scans into searchable, editable text — with a preprocessing pipeline designed to handle real-world image imperfections like noise, skew, and uneven lighting.',
    problem: 'Handwritten notes and physical documents are locked in image form — unsearchable, uneditable, and expensive to transcribe manually. Existing OCR tools often fail on imperfect scans without preprocessing.',
    objective: 'Build a robust preprocessing and OCR pipeline that meaningfully improves text extraction accuracy from noisy, skewed, or low-contrast document images — making handwritten content actually usable.',
    solution: 'Designing an image processing pipeline using OpenCV (thresholding, noise reduction, deskewing, segmentation) feeding into Tesseract OCR, with a review interface for correcting low-confidence extractions.',
    impact: 'Reduces manual transcription effort, enables document search across previously inaccessible notes, and creates a reusable base for larger digitization workflows.',
    features: [
      'OCR pipeline currently in active development with modular preprocessing stages',
      'OpenCV-based image cleanup: thresholding, noise reduction, deskew, and segmentation',
      'Tesseract OCR extraction with confidence scoring per text region',
      'Document digitization interface with export to editable text formats'
    ],
    planned: [
      'Image upload with instant preprocessing preview and parameter controls',
      'Confidence-highlighted OCR output for quick manual correction',
      'Batch document processing for multi-page uploads',
      'Export to plain text, Markdown, and structured JSON formats'
    ],
    screenshots: ['Image upload concept', 'Preprocessing preview', 'Extracted text output'],
    technical: {
      frontend: 'Planned interface for image upload, live preprocessing preview, OCR results display, and in-place text correction.',
      backend: 'Python service handling image preprocessing, OCR execution, confidence scoring, and result formatting.',
      database: 'Optional document store for uploaded images, extracted text, processing metadata, and correction history.',
      apis: 'Planned endpoints for image upload, preprocessing job status, OCR result retrieval, and corrected text export.',
      ml: 'OpenCV preprocessing feeds Tesseract OCR, with planned integration of handwriting-specific recognition models (e.g., TrOCR or CRNN) as labeled training data grows.'
    },
    challenges: [
      'Handling the full spectrum of real-world image quality — inconsistent lighting, ink variation, paper texture, skew, and overlapping characters.',
      'Selecting preprocessing steps that improve OCR accuracy without destroying fine character detail in complex handwriting.'
    ],
    future: [
      'Integrate handwriting-specific deep learning models for higher accuracy on cursive and mixed scripts.',
      'Add confidence highlighting with an inline correction tool so users can fix extraction errors without leaving the app.',
      'Support batch processing for multi-page scans and folder-level digitization workflows.'
    ]
  }
];

/* ─────────────────────────────────────────────────────────────────
   VIDEO AUTOPLAY HELPER
   Paste this into your main JS entry point (index.js / App.jsx / main.js).
   It reads the video config from portfolioProjects and wires up autoplay
   for every video element on the page automatically.
───────────────────────────────────────────────────────────────── */

function initProjectVideos() {
  if (!window.portfolioProjects) return;

  window.portfolioProjects.forEach(project => {
    const vid = project.video;
    if (!vid || !vid.src || !vid.autoplay) return;

    const filename = vid.src.split('/').pop();
    const videoEls = document.querySelectorAll('video');

    videoEls.forEach(el => {
      const source = el.querySelector('source');
      const srcMatch =
        (el.src && el.src.includes(filename)) ||
        (source && source.src && source.src.includes(filename));

      if (srcMatch) {
        el.muted       = true;          // required for autoplay in all browsers
        el.autoplay    = true;
        el.loop        = vid.loop !== false;
        el.playsInline = true;          // required on iOS
        el.load();
        el.play().catch(() => {
          // Autoplay blocked by browser policy — will play on first user interaction
        });
      }
    });
  });
}

// Safe to call at any point — waits for DOM if not ready yet
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectVideos);
} else {
  initProjectVideos();
}