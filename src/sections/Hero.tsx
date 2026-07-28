import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Eye, Sparkles, ChevronDown, CheckCircle2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { HeroScene } from '../three/HeroScene';
import { MagneticButton } from '../components/ui/MagneticButton';

interface HeroProps {
  onOpenResumeModal: () => void;
  theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, theme = 'dark' }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for developer designation
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    };

    const timer = setTimeout(updateText, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-slate-900/80 light:bg-white/80 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Available for Full Stack Opportunities</span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight dark:text-white light:text-slate-900 leading-none">
              SRINIVASAN <br />
              <span className="text-gradient">RAVIKUMAR</span>
            </h1>

            {/* Typing Designation */}
            <div className="mt-4 flex items-center gap-2 text-lg sm:text-2xl font-bold font-mono dark:text-cyan-300 light:text-blue-700 min-h-[36px]">
              <Terminal className="w-6 h-6 text-purple-500 shrink-0" />
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse" />
            </div>
          </div>

          {/* 4 Powerful Resume Impact Lines */}
          <div className="space-y-3 pt-2">
            {PERSONAL_INFO.heroBullets.map((bullet, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 p-1 rounded-full bg-blue-500/20 text-cyan-500 dark:text-cyan-400 border border-blue-500/30 shrink-0 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base dark:text-slate-300 light:text-slate-700 leading-relaxed font-normal">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <MagneticButton variant="primary" onClick={onOpenResumeModal}>
              <Eye className="w-4 h-4" /> Preview & Download Resume
            </MagneticButton>

            <MagneticButton variant="outline" href="#contact">
              <Send className="w-4 h-4" /> Contact Me
            </MagneticButton>

            <button
              onClick={onOpenResumeModal}
              className="p-3.5 rounded-xl dark:bg-slate-900/60 light:bg-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-white/10 light:border-slate-300 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center gap-2 text-xs font-semibold"
              title="Quick Download"
            >
              <Download className="w-4 h-4 text-cyan-500" /> Resume PDF
            </button>
          </div>
        </motion.div>

        {/* Right Column: Interactive Three.js 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="w-full max-w-lg aspect-square relative glass-card rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 p-2 shadow-2xl overflow-hidden group">
            {/* 3D Canvas */}
            <HeroScene theme={theme} />

            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card dark:bg-slate-950/80 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <h4 className="text-xs font-bold dark:text-white light:text-slate-900">Interactive 3D View</h4>
                  <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">Drag to rotate • 60 FPS Optimized</p>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-cyan-500 animate-spin-slow" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 text-xs font-mono cursor-pointer"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </motion.a>
    </section>
  );
};
