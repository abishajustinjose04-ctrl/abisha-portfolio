import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="06"
          sectionTitle="CERTIFICATIONS"
          headingLine1="Continuous learning,"
          headingLine2="verified knowledge."
          subtitle="Formal coursework and verified certifications across software engineering, enterprise Java, relational databases, and modern web development."
          ambientBadge={{
            label: 'VERIFIED CREDENTIALS',
            detail: 'IIT Bombay · SWAYAM · UNICEF',
            icon: 'award',
          }}
        />

        {/* Certifications 3-Column Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-xl hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842] uppercase tracking-wider">
                    {cert.domain}
                  </span>
                  {cert.scoreOrStatus && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 dark:bg-[#e5b842]/10 text-amber-700 dark:text-[#e5b842] border border-amber-500/30 shrink-0">
                      {cert.scoreOrStatus}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#e5b842] transition-colors mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 font-mono">
                  {cert.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </span>
                <span className="text-slate-500">Academic / Industry</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
