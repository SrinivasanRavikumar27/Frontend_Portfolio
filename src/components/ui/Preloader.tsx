import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Code2 } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-slate-100"
        >
          {/* Logo & Glow */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 p-[2px] shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-pulse">
              <div className="w-full h-full bg-[#090D16] rounded-[14px] flex items-center justify-center">
                <Code2 className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <Bot className="absolute -top-2 -right-2 w-5 h-5 text-cyan-300 animate-spin-slow" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-extrabold tracking-tight text-white mb-2">
            SRINIVASAN <span className="text-cyan-400">RAVIKUMAR</span>
          </h2>
          <p className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest">
            Full Stack Software Developer
          </p>

          {/* Progress Bar */}
          <div className="w-48 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <span className="text-xs font-mono text-cyan-400 mt-2">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
