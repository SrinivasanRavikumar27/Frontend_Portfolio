export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  phoneRaw: string;
  location: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  instagram: string;
  profilePhoto: string;
  animePhoto: string;
  resumeUrl: string;
  resumeDownloadUrl: string;
  resumeFileName: string;
  roles: string[];
  heroBullets: string[];
  aboutSummary: string;
  stats: { label: string; value: string }[];
}

export const PERSONAL_CONFIG: PersonalInfo = {
  name: "Srinivasan Ravikumar",
  title: "Full Stack Software Developer | MERN & Java Spring Boot",
  email: "tosrinivasanravi@gmail.com",
  phone: "+91 9003293105",
  phoneRaw: "+919003293105",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/srinivasan-ravikumar",
  github: "https://github.com/SrinivasanRavikumar27",
  whatsapp: "https://wa.me/919003293105",
  instagram: "https://instagram.com/srinivasan_ravikumar",
  profilePhoto: "/assets/images/profile.png",
  animePhoto: "/assets/images/anime.png",
  resumeUrl: "/assets/resume/resume.pdf",
  resumeDownloadUrl: "/assets/resume/resume.pdf",
  resumeFileName: "resume.pdf",
  heroBullets: [
    "Full-Stack Developer with hands-on experience building responsive web applications using Java, Spring Boot, React, and Node.js.",
    "Skilled in developing RESTful APIs (CRUD) and integrating PostgreSQL and MongoDB databases.",
    "Proficient in version control and deployment using Git, Netlify, and Render.",
    "Eager to contribute technical skills to a dynamic engineering team."
  ],
  roles: [
    "Full Stack Software Developer",
    "Java & Spring Boot Engineer",
    "React & MERN Stack Developer",
    "RESTful API & Database Specialist",
    "Software QA & Automation Enthusiast"
  ],
  aboutSummary: "Full-Stack Developer with hands-on experience building responsive web applications using Java, Spring Boot, React, and Node.js. Skilled in developing RESTful APIs (CRUD) and integrating PostgreSQL and MongoDB databases.",
  stats: []
};

export const personalConfig = PERSONAL_CONFIG;
