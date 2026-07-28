export interface SkillCategory {
  title: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Manual Testing' | 'Tools & Deployment';
  iconName: string;
  gradient: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    icon: string;
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  category: string;
  techStack: {
    frontend: string[];
    backend: string[];
    features: string[];
  };
  highlights: string[];
  scope: string;
  links: {
    github?: string;
    live?: string;
  };
  metrics?: string[];
}

export interface ContactFormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}
