import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  Gauge,
  HeartPulse,
  KeyRound,
  Landmark,
  LayoutDashboard,
  Network,
  Pill,
  Radar,
  ScrollText,
  Server,
  ShieldCheck,
  ShoppingBag,
  Webhook,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Identity                                                          */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Arfaoui Badi",
  role: "Software Engineer",
  tagline: "Core Banking & Financial Technology Systems",
  email: "ArfaouiBadi19@gmail.com",
  linkedin: "https://www.linkedin.com/in/badi-arfaoui/",
  github: "https://github.com/ArfaouiBadi",
  resumeUrl:
    "https://drive.google.com/file/d/1tW60TQRfQlun7ij1iD4kbZOCtgQviTLv/view?usp=drive_link",
};

/* EmailJS — public (client-side) credentials, safe to ship.
   Move to import.meta.env.VITE_* if you ever need to rotate them. */
export const emailjs = {
  serviceId: "service_db8ozjk",
  templateId: "template_v3tddma",
  publicKey: "YUoSQ0XFHglsNCzcV",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  About                                                             */
/* ------------------------------------------------------------------ */

export const aboutParagraph =
  "I'm a software engineer from Tunis working on systems for banks and financial institutions. Most recently I built a SWIFT messaging platform at Banking Intelligence Consulting — creating, validating and converting MT and ISO 20022 messages, with the dashboards and access control around them. I care about the unglamorous parts of financial software: validation, auditability, and interfaces that make dense data readable. Before banking, I shipped SaaS products for healthcare, pharmacy and e-commerce teams.";

export const aboutHighlights = [
  "Core banking systems",
  "Swift MT / MX messaging",
  "ISO 20022 transformation",
  "Financial analytics dashboards",
  "Cybersecurity platforms",
  "Enterprise web applications",
];

/* ------------------------------------------------------------------ */
/*  Expertise / Skills                                                */
/* ------------------------------------------------------------------ */

export interface SkillDomain {
  title: string;
  summary: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    title: "Backend Engineering",
    summary: "Resilient services and data layers built to scale.",
    icon: Server,
    accent: "#3b82f6",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "PostgreSQL / MySQL",
      "MongoDB",
      "RabbitMQ",
      "Docker",
    ],
  },
  {
    title: "Frontend Engineering",
    summary: "Clean, data-dense interfaces and dashboards.",
    icon: LayoutDashboard,
    accent: "#22d3ee",
    skills: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Highcharts",
      "Responsive UI",
      "Dashboard design",
    ],
  },
  {
    title: "Banking & FinTech",
    summary: "Domain depth in financial messaging and payments.",
    icon: Landmark,
    accent: "#f3c45e",
    skills: [
      "Core Banking Systems",
      "Swift MT Messages",
      "ISO 20022 MX Messages",
      "MT / MX Conversion",
      "Financial Reporting",
      "Banking Workflows",
      "Payment Systems",
      "Message Validation",
    ],
  },
  {
    title: "Cybersecurity",
    summary: "Security-first design, analysis and compliance.",
    icon: ShieldCheck,
    accent: "#3b82f6",
    skills: [
      "Secure Architecture",
      "Vulnerability Analysis",
      "Pentest Reporting",
      "SOC Concepts",
      "SIEM / SOAR Concepts",
      "Audit & Compliance",
      "ISO 27001",
      "Swift CSP",
    ],
  },
  {
    title: "AI & Automation",
    summary: "Intelligent tooling that accelerates decisions.",
    icon: BrainCircuit,
    accent: "#22d3ee",
    skills: [
      "AI-assisted analysis",
      "RAG systems",
      "Prompt engineering",
      "Workflow automation",
      "Log analysis",
      "Intelligent dashboards",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Featured Projects                                                 */
/* ------------------------------------------------------------------ */

export interface Project {
  index: number;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  accent: string;
  github?: string;
}

export const projects: Project[] = [
  {
    index: 1,
    title: "Core Banking & Financial Messaging Platform",
    description:
      "An enterprise platform for creating, validating, converting, approving, and analyzing Swift MT and ISO 20022 MX financial messages with role-based access, dashboards, and reporting.",
    tags: [
      "Angular",
      "Spring Boot",
      "Swift MT",
      "ISO 20022",
      "PostgreSQL",
      "PDF Reporting",
    ],
    icon: Network,
    accent: "#3b82f6",
  },
  {
    index: 2,
    title: "Swift Traffic Analytics Dashboard",
    description:
      "A professional dashboard for analyzing financial message traffic — input/output messages, financial categories, top clients and counterparties, currencies, FX volumes, correspondent balances, and growth indicators.",
    tags: ["Angular", "Highcharts", "Chart.js", "Java", "Financial KPIs"],
    icon: BarChart3,
    accent: "#22d3ee",
  },
  {
    index: 3,
    title: "MT / MX Conversion Engine",
    description:
      "A conversion and validation engine for transforming Swift MT messages into ISO 20022 MX format using structured parsing, business mapping rules, XML generation, and validation workflows.",
    tags: ["Java", "XML", "XSD", "Swift", "ISO 20022", "Financial Messaging"],
    icon: ArrowLeftRight,
    accent: "#f3c45e",
  },
  {
    index: 4,
    title: "Cybersecurity & SOC Intelligence Platform",
    description:
      "An intelligent cybersecurity platform designed to normalize security events, analyze incidents, support decision-making, and provide audit-ready visibility for security operations.",
    tags: ["Spring Boot", "RabbitMQ", "AI", "SOC", "OCSF", "Security Automation"],
    icon: Radar,
    accent: "#3b82f6",
  },
];

/* Other professional work — outside core banking, same engineering bar. */
export const additionalProjects: Project[] = [
  {
    index: 5,
    title: "Healverse — Healthcare SaaS",
    description:
      "A SaaS platform that streamlines healthcare-provider operations — patient management, appointment scheduling and electronic health records in one secure workspace.",
    tags: ["Vue.js", "PrimeVue", "NestJS", "Prisma", "MongoDB", "Stripe"],
    icon: HeartPulse,
    accent: "#22d3ee",
  },
  {
    index: 6,
    title: "Swiftcure — Pharmacy SaaS",
    description:
      "A SaaS platform for the pharmaceutical sector with a dashboard for managing inventory, sales and prescriptions across everyday pharmacy workflows.",
    tags: ["PHP", "MySQL", "Bootstrap", "Dashboard"],
    icon: Pill,
    accent: "#f3c45e",
    github: "https://github.com/ArfaouiBadi/Pharmacyverse-php",
  },
  {
    index: 7,
    title: "Animeverse — E-commerce Platform",
    description:
      "A full-featured e-commerce platform for anime merchandise with product browsing, cart, secure checkout and Stripe payments.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe"],
    icon: ShoppingBag,
    accent: "#3b82f6",
  },
];

/* ------------------------------------------------------------------ */
/*  Archive — academic & early projects (outside core banking focus)   */
/* ------------------------------------------------------------------ */

export interface ArchiveProject {
  title: string;
  period: string;
  summary: string;
  tech: string[];
}

export const academicProjects: ArchiveProject[] = [
  {
    title: "Streaming Website",
    period: "Nov 2023 – Dec 2023",
    summary:
      "A dynamic gaming-focused streaming web application built as a university project.",
    tech: ["Angular", "TypeScript", "Bootstrap"],
  },
  {
    title: "Club Management — ISET Radès",
    period: "Dec 2023 – Feb 2024",
    summary:
      "A campus web app for managing student clubs, equipment reservations and sports activities.",
    tech: ["ReactJS", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Devotion",
    period: "May 2024 – Jul 2024",
    summary:
      "An Islamic web platform offering prayer times, Quran reading and event reminders.",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Keycloak"],
  },
];

/* ------------------------------------------------------------------ */
/*  Experience timeline                                                */
/* ------------------------------------------------------------------ */

export type ExperienceType = "Internship" | "Freelance" | "Program";

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  type: ExperienceType;
  domain: string;
  highlights: string[];
  tech: string[];
}

/* Reverse-chronological — most recent first. */
export const experiences: ExperienceEntry[] = [
  {
    role: "Graduation Project — SWIFT Messaging Platform",
    company: "Banking Intelligence Consulting (BIC)",
    location: "Tunis, Tunisia",
    period: "Jan 2025 – Jun 2025",
    type: "Internship",
    domain: "Fintech",
    highlights: [
      "Developed a microservices-based solution for SWIFT financial message analysis and management.",
      "Built the platform on Spring Cloud with Netflix Eureka service discovery and Keycloak-based access control.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "Flask",
      "Netflix Eureka",
      "Keycloak",
      "Docker",
    ],
  },
  {
    role: "Industrial Data Analyst & Developer",
    company: "Société Tunisienne de Sidérurgie — El Fouladh",
    location: "Tunis, Tunisia",
    period: "Sep 2024 – Feb 2025",
    type: "Freelance",
    domain: "Industrial IT",
    highlights: [
      "Designed interactive dashboards for industrial analytics and KPIs with Power BI.",
      "Built web applications to monitor and analyze machine logs for predictive maintenance.",
      "Integrated Python with industrial systems through WinCC and custom scripts.",
    ],
    tech: ["Power BI", "Python", "Flask", "Node.js", "WinCC"],
  },
  {
    role: "Full-Stack Developer — Healverse",
    company: "Instead",
    location: "Remote",
    period: "Jan 2024 – Feb 2024",
    type: "Internship",
    domain: "Healthcare",
    highlights: [
      "Developed a full-stack SaaS platform for the pharmaceutical industry.",
      "Designed a user-friendly dashboard UX/UI that improved operational efficiency.",
    ],
    tech: ["Vue.js", "PrimeVue", "Pinia", "NestJS", "Prisma", "MongoDB", "Docker"],
  },
  {
    role: "Web Developer Intern — Animeverse",
    company: "Swiftcode",
    location: "Remote",
    period: "Aug 2023 – Sep 2023",
    type: "Internship",
    domain: "E-commerce",
    highlights: [
      "Built an e-commerce platform within a team of five engineers.",
      "First professional experience working in a startup environment.",
    ],
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
  {
    role: "Software Engineering Program",
    company: "ALX Africa",
    location: "Online",
    period: "Mar 2023 – Apr 2023",
    type: "Program",
    domain: "Education",
    highlights: [
      "Intensive software engineering training covering Linux, C, DevOps and low-level programming.",
      "Built an e-commerce web application as a hands-on capstone project.",
    ],
    tech: ["C", "Python", "JavaScript", "Linux", "Git", "DevOps"],
  },
];

/* ------------------------------------------------------------------ */
/*  Architecture Mindset                                              */
/* ------------------------------------------------------------------ */

export const architectureIntro =
  "Banking software has to be auditable, controlled and resilient before it gets to be clever. These are the defaults I bring to every system.";

export interface ArchitecturePrinciple {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    title: "Secure by design",
    description:
      "Security as a design constraint — threat modeling, least privilege and validation at every layer.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable backend architecture",
    description:
      "Clear service boundaries, async messaging and stateless components that scale horizontally.",
    icon: Server,
  },
  {
    title: "Clean frontend components",
    description:
      "Composable, typed UI components with predictable state and a consistent design language.",
    icon: Blocks,
  },
  {
    title: "API-first development",
    description:
      "Well-defined, documented and versioned APIs as the contract between every part of the system.",
    icon: Webhook,
  },
  {
    title: "Role-based access control",
    description:
      "Granular permissions and role models so every action is authorized and accountable.",
    icon: KeyRound,
  },
  {
    title: "Auditability and traceability",
    description:
      "Every critical operation is logged, traceable and reconstructable for audits and investigations.",
    icon: ScrollText,
  },
  {
    title: "Performance optimization",
    description:
      "Profiling, caching and query tuning to keep latency low where it matters most.",
    icon: Gauge,
  },
  {
    title: "Banking-grade reliability",
    description:
      "Resilient, fault-tolerant systems designed for the uptime financial operations demand.",
    icon: Activity,
  },
];

/* ------------------------------------------------------------------ */
/*  Technologies                                                      */
/* ------------------------------------------------------------------ */

export const techStack = [
  "Java",
  "Spring Boot",
  "Angular",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "Nginx",
  "Git",
  "RabbitMQ",
  "Linux",
  "Tailwind CSS",
  "Chart.js",
  "Highcharts",
  "XML",
  "XSD",
  "REST APIs",
  "Swift MT",
  "ISO 20022",
];

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */

export const contactIntro =
  "I'm looking for banking and fintech engineering roles, and I'm open to freelance platform work. Email is the fastest way to reach me — I usually reply within a day.";

export type ContactKind = "email" | "linkedin" | "github" | "resume";

export interface ContactChannel {
  kind: ContactKind;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    kind: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "in/badi-arfaoui",
    href: profile.linkedin,
    external: true,
  },
  {
    kind: "github",
    label: "GitHub",
    value: "github.com/ArfaouiBadi",
    href: profile.github,
    external: true,
  },
  {
    kind: "resume",
    label: "Resume",
    value: "Download / view PDF",
    href: profile.resumeUrl,
    external: true,
  },
];
