import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { CodeRain } from './components/ui/CodeRain';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { ToastContainer, ToastProps } from './components/ui/Toast';
import { ResumeModal } from './components/ui/ResumeModal';
import { Preloader } from './components/ui/Preloader';
import { FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from './constants/portfolioData';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCodeRainActive, setIsCodeRainActive] = useState(false);
  const [toasts, setToasts] = useState<Omit<ToastProps, 'onClose'>[]>([]);

  // Apply theme class to <html> element dynamically
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const addToast = (toast: { type: 'success' | 'error' | 'info'; title: string; message: string }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, ...toast }]);

    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#030712] text-slate-100' : 'bg-[#f4f7fc] text-slate-900'
    } selection:bg-blue-600/30 selection:text-cyan-500`}>
      {/* Initial Portfolio Preloader */}
      <Preloader />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Optional Cyber Code Rain Background Effect */}
      <CodeRain opacity={isCodeRainActive ? (theme === 'dark' ? 0.22 : 0.15) : 0} />

      {/* Navbar Header with 3D Sun/Moon Toggle */}
      <Navbar
        toggleCodeRain={() => setIsCodeRainActive(!isCodeRainActive)}
        isCodeRainActive={isCodeRainActive}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero theme={theme} />
        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Projects />
        <Contact addToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal Viewer */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Global Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Floating Action FAB Buttons — EXPAND ONLY THE HOVERED BUTTON */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 pointer-events-auto items-start">
        {/* Button 1: Hire Me */}
        <a
          href="#contact"
          className="group flex items-center p-3.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:brightness-110 transition-all duration-300 overflow-hidden cursor-pointer"
          title="Hire Me"
          aria-label="Hire Me Link"
        >
          <Send className="w-5 h-5 shrink-0" />
          <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 font-bold text-xs whitespace-nowrap">
            Hire Me
          </span>
        </a>

        {/* Button 2: Download Resume */}
        <a
          href={PERSONAL_INFO.resumeUrl}
          download="Srinivasan-Ravikumar-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center p-3.5 rounded-full dark:bg-slate-900 light:bg-slate-900 border border-cyan-400 text-cyan-300 light:text-cyan-300 hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 overflow-hidden cursor-pointer"
          title="Download Resume"
          aria-label="Download Resume Link"
        >
          <FileText className="w-5 h-5 shrink-0 text-cyan-300" />
          <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 font-bold text-xs whitespace-nowrap text-cyan-300">
            Download Resume
          </span>
        </a>
      </div>
    </div>
  );
};
export default App;
