import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Eye, Download, Code2, ExternalLink, Github, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST, FEATURED_PROJECTS, PERSONAL_INFO } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';
import { MagneticButton } from '../components/ui/MagneticButton';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'projects' | 'education' | 'certifications'>('all');

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5" /> CAREER TIMELINE & PROJECTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Experience & <span className="text-gradient">Credentials</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Showcasing full stack projects, engineering education, and industry certifications from Srinivasan Ravikumar's verified profile.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <MagneticButton variant="primary" onClick={onOpenResumeModal}>
              <Eye className="w-4 h-4" /> Preview Resume
            </MagneticButton>
            <button
              onClick={onOpenResumeModal}
              className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center sm:justify-start">
          {[
            { id: 'all', label: 'All Milestones', icon: Layers },
            { id: 'projects', label: 'Featured Projects', icon: Code2 },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'certifications', label: 'Certifications', icon: Award },
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
                    : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Featured Projects Card Section */}
        {(activeTab === 'all' || activeTab === 'projects') && (
          <div className="mt-12 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-cyan-400 pl-3">
              <Code2 className="w-5 h-5 text-cyan-400" /> Featured Full Stack Project
            </h3>

            {FEATURED_PROJECTS.map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard glowColor="cyan" className="p-8 border-cyan-500/30">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                          {proj.category}
                        </span>
                        <span className="text-xs text-slate-400">Enterprise Solution</span>
                      </div>
                      <h4 className="text-2xl font-extrabold text-white mt-2">{proj.title}</h4>
                      <p className="text-sm font-medium text-cyan-400 mt-1">{proj.tagline}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
                      >
                        <Github className="w-4 h-4" /> Code Repository
                      </a>
                      <button
                        onClick={onOpenResumeModal}
                        className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center gap-2 hover:bg-cyan-500/30 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" /> Details & Scope
                      </button>
                    </div>
                  </div>

                  {/* Scope & Description */}
                  <p className="text-sm text-slate-300 mt-6 leading-relaxed">
                    {proj.scope}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {proj.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                    {[...proj.techStack.frontend, ...proj.techStack.backend].map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Education Timeline */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div className="mt-16 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-blue-400 pl-3">
              <GraduationCap className="w-5 h-5 text-blue-400" /> Academic Qualifications
            </h3>

            <div className="relative pl-6 border-l-2 border-blue-500/30 space-y-8">
              {EDUCATION_LIST.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Point Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_#06B6D4]" />

                  <GlassCard glowColor="blue" className="p-6">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-xs text-cyan-300 font-medium mt-0.5">{edu.institution} — {edu.location}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {edu.period}
                      </span>
                    </div>
                    {edu.details && (
                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Grid */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <div className="mt-16 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-l-4 border-purple-400 pl-3">
              <Award className="w-5 h-5 text-purple-400" /> Professional Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS_LIST.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard glowColor="purple" className="h-full p-6 border-purple-500/30">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 inline-block mb-4">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-xs font-semibold text-cyan-400 mt-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      {cert.focus}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
