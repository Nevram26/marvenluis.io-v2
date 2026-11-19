// Sources: public/Marven-Luis-resume.pdf for work, education and skills; each project's repository
// (commits and PRs authored by Marven) for project roles, dates and contributions. Update them together.

export const links = {
  email: "mailto:luis.marvenjoffre@gmail.com",
  linkedin: "https://www.linkedin.com/in/marven-luis/",
  github: "https://github.com/Nevram26",
  spotify: "https://open.spotify.com/playlist/2uUfbqzNmb6QnDMYh9EDsW",
  spotifyEmbed: "https://open.spotify.com/embed/playlist/2uUfbqzNmb6QnDMYh9EDsW?theme=0",
  resume: "/Marven-Luis-resume.pdf",
};

export const profile = {
  headline: "Full-stack developer: React, NestJS, Django",
  status: "Software Engineer at MetaWatt",
  bands: [],
  details: [
    ["Here for", "Full-stack roles, contract work"],
    ["Experience", "3 dev teams since November 2025, 232 merged PRs"],
    ["Education", "BS Computer Science, Saint Louis University, 2026"],
    ["Honors", "Dean's Lister, 7 of 8 semesters"],
    ["Recognition", "3rd place, 2025 Meralco IDOL Hackathon"],
  ],
};

// The first three points of each job stay visible; the rest sit behind "More contributions".
export const work = [
  {
    id: "metawatt",
    role: "Software Engineer",
    company: "MetaWatt",
    dates: "June 2026 to present",
    context: "AI-native startup. EduVerse e-learning platform: React frontend and NestJS REST API on Prisma and PostgreSQL/Supabase.",
    points: [
      "Built authentication, multi-school tenant isolation, real-time notifications, certificate issuance and file uploads across the React frontend and the NestJS API (70 merged PRs).",
      "Secured the API with global auth guards, tenant-scoped data access and strict JWT verification, with an HTTP regression test for each rejection case.",
      "Prevented conflicting updates when users act at the same time (invite redemption, certificate revocation, survey submission) using atomic SQL writes.",
      "Added a CI check that runs new database migrations against existing data before they merge.",
      "Reviewed intern pull requests, catching issues such as a form update that would have cascade-deleted existing fields.",
      "Trained newly onboarded interns on MetaWatt's AI-assisted development workflows and how to use AI coding tools effectively.",
    ],
    stack: ["TypeScript", "React", "NestJS", "Prisma", "PostgreSQL", "Supabase"],
  },
  {
    id: "esca",
    role: "Full Stack Developer",
    company: "Esca",
    dates: "March to August 2026, part-time contract",
    context: "Team of 8. Government-funded agtech platform for farmers, coop admins and packing houses: React Native/Expo mobile app and Vite/React web app on a shared Supabase backend.",
    points: [
      "Eliminated three session race conditions by consolidating auth state into a layout-level guard and reusable React hooks.",
      "Built QR scanning, telemetry views and role-based dashboards for farmers, coop admins and packing houses (83 merged PRs).",
      "Built typed Supabase data-access services for buyers, vehicles and logistics providers, with validation and Jest/Vitest tests.",
    ],
    stack: ["React Native", "Expo", "React", "TypeScript", "Supabase", "Jest", "Vitest"],
    website: "https://www.esca-agri.com/",
  },
  {
    id: "panpacific",
    role: "Full Stack Developer",
    company: "Panpacific University",
    dates: "November 2025 to June 2026, part-time contract",
    context: "Team of 8. University website CMS on Django and Wagtail, PostgreSQL, AWS S3 and Docker.",
    points: [
      "Built 15+ custom Wagtail page models and StreamField blocks, so non-technical staff can create and publish Academics, Admissions and Sustainability pages without a developer.",
      "Built 20+ responsive Tailwind sections used across those pages (79 merged PRs).",
    ],
    stack: ["Django", "Wagtail", "PostgreSQL", "Tailwind CSS", "AWS S3", "Docker"],
  },
];

export const skills = [
  { group: "Frontend", items: "TypeScript, JavaScript, React, React Native (Expo), Tailwind CSS, HTML/CSS" },
  { group: "Backend and APIs", items: "Node.js, NestJS, Django, Wagtail CMS, FastAPI, REST APIs, Socket.IO" },
  { group: "Data", items: "PostgreSQL, Supabase, Prisma, Redis, MongoDB, SQL" },
  { group: "Testing and delivery", items: "Jest, Vitest, HTTP regression tests, GitHub Actions, Docker, AWS S3, Git" },
  { group: "Machine learning", items: "Python, PyTorch (Bi-LSTM), ONNX Runtime Web, SHAP" },
  { group: "AI-assisted development", items: "Claude Code, Codex, agentic coding workflows" },
  { group: "Ways of working", items: "Code review, Agile/Scrum, Jira, Postman" },
];
export const aiNote = "I use AI coding tools the way I'd treat any contributor's code: I review it, test it and own what gets merged.";

// Featured team projects, in display order. Images live in public/images.
export const projects = [
  {
    title: "VoltGuard",
    summary: "Hackathon energy-waste monitor with live alerts.",
    link: "https://github.com/msmeralco/VoltGuard",
    image: "volt-guard.webp",
  },
  {
    title: "TB treatment outcome prediction",
    summary: "A Bi-LSTM that flags TB treatment failure early.",
    link: "https://github.com/VladTemp27/TB-DOTS-CAR-CDSS",
    image: "bi-lstm.webp",
  },
  {
    title: "Cache Game",
    summary: "Multiplayer card game on Go and Node.js services.",
    link: "https://github.com/VladTemp27/cache-game",
    image: "cache-game.webp",
  },
  {
    title: "Exit-interview platform",
    summary: "Alumni exit surveys on a Node.js and PHP backend.",
    link: "https://github.com/loudiman/Exit-Interview-Question",
    image: "exit-interview.webp",
  },
];


export const about = {
  paragraphs: [
    "I'm a full-stack developer with paid experience on three development teams since November 2025: MetaWatt, an AI-native e-learning startup; Esca, a government-funded agtech platform; and Panpacific University's Wagtail CMS. I work across React and React Native frontends, NestJS and Django backends, and PostgreSQL/Supabase.",
    "Most of my recent work is the part users only notice when it breaks: authentication, keeping each school's data separate, safe writes when two people act at once, and migrations that survive real data.",
  ],
  lookingFor: "Teams shipping useful software, with code review, shared ownership and room to grow.",
};

export const interests = [
  ["Fitness", "I work out. Upper/lower split, four days a week."],
  ["Music", "Emo, post-hardcore, screamo, metalcore, OPM, rap, R&B"],
  ["Games", "Monster Hunter, Warframe, Bloons, League of Legends, CS2 and AQW"],
];
