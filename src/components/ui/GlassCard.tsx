import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'purple' | 'emerald';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  hoverEffect = true,
  onClick,
}) => {
  const glowClasses = {
    blue: 'hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] hover:border-blue-500/40',
    cyan: 'hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.4)] hover:border-cyan-500/40',
    purple: 'hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.4)] hover:border-purple-500/40',
    emerald: 'hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.4)] hover:border-emerald-500/40',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? glowClasses[glowColor] : ''
      } ${className}`}
    >
      {/* Soft Ambient Inner Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      {children}
    </motion.div>
  );
};
