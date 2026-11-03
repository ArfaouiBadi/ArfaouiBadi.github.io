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
  // ponytail: printed from public/cv.html; re-print when the CV changes
  resumeUrl: "/Arfaoui-Badi-CV.pdf",
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
  "I'm a software engineer from Tunis working on systems for banks and financial institutions. I work as a software developer at Banking Intelligence Consulting, where I joined after building their SWIFT messaging platform as my graduation project — creating, validating and converting MT and ISO 20022 messages, with the dashboards and access control around them. I care about the unglamorous parts of financial software: validation, auditability, and interfaces that make dense data readable. Before banking, I shipped SaaS products for healthcare, pharmacy and e-commerce teams.";


/* ------------------------------------------------------------------ */
/*  Expertise / Skills                                                */
/* ------------------------------------------------------------------ */

export interface SkillDomain {
  title: string;
  skills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    title: "Backend Engineering",
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
  title: string;
  description: string;
  tags: string[];
  github?: string;
  /** Steps a message goes through, shown on the lead project. */
  flow?: string[];
}

export const projects: Project[] = [
  {
    title: "Core Banking & Financial Messaging Platform",
    description:
      "Create, validate, convert, approve and analyze Swift MT and ISO 20022 MX messages, with role-based access, dashboards and PDF reporting.",
    tags: [
      "Angular",
      "Spring Boot",
      "Swift MT",
      "ISO 20022",
      "PostgreSQL",
      "PDF Reporting",
    ],
    flow: ["Create", "Validate", "Convert", "Approve", "Analyze"],
  },
  {
    title: "Swift Traffic Analytics Dashboard",
    description:
      "Traffic analytics for financial messages: inbound and outbound volumes, message categories, top clients and counterparties, currencies, FX volumes, correspondent balances and growth.",
    tags: ["Angular", "Highcharts", "Chart.js", "Java", "Financial KPIs"],
  },
  {
    title: "MT / MX Conversion Engine",
    description:
      "Parses Swift MT messages, applies business mapping rules and generates validated ISO 20022 MX XML.",
    tags: ["Java", "XML", "XSD", "Swift", "ISO 20022", "Financial Messaging"],
  },
  {
    title: "Cybersecurity & SOC Intelligence Platform",
    description:
      "Normalizes security events, analyzes incidents and keeps an audit-ready record for security operations teams.",
    tags: ["Spring Boot", "RabbitMQ", "AI", "SOC", "OCSF", "Security Automation"],
  },
];

export const additionalProjects: Project[] = [
  {
    title: "Healverse — Healthcare SaaS",
    description:
      "Patient management, appointment scheduling and electronic health records for healthcare providers, in one workspace.",
    tags: ["Vue.js", "PrimeVue", "NestJS", "Prisma", "MongoDB", "Stripe"],
  },
  {
    title: "Swiftcure — Pharmacy SaaS",
    description:
      "Inventory, sales and prescriptions for pharmacies, managed from one dashboard.",
    tags: ["PHP", "MySQL", "Bootstrap", "Dashboard"],
    github: "https://github.com/ArfaouiBadi/Pharmacyverse-php",
  },
  {
    title: "Animeverse — E-commerce Platform",
    description:
      "An anime merchandise store with product browsing, cart, checkout and Stripe payments.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe"],
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

export type ExperienceType = "Apprenticeship" | "Internship" | "Freelance" | "Program";

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
    role: "Software Developer",
    company: "Banking Intelligence Consulting (BIC)",
    location: "Tunis, Tunisia",
    period: "Jul 2025 – Present",
    type: "Apprenticeship",
    domain: "Fintech",
    highlights: [
      "Design and deliver technology and digital transformation solutions for financial institutions, from consulting to implementation.",
      "Develop SWIFT payments and messaging systems and AI-driven tools that streamline banking processes.",
      "Work-study alongside an engineering degree in Software Engineering, AI & Data Science at Sesame University (2025 – 2029).",
    ],
    tech: ["SWIFT Payments", "SWIFT Messaging", "Core Banking", "AI automation"],
  },
  {
    role: "Graduation Project — SWIFT Messaging Platform",
    company: "Banking Intelligence Consulting (BIC)",
    location: "Tunis, Tunisia",
    period: "Feb 2025 – Jun 2025",
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
}

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    title: "Secure by design",
    description:
      "Security is a design constraint: threat modeling, least privilege and validation at every layer.",
  },
  {
    title: "API-first development",
    description:
      "Well-defined, documented and versioned APIs as the contract between every part of the system.",
  },
  {
    title: "Role-based access control",
    description:
      "Granular permissions and role models, so every action is authorized and accountable.",
  },
  {
    title: "Auditability and traceability",
    description:
      "Every critical operation is logged, traceable and reconstructable for audits and investigations.",
  },
];

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */

export const contactIntro =
  "I'm looking for banking and fintech engineering roles, and I'm open to freelance platform work. Email is the fastest way to reach me; I usually reply within a day.";

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
