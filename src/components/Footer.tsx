import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#070709] text-slate-600 dark:text-slate-400 py-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <a href="#hero" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#e5b842] text-[#0a0a0c] font-bold text-xs flex items-center justify-center font-mono">
                AJ
              </span>
              <span>
                {PERSONAL_INFO.name}
                <span className="text-amber-600 dark:text-[#e5b842]">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Computer Science Engineering Student · St. Xavier's Catholic College of Engineering
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-[#e5b842] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:border-amber-500 dark:hover:border-[#e5b842] hover:text-amber-600 dark:hover:text-[#e5b842] text-slate-700 dark:text-slate-400 flex items-center justify-center transition-colors shadow-xs"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:border-amber-500 dark:hover:border-[#e5b842] hover:text-amber-600 dark:hover:text-[#e5b842] text-slate-700 dark:text-slate-400 flex items-center justify-center transition-colors shadow-xs"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:border-amber-500 dark:hover:border-[#e5b842] hover:text-amber-600 dark:hover:text-[#e5b842] text-slate-700 dark:text-slate-400 flex items-center justify-center transition-colors shadow-xs"
              title="Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-amber-500/30 bg-amber-50 dark:bg-[#e5b842]/10 hover:bg-[#e5b842] hover:text-[#0a0a0c] text-amber-700 dark:text-[#e5b842] flex items-center justify-center transition-colors shadow-xs"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} · All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Kanyakumari, Tamil Nadu</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
