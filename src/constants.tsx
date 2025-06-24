import animeverse from "./assets/projects/Animeverse.png";
import animeverseBg from "./assets/projects/AnimeverseBg.png";
import healverse from "./assets/projects/healverse.png";
import healverseBg from "./assets/projects/healverseBg.png";
import Alamni1 from "./assets/projects/Alamni1.png";
import Alamni2 from "./assets/projects/Alamni2.png";
import Alamni3 from "./assets/projects/Alamni3.png";
import Alamni4 from "./assets/projects/Alamni4.png";
import Alamni5 from "./assets/projects/Alamni5.png";
import Alamni6 from "./assets/projects/Alamni6.png";
import Alamni7 from "./assets/projects/Alamni7.png";
import swiftcure from "./assets/projects/swiftcure.png";
import swiftcureBg from "./assets/projects/swiftcureBg.png";
import clubManagement1 from "./assets/projects/clubManagement1.jpg";
import clubManagement2 from "./assets/projects/clubManagement2.jpg";
import clubManagement3 from "./assets/projects/clubManagement3.jpg";
import clubManagement4 from "./assets/projects/clubManagement4.jpg";
import clubManagement5 from "./assets/projects/clubManagement5.jpg";
import clubManagement6 from "./assets/projects/clubManagement6.jpg";
import clubManagement7 from "./assets/projects/clubManagement7.jpg";
import clubManagement8 from "./assets/projects/clubManagement8.jpg";
import quiz from "./assets/projects/quiz.png";
import devotion1 from "./assets/projects/Devotion1.png";
import devotion2 from "./assets/projects/Devotion2.png";
import devotion3 from "./assets/projects/Devotion3.png";

const navLinkItems = [
  {
    title: "Home",
    path: "#home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    title: "About",
    path: "#about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Skills",
    path: "#skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      </svg>
    ),
  },
  {
    title: "Experience",
    path: "#experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  // {
  //   title: "Academic Projects",
  //   path: "#academic-projects",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="size-6"
  //     >
  //       <path d="M12 3L1 9l11 6 9-4.91V17a1 1 0 0 1-2 0v-3.09l-7 3.91-9-5V9l11-6 11 6v2l-1 .55V9z" />
  //     </svg>
  //   ),
  // },
  {
    title: "Projects",
    path: "#projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
      </svg>
    ),
  },
  {
    title: "Contact",
    path: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
  },
];

const projects = [
  {
    title: "Alamni",
    description: "Gamified e-learning platform with AI features.",
    longDescription: [
      "In the rapidly evolving world of education, e-learning platforms are transforming the way knowledge is delivered and consumed. Alamni is a cutting-edge e-learning platform that integrates gamification to make learning engaging, interactive, and rewarding. Our mission is to provide learners with an intuitive and dynamic environment where they can excel in their educational pursuits.",
      "Alamni offers a variety of features tailored to both learners and administrators:",
      "• Course Accessibility: Users can enroll in courses delivered in PDF or video formats.",
      "• Interactive Quizzes: Leveraging AI technology, quizzes utilize the camera for hands-free interaction, allowing users to select answers with their fingers.",
      "• Gamification: Learners earn points, progress through levels, and receive badges displayed on their profiles.",
      "• Library Management: A personalized library categorizes enrolled courses with filters for finished and unfinished courses.",
      "• Leaderboard: A ranking system that fosters healthy competition among users.",
      "• Admin Dashboard: Administrators can view statistics and manage categories, courses, and users efficiently.",
    ],
    images: [Alamni1, Alamni2, Alamni3, Alamni4, Alamni5, Alamni6, Alamni7],
    technologies: [
      "Angular",
      "Typescript",
      "TailwindCSS",
      "Spring Boot",
      "Gemini API",
      "Python",
      "Computer Vision",
      "MongoDB",
      "JWT",
    ],
    comingSoon: false,
    github: "",
  },
  {
    title: "Club Management - Iset Radès",
    description: "Student life management web application.",
    longDescription: [
      "Développement d'une application web pour la gestion de la vie étudiante",
      "Création d'une interface intuitive permettant la gestion des clubs, la réservation d'équipements et installations, ainsi que le suivi des activités sportives et des annonces pour un campus organisé et dynamique.",
      "This comprehensive web application was designed to streamline campus life management at Iset Radès, providing students and administrators with tools to:",
      "• Manage student clubs and organizations efficiently",
      "• Book equipment and facilities through an intuitive reservation system",
      "• Track sports activities and events",
      "• Manage announcements and campus communications",
      "• Provide a centralized platform for student life coordination",
    ],
    images: [
      clubManagement1,
      clubManagement2,
      clubManagement3,
      clubManagement4,
      clubManagement5,
      clubManagement6,
      clubManagement7,
      clubManagement8,
    ],
    technologies: [
      "ReactJS",
      "Bootstrap",
      "Redux",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "JWT",
    ],
    comingSoon: false,
    github: "",
  },
  {
    title: "Virtual Quiz Game",
    description: "Interactive quiz game with hand gesture recognition.",
    longDescription: [
      "Le Virtual Quiz Game est un projet interactif visant à offrir une expérience de quiz dynamique. Le principal attrait de ce projet est l'intégration de la détection des mains, permettant aux utilisateurs d'interagir avec le jeu par des gestes. De plus, les utilisateurs peuvent télécharger des fichiers PDF, à partir desquels des questions et des réponses sont générées automatiquement, rendant le processus d'apprentissage et de jeu plus immersif et flexible.",
      "This innovative quiz game combines cutting-edge AI technology with interactive gesture recognition to create an engaging learning experience:",
      "• Hand Gesture Recognition: Users can interact with the game using hand gestures for a hands-free experience",
      "• PDF Processing: Upload PDF files to automatically generate questions and answers",
      "• AI-Powered Content Generation: Leverages Gemini API to create dynamic quiz content",
      "• Interactive Learning: Makes the learning process more immersive and flexible",
      "• Real-time Gesture Detection: Seamless interaction through computer vision technology",
    ],
    images: [quiz],
    technologies: [
      "Angular",
      "Flask",
      "Gemini API",
      "Python",
      "Computer Vision",
    ],
    comingSoon: false,
    github: "",
  },
  {
    title: "Devotion",
    description:
      "Comprehensive Islamic platform for religious practices and learning.",
    longDescription: [
      "Despite the significant global and Tunisian Muslim population, there's a noticeable lack of professional Islamic websites offering a comprehensive set of features. Current platforms fail to provide a centralized hub for essential tools and resources needed in daily religious practices and in-depth learning.",
      "To address this gap, there's a critical need for the development of a sophisticated and all-encompassing Islamic website that seamlessly integrates various features, providing a professional and invaluable resource for Muslims seeking a unified online solution.",
    ],
    images: [devotion1, devotion2, devotion3],
    technologies: ["Angular", "Spring Boot", "JWT", "PostgreSQL", "TypeScript"],
    comingSoon: false,
    github: "",
  },
  {
    title: "Animeverse",
    description: "E-commerce platform for anime merchandise.",
    longDescription: [
      "Animeverse is a feature-rich e-commerce website dedicated to anime merchandise. It provides a seamless shopping experience for fans to browse and purchase a wide variety of products, from figurines and apparel to manga and accessories. The platform is built with modern web technologies to ensure a responsive and engaging user interface.",
    ],
    images: [animeverse, animeverseBg],
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "JWT",
      "Stripe",
    ],
    comingSoon: false,
    github: "",
  },
  {
    title: "Healverse",
    description: "Healthcare SaaS platform.",
    longDescription: [
      "Healverse is a Software-as-a-Service (SaaS) platform designed to streamline operations for healthcare providers. It offers a suite of tools for patient management, appointment scheduling, and electronic health records (EHR), all within a secure and user-friendly environment. The goal is to improve efficiency and patient care through technology.",
    ],
    images: [healverse, healverseBg],
    technologies: [
      "VueJS",
      "PrimeVue",
      "Pinia",
      "NestJS",
      "Prisma",
      "MongoDB",
      "JWT",
      "Stripe",
    ],
    comingSoon: false,
    github: "",
  },

  {
    title: "Swiftcure",
    description: "SaaS platform for the pharmaceutical industry.",
    longDescription: [
      "Swiftcure is a specialized SaaS platform tailored for the pharmaceutical sector. It features a robust dashboard for managing inventory, sales, and prescriptions. The user interface is designed for high efficiency and ease of use, helping pharmacies to optimize their daily workflow and improve service delivery.",
    ],
    images: [swiftcure, swiftcureBg],
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    comingSoon: false,
    github: "https://github.com/ArfaouiBadi/Pharmacyverse-php",
  },
];

const experiences = [
  {
    title: "ALX Software Engineering Program",
    company: "ALX Africa",
    location: "Online",
    date: "MAR - APR 2023",
    description: ["Linux, C, VIM, DevOps", "Developed an e-commerce website."],
    technologies_front: ["JavaScript"],
    technologies_back: ["Python", "C"],
    technologies_others: ["Linux", "VIM", "DevOps", "Git"],
    domain: "Education",
    type: "Experience",
  },
  {
    title: "Animeverse",
    company: "Swiftcode",
    location: "Remote",
    date: "AUG - SEP 2023",
    description: [
      "Developed an e-commerce website.",
      "First professional experience as an intern at a startup, working with a team of 5 engineers.",
    ],
    technologies_front: ["ReactJS", "Redux", "Styled Components", "Bootstrap"],
    technologies_back: ["NodeJS", "ExpressJS", "MongoDB"],
    technologies_others: ["Git", "GitHub"],
    domain: "E-commerce",
    type: "Internship",
  },
  {
    title: "Healverse - SaaS Platform",
    company: "Instead",
    location: "Remote",
    date: "JAN - FEB 2024",
    description: [
      "Developed a full-stack SaaS platform for the pharmaceutical industry.",
      "Designed a user-friendly UX/UI dashboard interface, improving operational efficiency and ergonomics.",
    ],
    technologies_front: ["VueJS", "PrimeVue", "Pinia", "Motion"],
    technologies_back: ["NestJS", "Prisma", "MongoDB"],
    technologies_others: ["Docker"],
    domain: "Healthcare",
    type: "Internship",
  },
  {
    title: "Industrial IT Developer",
    company: "Freelance",
    location: "Remote",
    date: "FEB 2024 - APR 2025",
    description: [
      "Developed dashboards for analytics and data processing using Power BI and Node.js.",
      "Created and maintained web applications, integrating machine log analysis and predictive maintenance features.",
    ],
    technologies_front: ["Power BI"],
    technologies_back: ["Node.js", "Python", "Flask"],
    technologies_others: ["WinCC"],
    domain: "Industrial IT",
    type: "Freelance",
  },
  {
    title: "Graduation Project",
    company: "Banking Intelligence Consulting (BIC)",
    location: "Tunis",
    date: "JAN 2025 - JUN 2025",
    description: [
      "Development of a solution for SWIFT message analysis and management",
    ],
    technologies_front: ["Angular", "TailwindCSS", "Typescript"],
    technologies_back: [
      "Spring Boot",
      "Spring Cloud",
      "MongoDB",
      "PostgreSQL",
      "Flask",
      "Netflix Eureka",
      "Keycloak",
    ],
    technologies_others: ["Microservices", "Docker", "Git", "GitHub", "SCRUM"],
    domain: "Fintech",
    type: "Internship",
  },
];

const academicProjects = [
  {
    title: "Angular Project - Streaming Website",
    date: "NOV - DEC 2023",
    description: ["Developed a dynamic streaming website dedicated to gaming."],
    technologies_front: ["Angular", "Bootstrap", "Typescript"],
    type: "Academic",
  },
  {
    title: "Club Management - Iset Radès",
    date: "DEC - FEB 2024",
    description: [
      "Développement d'une application web pour la gestion de la vie étudiante",
      "Création d'une interface intuitive permettant la gestion des clubs, la réservation d'équipements et installations, ainsi que le suivi des activités sportives et des annonces pour un campus organisé et dynamique.",
    ],
    technologies_front: ["ReactJS", "Bootstrap", "Redux"],
    technologies_back: ["ExpressJS", "MongoDB", "NodeJS", "JWT"],
    type: "Academic",
  },
  {
    title: "Devotion",
    date: "MAY - JUL 2024",
    description: [
      "Developed an Islamic web application.",
      "Created a complete platform offering features such as prayer times, Quran reading, Islamic calendar reminders, and event notifications.",
    ],
    technologies_front: ["Angular", "Bootstrap"],
    technologies_back: ["PostgresSQL", "SpringBoot", "KeyClock"],
    type: "Academic",
  },
];

const skills = [
  {
    category: "Front End",
    technologies: [
      "ReactJS",
      "Angular",
      "VueJS",
      "Typescript",
      "Javascript",
      "Bootstrap",
      "TailwindCSS",
      "PrimeVue",
    ],
  },
  {
    category: "Back End",
    technologies: ["NodeJS", "ExpressJS", "NestJS", "SpringBoot", "Laravel"],
  },
  {
    category: "Databases",
    technologies: ["MySQL", "Firebase", "MongoDB", "PostgreSQL"],
  },

  {
    category: "Tools",
    technologies: [
      "Power BI",
      "VIM",
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
    ],
  },
];

const languages = ["Arabic", "English", "French"];

const aboutMe = {
  description: [
    "I am a passionate Full-Stack Developer driven by a love for technology and creative problem-solving. For me, coding is not just about writing lines of code; it's about building elegant and efficient solutions to complex challenges.",
    "My curiosity constantly pushes me to learn something new, explore emerging domains, and stay updated by reading about the latest technologies. I thrive on turning new knowledge into practical skills that I can utilize in real-world projects.",
    "While I am most familiar with ReactJS and the MERN/MEAN stacks, I always strive to build fast, secure, and robust applications by following Clean Code principles and implementing CI/CD pipelines.",
    "Beyond web development, my interests extend to mobile development with React Native and even GameDev, where I've experimented with Unity3D and Godot. I believe this multidisciplinary approach makes me a more versatile and adaptable developer.",
  ],
};

const socials = [
  {
    link: "https://www.linkedin.com/in/badi-arfaoui/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0,0,256,256"
      >
        <g
          fill="#808080"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          className="mix-blend-mode: normal"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    link: "https://github.com/ArfaouiBadi",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0,0,256,256"
      >
        <g
          fill="#808080"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          className="mix-blend-mode: normal"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    link: "https://drive.google.com/file/d/1tW60TQRfQlun7ij1iD4kbZOCtgQviTLv/view?usp=drive_link",
    icon: "Get CV",
  },
];

export {
  navLinkItems,
  projects,
  socials,
  experiences,
  academicProjects,
  skills,
  aboutMe,
  languages,
};
