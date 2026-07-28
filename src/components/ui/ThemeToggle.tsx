import React from 'react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 flex items-center shadow-inner overflow-hidden group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
        isDark
          ? 'bg-slate-900 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
          : 'bg-gradient-to-r from-amber-200 via-sky-200 to-sky-300 border border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.4)]'
      }`}
    >
      {/* Background Starry / Cloud Pattern Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isDark ? (
          // Night Sky Stars
          <div className="w-full h-full relative">
            <span className="absolute top-1.5 left-2 w-1 h-1 rounded-full bg-white opacity-80 animate-pulse" />
            <span className="absolute top-4 left-5 w-0.5 h-0.5 rounded-full bg-cyan-300 opacity-60" />
            <span className="absolute top-2 left-7 w-1 h-1 rounded-full bg-purple-300 opacity-70 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        ) : (
          // Day Sky Soft Clouds
          <div className="w-full h-full relative">
            <span className="absolute top-1.5 right-2 w-3 h-2 rounded-full bg-white/70 blur-[0.5px]" />
            <span className="absolute bottom-1 right-5 w-4 h-2.5 rounded-full bg-white/60 blur-[0.5px]" />
          </div>
        )}
      </div>

      {/* Sliding Animated 3D Sun / Moon Orb */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center relative z-10 shadow-md transform-gpu ${
          isDark
            ? 'ml-auto bg-gradient-to-tr from-slate-200 via-cyan-100 to-white shadow-[0_0_12px_rgba(255,255,255,0.8)]'
            : 'ml-0 bg-gradient-to-tr from-amber-400 via-yellow-300 to-orange-400 shadow-[0_0_14px_rgba(245,158,11,0.9)]'
        }`}
      >
        {isDark ? (
          // 3D Animated Moon Icon with Craters & Crescent Mask
          <motion.div
            initial={{ rotate: -90, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full rounded-full relative flex items-center justify-center overflow-hidden"
          >
            {/* Moon Craters */}
            <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-slate-300/60" />
            <span className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-slate-300/40" />
            <span className="absolute top-3 right-1 w-1 h-1 rounded-full bg-slate-300/50" />
            {/* Crescent Shadow Overlay */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-slate-900/40" />
          </motion.div>
        ) : (
          // 3D Animated Sun Icon with Glowing Rays
          <motion.div
            initial={{ rotate: 90, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full rounded-full relative flex items-center justify-center"
          >
            {/* Sun Core Center */}
            <span className="w-2.5 h-2.5 rounded-full bg-amber-100 shadow-inner" />
            {/* Sun Rays Halo Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-amber-500/70 rounded-full"
            />
          </motion.div>
        )}
      </motion.div>
    </button>
  );
};
