import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('abisha_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default dark luxury theme
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('abisha_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('abisha_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const sectionMotionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-[#e5b842] selection:text-[#0a0a0c]">
      {/* 3-Zone Sticky Navigation */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Semantic Main Content Area with Framer Motion Section Wrappers */}
      <main className="relative">
        {/* Section 0: Hero with Canvas Mesh */}
        <motion.section {...sectionMotionProps}>
          <Hero isDark={isDark} />
        </motion.section>

        {/* Milestone Metric Kicker Strip */}
        <motion.section {...sectionMotionProps}>
          <MetricsStrip />
        </motion.section>

        {/* Section 1: About Me */}
        <motion.section {...sectionMotionProps}>
          <AboutSection />
        </motion.section>

        {/* Section 2: Journey Timeline (Education & Internship) */}
        <motion.section {...sectionMotionProps}>
          <JourneySection />
        </motion.section>

        {/* Section 3: Technical Skills Bento Grid */}
        <motion.section {...sectionMotionProps}>
          <SkillsSection />
        </motion.section>

        {/* Section 4: Featured Projects & Architecture Modal */}
        <motion.section {...sectionMotionProps}>
          <ProjectsSection />
        </motion.section>

        {/* Section 5: Achievements & Milestones */}
        <motion.section {...sectionMotionProps}>
          <AchievementsSection />
        </motion.section>

        {/* Section 6: Professional Certifications */}
        <motion.section {...sectionMotionProps}>
          <CertificationsSection />
        </motion.section>

        {/* Section 7: Engineering Focus Areas */}
        <motion.section {...sectionMotionProps}>
          <InterestsSection />
        </motion.section>

        {/* Section 8: Contact Form & Channels */}
        <motion.section {...sectionMotionProps}>
          <ContactSection />
        </motion.section>
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
