import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Rocket, Award, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-cyan-400 border border-blue-500/20 text-xs font-mono">
            <User className="w-3.5 h-3.5" /> ABOUT THE DEVELOPER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafting Digital <span className="text-gradient">Excellence</span>
          </h2>
        </div>

        {/* 2-3 Line Developer Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <GlassCard glowColor="cyan" className="p-8 md:p-10 border-cyan-500/30">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-center font-normal">
              "{PERSONAL_INFO.aboutSummary}"
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={onOpenResumeModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <span>View Full Career Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats Grid Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glowColor={idx % 2 === 0 ? 'blue' : 'purple'} className="h-full">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-cyan-400">
                    {idx === 0 && <Award className="w-6 h-6" />}
                    {idx === 1 && <Cpu className="w-6 h-6" />}
                    {idx === 2 && <Code className="w-6 h-6" />}
                    {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <span className="text-3xl font-extrabold text-white font-mono">{stat.value}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-100">{stat.label}</h3>
                <p className="text-xs text-slate-400 mt-1">{stat.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
