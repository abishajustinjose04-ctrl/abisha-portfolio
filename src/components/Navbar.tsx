import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0a0a0c]/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-200 dark:border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e5b842] to-amber-200 text-[#0a0a0c] font-bold text-xs flex items-center justify-center font-mono shadow-sm group-hover:scale-105 transition-transform">
            AJ
          </span>
          <span className="font-heading">
            {PERSONAL_INFO.name}
            <span className="text-amber-600 dark:text-[#e5b842]">.</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors duration-200 py-1 border-b-2 ${
                  isActive
                    ? 'text-amber-600 dark:text-[#e5b842] border-amber-600 dark:border-[#e5b842]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#e5b842] hover:border-amber-500/50 transition-colors shadow-xs"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Abisha_J_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-[#e5b842] text-[#0a0a0c] hover:bg-amber-300 transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#e5b842]/20 whitespace-nowrap shrink-0"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0e0e13] border-b border-slate-200 dark:border-white/10 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#e5b842] py-1 border-b border-slate-100 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Abisha_J_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#e5b842] text-[#0a0a0c] hover:bg-amber-300 transition-colors shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
