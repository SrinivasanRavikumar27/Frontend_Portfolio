import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Headline */}
          <div className="space-y-3 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                SRINIVASAN <span className="text-cyan-400">RAVIKUMAR</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Full Stack Software Developer transforming complex ideas into modern, fast, and scalable digital web solutions.
            </p>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-cyan-400 transition-all flex items-center gap-2 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Srinivasan Ravikumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, Vite & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};
