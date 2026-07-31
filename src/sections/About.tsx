import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Eye, Download, RefreshCw, Terminal } from 'lucide-react';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiPostman, SiEclipseide } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { PERSONAL_INFO, EDUCATION_LIST } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';

interface AboutProps {
  onOpenResumeModal: () => void;
}

const EXACT_SKILLS = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Java", icon: FaJava, color: "text-amber-500", bg: "bg-amber-500/10" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-emerald-500", bg: "bg-emerald-500/10" },
      { name: "React", icon: FaReact, color: "text-cyan-400", bg: "bg-cyan-400/10" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500", bg: "bg-green-500/10" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bg: "bg-yellow-400/10" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", bg: "bg-blue-500/10" },
    ]
  },
  {
    category: "Databases & APIs",
    items: [
      { name: "SQL", icon: SiPostgresql, color: "text-blue-400", bg: "bg-blue-400/10" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500", bg: "bg-blue-500/10" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-cyan-500", bg: "bg-cyan-500/10" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10" },
      { name: "REST API", icon: Terminal, color: "text-purple-400", bg: "bg-purple-400/10" },
    ]
  },
  {
    category: "Tools & Ecosystem",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500", bg: "bg-orange-500/10" },
      { name: "GitHub", icon: FaGithub, color: "text-slate-200", bg: "bg-slate-200/10" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400", bg: "bg-orange-400/10" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-400", bg: "bg-blue-400/10" },
      { name: "Eclipse", icon: SiEclipseide, color: "text-indigo-400", bg: "bg-indigo-400/10" },
      { name: "pgAdmin", icon: SiPostgresql, color: "text-blue-400", bg: "bg-blue-400/10" },
      { name: "MongoDB Compass", icon: SiMongodb, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    ]
  }
];

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'education'>('about');
  const [photoMode, setPhotoMode] = useState<'profile' | 'groot'>('profile');

  return (
    <section id="about" className="py-8 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 text-xs font-mono">
              <User className="w-3.5 h-3.5" /> PROFILE & EXPERTISE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold dark:text-white light:text-slate-900 tracking-tight mt-1">
              About <span className="text-gradient">Srinivasan Ravikumar</span>
            </h2>
          </div>

          {/* Resume Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-semibold text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:brightness-110 transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4" /> Preview Resume
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Srinivasan-Ravikumar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl dark:bg-slate-900 light:bg-slate-900 border border-cyan-500/40 text-cyan-400 light:text-cyan-300 hover:border-cyan-400 text-xs font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>

        {/* Tabbed Navigation Bar */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <div className="p-1 rounded-2xl dark:bg-slate-900/80 light:bg-slate-200/80 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center gap-2">
            {[
              { id: 'about', label: 'About Me', icon: User },
              { id: 'skills', label: 'Skills & Stack', icon: Code2 },
              { id: 'education', label: 'Education', icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'dark:text-slate-400 light:text-slate-600 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: ABOUT ME */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <GlassCard glowColor="cyan" className="p-6 md:p-8 border-cyan-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo & Toggle */}
                <div className="lg:col-span-4 text-center space-y-4">
                  <div className="relative w-48 h-48 mx-auto rounded-3xl overflow-hidden border-2 border-cyan-400/40 p-1 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                    <img
                      src={photoMode === 'profile' ? PERSONAL_INFO.profilePhoto : PERSONAL_INFO.animePhoto}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <button
                    onClick={() => setPhotoMode((prev) => (prev === 'profile' ? 'groot' : 'profile'))}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl dark:bg-slate-900 light:bg-slate-900 border border-cyan-500/40 text-cyan-400 light:text-cyan-300 hover:border-cyan-400 text-xs font-bold transition-all shadow-md"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Switch to {photoMode === 'profile' ? 'IamGroot Avatar' : 'Profile Photo'}
                  </button>

                  <div>
                    <h3 className="text-xl font-extrabold dark:text-white light:text-slate-900">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 mt-0.5">{PERSONAL_INFO.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Narrative Text ONLY */}
                <div className="lg:col-span-8 space-y-4 text-sm sm:text-base dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  <p>
                    Hello! I'm <strong className="dark:text-white light:text-slate-900 font-bold">{PERSONAL_INFO.name}</strong>, a Full-Stack Developer based in <span className="text-cyan-500 font-semibold">{PERSONAL_INFO.location}</span> with hands-on experience building responsive web applications using <strong className="text-cyan-500 font-bold">Java, Spring Boot, React, and Node.js</strong>.
                  </p>
                  <p>
                    Skilled in developing RESTful APIs (CRUD) and integrating PostgreSQL, MySQL, and MongoDB databases. Proficient in version control and deployment using Git, GitHub, Netlify, and Render. Eager to contribute technical skills to a dynamic engineering team.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* TAB 2: SKILLS */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-6"
          >
            {EXACT_SKILLS.map((group, gIdx) => (
              <div key={gIdx} className="space-y-3">
                <h3 className="text-sm font-bold dark:text-white light:text-slate-900 flex items-center gap-2 border-l-4 border-cyan-400 pl-3 uppercase tracking-wider font-mono">
                  {group.category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.items.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <GlassCard
                        key={sIdx}
                        glowColor="cyan"
                        className="p-3 flex flex-col items-center justify-center text-center space-y-2 group hover:-translate-y-1 transition-all duration-300 border-cyan-500/20"
                      >
                        <div className={`p-2 rounded-xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold dark:text-slate-100 light:text-slate-800 tracking-wide">
                          {skill.name}
                        </span>
                      </GlassCard>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* TAB 3: EDUCATION */}
        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-6"
          >
            <div className="relative pl-6 border-l-2 border-cyan-500/40 space-y-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_#06B6D4]" />
                  <GlassCard glowColor="blue" className="p-5">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-base font-bold dark:text-white light:text-slate-900">{edu.degree}</h4>
                        <p className="text-xs text-cyan-500 dark:text-cyan-400 font-medium mt-0.5">{edu.institution} — {edu.location}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-cyan-500 dark:text-cyan-300 border border-blue-500/30">
                        {edu.period}
                      </span>
                    </div>
                    {edu.details && (
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </GlassCard>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
