import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap, Code, Compass, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, CORE_PILLARS } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const AboutSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const quickFacts = [
    {
      q: 'Where do you study and what is your academic focus?',
      a: "I am a B.E. Computer Science and Engineering student at St. Xavier's Catholic College of Engineering (SXCCE) in Kanyakumari, Tamil Nadu, maintaining an 8.89 CGPA. My coursework centers on algorithms, database management, software design, and distributed networks.",
    },
    {
      q: 'What are your core programming languages and technologies?',
      a: 'My primary language is Java (OOP, Collections, Spring Boot, Spring Data JPA), complemented by Python for scripting and microservices (Flask), JavaScript and React for frontend development, and PostgreSQL/MySQL for relational databases.',
    },
    {
      q: 'What real-world projects have you developed?',
      a: "I engineered the SXCCE ExamPortal (a comprehensive college mini-project examination system with tab-switch detection and timer submission), CivicConnect AI (public complaint management portal shortlisted for CodeSprint '26 prototype round), and TravelMate Holidays (a frontend travel platform).",
    },
    {
      q: 'What kind of opportunities are you seeking?',
      a: 'I am actively seeking software engineering internships, technical hackathon collaborations, and real-world development challenges where I can contribute clean code and learn from experienced engineering teams.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="01"
          sectionTitle="ABOUT"
          headingLine1="Curious mind,"
          headingLine2="creative builder."
          ambientBadge={{
            label: 'SXCCE · CSE BATCH 2028',
            detail: 'Kanyakumari, Tamil Nadu',
            icon: 'compass',
          }}
        />

        {/* Balanced Full-Width 2-Column Grid (No dead right-side gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch w-full">
          
          {/* Left Column: Personal Narrative & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between space-y-6 h-full"
          >
            <div className="p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/80 shadow-xl space-y-5 flex-1">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.aboutBio1}
              </p>

              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.aboutBio2}
              </p>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {PERSONAL_INFO.aboutBio3}
              </p>

              {/* Location & College metadata strip */}
              <div className="pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
                  <span>Kulasekharam, Kanyakumari, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>SXCCE · Expected 2028</span>
                </div>
              </div>
            </div>

            {/* Core Pillars 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/90 dark:bg-white/[0.02] hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-colors shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-mono text-amber-600 dark:text-[#e5b842] font-semibold">
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Quick Facts & Engineering Highlights (Covers full right width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between space-y-6 h-full"
          >
            <div className="p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e0e13]/80 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-5 h-5 text-amber-600 dark:text-[#e5b842]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                      Quick Profile Overview
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <UserCheck className="w-3.5 h-3.5" />
                    Verified Student Profile
                  </span>
                </div>

                <div className="space-y-3.5">
                  {quickFacts.map((fact, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.02] overflow-hidden transition-all shadow-xs"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-[#e5b842] transition-colors"
                        >
                          <span>{fact.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-amber-600 dark:text-[#e5b842] transition-transform duration-200 shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5">
                            {fact.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quote & Philosophy Card */}
              <motion.div
                animate={{ y: [-2, 3, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-6 p-5 rounded-2xl border border-amber-500/30 dark:border-[#e5b842]/20 bg-amber-50/60 dark:bg-[#e5b842]/5 flex items-start gap-3.5 shadow-xs"
              >
                <Code className="w-5 h-5 text-amber-600 dark:text-[#e5b842] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-300 leading-relaxed">
                    "I value software that is maintainable, well-tested, and solves a tangible friction point for real users."
                  </p>
                  <span className="text-[11px] font-mono font-semibold text-amber-700 dark:text-[#e5b842] mt-1 block">
                    — Engineering Philosophy
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Academic Highlights Banner spanning bottom of right side */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 shadow-xs">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>SXCCE Autonomous · Anna University Affiliated</span>
              </span>
              <span className="font-semibold text-amber-700 dark:text-[#e5b842]">
                CGPA 8.89
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
