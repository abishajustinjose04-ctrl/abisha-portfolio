import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Cpu, Check, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Layout,
    Server,
    Database,
    Wrench,
    Cpu,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="03"
          sectionTitle="SKILLS"
          headingLine1="Hardware to frontend,"
          headingLine2="and everything in between."
          subtitle="A categorized overview of programming languages, frameworks, database systems, and core computer science concepts."
          ambientBadge={{
            label: 'TECH STACK MATRIX',
            detail: 'Java · React · Python · SQL',
            icon: 'terminal',
          }}
        />

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 backdrop-blur-md mb-12 w-fit shadow-xs"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Categories
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('programming')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'programming'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Languages
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('frontend')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'frontend'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('backend')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'backend'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Backend & DB
          </button>
        </motion.div>

        {/* Bento Grid of Categorized Skills with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => {
              const Icon = iconMap[cat.iconName] || Layers;
              return (
                <motion.div
                  key={cat.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-xl hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-[#e5b842] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#e5b842] transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills List without fake percentages */}
                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/5">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between gap-3 shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <Check className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0" />
                            <div>
                              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200 block">
                                {skill.name}
                              </span>
                              {skill.note && (
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                                  {skill.note}
                                </span>
                              )}
                            </div>
                          </div>

                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0 font-medium">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{cat.skills.length} core competencies</span>
                    <span className="text-amber-600 dark:text-[#e5b842] font-semibold">Verified</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
