import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Code2, Award, Zap, Terminal } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const CodingStats: React.FC = () => {
  const stats = [
    { label: "Git Commits (2023-Present)", value: "850+", icon: GitCommit, color: "text-blue-500", glow: "blue" },
    { label: "Pull Requests Merged", value: "120+", icon: GitPullRequest, color: "text-cyan-500", glow: "cyan" },
    { label: "Code Reliability Rate", value: "99.8%", icon: Zap, color: "text-emerald-500", glow: "emerald" },
    { label: "Data Structures & Algos", value: "250+ Solved", icon: Award, color: "text-purple-500", glow: "purple" },
  ];

  const languages = [
    { name: "Java & Spring Boot", percentage: 90, color: "bg-blue-600" },
    { name: "React.js & TypeScript", percentage: 94, color: "bg-cyan-500" },
    { name: "Node.js & Express", percentage: 88, color: "bg-indigo-600" },
    { name: "PostgreSQL & MongoDB", percentage: 90, color: "bg-purple-600" },
  ];

  return (
    <div className="mt-12 space-y-8">
      <div className="flex items-center gap-3 border-l-4 border-cyan-500 pl-3">
        <Terminal className="w-5 h-5 text-cyan-500" />
        <h3 className="text-xl font-bold dark:text-white light:text-slate-900">
          Coding Activity & Engineering Metrics
        </h3>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glowColor={item.glow as any} className="p-6 h-full">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl dark:bg-slate-900 light:bg-slate-100 border border-white/10 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold dark:text-white light:text-slate-900 font-mono">
                    {item.value}
                  </span>
                </div>
                <h4 className="mt-4 text-xs font-semibold text-slate-400">{item.label}</h4>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Code Distribution Bar */}
      <GlassCard glowColor="blue" className="p-6 border-blue-500/30">
        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
          Tech Stack Proficiency Distribution
        </h4>
        <div className="space-y-3">
          {languages.map((lang, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold dark:text-slate-200 light:text-slate-800">{lang.name}</span>
                <span className="font-mono text-cyan-500 text-[11px]">{lang.percentage}%</span>
              </div>
              <div className="w-full h-2 dark:bg-slate-900 light:bg-slate-200 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                  className={`h-full rounded-full ${lang.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};
