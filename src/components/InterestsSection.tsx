import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Shield, Database } from 'lucide-react';
import { INTERESTS_DATA } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  const icons = [Terminal, Sparkles, Shield, Database];

  return (
    <section className="py-16 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e0e14]/70 shadow-xl backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 dark:text-[#e5b842] block mb-2">
                Focus & Curiosity
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Areas I actively explore & build in
              </h3>
            </div>

            {/* Minimal floating badge in empty area */}
            <motion.div
              animate={{ y: [-4, 5, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842] shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>LEARNING ROADMAP</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTERESTS_DATA.map((item, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-colors shadow-xs"
                >
                  <Icon className="w-5 h-5 text-amber-600 dark:text-[#e5b842] mb-3" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {item.area}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
