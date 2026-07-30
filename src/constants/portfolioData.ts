import { PERSONAL_CONFIG, PersonalInfo } from './personalConfig';

export const PERSONAL_INFO: PersonalInfo = PERSONAL_CONFIG;

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "TypeScript", level: 88 }
    ]
  },
  {
    title: "Frameworks & Environments",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Spring Boot", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "Node.js", level: 88 },
      { name: "Bootstrap", level: 90 },
      { name: "Material UI", level: 90 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 90 },
      { name: "MongoDB Atlas", level: 88 }
    ]
  },
  {
    title: "APIs & Deployment",
    skills: [
      { name: "RESTful APIs (CRUD)", level: 94 },
      { name: "Netlify", level: 90 },
      { name: "Render", level: 88 },
      { name: "Vite", level: 92 }
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Maven", level: 85 },
      { name: "NPM", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Eclipse", level: 85 },
      { name: "PG Admin", level: 85 },
      { name: "MongoDB Compass", level: 88 }
    ]
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "B. Tech - IT (Information Technology)",
    institution: "Panimalar Engineering College (Anna University)",
    location: "Tiruvallur, Tamil Nadu, India",
    period: "2016 – 2020",
    details: "Graduated with strong foundation in Software Engineering, Data Structures, OOP, Web Technologies, and Database Management Systems."
  },
  {
    degree: "HSLC (Higher Secondary)",
    institution: "Velammal Matriculation Higher Secondary School",
    location: "Ponneri, Tamil Nadu, India",
    period: "2015 – 2016",
    details: "Completed Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    degree: "SSLC (Secondary School)",
    institution: "Velammal Matriculation Higher Secondary School",
    location: "Ponneri, Tamil Nadu, India",
    period: "2013 – 2014",
    details: "Completed secondary education with distinction."
  }
];

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
}

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Full Stack Web Development in MERN",
    issuer: "GUVI GEEK NETWORKS (IITM RESEARCH PARK)",
    focus: "Comprehensive hands-on training in React, Node.js, Express.js, MongoDB, REST API development, and frontend integration."
  },
  {
    title: "Full Stack Web Development in JAVA",
    issuer: "NIRMAAN ORGANIZATION",
    focus: "Enterprise Java application development, Spring Boot microservices, Object-Oriented Design, and relational SQL databases."
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  scope: string;
  highlights: string[];
  techStack: {
    frontend: string[];
    backend: string[];
  };
  links: {
    github: string;
    live: string;
  };
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "petty-cash-mern",
    title: "Petty Cash Management System",
    category: "Full Stack (MERN)",
    tagline: "Streamlining organizational petty cash workflows and expense tracking",
    scope: "A full-stack enterprise web application for managing cash transactions within an organization. Includes real-time tracking, visual expense breakdown, JWT authentication, automated email receipts, and attachment upload capabilities.",
    highlights: [
      "Vite + React.js frontend with Material UI and React Router DOM navigation.",
      "Redux for state management, Axios for HTTP requests, and Chart.js for real-time data visualization.",
      "Node.js & Express.js REST API with JWT authentication, dotenv environment variables, and bcrypt hashing.",
      "MongoDB & Mongoose database storage with Multer file uploads for receipts and Nodemailer for email alerts."
    ],
    techStack: {
      frontend: ["Vite", "React.js", "Material UI", "Redux", "Chart.js", "Axios"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Nodemailer", "Multer"]
    },
    links: {
      github: "https://github.com/SrinivasanRavikumar27",
      live: "https://github.com/SrinivasanRavikumar27"
    }
  }
];
