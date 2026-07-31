import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/common/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/ui/ResumeModal';
import { ToastContainer, ToastProps } from './components/ui/Toast';
import { CustomCursor } from './components/ui/CustomCursor';
import { CodeRain } from './components/ui/CodeRain';
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

  const addToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);

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
    }`}>
      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Cyber Code Rain Matrix Background */}
      <CodeRain isActive={isCodeRainActive} />

      {/* Navbar Header */}
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Floating Action: View Resume */}
        <div className="relative group">
          <button
            onClick={() => setIsResumeModalOpen(true)}
            aria-label="View Resume"
            className="p-3.5 rounded-full bg-slate-900 text-cyan-300 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold">
              View Resume
            </span>
          </button>
        </div>

        {/* Floating Action: Direct Hire / Contact */}
        <div className="relative group">
          <a
            href="#contact"
            aria-label="Contact Me"
            className="p-3.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-110 transition-all flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-semibold">
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
