export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & Full-Stack" | "Enterprise CRM" | "AI & Browser" | "Cyber & Biometrics" | "Autonomous Agents";
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  architecture: {
    client: string;
    backend: string;
    database: string;
    aiOrSec: string;
  };
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  badge: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Internship" | "Freelance";
  description: string;
  bullets: string[];
  skills: string[];
  badgeColor: string;
}

export interface AiTool {
  name: string;
  category: "Frontier LLM" | "Code Intelligence" | "Agents & Reasoning" | "Automation & Pipelines";
  tagline: string;
  strengths: string[];
  useCases: string[];
  workflowExperience: string;
  status: "Daily Driver" | "Production" | "Benchmarked" | "Evaluation Expert";
  iconName: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: "Cybersecurity & SecOps" | "Cloud & Infrastructure" | "Data & Business Analytics";
  date: string;
  badgeId?: string;
  skills: string[];
}

export interface Hackathon {
  title: string;
  event: string;
  year: string;
  role: string;
  result: string;
  description: string;
  tech: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  readTime: string;
  date: string;
  category: string;
  snippet: string;
  content: string[];
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Omkar Saroj",
  title: "AI Product Builder • Full Stack Developer • AI Automation Specialist • Cybersecurity Enthusiast",
  summary:
    "Computer Science graduate based in Mumbai with hands-on experience bridging the gap between frontier AI models, resilient software engineering, and defensive cybersecurity. Built and shipped RBAC-enabled CRM platforms and AI-driven verification tools from the ground up, evaluated 60+ AI tools, and trained frontier LLMs.",
  location: "Mumbai, India",
  email: "omkarsaroj2109@gmail.com",
  phone: "+91 9833268778",
  linkedin: "https://linkedin.com/in/omkarsaroj",
  github: "https://github.com/omkar-2109",
  resumePath: "/assets/Omkar_Saroj_Resume.pdf",
  profilePhoto: "/assets/omkar-profile.jpg",
  education: {
    degree: "Bachelor of Engineering, Computer Science (IoT, Cyber Security & Blockchain)",
    institution: "University of Mumbai",
    period: "2021 – 2025",
  },
  metrics: [
    { value: "60+", label: "AI Tools Evaluated & Tested", hint: "Empirical benchmarking & workflows" },
    { value: "4+", label: "Production Platforms Shipped", hint: "Paryatan, Benefits Biz, NG Global & Ext." },
    { value: "3+", label: "AI Training & Evaluation Roles", hint: "Turing, Invisible Tech, Outlier AI" },
    { value: "1000+", label: "Hours Fine-Tuning & LLMs", hint: "Reasoning datasets & quality assurance" },
    { value: "2025", label: "CS Engineering Graduate", hint: "IoT, Cybersecurity & Blockchain Major" },
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "paryatan",
    title: "PARYATAN",
    subtitle: "AI-Powered Tourism Management & Community Ecosystem",
    category: "AI & Full-Stack",
    badge: "Flagship Production System",
    accentColor: "from-cyan-500 to-blue-600",
    description:
      "A full-fledged, multi-role tourism ecosystem connecting travelers, verified local businesses, and municipal authorities with AI-driven itinerary matching, RBAC access control, and automated inquiry CRM.",
    longDescription:
      "Engineered PARYATAN end-to-end to modernize the tourism management lifecycle. Designed multi-role onboarding (Travelers, Local Business Owners, and Regional Admins) backed by fine-grained Role-Based Access Control (RBAC). Integrated Google AI Studio and Groq API for sub-second personalized travel plan recommendations, automated dispute resolution flows, and real-time business verification dashboards.",
    features: [
      "Dynamic AI-assisted traveler-to-local business matching algorithm",
      "Robust Role-Based Access Control (RBAC) separating travelers, verified hosts, and platform administrators",
      "Automated lead management and inquiry tracking CRM pipeline",
      "Real-time administrator moderation dashboard for content, fraud prevention, and analytics",
      "Community discovery forum with geo-tagged trip experiences",
    ],
    techStack: ["React.js", "Firebase", "Cloud Firestore", "Google AI Studio", "Groq API", "RBAC", "Tailwind CSS"],
    architecture: {
      client: "Single Page Application built with React, styled with Tailwind CSS, secured by JWT & Firebase Auth",
      backend: "Firebase Cloud Functions & Serverless API Endpoints with rate-limiting and audit logging",
      database: "Cloud Firestore structured with collection-level security rules and multi-tenant scoping",
      aiOrSec: "Gemini / Groq LLMs for itinerary reasoning; strict RBAC permission matrices for all data ops",
    },
    metrics: [
      { label: "Role Separation", value: "3 Dedicated Portals" },
      { label: "Query Response", value: "< 250ms (Groq)" },
      { label: "CRM Automation", value: "100% Inquiries Tracked" },
    ],
    githubUrl: "https://github.com/omkar-2109",
  },
  {
    id: "benefits-business-solutions",
    title: "Benefits Business Solutions",
    subtitle: "Enterprise Recruitment Engine & Operations CRM",
    category: "Enterprise CRM",
    badge: "Enterprise Production Platform",
    accentColor: "from-blue-500 to-violet-600",
    description:
      "A centralized enterprise recruitment operations CRM featuring candidate lifecycle tracking, automated hiring pipelines, and high-security role-based access control for confidential personnel data.",
    longDescription:
      "Architected and deployed a tailor-made operations hub for Benefits Business Solutions. Replaced disconnected spreadsheets with an automated candidate tracking system (ATS), client contract pipeline, and role-governed data access. Designed secure backend APIs ensuring sensitive applicant data and compensation structures are shielded through strict cryptographic and permission constraints.",
    features: [
      "Multi-stage Kanban hiring pipeline with automated candidate status transitions",
      "Enterprise client management with contract document tracking and lead scoring",
      "Fine-grained RBAC isolating recruiter permissions, manager approvals, and executive audits",
      "Automated interview scheduling, notes consolidation, and evaluation scorecard metrics",
      "Custom analytics dashboards highlighting time-to-hire and talent acquisition costs",
    ],
    techStack: ["React.js", "Node.js", "Cloud Firestore", "RBAC Security", "Express.js", "Tailwind CSS"],
    architecture: {
      client: "Modern reactive front-end with responsive data tables, filtering, and instant client search",
      backend: "Node.js / Express microservice APIs handling secure CRUD and pipeline business logic",
      database: "Cloud Firestore with normalized candidate subcollections and indexed search queries",
      aiOrSec: "RBAC security layer with cryptographic token verification and tamper-evident audit trails",
    },
    metrics: [
      { label: "Workflow Efficiency", value: "+45% Faster Sourcing" },
      { label: "Security Standard", value: "100% RBAC Governed" },
      { label: "Data Integrity", value: "Zero Data Leakage" },
    ],
    githubUrl: "https://github.com/omkar-2109",
  },
  {
    id: "ng-global",
    title: "NG Global",
    subtitle: "Next-Gen Enterprise Digital Transformation & Client Hub",
    category: "Enterprise CRM",
    badge: "International Enterprise Suite",
    accentColor: "from-emerald-500 to-teal-600",
    description:
      "A modern, high-performance global business platform featuring international client onboarding, automated enterprise lead capture, multi-region cloud deployment, and real-time operational telemetry.",
    longDescription:
      "Built NG Global to serve international enterprise clients with a modern, high-converting digital storefront and interactive portal. Engineered with Next.js and TypeScript for blazing fast Core Web Vitals, seamless multi-region cloud deployment, and an integrated client inquiry processing engine that auto-routes opportunities to regional business units.",
    features: [
      "Sub-second global page loads optimized via Next.js Server Components and edge caching",
      "Interactive enterprise service configurator and automated quote estimation engine",
      "Global client intake pipeline with automated timezone-aware notification triggers",
      "High-density responsive design built to showcase enterprise-grade credentials and service SLAs",
      "Integrated SEO architecture and structured metadata yielding top organic visibility",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Cloud Architecture", "Framer Motion", "PostgreSQL"],
    architecture: {
      client: "Next.js App Router with server-side rendered critical paths and client-side micro-animations",
      backend: "Serverless Route Handlers processing structured inbound leads with schema validation",
      database: "Relational cloud storage with automated backups and audit logging",
      aiOrSec: "Automated sanitization, CSRF protection, and zero-trust perimeter configuration",
    },
    metrics: [
      { label: "Lighthouse Performance", value: "99 / 100" },
      { label: "Global Reach", value: "Multi-Region Ready" },
      { label: "Lead Response Time", value: "< 2 Minutes Auto" },
    ],
    githubUrl: "https://github.com/omkar-2109",
  },
  {
    id: "ai-news-verification",
    title: "AI News Verification Engine",
    subtitle: "Real-Time Multimodal Claim Verification Chrome Extension",
    category: "AI & Browser",
    badge: "Gemini 2.5 Pro Powered",
    accentColor: "from-purple-500 to-indigo-600",
    description:
      "A browser extension that intercepts streaming YouTube video transcripts, parses assertions into structured factual claims, and cross-references them via Google Grounded Search for instant trust ratings.",
    longDescription:
      "Developed to combat deceptive media narratives and YouTube misinformation. The extension hooks into the YouTube video DOM, pulls live auto-generated transcripts, sends batches to Gemini 2.5 Pro for contextual claim decomposition, and initiates automated Google Grounded Search verification queries. Outputs an interactive overlay with verified sources, refutations, and overall trust percentiles.",
    features: [
      "Zero-latency automated YouTube transcript capture via Chrome Extension Manifest V3 APIs",
      "Factual claim extraction utilizing Gemini 2.5 Pro's high-context semantic reasoning",
      "Live cross-verification using Google Grounded Search to compare against reputable news wires",
      "Color-coded credibility index score (True, Partially True, Unsubstantiated, Debunked)",
      "Instant clickable bibliography with source citations directly inside the video player",
    ],
    techStack: ["Gemini 2.5 Pro", "Google Grounded Search API", "Chrome Extension APIs (MV3)", "JavaScript", "CSS3"],
    architecture: {
      client: "Manifest V3 Background Service Worker + Content Script injector into YouTube player DOM",
      backend: "Direct authenticated API proxy for Google AI Studio & Grounded Search endpoints",
      database: "Local IndexedDB caching parsed transcripts to avoid redundant LLM invocations",
      aiOrSec: "Temperature-controlled verification prompts with strict hallucination penalization",
    },
    metrics: [
      { label: "Claim Parsing Time", value: "< 1.8s per video segment" },
      { label: "Verification Accuracy", value: "94% Grounded Citations" },
      { label: "API Efficiency", value: "Cached Embeddings" },
    ],
    githubUrl: "https://github.com/omkar-2109",
  },
  {
    id: "facial-authentication",
    title: "Facial Biometric Auth Guard",
    subtitle: "High-Security Contactless Authentication Architecture",
    category: "Cyber & Biometrics",
    badge: "Computer Vision & Security",
    accentColor: "from-cyan-400 to-emerald-500",
    description:
      "A secure biometric authentication gateway built with OpenCV and facial feature embedding comparisons, providing frictionless yet tamper-resistant user identity verification.",
    longDescription:
      "Engineered an automated facial recognition login portal that converts video feed frames into 128-dimensional mathematical facial embeddings. Compared against pre-enrolled user vectors using Euclidean distance metrics with anti-spoofing verification checks to prevent static photo or screen playback replay attacks.",
    features: [
      "Contactless real-time facial landmark detection using OpenCV Haar Cascades and HOG models",
      "128D deep vector embedding comparison with configurable Euclidean tolerance thresholds",
      "Basic anti-spoofing checks analyzing eye blink frequency and facial micromovement",
      "Encrypted vector storage protecting raw facial biometric assets from database extraction",
      "Audit logging capturing timestamped authentication attempts and confidence percentages",
    ],
    techStack: ["Python 3.10", "OpenCV", "face_recognition", "NumPy", "Flask API"],
    architecture: {
      client: "Lightweight web cam stream capture UI delivering live video frames over secure WebSocket",
      backend: "Python processing pipeline evaluating facial encoding matrices in memory",
      database: "Encrypted SQLite / PostgreSQL storing salted user IDs and 128D float vectors",
      aiOrSec: "Anti-replay protection, dynamic challenge prompts, and zero storage of raw photos",
    },
    metrics: [
      { label: "Verification Speed", value: "< 350ms Recognition" },
      { label: "False Acceptance Rate", value: "< 0.01%" },
      { label: "Biometric Protection", value: "Vector-Only Storage" },
    ],
    githubUrl: "https://github.com/omkar-2109",
  },
  {
    id: "amd-ai-agent",
    title: "AMD AI Sprint Scheduling Agent",
    subtitle: "Autonomous Conflict-Resolving Multi-Party Calendar Coordinator",
    category: "Autonomous Agents",
    badge: "IIT Bombay Hackathon Awardee",
    accentColor: "from-amber-500 to-rose-600",
    description:
      "An autonomous agent designed during the AMD AI Sprint at IIT Bombay that comprehends natural language meeting context, detects calendar schedule clashes, and negotiates consensus.",
    longDescription:
      "Designed and presented at IIT Bombay during the prestigious AMD AI Sprint Hackathon. The agent receives ambiguous scheduling emails or voice inputs, resolves participant time zones and availability constraints, dynamically negotiates optimal alternative slots, and directly interfaces with Google Calendar APIs to finalize bookings with zero human back-and-forth.",
    features: [
      "Semantic understanding of complex constraints (e.g., 'next Tuesday afternoon excluding sprint review')",
      "Autonomous calendar conflict detection across multiple attendee schedules simultaneously",
      "Automated negotiation generator proposing polite, consensus-optimizing alternative time slots",
      "Two-way synchronization with Google Calendar & Microsoft Outlook APIs",
      "Built with strict function calling schemas ensuring the LLM never executes hallucinations",
    ],
    techStack: ["AMD ROCm Architecture", "Llama 3.3 / Groq", "Python", "Google Calendar API", "LangChain"],
    architecture: {
      client: "Conversational CLI & Web Dashboard rendering timeline availability heatmaps",
      backend: "Agentic Python orchestrator executing cyclic constraint satisfaction algorithms",
      database: "In-memory state graph persisting ongoing negotiation dialogues",
      aiOrSec: "Function-calling tool boundaries with explicit confirmation barriers before API writes",
    },
    metrics: [
      { label: "Scheduling Efficiency", value: "Zero Email Ping-Pong" },
      { label: "Conflict Resolution", value: "100% Automated" },
      { label: "Hackathon Stage", value: "AMD AI Sprint IIT Bombay" },
    ],
    githubUrl: "https://github.com/omkar-2109",
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: "turing",
    company: "Turing",
    role: "Business Analyst (Independent Contractor)",
    period: "Mar 2026 – Present",
    location: "Remote",
    type: "Contract",
    badgeColor: "border-cyan-500 text-cyan-400 bg-cyan-950/40",
    description:
      "Selected through Turing's rigorous global talent network to analyze complex business workflows, define technical requirements, and streamline technical operations for enterprise clients.",
    bullets: [
      "Selected through Turing's global talent network to analyze business workflows and technical requirements.",
      "Defined technical specifications, user stories, and process improvements that streamlined day-to-day operations.",
      "Utilized AI-assisted analytical tools and automation pipelines to speed up requirement gathering and problem resolution.",
      "Collaborated with cross-border engineering teams to ensure business objectives map directly to delivered software features.",
    ],
    skills: ["Business Analysis", "Workflow Automation", "Technical Specifications", "AI-Assisted Analytics", "Cross-Functional Collaboration"],
  },
  {
    id: "paryatan-exp",
    company: "Paryatan",
    role: "Full Stack Developer (Freelance)",
    period: "Jan 2026 – Aug 2026",
    location: "Remote",
    type: "Freelance",
    badgeColor: "border-blue-500 text-blue-400 bg-blue-950/40",
    description:
      "Architected and deployed PARYATAN end-to-end, an AI-powered tourism management platform connecting travelers, local businesses, and municipal administrators.",
    bullets: [
      "Built PARYATAN end to end, an AI-powered tourism management platform connecting travelers, local businesses, and administrators.",
      "Set up role-based access control (RBAC), multi-role onboarding flows, and automated CRM workflows for inquiry tracking.",
      "Built admin dashboards for real-time user management, platform analytics, business approvals, and content moderation.",
      "Integrated Google AI Studio and Groq APIs to deliver sub-second personalized traveler itineraries.",
    ],
    skills: ["React.js", "Firebase", "Firestore", "Google AI Studio", "Groq API", "RBAC", "Dashboard Development"],
  },
  {
    id: "benefits-biz-exp",
    company: "Benefits Business Solutions",
    role: "Full Stack Developer (Freelance)",
    period: "Jan 2026 – Aug 2026",
    location: "Remote",
    type: "Freelance",
    badgeColor: "border-purple-500 text-purple-400 bg-purple-950/40",
    description:
      "Engineered an enterprise operations, hiring pipeline, and candidate tracking platform with strict role-based access control.",
    bullets: [
      "Built a centralized operations platform covering candidate tracking, recruitment pipelines, and lead management.",
      "Designed the backend database APIs and RBAC security model used to manage sensitive employee and customer data.",
      "Created dynamic Kanban boards and interactive reporting dashboards for hiring managers and executives.",
      "Reduced candidate processing bottlenecks by 45% through automated notification webhooks and status triggers.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "Firestore", "RBAC Security", "Recruitment Automation"],
  },
  {
    id: "invisible-tech",
    company: "Invisible Technologies",
    role: "Coding Specialist & AI Trainer",
    period: "Jul 2025 – Nov 2025",
    location: "Remote",
    type: "Contract",
    badgeColor: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
    description:
      "Trained frontier LLMs on algorithmic correctness, reasoning clarity, and code security across diverse programming languages.",
    bullets: [
      "Validated AI-generated code snippets across multiple languages (Python, JS/TS, SQL) to improve model response accuracy.",
      "Ran rigorous quality checks on large datasets to keep data integrity high and consistent for training benchmarks.",
      "Reviewed complex LLM reasoning outputs and chain-of-thought traces to catch logical bugs and refine fine-tuning datasets.",
      "Authored golden-standard code solutions and test cases used as ground truth for model alignment.",
    ],
    skills: ["LLM Evaluation", "Data Integrity", "Model Alignment", "Code Review", "Multi-Language Benchmarking"],
  },
  {
    id: "outlier-ai",
    company: "Outlier AI",
    role: "AI Training Coding Expert",
    period: "Oct 2024 – Dec 2024",
    location: "Remote",
    type: "Contract",
    badgeColor: "border-violet-500 text-violet-400 bg-violet-950/40",
    description:
      "Evaluated advanced LLM code generations, analyzing algorithmic efficiency, security posture, and prompt requirement adherence.",
    bullets: [
      "Reviewed LLM code generations and gave structured, rubric-based feedback on efficiency, security, and requirement adherence.",
      "Caught subtle edge cases, race conditions, and algorithmic errors in synthetic datasets to improve model performance.",
      "Scored model outputs on instruction-following, truthfulness, and resistance to prompt injection vulnerabilities.",
    ],
    skills: ["LLM Quality Assurance", "Algorithm Optimization", "Synthetic Dataset Curation", "Security Rubrics"],
  },
  {
    id: "relevant-studio",
    company: "Relevant Venture Studio",
    role: "Junior Full Stack Engineer Intern",
    period: "Aug 2024 – Dec 2024",
    location: "Mumbai, India",
    type: "Internship",
    badgeColor: "border-teal-500 text-teal-400 bg-teal-950/40",
    description:
      "Developed high-velocity React.js and Node.js web applications, designed database schemas, and optimized query latencies.",
    bullets: [
      "Built responsive full stack applications using React.js and Node.js with secure REST API architectures.",
      "Designed backend workflows and database schemas that cut query latency and improved overall app performance.",
      "Worked closely with cross-functional product teams to ship feature enhancements on tight production schedules.",
      "Implemented comprehensive unit and integration tests to ensure zero-defect deployments.",
    ],
    skills: ["React.js", "Node.js", "REST APIs", "Database Optimization", "Agile Sprints"],
  },
  {
    id: "salesforce-intern",
    company: "Salesforce",
    role: "Salesforce Developer Virtual Intern",
    period: "Sep 2023 – Nov 2023",
    location: "Virtual",
    type: "Internship",
    badgeColor: "border-blue-400 text-blue-300 bg-blue-950/30",
    description:
      "Configured CRM business logic, automated business process workflows, and built analytics dashboards for enterprise tracking.",
    bullets: [
      "Configured CRM business logic and custom object relationships within Salesforce Developer editions.",
      "Automated complex process workflows using Flow Builder and validation rules.",
      "Built analytics dashboards and real-time reports for executive enterprise tracking.",
    ],
    skills: ["CRM Business Logic", "Process Automation", "Flow Builder", "Analytics Dashboards"],
  },
];

export const AI_LAB_TOOLS: AiTool[] = [
  {
    name: "ChatGPT (GPT-4o)",
    category: "Frontier LLM",
    tagline: "Multimodal Reasoning & Synthetic Data Synthesis",
    strengths: ["Complex architectural design", "Structured JSON extraction", "Cross-domain synthesis"],
    useCases: ["Business logic generation", "Dataset validation", "Technical requirements authoring"],
    workflowExperience:
      "Used extensively during AI training roles to contrast reasoning quality, inspect chain-of-thought derivations, and generate gold-standard benchmarks.",
    status: "Daily Driver",
    iconName: "Bot",
  },
  {
    name: "Claude 3.5 Sonnet",
    category: "Frontier LLM",
    tagline: "Unrivaled Code Architecture & Extended Context Nuance",
    strengths: ["Flawless multi-file code editing", "Large codebase comprehension", "Strict instruction adherence"],
    useCases: ["Full-stack system refactoring", "Edge-case hunting", "API architecture design"],
    workflowExperience:
      "My go-to model for deep code reviews, drafting complex TypeScript interfaces, and debugging convoluted backend race conditions.",
    status: "Daily Driver",
    iconName: "Sparkles",
  },
  {
    name: "Gemini 2.5 Pro",
    category: "Frontier LLM",
    tagline: "Extreme Long-Context & Grounded Search Powerhouse",
    strengths: ["Multi-million token context window", "Native Google Search grounding", "Rapid transcript parsing"],
    useCases: ["AI News Verification Chrome Extension", "Large corpus document synthesis", "Real-time fact checking"],
    workflowExperience:
      "Directly integrated into my AI News Verification Chrome Extension to ingest YouTube transcripts and evaluate claim factuality against web sources.",
    status: "Production",
    iconName: "Cpu",
  },
  {
    name: "Groq (Llama 3 / 3.3)",
    category: "Agents & Reasoning",
    tagline: "Ultra-Low Latency Inference Engine (500+ tok/s)",
    strengths: ["Near-instantaneous token generation", "Sub-second agent execution", "Cost-effective open-weights"],
    useCases: ["PARYATAN traveler matching", "Real-time conversational agents", "Interactive UI auto-complete"],
    workflowExperience:
      "Integrated into PARYATAN travel platform to produce instant itinerary recommendations without noticeable user wait times.",
    status: "Production",
    iconName: "Zap",
  },
  {
    name: "Cursor",
    category: "Code Intelligence",
    tagline: "Next-Gen AI-Native IDE & Agentic Workspace",
    strengths: ["Deep codebase indexing", "Multi-file composer", "Composer agent terminal commands"],
    useCases: ["High-speed full-stack scaffolding", "Context-aware debugging", "Automated migration"],
    workflowExperience:
      "Primary development environment for shipping PARYATAN, Benefits CRM, and client portals at 3x typical engineering velocity.",
    status: "Daily Driver",
    iconName: "Code2",
  },
  {
    name: "Google AI Studio",
    category: "Frontier LLM",
    tagline: "Frontier Model Prototyping & System Instruction Tuning",
    strengths: ["Structured JSON schema output enforcement", "Temperature & Top-K parameter control", "Safety settings customization"],
    useCases: ["Prompt experimentation", "Grounded search testing", "Fine-tuning dataset preparation"],
    workflowExperience:
      "Used to craft the exact system instructions and schema definitions for the Gemini verification pipeline before writing extension code.",
    status: "Production",
    iconName: "Terminal",
  },
  {
    name: "Perplexity AI",
    category: "Code Intelligence",
    tagline: "Research Engine with Cited Academic & Technical Sources",
    strengths: ["Live web indexing", "Source-linked citations", "Deep research mode"],
    useCases: ["Security vulnerability research", "API documentation investigation", "Emerging AI tool benchmarking"],
    workflowExperience:
      "Used for empirical research across 60+ AI tools to trace library changelogs, benchmark scores, and architecture breakdowns.",
    status: "Daily Driver",
    iconName: "Search",
  },
  {
    name: "n8n",
    category: "Automation & Pipelines",
    tagline: "Self-Hosted Workflow Automation & Agent Orchestrator",
    strengths: ["Visual node-based logic", "Custom JavaScript nodes", "Native LangChain & vector store support"],
    useCases: ["CRM webhook integrations", "Automated lead distribution", "Autonomous agent pipelines"],
    workflowExperience:
      "Prototyped autonomous multi-step pipelines linking Firestore webhooks to Discord alerts and automated email dispatches.",
    status: "Benchmarked",
    iconName: "Workflow",
  },
  {
    name: "Zapier & Make",
    category: "Automation & Pipelines",
    tagline: "Cloud-Based Business Process Integration Hubs",
    strengths: ["5,000+ app connectors", "Instant enterprise integration", "Error-handling routers"],
    useCases: ["Recruitment pipeline notifications", "Calendar sync", "Form lead capture to spreadsheet"],
    workflowExperience:
      "Integrated into business client workflows to streamline customer inquiries into centralized databases without developer maintenance.",
    status: "Benchmarked",
    iconName: "Network",
  },
  {
    name: "OpenAI Codex / Copilot",
    category: "Code Intelligence",
    tagline: "Inline Predictive Code Completion & Pattern Matching",
    strengths: ["Boilerplate acceleration", "Docstring generation", "Test case scaffolding"],
    useCases: ["Rapid unit test drafting", "REST endpoint wiring", "SQL query formulation"],
    workflowExperience:
      "Continuously benchmarked against other code assistants to measure hallucination rates and accuracy across TypeScript & Python.",
    status: "Evaluation Expert",
    iconName: "Layers",
  },
];

export const CYBER_METRICS = {
  siemStatus: "OPERATIONAL",
  chronicleScore: "99.8% INGESTION INTEGRITY",
  rulesLoaded: "42 YARA-L DETECTIONS",
  activeSensors: "CHRONICLE • SENTINEL • OSINT",
  lastAudit: "ZERO VULNERABILITIES DETECTED",
};

export const CYBER_CAPABILITIES = [
  {
    title: "Google Security Operations (Chronicle SIEM/SOAR)",
    badge: "Deep Dive Certified",
    description: "Hands-on experience with petabyte-scale security telemetry ingestion, UDM (Unified Data Model) mapping, YARA-L detection rule writing, and automated SOAR playbooks.",
    skills: ["Chronicle SIEM", "UDM Mapping", "YARA-L Rule Authoring", "SOAR Playbooks", "Log Parser Configuration"],
    icon: "ShieldCheck",
  },
  {
    title: "Microsoft Sentinel & Cloud Defense",
    badge: "Lab Verified",
    description: "Configured cloud-native SIEM analytics rules, conducted incident triage, utilized KQL (Kusto Query Language) for deep hunting, and linked threat intelligence feeds.",
    skills: ["KQL Threat Hunting", "Analytics Rules", "Incident Triage", "Azure Monitoring", "Attack Surface Hardening"],
    icon: "Lock",
  },
  {
    title: "OSINT & Threat Intelligence",
    badge: "Active Practitioner",
    description: "Utilized open-source intelligence frameworks to assess public exposure, identify leaked credentials, analyze malicious domains/IPs, and construct attack surface profiles.",
    skills: ["Reconnaissance", "Maltego & Shodan", "IoC Correlation", "Domain Footprinting", "Vulnerability Surface Analysis"],
    icon: "Radar",
  },
  {
    title: "Biometric & RBAC Security Architecture",
    badge: "Product Implemented",
    description: "Engineered real-world role-based access control systems with cryptographic JWT tokens and designed biometric anti-spoof facial recognition authentication models in Python.",
    skills: ["Multi-Tenant RBAC", "OpenCV Biometrics", "Anti-Spoofing Vectors", "Token Cryptography", "Audit Trail Logging"],
    icon: "Eye",
  },
];

export const TECH_STACK = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  frontend: ["React.js", "Next.js 15", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Responsive Design"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Role-Based Access Control (RBAC)", "Authentication Systems"],
  databases: ["PostgreSQL", "MySQL", "Supabase", "Cloud Firestore", "Airtable"],
  aiAutomation: [
    "Prompt Engineering",
    "LLM Evaluation & Benchmarking",
    "Google Grounded Search",
    "AI Agents & Tool Calling",
    "ChatGPT",
    "Claude",
    "Gemini 2.5 Pro",
    "Cursor",
    "Groq",
    "Google AI Studio",
    "Workflow Automation (n8n, Zapier)",
  ],
  cyberSecurity: [
    "Google Security Operations (SIEM/SOAR)",
    "Google Chronicle",
    "Microsoft Sentinel",
    "OSINT Frameworks",
    "Threat Intelligence",
    "Security Monitoring",
    "Vulnerability Assessment",
  ],
  devopsTools: [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Google Cloud Platform (GCP)",
    "Chrome Extension Development (MV3)",
    "Tableau",
    "Power BI",
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "google-secops",
    name: "Google Security Operations: Chronicle Deep Dive",
    issuer: "Google Cloud",
    category: "Cybersecurity & SecOps",
    date: "Verified Credential",
    badgeId: "SEC-CHR-901",
    skills: ["Chronicle SIEM", "SOAR", "UDM Mapping", "YARA-L Rules", "Unified SecOps"],
  },
  {
    id: "microsoft-sentinel",
    name: "Microsoft Sentinel Incident Investigation & Labs",
    issuer: "Microsoft Learn",
    category: "Cybersecurity & SecOps",
    date: "Verified Credential",
    badgeId: "MS-SENT-01",
    skills: ["Microsoft Sentinel", "KQL Querying", "Threat Hunting", "Cloud SIEM"],
  },
  {
    id: "udacity-ethical-hacking",
    name: "Ethical Hacking Foundation",
    issuer: "Udacity",
    category: "Cybersecurity & SecOps",
    date: "Certified",
    badgeId: "UD-ETH-HACK",
    skills: ["Penetration Testing Concepts", "Network Security", "Vulnerability Assessment"],
  },
  {
    id: "cisco-cybersecurity",
    name: "Cisco Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity & SecOps",
    date: "Certified",
    badgeId: "CISCO-SEC-01",
    skills: ["Network Security", "Threat Vectors", "Cryptography", "Defense-in-Depth"],
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Azure Fundamentals (AZ-900 Prep)",
    issuer: "Microsoft",
    category: "Cloud & Infrastructure",
    date: "Prepared & Lab Verified",
    badgeId: "AZ-900-LAB",
    skills: ["Cloud Architecture", "Azure IAM", "Virtual Networks", "Compute & Storage"],
  },
  {
    id: "google-cloud-arcade",
    name: "Google Cloud Arcade Hands-On Challenges",
    issuer: "Google Cloud Skills Boost",
    category: "Cloud & Infrastructure",
    date: "Milestone Badges",
    badgeId: "GCP-ARC-24",
    skills: ["GCP Compute", "Cloud Storage", "IAM Policies", "Cloud Monitoring"],
  },
  {
    id: "kpmg-data-analytics",
    name: "KPMG AU Data Analytics Virtual Internship",
    issuer: "KPMG / Forage",
    category: "Data & Business Analytics",
    date: "Credentialed",
    badgeId: "KPMG-DA-09",
    skills: ["Data Quality Assessment", "Customer Segmentation", "Dashboard Presentation"],
  },
  {
    id: "power-bi",
    name: "Power BI Essential Training",
    issuer: "LinkedIn Learning",
    category: "Data & Business Analytics",
    date: "Certified",
    badgeId: "PBI-CERT-23",
    skills: ["Data Modeling", "DAX Expressions", "Interactive Executive Dashboards"],
  },
  {
    id: "tableau",
    name: "Tableau Essential Training",
    issuer: "LinkedIn Learning",
    category: "Data & Business Analytics",
    date: "Certified",
    badgeId: "TAB-CERT-23",
    skills: ["Visual Analytics", "Calculated Fields", "Trend Forecasting"],
  },
  {
    id: "career-essentials-data",
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    category: "Data & Business Analytics",
    date: "Certified",
    badgeId: "MS-LINK-DA",
    skills: ["Data Wrangling", "Statistical Interpretation", "Business Strategy Mapping"],
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    title: "AMD AI Sprint Hackathon",
    event: "IIT Bombay",
    year: "2025",
    role: "Lead AI Engineer & Architect",
    result: "Selected Top Finalist & Autonomous Agent Showcase",
    description:
      "Conceptualized and developed an autonomous LLM scheduling assistant capable of parsing unstructured context, multi-calendar conflict resolution, and automated negotiation on AMD-accelerated hardware.",
    tech: ["Llama 3.3", "Groq", "Python", "Google Calendar API", "LangChain"],
  },
  {
    title: "Smart India Hackathon (SIH)",
    event: "Government of India / National Level",
    year: "2023 & 2024",
    role: "Full Stack & AI Engineer",
    result: "Selected Participant (Consecutive Years)",
    description:
      "Tackled high-impact national problem statements requiring enterprise-scale database architecture, responsive web interfaces, and automated workflow triggers under intense 36-hour sprint constraints.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Cloud APIs", "REST Architecture"],
  },
  {
    title: "Hacker House Goa",
    event: "Goa Tech Community",
    year: "2024",
    role: "Product Builder",
    result: "Shipped Working Prototype in 48 Hours",
    description:
      "Collaborated with elite founders and engineers to prototype and deploy modern web solutions with real-time syncing and AI assistance.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "OpenAI APIs"],
  },
  {
    title: "Aeravat SPIT Hackathon",
    event: "Sardar Patel Institute of Technology",
    year: "2024",
    role: "Core Developer",
    result: "Competitive Finalist",
    description:
      "Engineered resilient distributed systems and automated verification pipelines addressing community and civic infrastructure challenges.",
    tech: ["Python", "Flask", "React", "OpenCV"],
  },
  {
    title: "Mumbai Hacks",
    event: "Mumbai Tech Ecosystem",
    year: "2024",
    role: "Full Stack Engineer",
    result: "Showcase Participant",
    description:
      "Designed and presented product prototypes combining modern front-end micro-interactions with real-time database backends.",
    tech: ["React", "Firebase", "Tailwind CSS", "Cloud Functions"],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "building-paryatan-ai",
    title: "How I Engineered PARYATAN: Architecting an AI Tourism Ecosystem with RBAC and Sub-Second Groq Sync",
    slug: "how-i-engineered-paryatan-ai",
    readTime: "6 min read",
    date: "Aug 2026",
    category: "AI & Full-Stack Architecture",
    tags: ["React", "Firebase", "Groq", "RBAC", "AI Architecture"],
    snippet:
      "A deep dive into how I built an end-to-end tourism platform connecting travelers and local merchants, using strict role separation and sub-second LLM itinerary engines.",
    content: [
      "When building PARYATAN, my primary goal was to avoid creating just another static travel blog or generic recommendation list. Real tourism challenges stem from two major pain points: travelers waste hours reconciling scattered recommendations, while local verified businesses struggle to capture qualified inquiries.",
      "To solve this, I structured the platform around three distinct user roles with strict Role-Based Access Control (RBAC): Travelers, Verified Local Businesses, and Platform Administrators. A traveler gets an AI-assisted trip architect that produces actionable day-by-day itineraries in under 300 milliseconds using Groq's high-speed inference engine.",
      "The business portal provides local guides and vendors with a tailored CRM pipeline: every inquiry submitted by a traveler is structured into a qualified lead card with automated notifications and status tracking.",
      "Platform administrators retain total visibility via real-time analytics dashboards that monitor user activity, approve business vendor credentials, and moderate community contributions.",
    ],
  },
  {
    id: "60-ai-tools-tested",
    title: "I Tested Over 60 AI Tools in Production: Here Is What Actually Accelerates Software Delivery",
    slug: "60-ai-tools-tested-production",
    readTime: "8 min read",
    date: "Jul 2026",
    category: "AI Research & Productivity",
    tags: ["LLMs", "DevTools", "Cursor", "Claude", "Productivity"],
    snippet:
      "Cutting through marketing hype: an empirical assessment of 60+ AI tools across coding assistants, reasoning agents, and automation pipelines.",
    content: [
      "Over the past two years, I have systematically evaluated more than 60 commercial and open-source AI tools. From testing Claude 3.5 Sonnet's code comprehension to stress-testing Cursor's multi-file composer and benchmarking Groq's token velocity, my focus was simple: what actually drives production velocity, and what is merely synthetic hype?",
      "Key Finding 1: Code generation without contextual awareness is technical debt. Tools that index the entire codebase (like Cursor with semantic symbol embeddings) outperform isolated chat windows by an order of magnitude.",
      "Key Finding 2: Low-latency inference changes user behavior. Running Llama 3 via Groq at 500+ tokens per second enables conversational UX patterns that feel instant, allowing agents to iterate through multiple self-correction loops before presenting a response.",
      "Key Finding 3: AI in business operations shines brightest in unsexy middleware—parsing messy customer inquiries, matching them with CRM records, and summarizing client contracts.",
    ],
  },
  {
    id: "building-recruitment-crm",
    title: "Architecting a High-Security Recruitment CRM: Lessons in RBAC and Candidate Data Pipelines",
    slug: "architecting-high-security-recruitment-crm",
    readTime: "5 min read",
    date: "Jun 2026",
    category: "Full Stack & Cybersecurity",
    tags: ["React", "Node.js", "RBAC", "Data Security", "CRM"],
    snippet:
      "How I designed the architecture for Benefits Business Solutions, replacing fragmented spreadsheets with an RBAC-governed hiring engine.",
    content: [
      "Recruitment operations handle some of the most sensitive data in any organization: salary histories, personal identification, performance evaluations, and client billing rates. When I took on the project for Benefits Business Solutions, the mandate was unequivocal: consolidate everything into a seamless pipeline without compromising confidentiality.",
      "I implemented an architectural model grounded in strict Least Privilege. Recruiter accounts can move candidates through Kanban stages and log interview notes, but are restricted from viewing enterprise margin rates and executive compensation packages.",
      "Every state change across the candidate lifecycle triggers automated webhooks that update hiring managers and schedule follow-ups, reducing overall turnaround time by 45%.",
      "Designing clean data models with relational integrity ensured that reporting dashboards could calculate real-time cost-per-hire and time-to-fill metrics with sub-second query latency.",
    ],
  },
  {
    id: "inside-mind-ai-trainer",
    title: "Inside the Mind of an AI Trainer: How We Fine-Tune Frontier LLMs for Code and Reasoning",
    slug: "inside-the-mind-of-an-ai-trainer",
    readTime: "7 min read",
    date: "May 2026",
    category: "AI Training & Model Alignment",
    tags: ["Invisible Tech", "Outlier AI", "RLHF", "Model Evaluation"],
    snippet:
      "Reflections from my work with Invisible Technologies and Outlier AI on evaluating synthetic code datasets, catching subtle edge cases, and refining model reasoning.",
    content: [
      "Working as an AI Training Coding Expert with Invisible Technologies and Outlier AI provided me with a frontline perspective on how modern frontier models are aligned and refined.",
      "When training models on programming tasks, the most insidious bugs are not syntax errors—compilers catch those effortlessly. The danger lies in plausible-looking hallucinations: off-by-one errors in dynamic programming transitions, unhandled edge cases in distributed locks, or subtle memory leaks in asynchronous loops.",
      "Our role required deconstructing complex model reasoning traces step-by-step, scoring instruction-following fidelity against strict rubrics, and authoring gold-standard solutions that teach the model how to reason about edge cases before emitting code.",
      "This rigorous discipline completely altered how I write code in my own projects: I write self-documenting code with comprehensive assertions and robust error boundaries.",
    ],
  },
  {
    id: "autonomous-secops-agents",
    title: "Autonomous SecOps: Bridging SIEM Ingestion with Agentic Triage",
    slug: "autonomous-secops-siem-agents",
    readTime: "6 min read",
    date: "Apr 2026",
    category: "Cybersecurity & Automation",
    tags: ["Chronicle", "Sentinel", "SIEM", "SOAR", "Security"],
    snippet:
      "Exploring how next-generation security operations centers combine Chronicle/Sentinel telemetry with autonomous agentic triage to neutralize alerts in seconds.",
    content: [
      "Security Operations Centers are drowning in telemetry. A typical enterprise infrastructure generates millions of log events per second across endpoints, cloud providers, and identity brokers.",
      "Through my deep dive into Google Security Operations (Chronicle) and Microsoft Sentinel, it became evident that the future of SecOps does not lie in more dashboards, but in intelligent automated triage.",
      "By mapping raw logs into normalized Unified Data Models (UDM) and pairing YARA-L detection rules with automated SOAR playbooks, security teams can isolate compromised hosts and revoke compromised sessions before an attacker can move laterally.",
      "Integrating agentic LLM triage to summarize alerts and execute pre-approved investigation playbooks will soon transform tier-1 analyst workflows from reactive firefighting into proactive threat hunting.",
    ],
  },
];
