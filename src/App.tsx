import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { CodeRain } from './components/ui/CodeRain';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { ToastContainer, ToastProps } from './components/ui/Toast';
import { ResumeModal } from './components/ui/ResumeModal';
import { FileText, Send } from 'lucide-react';

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
      theme === 'dark' ? 'bg-[#030712] text-slate-100' : 'bg-slate-50 text-slate-900'
    } selection:bg-blue-600/30 selection:text-cyan-500`}>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Optional Cyber Code Rain Background Effect */}
      <CodeRain opacity={isCodeRainActive ? (theme === 'dark' ? 0.22 : 0.15) : 0} />

      {/* Navbar Header with 3D Sun/Moon Toggle */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        toggleCodeRain={() => setIsCodeRainActive(!isCodeRainActive)}
        isCodeRainActive={isCodeRainActive}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} theme={theme} />
        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Skills />
        <Resume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact addToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Global Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Floating Action Quick Access Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 pointer-events-auto">
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="p-3 rounded-full dark:bg-slate-900/90 light:bg-white border border-cyan-500/40 text-cyan-500 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 group text-xs font-semibold"
          title="Preview Resume"
        >
          <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline pr-1">Resume</span>
        </button>

        <a
          href="#contact"
          className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:brightness-110 transition-all flex items-center gap-2 group text-xs font-semibold"
          title="Contact Me"
        >
          <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline pr-1">Hire Me</span>
        </a>
      </div>
    </div>
  );
};
export default App;
