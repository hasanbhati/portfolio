import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { personalInfo } from '../data/portfolioData';

export const ContactNexus = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'SaaS Solution Architecture', message: '' });

  const handleCopyEmail = () => {
    sound.playSuccess();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(personalInfo.email).catch(() => {});
    }
    setCopiedEmail(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#4facfe', '#10b981', '#a855f7']
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setFormSubmitted(true);
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4facfe', '#10b981', '#a855f7', '#f59e0b']
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[var(--bg-main)] border-t border-slate-200/80 dark:border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full glass-panel text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 border border-cyan-500/30 shadow-sm font-semibold">
            <Sparkles size={15} />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
            Let's Architect Something Extraordinary
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Whether you are looking for enterprise SaaS architecture, complex digital transformation advisory, or end-to-end technical project leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Quick Email Card */}
            <div className="bg-[#0e1424] p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all group shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                  <Mail size={15} /> DIRECT INBOX
                </span>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30 font-bold">
                  RAPID RESPONSE
                </span>
              </div>

              <div className="text-base sm:text-lg font-mono font-bold text-white mb-3 break-all">
                {personalInfo.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full mt-2 py-3 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                onClick={() => sound.playClick()}
                className="bg-[#0e1424] p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all block group shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1 font-bold">
                  <Phone size={14} className="text-blue-400" />
                  <span>PHONE / WHATSAPP</span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-blue-400 transition-colors">
                  {personalInfo.phone}
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="bg-[#0e1424] p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all block group shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1 font-bold">
                  <LinkedinIcon size={14} className="text-purple-400" />
                  <span>LINKEDIN</span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-purple-400 transition-colors truncate">
                  in/hasanbhati
                </div>
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div className="bg-[#0e1424] p-4 sm:p-5 rounded-2xl border border-white/10 flex items-start sm:items-center gap-3.5 sm:gap-4 shadow-sm">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shrink-0">
                <MapPin size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                  PRIMARY LOCATION
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {personalInfo.location}
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-0.5 font-medium leading-relaxed">
                  Timezone: {personalInfo.timezone} • Open to Global Relocation & Travel
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Engagement Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1424] p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl border border-white/10 relative shadow-xl">
              
              {formSubmitted ? (
                <div className="py-10 sm:py-14 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <Check size={30} className="sm:w-[34px] sm:h-[34px]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Transmission Received!</h3>
                  <p className="text-slate-200 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-normal">
                    Thank you for reaching out, <span className="text-cyan-400 font-bold">{formData.name || 'Partner'}</span>. 
                    I have received your requirements and will follow up promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'SaaS Solution Architecture', message: '' });
                    }}
                    className="mt-4 px-5 sm:px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3.5 sm:pb-4 mb-4 sm:mb-5">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-2 font-bold">
                      <MessageSquare size={15} /> DIRECT INQUIRY CONSOLE
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">ENCRYPTION: SECURE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-200 mb-1.5 font-bold">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/15 text-white text-xs font-mono placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-200 mb-1.5 font-bold">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/15 text-white text-xs font-mono placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-200 mb-1.5 font-bold">TOPIC / SCOPE</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors font-medium cursor-pointer"
                    >
                      <option value="SaaS Solution Architecture">Enterprise SaaS Architecture & Blueprint</option>
                      <option value="Project Management & Delivery">Project Management & End-to-End Delivery</option>
                      <option value="Digital Transformation Advisory">Digital Transformation & Discovery Workshops</option>
                      <option value="Executive Career Opportunity">Executive Role / Career Collaboration</option>
                      <option value="Consulting Inquiry">Advisory & Technical Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-200 mb-1.5 font-bold">PROJECT DETAILS & OBJECTIVES *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe high-level goals, system constraints, or timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/15 text-white text-xs font-mono placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase font-mono shadow-lg hover:shadow-cyan-500/40 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>DISPATCH TRANSMISSION</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
