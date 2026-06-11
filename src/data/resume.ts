// Single source of truth for everything rendered on the site.

export const profile = {
  name: "Priyanshu Kumar Rai",
  alias: "devgambo",
  statement:
    "Full-stack engineer building multi-agent AI systems — LLM pipelines, secure platforms, and the infrastructure that keeps them honest.",
  location: "Mangaluru, India",
  origin: "Lucknow, India",
  education: "B.Tech @ NITK Surathkal '27",
  focus: ["Gen AI", "Full-stack", "DevOps"],
  available: true,
  email: "devgambo.work@gmail.com",
};

export const links = [
  { label: "GitHub", href: "https://github.com/Devgambo", handle: "Devgambo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devgambo/", handle: "devgambo" },
  { label: "X", href: "https://x.com/Priyyanshuu", handle: "Priyyanshuu" },
  { label: "LeetCode", href: "https://leetcode.com/u/PriyanshuRai2005/", handle: "PriyanshuRai2005" },
  { label: "Instagram", href: "https://www.instagram.com/priyyyansshu/", handle: "priyyyansshu" },
  { label: "Email", href: "mailto:devgambo.work@gmail.com", handle: "devgambo.work@gmail.com" },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  place: string;
  current: boolean;
  points: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    company: "Inxtinct Security",
    role: "SDE Intern",
    period: "Dec 2025 — May 2026",
    place: "London, UK · Remote",
    current: false,
    points: [
      "Built an LMS platform with RBAC, rate limiting, and secure REST APIs — AWS S3 for image storage, Mux for protected video delivery.",
      "Shipped Osiris, the super-admin dashboard for Inxtinct's email-security platform: centralized control over security configs and user management.",
      "Ran production on AWS EC2 with CI/CD via GitHub Actions, enforcing security best practices end-to-end.",
    ],
    stack: ["Next.js", "Sanity CMS", "AWS S3 / EC2", "Mux", "GitHub Actions"],
  },
  {
    company: "Chain Salad",
    role: "Developer",
    period: "Jan 2026 — Jun 2026",
    place: "Mangalore, India · Part-time",
    current: true,
    points: [
      "Built a digital storefront with Stripe & PayPal — idempotent webhook handlers and atomic DB writes so no transaction is ever double-processed.",
      "Architected secure file delivery via S3 pre-signed URLs and IAM roles; automated transactional email through ZeptoMail.",
    ],
    stack: ["Next.js", "Prisma", "Stripe", "PayPal", "AWS S3 / IAM", "ZeptoMail"],
  },
  {
    company: "onQuest",
    role: "Frontend Developer",
    period: "Jan 2025 — Sep 2025",
    place: "Remote",
    current: false,
    points: [
      "Owned frontend development for the onQuest platform — built the UI and wired it to the backend APIs.",
      "Shipped responsive, typed interfaces with React, Next.js, and Tailwind.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  tag: string;
  oneLiner: string;
  detail: string[];
  stack: string[];
  github?: string;
  live?: string;
  award?: string;
};

export const projects: Project[] = [
  {
    id: "easyops",
    index: "01",
    title: "EasyOps",
    year: "2026",
    tag: "Autonomous CI/CD agent",
    award: "1st place · HackToFuture 4.0 · 700+ teams",
    oneLiner: "Multi-agent system that watches your CI, finds the root cause, and raises the fix PR itself.",
    detail: [
      "LangGraph multi-agents auto-detect GitHub CI failures, trace root causes through a Repository Structure Index (RSI) — the whole codebase mapped into a vector-indexed schema for precise retrieval within LLM token limits.",
      "pgvector episodic memory (HNSW) gives dynamic few-shot RAG on past fixes; vendor-agnostic CD adapters cover AWS, GCP, and Azure through one unified failure context.",
      "Enforces a 3-tier PR quality gate with Telegram moderation before anything merges.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "GitHub MCP"],
    github: "https://github.com/Devgambo",
  },
  {
    id: "compliance-checker",
    index: "02",
    title: "AI Compliance Checker",
    year: "2026",
    tag: "Multi-agent RAG pipeline",
    oneLiner: "Reads structural engineering drawings and checks them against Indian Standards — 50% less review time.",
    detail: [
      "Orchestrator–Specialist–Validator agent pipeline parses complex RCC drawings and extracts 22+ structural parameters dynamically.",
      "RAG over ChromaDB digests the highly unstructured IS 456 / SP 34 standards — images and tables included — then automates compliance decisions and generates PDF reports.",
      "Where civil engineering (the degree) meets AI engineering (the obsession).",
    ],
    stack: ["Python", "FastAPI", "React", "LangChain", "ChromaDB", "Supabase"],
    github: "https://github.com/Devgambo/Automated-IS-Code-Compliance-Checker",
  },
  {
    id: "codesync",
    index: "03",
    title: "CodeSync",
    year: "2025",
    tag: "Realtime collab IDE",
    oneLiner: "Write code together with live cursors, a shared whiteboard, and an AI pair in the corner.",
    detail: [
      "Collaborative editor with a shared file system and live multi-cursor editing, plus an integrated whiteboard for the parts of programming that happen before code.",
      "AI chat powered by Gemini sits inside the workspace for in-context help.",
    ],
    stack: ["Next.js", "Convex", "Liveblocks", "Gemini API"],
    github: "https://github.com/Devgambo/CodeSync",
    live: "https://code-sync-sepia.vercel.app",
  },
  {
    id: "hackverse",
    index: "04",
    title: "HackVerse",
    year: "2025",
    tag: "Hackathon platform",
    oneLiner: "End-to-end hackathon hosting — creation, registration, teams, submissions, judging.",
    detail: [
      "Full event lifecycle in one place for organizers and participants: event creation, registration, team formation, project submission, and judging.",
      "Next.js front, NestJS back, PostgreSQL on Neon, RTK Query for state — built deliberately around SOLID principles.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "RTK Query"],
    github: "https://github.com/adithya-adee/hackverse",
    live: "https://hackverse-sandy.vercel.app",
  },
  {
    id: "fitstake",
    index: "05",
    title: "FitStake",
    year: "2025",
    tag: "On-chain fitness staking",
    award: "Built at EthOnline '25",
    oneLiner: "Stake crypto on your fitness goals — hit them or lose it. Accountability with consequences.",
    detail: [
      "Decentralized fitness staking platform: smart contracts hold the stake, on-chain activity tracking decides whether you get it back.",
    ],
    stack: ["Solidity", "React", "Node.js", "Smart Contracts"],
    github: "https://github.com/Kushagra1122/fitStake",
  },
  {
    id: "pokewars",
    index: "06",
    title: "PokeWars",
    year: "2025",
    tag: "On-chain RPG shooter",
    award: "Built at EthGlobal '25, New Delhi",
    oneLiner: "An RPG shooter where the loot is real — items live on-chain in a blockchain marketplace.",
    detail: [
      "Game economy backed by a blockchain marketplace; built in a weekend at EthGlobal New Delhi.",
    ],
    stack: ["Solidity", "React", "Blockchain"],
    github: "https://github.com/Devgambo",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "Rust", "Solidity", "Java"] },
  { group: "Gen AI", items: ["LangChain", "LangGraph", "RAG pipelines", "MCP", "Hugging Face", "Ollama", "pgvector", "ChromaDB"] },
  { group: "Frontend", items: ["React", "Next.js", "Redux", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "FastAPI", "Redis", "JWT"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"] },
  { group: "DevOps & Cloud", items: ["AWS S3 · EC2 · IAM · Bedrock", "Docker", "GitHub Actions", "CI/CD"] },
];

export const recognition = [
  {
    title: "HackToFuture 4.0 — Winner",
    detail: "1st place out of 700+ teams (DevOps theme) for EasyOps, an autonomous AI-powered CI/CD agent. Mangalore, Apr 2026.",
    big: true,
  },
  {
    title: "EthGlobal '25, New Delhi",
    detail: "Built PokeWars — on-chain RPG shooter with a blockchain marketplace.",
    big: false,
  },
  {
    title: "EthOnline '25",
    detail: "Built FitStake — decentralized fitness staking with smart contracts.",
    big: false,
  },
  {
    title: "Web Head — NRL, NITK",
    detail: "Developed and maintain the club's official website.",
    big: false,
  },
  {
    title: "PACE, NITK",
    detail: "Leading projects and contributing to technical club initiatives.",
    big: false,
  },
];

export const education = [
  {
    school: "National Institute of Technology Karnataka, Surathkal",
    degree: "B.Tech Civil Engineering · Minor in Information Technology",
    period: "2023 — 2027",
    note: "GPA 8.37 / 10 (major) · 8.75 / 10 (minor)",
  },
  {
    school: "Army Public School, LBS Marg, Lucknow",
    degree: "Class XII — PCM + Computer Science",
    period: "2010 — 2022",
    note: "XII: 90.2% · X: 97.4%",
  },
];

export const techLogos: { name: string; src?: string }[] = [
  { name: "React", src: "/tech-stack/React.png" },
  { name: "Next.js", src: "/tech-stack/Next.js.png" },
  { name: "TypeScript", src: "/tech-stack/TypeScript.png" },
  { name: "Python", src: "/tech-stack/Python.png" },
  { name: "C++", src: "/tech-stack/Cpp.png" },
  { name: "Node.js", src: "/tech-stack/Node.js.png" },
  { name: "NestJS", src: "/tech-stack/NestJS.png" },
  { name: "FastAPI", src: "/tech-stack/FastAPI.png" },
  { name: "PostgreSQL", src: "/tech-stack/PostgreSQL.png" },
  { name: "MongoDB", src: "/tech-stack/MongoDB.png" },
  { name: "Docker", src: "/tech-stack/Docker.png" },
  { name: "AWS", src: "/tech-stack/AWS.png" },
  { name: "Redux", src: "/tech-stack/Redux.png" },
  { name: "Git", src: "/tech-stack/Git.png" },
  { name: "GitHub", src: "/tech-stack/GitHub.png" },
  { name: "Postman", src: "/tech-stack/Postman.png" },
  { name: "Tailwind", src: "/tech-stack/Tailwind.png" },
  { name: "Express", src: "/tech-stack/Express.png" },
  { name: "MySQL", src: "/tech-stack/MySQL.png" },
];
