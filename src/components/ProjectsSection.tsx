import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Layers, ShieldCheck, CheckCircle2, X, Terminal, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="04"
          sectionTitle="PROJECTS & INNOVATIONS"
          headingLine1="Software built"
          headingLine2="for real impact."
          subtitle="Selected academic engineering systems, competitive hackathon prototypes, and web applications developed with clean code principles."
          ambientBadge={{
            label: 'PRODUCTION & CODE',
            detail: '3 Repositories Verified',
            icon: 'layers',
          }}
        />

        {/* Featured Projects Cards with Staggered Scroll Entrance */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-2xl hover:border-amber-500/40 dark:hover:border-[#e5b842]/50 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Project Info Column (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Category & Status Bar */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="text-amber-600 dark:text-[#e5b842] font-mono font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-600 dark:text-slate-400 font-mono font-medium">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#e5b842] transition-colors flex items-center gap-3">
                      <span>{project.title}</span>
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                    <span className="text-xs uppercase font-mono font-bold text-amber-700 dark:text-amber-400 block mb-1">
                      The Challenge Addressed:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Key Technical Features */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
                      Core Functionalities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-[#e5b842] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e5b842] text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md shadow-[#e5b842]/20"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider hover:border-amber-500 dark:hover:border-[#e5b842] hover:text-amber-600 dark:hover:text-[#e5b842] transition-colors shadow-xs"
                    >
                      <Terminal className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
                      <span>Architecture Details</span>
                    </button>
                  </div>

                </div>

                {/* Architecture Visual Card / Highlights Column (5 cols) */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/90 dark:bg-[#0c0c10]/90">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
                        Architecture Blueprint
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        Verified Code
                      </span>
                    </div>

                    {/* Spec preview block */}
                    <div className="p-4 rounded-xl bg-slate-900 text-slate-100 dark:bg-[#070709] dark:text-slate-300 border border-slate-800 dark:border-white/5 font-mono text-xs space-y-2 mb-5 shadow-xs">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>repo: {project.id}</span>
                        <span>stack: {project.technologies[0]}</span>
                      </div>
                      <div className="h-[1px] bg-slate-800 dark:bg-white/5 my-1"></div>
                      <p className="text-amber-400 dark:text-amber-300 text-[11px]">
                        // Primary Target Problem:
                      </p>
                      <p className="text-slate-300 dark:text-slate-400 text-[11px] leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Key deliverables list */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono uppercase font-bold text-slate-600 dark:text-slate-400 block mb-1">
                        Key Deliverables:
                      </span>
                      {project.highlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-300"
                        >
                          <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Source: Public GitHub</span>
                    <span className="font-mono font-bold text-amber-700 dark:text-[#e5b842]">0{idx + 1} / 03</span>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl w-full rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-[#e5b842] text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 dark:text-[#e5b842]">
                  <span>{selectedProject.category}</span>
                  <span>·</span>
                  <span>{selectedProject.statusBadge}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {selectedProject.subtitle}
                </p>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Complete Feature Breakdown:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e5b842] text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>Inspect on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    Close Window
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
