import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GitBranch, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const MetricsStrip: React.FC = () => {
  const metrics = [
    {
      icon: BookOpen,
      num: PERSONAL_INFO.cgpa,
      unit: 'CGPA',
      label: 'Academic Standing',
      description: "Consistent academic distinction at St. Xavier's Catholic College of Engineering.",
      color: 'text-[#e5b842]',
    },
    {
      icon: GitBranch,
      num: '3+',
      unit: 'Repos',
      label: 'Core Projects Built',
      description: 'Production-ready Spring Boot backend, React web interfaces, and PostgreSQL schemas.',
      color: 'text-sky-400',
    },
    {
      icon: Award,
      num: '2+',
      unit: 'Shortlists',
      label: 'Hackathons & Contests',
      description: "Bug hunt 2nd prize winner & district qualifier, plus Smart India Hackathon Round 2.",
      color: 'text-emerald-400',
    },
    {
      icon: Sparkles,
      num: '6',
      unit: 'Certifications',
      label: 'Verified Trainings',
      description: 'IIT Bombay SINE Java, SWAYAM Plus, UNICEF AI productivity, and RDBMS.',
      color: 'text-amber-300',
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2 sm:p-3 rounded-2xl border border-white/10 dark:border-white/10 border-slate-200 bg-[#0f0f14]/80 dark:bg-[#0f0f14]/80 bg-white/90 backdrop-blur-xl shadow-2xl"
      >
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-xl border border-white/5 dark:border-white/5 border-slate-100 bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50/50 hover:border-[#e5b842]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-400 text-slate-500">
                  {item.label}
                </span>
                <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
              </div>

              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white dark:text-white text-slate-900 tabular-nums">
                  {item.num}
                </span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${item.color}`}>
                  {item.unit}
                </span>
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
