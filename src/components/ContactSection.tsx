import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AnimatedSectionHeader } from './AnimatedSectionHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please write a brief message';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPrepared(true);

    // Open mailto link directly with prefilled parameters
    const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Abisha,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Animated Section Header with Floating Ambient Tag */}
        <AnimatedSectionHeader
          sectionNumber="07"
          sectionTitle="CONTACT"
          headingLine1="Have an idea?"
          headingLine2="Let's build something meaningful."
          subtitle="Whether discussing software engineering internship opportunities, technical hackathons, academic collaborations, or software ideas, feel free to reach out."
          ambientBadge={{
            label: 'OPEN TO CONNECT',
            detail: 'Internships & Projects',
            icon: 'compass',
          }}
        />

        {/* 2-Column Contact Layout with Scroll Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details & Quick Actions (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-xl space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              {/* Email Item */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-[#e5b842] truncate transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-[#e5b842] text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-[#e5b842] transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 pl-1">
                    Email address copied to clipboard!
                  </p>
                )}
              </div>

              {/* Phone Item */}
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Phone
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                  <Phone className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono font-semibold text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-[#e5b842] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                  <MapPin className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-300">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social links block */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-amber-500 dark:hover:border-[#e5b842] flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-200 transition-colors shadow-xs"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-amber-500 dark:hover:border-[#e5b842] flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-200 transition-colors shadow-xs"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Validated Interactive Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121217]/85 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-600 dark:text-[#e5b842]" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                  Direct Mailto Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/5'
                          : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5'
                      } text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#e5b842] transition-colors`}
                    />
                    {errors.name && <p className="text-[11px] font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/5'
                          : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5'
                      } text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#e5b842] transition-colors`}
                    />
                    {errors.email && <p className="text-[11px] font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Software Internship Opportunity / Discussion"
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-500/5'
                        : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5'
                    } text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#e5b842] transition-colors`}
                  />
                  {errors.subject && <p className="text-[11px] font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Write your note or opportunity details here..."
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/5'
                        : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5'
                    } text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-[#e5b842] transition-colors resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Client Architecture Notice */}
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-[#e5b842] shrink-0 mt-0.5" />
                  <span>
                    Submitting this form launches your default email client with your prefilled note addressed directly to Abisha's inbox.
                  </span>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#e5b842] text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md shadow-[#e5b842]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Client</span>
                </button>

                {isPrepared && (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Email client initiated with your message prefilled!</span>
                  </div>
                )}
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
