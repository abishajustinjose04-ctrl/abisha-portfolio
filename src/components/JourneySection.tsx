import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const JourneySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'experience'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="journey" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="02"
          sectionTitle="JOURNEY"
          headingLine1="From fundamentals"
          headingLine2="to real-world software."
          subtitle="A chronological pathway of academic milestones, development internships, and competitive technical growth."
          ambientBadge={{
            label: 'CAREER TIMELINE',
            detail: '2024 — 2028 & Beyond',
            icon: 'layers',
          }}
        />

        {/* Filter Segmented Control */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 backdrop-blur-md mb-16 w-fit shadow-xs"
        >
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Milestones
          </button>

          <button
            type="button"
            onClick={() => setFilter('education')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'education'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('experience')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'experience'
                ? 'bg-[#e5b842] text-[#0a0a0c] shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship</span>
          </button>
        </motion.div>

        {/* Spacious Vertical Timeline with Ample Breathing Room */}
        <div className="relative border-l-2 border-amber-500/40 dark:border-[#e5b842]/30 ml-6 sm:ml-48 md:ml-56 space-y-16 pl-8 sm:pl-12 md:pl-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Node Icon precisely centered on the 2px line with zero text congestion */}
                <div className="absolute -left-[45px] sm:-left-[61px] md:-left-[77px] top-3 w-7 h-7 rounded-full bg-white dark:bg-[#0a0a0c] border-2 border-amber-600 dark:border-[#e5b842] flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-200 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-[#e5b842]"></span>
                </div>

                {/* Left Period Label on desktop with clear spacing */}
                <div className="hidden sm:block absolute -left-52 md:-left-60 top-3 w-40 md:w-48 text-right pr-5">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842] uppercase tracking-wider block">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mt-0.5">
                    {item.type === 'education' ? 'Academic Program' : 'Internship Role'}
                  </span>
                </div>

                {/* Main Timeline Card */}
                <div className="p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-xl hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-all duration-300">
                  
                  {/* Mobile Period pill */}
                  <div className="sm:hidden flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
                    <span className="text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842]">
                      {item.period}
                    </span>
                    {item.isUpcoming && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                        Scheduled
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#e5b842] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-50 dark:bg-[#e5b842]/10 text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842] self-start sm:self-auto shadow-xs">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.scoreOrRole}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-[#e5b842]" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 mb-6">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Chips */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold mr-1">Skills:</span>
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
