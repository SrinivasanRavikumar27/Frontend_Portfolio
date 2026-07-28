import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, CheckCircle2, Wrench, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Backend':
        return <Server className="w-6 h-6 text-blue-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-purple-400" />;
      case 'Manual Testing':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'Tools & Deployment':
        return <Wrench className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> TECHNICAL MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive overview of core competencies across frontend, backend, database architectures, manual testing, and deployment tools.
          </p>
        </div>

        {/* 5 Premium Skill Cards - ALL VISIBLE (No Carousels / Sliders) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}
            >
              <GlassCard
                glowColor={
                  idx === 0 ? 'cyan' : idx === 1 ? 'blue' : idx === 2 ? 'purple' : idx === 3 ? 'emerald' : 'cyan'
                }
                className="h-full flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-slate-900 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                          {cat.category}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-400">{cat.skills.length} Core Modules</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skill Progress List */}
                  <div className="mt-6 space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="font-mono text-cyan-400 text-[11px]">{skill.level}%</span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + sIdx * 0.05 }}
                            className={`h-full rounded-full bg-gradient-to-r ${cat.gradient}`}
                          />
                        </div>

                        {skill.description && (
                          <p className="text-[10px] text-slate-400 italic">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tagline */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono">Status: Verified</span>
                  <span className="text-cyan-400">Production Ready</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
