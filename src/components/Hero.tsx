import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, ROTATING_ROLES } from '../data/portfolioData';
import { CanvasMesh } from './CanvasMesh';

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullRole = ROTATING_ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Interactive Canvas Mesh Backdrop */}
      <CanvasMesh isDark={isDark} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Hero Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Introductory Pill / Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-300">
                Computer Science Engineering Student
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs hidden sm:inline">·</span>
              <span className="text-xs text-amber-600 dark:text-[#e5b842] font-semibold hidden sm:inline">
                SXCCE '28
              </span>
            </div>

            {/* Main Heading with High Contrast for Both Themes */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
                <span>Hi, I'm </span>
                <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-400">
                  Abisha
                </span>{' '}
                <span className="text-amber-600 dark:text-[#e5b842] font-serif italic text-outline-gold">
                  J.
                </span>
              </h1>
            </div>

            {/* Typewriter Role Line */}
            <p className="text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-300 flex items-center min-h-[36px]">
              <span className="text-slate-500 dark:text-slate-400 mr-2">I am an</span>
              <span className="text-amber-600 dark:text-[#e5b842] font-bold tracking-tight border-b-2 border-amber-500/50 dark:border-[#e5b842]/40 pb-0.5">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-amber-600 dark:bg-[#e5b842] animate-pulse"></span>
            </p>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Third-year student at{' '}
              <strong className="text-slate-900 dark:text-slate-200 font-semibold">
                St. Xavier's Catholic College of Engineering
              </strong>{' '}
              passionate about developing practical applications, exploring modern stacks in{' '}
              <span className="text-amber-700 dark:text-amber-300 font-semibold">Java, Spring Boot, & React</span>,
              participating in technical competitions, and engineering dependable digital solutions.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e5b842] text-[#0a0a0c] font-bold text-sm hover:bg-amber-300 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#e5b842]/25"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Abisha_J_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:border-amber-500 dark:hover:border-[#e5b842] hover:text-amber-600 dark:hover:text-[#e5b842] transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-400 font-semibold text-sm hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-3 border-t border-slate-200 dark:border-white/10 w-full max-w-xl">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono font-semibold">Connect:</span>
              
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#e5b842] hover:border-amber-500/50 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#e5b842] hover:border-amber-500/50 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#e5b842] hover:border-amber-500/50 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Mail className="w-3 h-3 text-slate-400" />
                <span className="hidden sm:inline">Email</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#e5b842] hover:border-amber-500/50 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Phone className="w-3 h-3 text-slate-400" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </div>

          </div>

          {/* Right Column: Circular Portrait & Concentric Orbital Rings (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              
              {/* Concentric Orbital Ring 1 (Outer - 380px) */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/35 dark:border-[#e5b842]/25 animate-spin-slow pointer-events-none">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#0a0a0c] border border-amber-500/60 dark:border-[#e5b842]/60 text-[11px] font-mono font-bold text-amber-700 dark:text-[#e5b842] shadow-sm">
                  Java 17
                </span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#0a0a0c] border border-cyan-500/60 text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 shadow-sm">
                  React
                </span>
              </div>

              {/* Concentric Orbital Ring 2 (Middle - 320px) */}
              <div className="absolute w-[86%] h-[86%] rounded-full border border-slate-300 dark:border-white/10 animate-spin-reverse pointer-events-none">
                <span className="absolute top-1/2 -left-3 -translate-y-1/2 px-2 py-0.5 rounded-full bg-white dark:bg-[#0a0a0c] border border-emerald-500/60 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 shadow-sm">
                  Python
                </span>
                <span className="absolute top-1/2 -right-3 -translate-y-1/2 px-2 py-0.5 rounded-full bg-white dark:bg-[#0a0a0c] border border-amber-500/60 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 shadow-sm">
                  Full-Stack
                </span>
              </div>

              {/* Glowing Aura Behind Avatar */}
              <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-amber-400/20 via-sky-400/15 to-transparent blur-2xl pointer-events-none"></div>

              {/* Main Profile Photo Frame */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1.5 bg-gradient-to-tr from-[#e5b842] via-slate-400 dark:via-slate-700 to-sky-400 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white dark:border-[#0a0a0c]">
                  <img
                    src={PERSONAL_INFO.profileImagePath}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Glass Badge 1: Top Left */}
              <div className="absolute -top-2 -left-4 sm:-left-8 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#121217]/90 backdrop-blur-md shadow-xl animate-float-slow">
                <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight">
                  SXCCE · CSE '28
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  St. Xavier's Catholic College
                </p>
              </div>

              {/* Floating Glass Badge 2: Top Right */}
              <div className="absolute top-6 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl border border-amber-500/40 bg-white/95 dark:bg-[#121217]/90 backdrop-blur-md shadow-xl animate-float-delayed">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-600 dark:text-[#e5b842] font-bold text-xs">★</span>
                  <p className="text-[11px] font-bold text-amber-700 dark:text-[#e5b842] leading-tight">
                    CGPA: 8.89
                  </p>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  Academic Rigor
                </p>
              </div>

              {/* Floating Glass Badge 3: Bottom Left (Updated: CodeSprint '26 Finalist) */}
              <div className="absolute -bottom-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl border border-sky-500/40 bg-white/95 dark:bg-[#121217]/90 backdrop-blur-md shadow-xl animate-float-delayed">
                <p className="text-[11px] font-bold text-sky-600 dark:text-sky-400 leading-tight">
                  CodeSprint '26 Finalist
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  CivicConnect AI
                </p>
              </div>

              {/* Floating Glass Badge 4: Bottom Right */}
              <div className="absolute bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl border border-emerald-500/40 bg-white/95 dark:bg-[#121217]/90 backdrop-blur-md shadow-xl animate-float-slow">
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                  Bug Hunt 2nd Prize
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  District Qualifier
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
