import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github, Globe, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'mern' | 'java' | 'frontend';
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  highlights: string[];
  links: {
    github: string;
    live: string;
    website: string;
  };
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "petty-cash-management",
    title: "Petty Cash Management System",
    category: "Full Stack MERN",
    categoryFilter: "mern",
    tagline: "Enterprise Financial Tracking & Expense Analytics Solution",
    description: "A full-stack enterprise web application designed to streamline organizational petty cash workflows. Features real-time visual expenditure analytics, secure JWT authentication, automated email receipts, and receipt document management.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Vite", "React", "Material UI", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Chart.js", "Nodemailer", "Multer"],
    highlights: [
      "Vite + React SPA with Material UI.",
      "JWT auth & Redux state management.",
      "Chart.js analytics & email receipts.",
      "Multer document upload capabilities."
    ],
    links: {
      github: "https://github.com/SrinivasanRavikumar27",
      live: "https://github.com/SrinivasanRavikumar27",
      website: "https://github.com/SrinivasanRavikumar27",
    }
  },
  {
    id: "java-spring-boot-api",
    title: "Spring Boot Enterprise Backend & REST Services",
    category: "Java & Spring Boot",
    categoryFilter: "java",
    tagline: "High-Throughput RESTful Service & Database Architecture",
    description: "A robust backend engineering architecture powered by Java and Spring Boot. Features secure REST API controllers, dependency injection, relational schema integrity with PostgreSQL, and cloud deployment pipelines.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Java", "Spring Boot", "REST API", "PostgreSQL", "MySQL", "Maven", "Docker", "Render"],
    highlights: [
      "High-concurrency Spring Boot REST controllers.",
      "Relational schema integrity with PostgreSQL.",
      "JWT token security & role-based middleware."
    ],
    links: {
      github: "https://github.com/SrinivasanRavikumar27",
      live: "https://github.com/SrinivasanRavikumar27",
      website: "https://github.com/SrinivasanRavikumar27",
    }
  },
  {
    id: "3d-developer-portfolio",
    title: "Interactive 3D Developer Portfolio Website",
    category: "Frontend & 3D Web",
    categoryFilter: "frontend",
    tagline: "Award-Winning Creative Portfolio with Three.js & Framer Motion",
    description: "A high-performance personal portfolio web application featuring interactive 3D Three.js developer workstation graphics, custom 3D Sun/Moon theme toggle, glassmorphism UI cards, and responsive layouts.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Three.js", "Drei", "Framer Motion", "Lenis Scroll"],
    highlights: [
      "Interactive 3D workstation scene with Three.js.",
      "Custom animated 3D Sun & Moon theme toggle.",
      "60 FPS smooth rendering on desktop and mobile."
    ],
    links: {
      github: "https://github.com/SrinivasanRavikumar27/fsd_Sample_portfolio",
      live: "http://localhost:3000",
      website: "https://github.com/SrinivasanRavikumar27/fsd_Sample_portfolio",
    }
  }
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mern' | 'java' | 'frontend'>('all');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.categoryFilter === activeFilter;
  });

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 text-cyan-500 dark:text-cyan-400 border border-blue-500/30 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" /> FEATURED WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold dark:text-white light:text-slate-900 tracking-tight">
            Crafted Software <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'all', label: 'All Projects', icon: Layers },
            { id: 'mern', label: 'Full Stack MERN', icon: Sparkles },
            { id: 'java', label: 'Java & Spring Boot', icon: Code2 },
            { id: 'frontend', label: 'Frontend & 3D', icon: Globe },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'dark:bg-slate-900/60 light:bg-white dark:text-slate-400 light:text-slate-600 border border-white/10 light:border-slate-200 dark:hover:text-white light:hover:text-slate-900 shadow-sm'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid Layout:
            - <8" (<768px): 1 card / row (grid-cols-1)
            - 8–12.9" (768px–1279px): 2 cards / row (md:grid-cols-2)
            - ≥13" (>=1280px): 3 cards / row (xl:grid-cols-3)
        */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <GlassCard glowColor={idx % 2 === 0 ? 'cyan' : 'purple'} className="p-5 border-cyan-500/30 flex flex-col justify-between h-full w-full">
                <div className="space-y-4">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-slate-200 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-600/80 text-white backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-extrabold dark:text-white light:text-slate-900 leading-snug">{project.title}</h3>
                    <p className="text-[11px] font-medium text-cyan-500 dark:text-cyan-400 mt-0.5">{project.tagline}</p>
                  </div>

                  <p className="text-xs dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-[11px] dark:text-slate-300 light:text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md dark:bg-slate-900 light:bg-slate-200 text-[10px] font-mono dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Action Buttons: GitHub Repository, Live Demo, Visit Website */}
                <div className="pt-4 mt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                    className="p-2 rounded-lg dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-200 light:text-slate-800 hover:text-cyan-500 text-[11px] font-semibold flex items-center gap-1 transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-500" /> Code
                  </a>

                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-semibold flex items-center gap-1 hover:brightness-110 transition-all shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>

                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit Website"
                    className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-500 dark:text-cyan-300 text-[11px] font-semibold flex items-center gap-1 hover:bg-cyan-500/30 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" /> Website
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
