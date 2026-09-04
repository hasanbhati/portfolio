import React, { useState } from 'react';
import { experienceData, volunteerExperience, educationData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Briefcase, ChevronDown, ChevronUp, GraduationCap, HeartHandshake, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('experience');

  const toggleExpand = (index) => {
    sound.playClick();
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const getRoleAccent = (company, role) => {
    if (company === 'IBM') {
      return {
        badge: 'bg-blue-600 text-white',
        pulse: 'border-blue-500 bg-blue-400',
        cardBorder: 'hover:border-blue-500'
      };
    }
    if (role.includes('Solution Architect')) {
      return {
        badge: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white',
        pulse: 'border-cyan-400 bg-cyan-300',
        cardBorder: 'hover:border-cyan-400'
      };
    }
    if (role.includes('Business Analyst')) {
      return {
        badge: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white',
        pulse: 'border-purple-400 bg-purple-300',
        cardBorder: 'hover:border-purple-400'
      };
    }
    return {
      badge: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white',
      pulse: 'border-emerald-400 bg-emerald-300',
      cardBorder: 'hover:border-emerald-400'
    };
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[var(--bg-main)]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full glass-panel text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 border border-cyan-500/30 shadow-sm font-semibold">
            <Briefcase size={15} />
            <span>CAREER TRAJECTORY & PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
            5+ Years of Evolution in SaaS & Leadership
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Progressing from hands-on platform triage to project management and enterprise solution architecture.
          </p>

          {/* Tab Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 w-full sm:w-auto">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('experience');
              }}
              className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer font-bold ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 shadow-sm'
              }`}
            >
              <Briefcase size={15} />
              <span>Professional Experience</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('leadership');
              }}
              className={`w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer font-bold ${
                activeTab === 'leadership'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 shadow-sm'
              }`}
            >
              <HeartHandshake size={15} />
              <span>AIESEC Leadership & Community</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Professional Experience */}
        {activeTab === 'experience' && (
          <div className="relative border-l-2 border-cyan-500/40 ml-4 sm:ml-8 md:ml-28 pl-6 sm:pl-8 md:pl-10 space-y-6 sm:space-y-8">
            {experienceData.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;
              const accent = getRoleAccent(exp.company, exp.role);

              return (
                <div key={idx} className="relative group">
                  {/* Multi-Color Timeline Pulse Node precisely centered over the border */}
                  <div className={`absolute -left-[33px] sm:-left-[41px] md:-left-[49px] top-5 sm:top-6 w-4 h-4 rounded-full bg-[#07090e] border-2 ${accent.pulse} group-hover:scale-125 transition-transform shadow-md flex items-center justify-center`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  </div>

                  {/* Role Container Card */}
                  <div 
                    className={`rounded-2xl border transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-[#0e1424] border-cyan-500/70 shadow-xl p-5 sm:p-7 lg:p-8' 
                        : `bg-[#0e1424] border-white/10 ${accent.cardBorder} p-4 sm:p-5 shadow-sm`
                    }`}
                  >
                    {/* Header Row */}
                    <div 
                      onClick={() => toggleExpand(idx)}
                      className="cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          <span className={`text-[11px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-0.5 rounded-lg shadow-sm ${accent.badge}`}>
                            {exp.company}
                          </span>
                          {exp.status === 'Current' && (
                            <span className="text-[10px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold animate-pulse">
                              PRESENT
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400 font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-cyan-400" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-cyan-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Expand Toggle Button */}
                      <button 
                        className="self-end sm:self-auto px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-white/10 hover:border-cyan-500 transition-all flex items-center gap-1.5 text-xs font-mono font-bold"
                      >
                        <span>{isExpanded ? 'LESS' : 'DETAILS'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>

                    {/* Highlight snippet */}
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-3 font-medium leading-relaxed">
                      {exp.highlight}
                    </p>

                    {/* Detailed Accordion Content */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 space-y-4 animate-in fade-in duration-200">
                        <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold">
                          Key Deliverables & Responsibilities:
                        </div>
                        <ul className="space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                          {exp.bulletPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                              <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Chips */}
                        <div className="pt-3">
                          <div className="text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-2 font-bold">DOMAIN COMPETENCIES:</div>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono font-bold text-slate-900 dark:text-cyan-200 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: AIESEC Leadership & Community Experience */}
        {activeTab === 'leadership' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {volunteerExperience.map((vol, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0e1424] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-purple-500/50 transition-all shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <HeartHandshake size={19} className="text-purple-600 dark:text-purple-400" />
                      {vol.role}
                    </h3>
                    <div className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 mt-1">
                      {vol.organization} • {vol.location}
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-300 font-bold">
                    {vol.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium mt-4">
                  {vol.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education Section Banner with Emerald / Cyan Jewel Glow */}
        <div className="mt-12 sm:mt-16 bg-[#0e1424] p-5 sm:p-8 rounded-2xl border border-emerald-500/30 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm shrink-0">
                <GraduationCap size={24} className="sm:w-[26px] sm:h-[26px]" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 tracking-wider uppercase block font-bold">
                  ACADEMIC FOUNDATION
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {educationData.degree}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono font-medium">
                  {educationData.institution} • {educationData.location}
                </p>
              </div>
            </div>

            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-200 shadow-sm self-start sm:self-auto">
              {educationData.period}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 font-mono text-xs text-slate-200 font-medium">
            {educationData.focusAreas.map((area, aIdx) => (
              <div key={aIdx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
