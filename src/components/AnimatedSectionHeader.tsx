import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Terminal, Shield, Award, Layers } from 'lucide-react';

interface AnimatedSectionHeaderProps {
  sectionNumber: string;
  sectionTitle: string;
  headingLine1: string;
  headingLine2: string;
  subtitle?: string;
  ambientBadge?: {
    label: string;
    detail?: string;
    icon?: 'compass' | 'terminal' | 'shield' | 'award' | 'layers' | 'sparkles';
  };
}

export const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({
  sectionNumber,
  sectionTitle,
  headingLine1,
  headingLine2,
  subtitle,
  ambientBadge,
}) => {
  const iconMap = {
    compass: Compass,
    terminal: Terminal,
    shield: Shield,
    award: Award,
    layers: Layers,
    sparkles: Sparkles,
  };

  const IconComponent = ambientBadge?.icon ? iconMap[ambientBadge.icon] : Sparkles;

  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16 relative">
      {/* Left side: Heading block with scroll entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-[#e5b842]">
            {sectionNumber} / {sectionTitle}
          </span>
          <span className="w-8 h-[1px] bg-amber-500/40 dark:bg-[#e5b842]/40"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {headingLine1}
          <br />
          <span className="text-amber-600 dark:text-[#e5b842] font-serif italic text-outline-gold">
            {headingLine2}
          </span>
        </h2>

        {subtitle && (
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Right side: Minimal Floating Ambient Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex items-center self-start lg:self-center shrink-0"
      >
        <motion.div
          animate={{
            y: [-5, 7, -5],
            rotate: [-0.8, 1, -0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#121217]/70 backdrop-blur-md shadow-xl flex items-center gap-3.5 group hover:border-amber-500/40 dark:hover:border-[#e5b842]/40 transition-colors"
        >
          {/* Subtle spinning ring around icon */}
          <div className="relative w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-[#e5b842]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-xl border border-dashed border-amber-500/40 dark:border-[#e5b842]/30 pointer-events-none"
            />
            <IconComponent className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
          </div>

          <div className="text-left font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-900 dark:text-white tracking-wider uppercase">
                {ambientBadge ? ambientBadge.label : 'SXCCE · CSE'}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-tight font-medium">
              {ambientBadge?.detail ? ambientBadge.detail : '8.1722° N, 77.3040° E'}
            </p>
          </div>

          {/* Decorative subtle ambient line */}
          <div className="w-8 h-[1px] bg-gradient-to-r from-amber-500/40 dark:from-[#e5b842]/40 to-transparent"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};
