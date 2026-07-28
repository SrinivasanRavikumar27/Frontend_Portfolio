import { SkillCategory, EducationItem, CertificationItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: "SRINIVASAN RAVIKUMAR",
  title: "Full Stack Software Developer",
  email: "tosrinivasanravi@gmail.com",
  phone: "+91 9003293105",
  phoneRaw: "9003293105",
  linkedin: "https://www.linkedin.com/in/srinivasan-ravikumar",
  github: "https://github.com/SrinivasanRavikumar27",
  whatsapp: "https://wa.me/919003293105",
  location: "Tamil Nadu, India",
  roles: [
    "Full Stack Software Developer",
    "Java & Spring Boot Engineer",
    "MERN Stack Specialist",
    "REST API & Database Developer",
  ],
  heroBullets: [
    "Full Stack Software Developer passionate about building scalable, high-performance web applications.",
    "Experienced in Java, Spring Boot, MERN Stack, RESTful APIs, PostgreSQL, and MongoDB.",
    "I create fast, responsive, and user-focused digital experiences with clean architecture.",
    "Turning complex requirements into modern, production-ready applications deployed on cloud platforms."
  ],
  aboutSummary: "I am a passionate Full Stack Software Developer focused on building scalable, responsive, and user-centric web applications. I enjoy transforming ideas into efficient digital solutions using modern technologies while continuously learning and improving.",
  stats: [
    { label: "Engineering Degree", value: "B.Tech IT", description: "Panimalar Eng. College" },
    { label: "Core Technologies", value: "15+", description: "Full Stack & Testing" },
    { label: "MERN & Java Stack", value: "100%", description: "Hands-on Expertise" },
    { label: "Code Quality", value: "Production", description: "Clean & Scalable" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    category: "Frontend",
    iconName: "Layout",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    description: "Building responsive, modern, and interactive user interfaces with optimized state management and seamless user flows.",
    skills: [
      { name: "React.js", level: 92, icon: "SiReact", description: "Hooks, Router, State Management, Vite" },
      { name: "JavaScript (ES6+)", level: 90, icon: "SiJavascript", description: "Async/Await, Promises, Closures, DOM" },
      { name: "Tailwind CSS", level: 95, icon: "SiTailwindcss", description: "Responsive Layouts, Glassmorphic UI" },
      { name: "Material UI", level: 88, icon: "SiMui", description: "Component Library & Design Systems" },
      { name: "Bootstrap", level: 85, icon: "SiBootstrap", description: "Rapid Grid & Responsive Prototyping" },
      { name: "HTML5 & CSS3", level: 95, icon: "SiHtml5", description: "Semantic Markup & Flex/Grid Styling" }
    ]
  },
  {
    title: "Backend Engineering",
    category: "Backend",
    iconName: "Server",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    description: "Architecting robust backend services, secure RESTful APIs, authentication workflows, and server logic.",
    skills: [
      { name: "Java", level: 90, icon: "FaJava", description: "OOPs, Collections, Data Structures" },
      { name: "Spring Boot", level: 86, icon: "SiSpringboot", description: "REST Controllers, Dependency Injection" },
      { name: "Node.js", level: 88, icon: "SiNodedotjs", description: "Event Loop, Asynchronous Services" },
      { name: "Express.js", level: 90, icon: "SiExpress", description: "RESTful Routing, Middleware, CORS" },
      { name: "REST API", level: 94, icon: "TbApi", description: "CRUD Operations, Endpoint Security" },
      { name: "JWT Authentication", level: 89, icon: "SiJsonwebtokens", description: "Token Verification, Bcrypt Hashing" }
    ]
  },
  {
    title: "Databases & Storage",
    category: "Database",
    iconName: "Database",
    gradient: "from-purple-600 via-indigo-500 to-blue-500",
    description: "Designing efficient relational & NoSQL database schemas, queries, and data management pipelines.",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "SiPostgresql", description: "Relational Queries, Schema Integrity" },
      { name: "MongoDB", level: 90, icon: "SiMongodb", description: "NoSQL Collections, Aggregation Pipeline" },
      { name: "MongoDB Atlas", level: 88, icon: "SiMongodb", description: "Cloud Database Hosting & Cluster Config" },
      { name: "MySQL", level: 85, icon: "SiMysql", description: "Structured Data, Relational Joins & Views" }
    ]
  },
  {
    title: "Manual & API Testing",
    category: "Manual Testing",
    iconName: "CheckCircle2",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    description: "Ensuring 100% application reliability through systematic test execution, bug lifecycle tracking, and API validation.",
    skills: [
      { name: "API Validation", level: 92, icon: "TbApi", description: "Postman API Execution, Status Verification" },
      { name: "Test Cases Creation", level: 95, icon: "ClipboardList", description: "Comprehensive Scenario & Edge Coverage" },
      { name: "Bug Reporting", level: 92, icon: "Bug", description: "Issue Documentation & Severity Tracking" },
      { name: "Functional Testing", level: 94, icon: "CheckSquare", description: "Business Logic & Workflow Verification" },
      { name: "UI & Cross-Browser", level: 90, icon: "Monitor", description: "Responsive & Accessibility Auditing" },
      { name: "Regression Testing", level: 88, icon: "RefreshCw", description: "Version Upgrade Integrity Checks" }
    ]
  },
  {
    title: "Tools, Version Control & Cloud",
    category: "Tools & Deployment",
    iconName: "Wrench",
    gradient: "from-blue-500 via-purple-600 to-pink-500",
    description: "Leveraging modern developer tools, version control, build tools, and automated deployment platforms.",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "SiGithub", description: "Branching, PRs, Version Control Workflow" },
      { name: "Netlify", level: 88, icon: "SiNetlify", description: "Frontend Deployment & Continuous Delivery" },
      { name: "Render", level: 86, icon: "SiRender", description: "Node/Express Backend Cloud Hosting" },
      { name: "Maven & NPM", level: 88, icon: "SiApachemaven", description: "Package & Dependency Management" },
      { name: "VS Code & Eclipse", level: 94, icon: "SiVisualstudiocode", description: "IDE Tools, Debugging, Extensions" },
      { name: "PG Admin & Compass", level: 90, icon: "Database", description: "Database Management GUI Applications" }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "B. TECH - IT (Information Technology)",
    institution: "Panimalar Engineering College (Anna University - Chennai)",
    location: "Tiruvallur, Tamil Nadu, India",
    period: "2016 – 2020",
    details: "Focus on Computer Science fundamentals, Software Engineering, Object Oriented Programming in Java, Web Technologies, Database Management Systems, and Networks."
  },
  {
    degree: "HSLC (Higher Secondary Learning Certificate)",
    institution: "Velammal Matriculation Higher Secondary School",
    location: "Ponneri, Tamil Nadu, India",
    period: "2015 – 2016",
    details: "Mathematics, Physics, Chemistry, and Computer Science specialization."
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Velammal Matriculation Higher Secondary School",
    location: "Ponneri, Tamil Nadu, India",
    period: "2013 – 2014",
    details: "General Science, Mathematics, and Foundation Academics."
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Full Stack Web Development in MERN",
    issuer: "GUVI GEEK NETWORKS (IITM RESEARCH PARK)",
    focus: "MERN Stack (MongoDB, Express.js, React.js, Node.js), REST APIs, Redux State Management, Authentication, and Modern Web Projects."
  },
  {
    title: "Full Stack Web Development in JAVA",
    issuer: "NIRMAAN ORGANIZATION",
    focus: "Java Fundamentals, Object-Oriented Programming (OOP), Spring Boot Framework, REST API Development, Relational Databases, and MVC Architecture."
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "petty-cash-management",
    title: "Petty Cash Management System",
    tagline: "Full Stack (MERN) Enterprise Financial Tracking Solution",
    subtitle: "Streamlining organizational petty cash workflows with real-time analytics, JWT security, and interactive charts.",
    category: "Full Stack MERN",
    techStack: {
      frontend: ["Vite", "React.js", "Material UI", "Redux", "Axios", "React Router DOM", "Chart.js", "React Hot Toast"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Bcrypt", "Nodemailer", "Multer", "CORS"],
      features: ["Token-based Auth", "Role-Based Access", "Expense Categorization", "PDF/Excel Reports", "Visual Analytics", "Email Notifications"]
    },
    highlights: [
      "Built responsive SPA using Vite + React with Material UI components for sleek enterprise interface.",
      "Implemented secure JWT authentication with bcrypt password hashing and state management via Redux.",
      "Engineered Node.js & Express.js REST API with Mongoose ORM for efficient transaction processing.",
      "Integrated Chart.js for real-time visual expenditure breakdown and Nodemailer for transaction email receipts.",
      "Added Multer file upload capabilities for receipt verification and attachment management."
    ],
    scope: "The project provides a comprehensive solution for managing organizational petty cash, facilitating transparent tracking, reporting, and automated cash transaction auditing.",
    links: {
      github: "https://github.com/SrinivasanRavikumar27",
      live: "https://github.com/SrinivasanRavikumar27"
    },
    metrics: ["100% Secure Auth", "<200ms API Latency", "Responsive Layout", "Real-time Charts"]
  }
];
