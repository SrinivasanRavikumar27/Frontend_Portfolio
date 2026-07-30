import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Send, FileText, Zap } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  toggleCodeRain: () => void;
  isCodeRainActive: boolean;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  toggleCodeRain,
  isCodeRainActive,
  theme,
  toggleTheme,
  onOpenResumeModal,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo: Srinivasan.R */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
            <div className="w-full h-full dark:bg-[#090D16] light:bg-white rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight dark:text-white light:text-slate-900">
              Srinivasan<span className="text-cyan-500 font-black">.R</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/70 p-1.5 rounded-full border border-white/10 dark:border-white/10 light:border-slate-300 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 ${isActive
                    ? 'text-white'
                    : 'dark:text-slate-400 light:text-slate-600 dark:hover:text-slate-200 light:hover:text-slate-900'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full -z-10 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Animated 3D Sun / Moon Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Cyber Code Rain Toggle */}
          <button
            onClick={toggleCodeRain}
            title="Toggle Matrix Code Rain Effect"
            aria-label="Toggle Code Rain"
            className={`p-2.5 rounded-xl border transition-all ${isCodeRainActive
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'dark:bg-slate-900/60 light:bg-white border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-400 light:text-slate-600 dark:hover:text-white light:hover:text-slate-900'
              }`}
          >
            <Zap className="w-4 h-4" />
          </button>

          {/* Resume Modal Trigger (Strong Contrast in Light Mode) */}
          {onOpenResumeModal && (
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 rounded-xl dark:bg-slate-900 light:bg-slate-900 dark:hover:bg-slate-800 text-cyan-400 light:text-cyan-300 text-xs font-bold border border-cyan-500/40 flex items-center gap-1.5 shadow-md transition-all"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </button>
          )}

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:brightness-110 flex items-center gap-1.5 transition-all"
          >
            <Send className="w-3.5 h-3.5" /> Hire Me
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="p-2.5 rounded-xl dark:bg-slate-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-200 light:text-slate-800 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${activeSection === link.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'dark:text-slate-300 light:text-slate-700 dark:hover:bg-slate-800 light:hover:bg-slate-200'
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                {onOpenResumeModal && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full py-3 rounded-xl bg-slate-900 text-cyan-300 font-bold text-xs border border-cyan-500/40 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" /> View Resume
                  </button>
                )}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
