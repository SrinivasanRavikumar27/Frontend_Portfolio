import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Send, ChevronDown, CheckCircle2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { HeroScene } from '../three/HeroScene';
import { MagneticButton } from '../components/ui/MagneticButton';

interface HeroProps {
  theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme = 'dark' }) => {
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
    <section id="home" className="relative min-h-[90vh] pt-24 pb-8 flex flex-col justify-center overflow-hidden">
      {/* Light Ambient Bubbles Background */}
      {theme === 'light' && <div className="light-ambient-bubbles" />}

      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Three.js Background Canvas (Integrated seamlessly into background across all devices) */}
      <div className="absolute inset-0 z-0 opacity-40 sm:opacity-50 lg:opacity-65 pointer-events-none">
        <HeroScene theme={theme} />
      </div>

      {/* Content Layer (Positioned cleanly on top of 3D background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl space-y-6"
        >
          {/* Main Name Heading: Strictly ONE LINE on Tablet, Laptop, and Desktop */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight dark:text-white light:text-slate-900 leading-none sm:whitespace-nowrap">
              SRINIVASAN <span className="text-gradient">RAVIKUMAR</span>
            </h1>

            {/* Typing Designation */}
            <div className="mt-4 flex items-center gap-2 text-lg sm:text-2xl font-bold font-mono dark:text-cyan-300 light:text-blue-600 min-h-[36px]">
              <Terminal className="w-6 h-6 text-purple-500 shrink-0" />
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse" />
            </div>
          </div>

          {/* 4 Impact Bullet Lines */}
          <div className="space-y-3 pt-2 max-w-3xl">
            {PERSONAL_INFO.heroBullets.map((bullet, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 p-1 rounded-full bg-blue-500/20 text-cyan-500 dark:text-cyan-400 border border-blue-500/30 shrink-0 group-hover:scale-110 transition-all">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base dark:text-slate-200 light:text-slate-800 leading-relaxed font-medium drop-shadow-sm">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <MagneticButton variant="primary" href="#projects">
              <FolderGit2 className="w-4 h-4" /> Explore Projects
            </MagneticButton>

            <MagneticButton variant="outline" href="#contact">
              <Send className="w-4 h-4" /> Hire Me
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="mt-6 flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-500 text-xs font-mono cursor-pointer mx-auto z-10"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-cyan-500" />
      </motion.a>
    </section>
  );
};
