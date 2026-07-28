import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION_LIST, CERTIFICATIONS_LIST, FEATURED_PROJECTS } from '../../constants/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="glass-card border border-slate-700/60 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col z-10 shadow-2xl overflow-hidden relative my-auto"
        >
          {/* Header Bar */}
          <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/80 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Resume Preview</h3>
                <p className="text-xs text-slate-400">Srinivasan Ravikumar — Full Stack Software Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:tosrinivasanravi@gmail.com?subject=Job%20Opportunity%20—%20Srinivasan%20Ravikumar"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 text-cyan-300 border border-blue-500/30 hover:bg-blue-600/30 text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Direct Email
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Scrollable Document Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 custom-scrollbar text-slate-200">
            {/* Top Resume Header */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                SRINIVASAN RAVIKUMAR
              </h1>
              <p className="text-cyan-400 font-semibold text-lg mt-1 tracking-wide">
                SOFTWARE DEVELOPER / FULL STACK ENGINEER
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.email}
                </a>
                <span className="text-slate-600">•</span>
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.phone}
                </a>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" /> {PERSONAL_INFO.location}
                </span>
                <span className="text-slate-600">•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Career Summary */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4" /> Career Summary
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-white/5">
                {PERSONAL_INFO.aboutSummary}
              </p>
            </section>

            {/* Core Skills Breakdown */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <Code className="w-4 h-4" /> Core Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SKILL_CATEGORIES.map((cat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5">
                    <h3 className="text-xs font-semibold text-blue-300 mb-2">{cat.category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-medium text-slate-200 border border-slate-700">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4" /> Key Projects
              </h2>
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-100 text-base">{proj.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.scope}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4" /> Education
              </h2>
              <div className="space-y-3">
                {EDUCATION_LIST.map((edu, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-200 text-xs">{edu.degree}</h3>
                      <p className="text-xs text-slate-400">{edu.institution} — {edu.location}</p>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <Award className="w-4 h-4" /> Certifications & Training
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS_LIST.map((cert, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5">
                    <h3 className="font-semibold text-slate-100 text-xs">{cert.title}</h3>
                    <p className="text-[11px] text-cyan-300 mt-0.5">{cert.issuer}</p>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{cert.focus}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/10 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <p className="text-xs text-slate-400">
              Srinivasan Ravikumar — Verified Portfolio Resume
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs transition-colors"
              >
                Close
              </button>
              <a
                href="mailto:tosrinivasanravi@gmail.com?subject=Resume%20Request%20—%20Srinivasan%20Ravikumar"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-xs shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:brightness-110 transition-all"
              >
                <Download className="w-3.5 h-3.5" /> Contact For Direct PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
