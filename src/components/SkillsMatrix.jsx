import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Cpu, Code2, Layers, Wrench, Sparkles, CheckCircle } from 'lucide-react';

export const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('architecture');

  const categories = [
    { key: 'architecture', label: 'Architecture & Strategy', icon: Layers, gradient: 'from-cyan-500 to-blue-600', text: 'text-cyan-600 dark:text-cyan-400' },
    { key: 'development', label: 'Development & Data', icon: Code2, gradient: 'from-purple-500 to-pink-600', text: 'text-purple-600 dark:text-purple-400' },
    { key: 'management', label: 'Delivery & Methodologies', icon: Cpu, gradient: 'from-emerald-500 to-teal-600', text: 'text-emerald-600 dark:text-emerald-400' },
    { key: 'tools', label: 'Enterprise Platforms & Tools', icon: Wrench, gradient: 'from-amber-500 to-orange-600', text: 'text-amber-600 dark:text-amber-400' },
  ];

  const currentCategoryObj = categories.find(c => c.key === activeCategory) || categories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--bg-main)] border-t border-slate-200/80 dark:border-white/5">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-cyan-600 dark:text-cyan-400 font-mono text-xs mb-3 border border-cyan-500/30 shadow-sm font-semibold">
            <Sparkles size={15} />
            <span>ENTERPRISE CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
            Technical & Delivery Competencies
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-medium">
            Bridging technical depth with commercial insight — from hands-on software engineering and SQL data querying to enterprise SaaS blueprints and Agile governance.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategory(cat.key);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer font-bold ${
                    isSelected
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg scale-105`
                      : 'bg-white dark:bg-[#0e1424] text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-white/10 shadow-sm'
                  }`}
                >
                  <Icon size={15} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid with Multi-Color Gradient Meters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillsData[activeCategory].map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="bg-white dark:bg-[#0e1424] p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${currentCategoryObj.gradient} shadow-sm`}></span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className={`text-xs font-mono font-black ${currentCategoryObj.text}`}>
                  {skill.level}%
                </span>
              </div>

              {/* Multi-stop Progress bar */}
              <div className="w-full h-2.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden p-[1px]">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${currentCategoryObj.gradient} transition-all duration-700 group-hover:brightness-110 shadow-sm`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Competency Level Tag */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle size={13} className="text-emerald-600 dark:text-emerald-400" />
                  {skill.level >= 90 ? 'Enterprise Mastery' : 'High Proficiency'}
                </span>
                <span className="font-bold text-slate-600 dark:text-slate-400">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Mindset Banner */}
        <div className="mt-12 bg-white dark:bg-[#0e1424] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 text-center shadow-md">
          <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-4 font-bold">
            LEADERSHIP & ARCHITECTURAL MINDSET
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Ownership Mentality & Accountability",
              "Cross-Functional Team Leadership",
              "Strategic & First-Principles Thinking",
              "Enterprise Risk Mitigation",
              "Global Stakeholder Diplomacy",
              "Continuous Process Optimization"
            ].map((mindset, i) => (
              <span 
                key={i}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono font-bold text-slate-900 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all shadow-sm"
              >
                ✦ {mindset}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
