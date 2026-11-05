import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, FileText, Check } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const AchievementsSection: React.FC = () => {
  const iconList = [Trophy, Target, Award, FileText];

  return (
    <section id="achievements" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="05"
          sectionTitle="ACHIEVEMENTS"
          headingLine1="Competitions & milestones,"
          headingLine2="earned through code."
          subtitle="Demonstrated competitive problem-solving, rapid hackathon engineering, and academic research presentations."
          ambientBadge={{
            label: 'HONORS & CONTESTS',
            detail: 'Bug Hunt 2nd · CodeSprint Finalist',
            icon: 'award',
          }}
        />

        {/* Achievements Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-xl hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-[#e5b842]/10 border border-amber-500/30 dark:border-[#e5b842]/20 text-amber-600 dark:text-[#e5b842] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842] bg-amber-50 dark:bg-[#e5b842]/10 border border-amber-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#e5b842] transition-colors mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 font-mono">
                    {item.award} · {item.organizer}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{item.keyDetail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
