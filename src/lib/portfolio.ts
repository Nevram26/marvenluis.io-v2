import type { StaticImageData } from "next/image";
import esca from "@/assets/projects/esca-logo.svg";
import panpacific from "@/assets/projects/panpacific-logo.webp";
import exitInterview from "@/assets/projects/exit-interview.png";
import cache from "@/assets/projects/cache-game.png";

export const profile = {
  name: "Marven Joffre Luis",
  shortName: "Marven Luis",
  url: "https://marvenluis.io",
  github: "https://github.com/Nevram26",
  linkedin: "https://www.linkedin.com/in/marven-luis/",
  resume: "/Marven_Luis_Resume.pdf",
  description:
    "Full-stack software engineer building practical web products, from agricultural trading platforms to self-service university systems.",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  image: StaticImageData;
  imageType: "logo" | "screenshot";
  imageAlt: string;
  surface: "sage" | "stone" | "sand";
  focus: string;
  problem: string;
  work: string[];
  decisions: { title: string; description: string }[];
  outcome: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "esca",
    name: "ESCA",
    category: "Agricultural trading platform",
    summary:
      "Connecting farmers directly with buyers—and building the tools that keep produce moving.",
    role: "Full-stack development",
    stack: ["React", "TypeScript", "Django", "PostgreSQL"],
    image: esca,
    imageType: "logo",
    imageAlt: "ESCA agricultural platform logo",
    surface: "sage",
    focus: "Harvest tracking · Produce flow · Greenhouse monitoring",
    problem:
      "Farming communities need a direct route to buyers and practical tools to track produce. ESCA is a government-funded agtech platform built around those day-to-day needs.",
    work: [
      "Built tools for scanning harvests and tracking produce through the platform.",
      "Developed interfaces for monitoring greenhouse conditions.",
      "Delivered features across the React and TypeScript frontend and Django-backed application.",
    ],
    decisions: [
      {
        title: "A typed frontend, backed by Django",
        description:
          "The platform combines React and TypeScript interfaces with a Django backend and PostgreSQL data storage. My work connects these layers around agricultural workflows.",
      },
      {
        title: "Organize around real operations",
        description:
          "Harvest scanning, produce tracking, and greenhouse monitoring are distinct workflows. Keeping those activities clear in the interface makes the platform more useful to the people operating it.",
      },
    ],
    outcome:
      "Contributed to a government-funded platform used by farming communities, shipping features throughout a four-month engagement.",
  },
  {
    slug: "panpacific-cms",
    name: "Panpacific University",
    category: "Self-service content management",
    summary:
      "Giving university staff the building blocks to manage their own web content. No code required.",
    role: "Full-stack development",
    stack: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    image: panpacific,
    imageType: "logo",
    imageAlt: "Panpacific University logo",
    surface: "stone",
    focus: "Reusable content blocks · Page building · Course discovery",
    problem:
      "University content needs to stay current without requiring a developer for every page update. The CMS gives non-technical staff a self-service way to build and maintain pages.",
    work: [
      "Created reusable blocks for hero sections, FAQs, and galleries.",
      "Built course filters and content sections for university audiences.",
      "Delivered sections for Academics, Admissions, and Sustainability over a seven-month engagement.",
    ],
    decisions: [
      {
        title: "Reusable blocks instead of one-off pages",
        description:
          "Hero, FAQ, and gallery blocks provide a repeatable foundation for content creation. Staff can work within a consistent visual structure without writing code.",
      },
      {
        title: "Separate content needs from presentation",
        description:
          "The React frontend, Node.js backend, and Supabase stack support a content-management workflow rather than a collection of manually edited pages.",
      },
    ],
    outcome:
      "Enabled university staff to manage content themselves, with reusable sections delivered for multiple university departments.",
  },
  {
    slug: "exit-interview",
    name: "Exit-Interview Platform",
    category: "University feedback system",
    summary:
      "Making a student feedback platform easier to maintain and ready for broader university use.",
    role: "Refactoring and backend development",
    stack: ["Node.js", "PHP", "MariaDB", "Docker"],
    image: exitInterview,
    imageType: "screenshot",
    imageAlt: "Exit-Interview Platform login screen for graduating students",
    surface: "sand",
    focus: "Dual-backend integration · Refactoring · Containerization",
    problem:
      "The platform collects feedback from graduating students about their learning experience. Its Node.js and PHP backends needed to be maintained together as the system was considered for wider university adoption.",
    work: [
      "Led a refactor spanning 9,800 lines across 88 files.",
      "Worked with a dual-backend application using Node.js and PHP on Apache.",
      "Used MariaDB and Docker Compose as part of the application stack.",
    ],
    decisions: [
      {
        title: "Work within the existing architecture",
        description:
          "The system uses both Node.js and PHP/Apache. The refactoring work improved the existing codebase rather than treating a full rewrite as the default.",
      },
      {
        title: "Run the stack together",
        description:
          "Docker Compose brings the application services and MariaDB database into one defined stack, making the multi-service architecture explicit.",
      },
    ],
    outcome:
      "The platform was shortlisted for university-wide adoption. The refactor covered 88 files; adoption beyond the shortlist is not claimed.",
    github: "https://github.com/loudiman/Exit-Interview-Question",
  },
  {
    slug: "cache-game",
    name: "Cache Game",
    category: "Distributed game platform",
    summary:
      "A six-service game platform spanning Java, Go, and Node.js, with a shared data-access layer.",
    role: "MongoDB data-access development",
    stack: ["Java / JavaFX", "Go", "Node.js", "MongoDB", "Docker"],
    image: cache,
    imageType: "screenshot",
    imageAlt: "Cache Game application interface",
    surface: "stone",
    focus: "Six services · Authentication data · Game history",
    problem:
      "A multi-service game needs a consistent way to store authentication information and game history, while its desktop client and backend services use different languages.",
    work: [
      "Designed the MongoDB data-access layer for authentication and game history.",
      "Worked within a six-service architecture using Java/JavaFX, Go services, and a Node.js REST API.",
      "Contributed to a stack containerized with Docker Compose.",
    ],
    decisions: [
      {
        title: "Define data-access responsibilities",
        description:
          "The MongoDB data-access layer focuses on authentication and game history, giving persistence a clear responsibility within the broader service architecture.",
      },
      {
        title: "Make service composition explicit",
        description:
          "Docker Compose describes how the six services run together. The platform combines a Java/JavaFX client, Go services, a Node.js REST API, and MongoDB.",
      },
    ],
    outcome:
      "Built a data-access layer within a containerized, six-service academic project. No production usage or performance metrics are claimed.",
    github: "https://github.com/VladTemp27/cache-game",
  },
];

export const additionalProjects = [
  {
    name: "Stock Pilot",
    description: "Role-based inventory management in Java.",
    href: "https://github.com/Nevram26/InventoryManagement",
    category: "Java · Desktop",
  },
  {
    name: "Lexi Logic",
    description: "A multiplayer word game with real-time interaction.",
    href: "https://github.com/Nevram26/lexi-logic",
    category: "React · WebSocket",
  },
  {
    name: "SEA Water",
    description:
      "An information resource on water scarcity in the Philippines.",
    href: "https://github.com/Nevram26/SEA_water",
    category: "React · Web",
  },
  {
    name: "AmalzenDX",
    description: "An academic, rule-based symptom-checking application.",
    href: "https://github.com/Benny-Gil/Amalzen-Disease-Diagnosis",
    category: "React · Rule-based logic",
  },
];

export const skills = [
  { name: "Frontend", items: "React, TypeScript, JavaScript, Tailwind CSS" },
  { name: "Backend", items: "Node.js, Django, Python, PHP, Java, Go" },
  { name: "Data", items: "PostgreSQL, Supabase, MongoDB, MariaDB" },
  { name: "Tools & delivery", items: "Git, GitHub, Docker, Vercel" },
];
