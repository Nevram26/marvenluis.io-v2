// Every fact on the site comes from public/Marven-Luis-resume.pdf. Update both together.

export const links = {
  email: "mailto:luis.marvenjoffre@gmail.com",
  linkedin: "https://www.linkedin.com/in/marven-luis/",
  github: "https://github.com/Nevram26",
  spotify: "https://open.spotify.com/playlist/2uUfbqzNmb6QnDMYh9EDsW",
  spotifyEmbed: "https://open.spotify.com/embed/playlist/2uUfbqzNmb6QnDMYh9EDsW?theme=0",
  resume: "/Marven-Luis-resume.pdf",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  title: "Full-stack developer building web and mobile products.",
  lead: "I'm Marven Luis, a 2026 Computer Science graduate in Quezon City, Philippines. Since November 2025 I've shipped production features on three development teams, working in TypeScript, React, NestJS, Django and PostgreSQL.",
  facts: [
    { label: "Currently", value: "Software Engineer at MetaWatt, since June 2026" },
    { label: "Education", value: "BS Computer Science, Saint Louis University, 2026" },
    { label: "Recognition", value: "3rd place, 2025 Meralco IDOL Hackathon" },
  ],
};

export const work = [
  {
    id: "metawatt",
    role: "Software Engineer",
    company: "MetaWatt",
    dates: "June 2026 to present",
    context: "AI-native startup. EduVerse e-learning platform, React frontend and a Node.js/NestJS REST API.",
    points: [
      "Built authentication, multi-school tenant isolation, real-time notifications, certificate issuance and file uploads across the React frontend and the NestJS API (70 merged PRs).",
      "Secured the API with global auth guards, tenant-scoped data access and strict JWT verification, with an HTTP regression test for each rejection case.",
      "Prevented conflicting updates when users act at the same time (invite redemption, certificate revocation, survey submission) with atomic SQL writes, and added a CI check that runs new migrations against existing data.",
      "Coached OJT interns on coding standards and AI-assisted workflows and reviewed their PRs.",
    ],
    stack: ["TypeScript", "React", "NestJS", "Prisma", "PostgreSQL", "Supabase"],
  },
  {
    id: "esca",
    role: "Full Stack Developer",
    company: "Esca",
    dates: "March to August 2026, part-time contract",
    context: "Team of 8. React Native/Expo mobile app and a Vite/React web app on a shared Supabase backend, for a government-funded agtech platform.",
    points: [
      "Eliminated three session race conditions by consolidating auth state into a layout-level guard and reusable React hooks.",
      "Built typed Supabase data-access services for buyers, vehicles and logistics providers, with validation and Jest/Vitest tests.",
      "Built QR scanning, telemetry views and role-based dashboards for farmers, coop admins and packing houses (83 merged PRs).",
    ],
    stack: ["React Native", "Expo", "React", "TypeScript", "Supabase"],
    website: "https://www.esca-agri.com/",
  },
  {
    id: "panpacific",
    role: "Full Stack Developer",
    company: "Panpacific University",
    dates: "November 2025 to June 2026, part-time contract",
    context: "Team of 8. Django and Wagtail CMS, PostgreSQL, AWS S3, Docker.",
    points: [
      "Built 15+ custom Wagtail page models and StreamField blocks plus 20+ responsive Tailwind sections, so non-technical staff can create and publish Academics, Admissions and Sustainability pages without a developer (79 merged PRs).",
    ],
    stack: ["Django", "Wagtail", "PostgreSQL", "Tailwind CSS", "AWS S3", "Docker"],
  },
];

export const projects = [
  {
    title: "VoltGuard",
    meta: "3rd place, Meralco IDOL Hackathon, November 2025",
    body: "An AI energy-waste monitor. I designed and built the mobile-first React frontend (dashboard, analytics, chatbot views) and the streak gamification system end to end: FastAPI endpoints, PostgreSQL schema, React UI and real-time Socket.IO alerts for high-usage and idle-device detections.",
    stack: "React 19, FastAPI, PostgreSQL, Redis, Socket.IO",
    link: "https://github.com/msmeralco/VoltGuard",
  },
  {
    title: "TB treatment outcome prediction",
    meta: "Computer Science thesis, May 2026",
    body: "A temporal model trained on DOH-CAR TB-DOTS records from 2015 to 2025. I built the hybrid Bi-LSTM model, the team's best on balanced accuracy and the only one that missed no treatment failures.",
    stack: "Python, Bi-LSTM, SHAP",
    link: "https://github.com/VladTemp27/TB-DOTS-CAR-CDSS",
  },
  {
    title: "Cache Game",
    meta: "Backend developer and database designer, January to March 2025",
    body: "A six-service microservices architecture: Java/JavaFX client, two Go services for real-time WebSocket gameplay and matchmaking, a Node.js REST API, MongoDB and Nginx. I co-developed the REST API and designed the MongoDB data-access layer for auth, game history and score updates.",
    stack: "Java, Go, Node.js, MongoDB, Docker Compose",
    link: "https://github.com/VladTemp27/cache-game",
  },
  {
    title: "Exit-interview platform",
    meta: "UI/UX designer and full stack developer, August to September 2024",
    body: "A dual-backend exit-interview platform (Node.js and PHP/Apache behind an Nginx reverse proxy, MariaDB, Docker Compose), shortlisted for university-wide adoption. I led a refactor that consolidated about 9,800 lines of legacy code across 88 files.",
    stack: "Node.js, PHP, MariaDB, Nginx, Docker",
    link: "https://github.com/loudiman/Exit-Interview-Question",
  },
  {
    title: "Lexi Logic",
    meta: "Multiplayer word game",
    body: "Players type words that appear on screen and the highest score wins. Duplicate entries don't count, rewarding vocabulary and fast thinking.",
    stack: "React, WebSocket",
    link: "https://github.com/Nevram26/lexi-logic",
  },
  {
    title: "Stock Pilot",
    meta: "Inventory management system",
    body: "A Java desktop app for three user roles, Purchases, Sales and Admin, each with its own tools for tracking stock and updating inventory.",
    stack: "Java",
    link: "https://github.com/Nevram26/InventoryManagement",
  },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer with paid experience since November 2025 across an AI-native e-learning startup, a government-funded agtech platform and a university CMS. I graduated from Saint Louis University in Baguio in 2026 with a BS in Computer Science, a Dean's Lister for seven of eight semesters.",
    "I build with Claude Code and Codex and coach interns on reviewing AI-written code, which mostly means catching the form update that would cascade-delete existing fields before it ships.",
    "Outside work: the gym, PC games, reading and travel.",
  ],
  skills: [
    { group: "Languages", items: "TypeScript, JavaScript, Python, SQL, HTML/CSS" },
    { group: "Frameworks and libraries", items: "React, React Native, Node.js, NestJS, Prisma, Django, FastAPI, Wagtail CMS, Tailwind CSS" },
    { group: "Databases", items: "PostgreSQL, Supabase, Redis" },
    { group: "AI-assisted development", items: "Claude Code, Codex, agentic coding workflows" },
    { group: "Machine learning", items: "Bi-LSTM time-series modeling, SHAP explainability" },
    { group: "Tools and practices", items: "Git, GitHub Actions, Docker, AWS S3, Jest, Vitest, Postman, Jira, REST APIs, CI/CD, Agile/Scrum" },
  ],
};

export const profile = {status: "Shipping at MetaWatt", bands: [], details: [
 ["Status", "Software Engineer at MetaWatt"], ["Here for", "Full-stack roles, contract work"], ["Hometown", "Quezon City, Philippines"], ["Education", "BS Computer Science, Saint Louis University, 2026"], ["Recognition", "3rd place, 2025 Meralco IDOL Hackathon"], ["Training", "Upper/lower split"]]};
export const facts = {mergedPRs: 232};
projects.push({title: "SEA Water", body: "An infographic site about water scarcity in the Philippines and SDG 6.", stack: "React", link: "https://github.com/Nevram26/SEA_water"}, {title: "AmalzenDX", body: "A rule-based symptom checker that matches symptoms against medical rules.", stack: "React", link: "https://github.com/Benny-Gil/Amalzen-Disease-Diagnosis"});

const summaries = ["An AI energy-waste monitor with real-time alerts and streaks.", "A temporal model predicting TB treatment outcomes.", "Real-time multiplayer gameplay across six microservices.", "A dual-backend platform for university exit interviews.", "A multiplayer word game rewarding vocabulary and fast thinking.", "A Java inventory app for Purchases, Sales and Admin.", "Water scarcity in the Philippines, explained through SDG 6.", "A symptom checker powered by rule-based medical logic."];
projects.forEach((p,i)=>p.summary=summaries[i]);

work[0].context = "EduVerse e-learning platform. React frontend and NestJS REST API.";
work[1].context = "Government-funded agtech platform. React Native mobile and React web, shared Supabase backend.";
