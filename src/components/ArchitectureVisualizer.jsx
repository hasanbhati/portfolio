import React, { useState } from 'react';
import { Layers, Network, Users, CheckCircle2, Cpu, FileSpreadsheet, Workflow, GitMerge } from 'lucide-react';
import { sound } from '../utils/audio';
import { methodologyPillars } from '../data/portfolioData';

export const ArchitectureVisualizer = () => {
  const [activePhase, setActivePhase] = useState(0);

  const handleSelectPhase = (index) => {
    sound.playClick();
    setActivePhase(index);
  };

  const phaseAccents = [
    {
      color: 'cyan',
      badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      activeBorder: 'border-cyan-500 shadow-cyan-500/20',
      iconBg: 'bg-cyan-500/20 text-cyan-300',
      bar: 'from-cyan-500 to-blue-600',
      numColor: 'text-cyan-400',
      icon: Layers
    },
    {
      color: 'indigo',
      badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      activeBorder: 'border-indigo-500 shadow-indigo-500/20',
      iconBg: 'bg-indigo-500/20 text-indigo-300',
      bar: 'from-blue-600 to-indigo-600',
      numColor: 'text-indigo-400',
      icon: Cpu
    },
    {
      color: 'purple',
      badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      activeBorder: 'border-purple-500 shadow-purple-500/20',
      iconBg: 'bg-purple-500/20 text-purple-300',
      bar: 'from-indigo-600 to-purple-600',
      numColor: 'text-purple-400',
      icon: Network
    },
    {
      color: 'emerald',
      badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      activeBorder: 'border-emerald-500 shadow-emerald-500/20',
      iconBg: 'bg-emerald-500/20 text-emerald-300',
      bar: 'from-emerald-500 to-teal-600',
      numColor: 'text-emerald-400',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="architecture" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full glass-panel text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 border border-cyan-500/30 shadow-sm font-bold">
            <Workflow size={15} />
            <span>ARCHITECTURAL METHODOLOGY BLUEPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
            How I Architect Scalable Enterprise SaaS
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Translating high-level business goals and technical ambiguity into bulletproof technical specifications, data schemas, and validated production rollouts.
          </p>
        </div>

        {/* ======================================================== */}
        {/* BLOCK 1: Interactive 4-Phase Architecture Lifecycle */}
        {/* ======================================================== */}
        <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {methodologyPillars.map((item, idx) => {
              const isSelected = activePhase === idx;
              const accent = phaseAccents[idx];
              const IconComp = accent.icon;

              return (
                <button
                  key={item.phase}
                  onClick={() => handleSelectPhase(idx)}
                  onMouseEnter={() => sound.playHover()}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all relative group border cursor-pointer ${
                    isSelected 
                      ? `bg-[#0e1424] ${accent.activeBorder} scale-[1.01] sm:scale-[1.02] shadow-xl` 
                      : 'bg-[#0e1424]/60 border-white/5 hover:border-cyan-500/50 shadow-sm'
                  }`}
                >
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`text-xl sm:text-2xl font-black font-mono ${isSelected ? accent.numColor : 'text-slate-600'}`}>
                      {item.phase}
                    </span>
                    <div className={`p-2 sm:p-2.5 rounded-xl ${isSelected ? accent.iconBg : 'bg-white/5 text-slate-400'}`}>
                      <IconComp size={18} />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 sm:mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Progress bar line */}
                  <div className="mt-3.5 sm:mt-4 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        isSelected ? `w-full bg-gradient-to-r ${accent.bar}` : 'w-0'
                      }`}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Full-Width Phase Detail Showcase */}
          <div className="bg-[#0e1424] p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-5 sm:mb-6">
              <div className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono px-3 sm:px-3.5 py-1.5 rounded-lg border font-bold ${phaseAccents[activePhase].badge}`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                <span>PHASE 0{activePhase + 1} DEEP DIVE & DELIVERABLES</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 font-bold hidden sm:inline-block">
                SYSTEM SPECIFICATION READY // 100% REQ ADHERENCE
              </span>
            </div>

            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                {methodologyPillars[activePhase].title}
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                {methodologyPillars[activePhase].desc}
              </p>

              {/* Deliverables */}
              <div className="pt-2">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2 font-bold">
                  <FileSpreadsheet size={15} className="text-cyan-400 shrink-0" />
                  <span>Key Architectural Deliverables in this Phase:</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {methodologyPillars[activePhase].deliverables.map((deliv, i) => (
                    <span 
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-cyan-500/20 text-[11px] sm:text-xs font-mono font-bold text-cyan-200 flex items-center gap-2 hover:border-cyan-500 transition-colors shadow-sm"
                    >
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BLOCK 2: Dedicated Solution Bridge Orchestration Model */}
        {/* ======================================================== */}
        <div className="bg-[#0a0f1c] p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6 sm:mb-8">
            <div>
              <div className="text-[11px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2 mb-1 font-bold">
                <GitMerge size={16} />
                <span>OVERARCHING ENTERPRISE OPERATING MODEL</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">
                Solution Bridge Orchestration
              </h3>
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-200 px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 self-start md:self-auto shadow-sm">
              CORE OPERATIONAL HUB • CONSTANT ACROSS ALL PHASES
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6 sm:mb-8 font-normal">
            Serving as the central strategic connective tissue between international enterprise clients and internal cross-functional engineering teams — translating abstract commercial needs into scalable SaaS architectures, data schemas, and validated production rollouts.
          </p>

          {/* Horizontal Architecture Flow Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 relative">
            
            {/* Stage 1: Enterprise Client Inputs */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1220] border border-blue-500/30 flex flex-col justify-between group hover:border-blue-400 transition-colors shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 sm:p-3 rounded-xl bg-blue-500/15 text-blue-400">
                    <Users size={18} />
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 font-extrabold tracking-wider">
                    01 • INPUT STREAM
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white mb-2">
                  Enterprise Clients & Stakeholders
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Strategic business objectives, customer journey criteria, legacy system constraints, and raw catalog product data.
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center gap-2 font-bold">
                <span className="text-blue-400 font-black">→</span>
                <span>Discovery Workshops & Scope Mapping</span>
              </div>
            </div>

            {/* Stage 2: Hasan Atul Bhati (Core Hub) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-cyan-950/60 via-[#0c1427] to-purple-950/60 border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.18)] flex flex-col justify-between relative mt-2 lg:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-[9px] sm:text-[10px] font-mono font-black text-white tracking-widest uppercase shadow-md whitespace-nowrap">
                CENTRAL ARCHITECTURAL HUB
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Cpu size={18} />
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-extrabold animate-pulse tracking-wider">
                    02 • THE BRIDGE
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-cyan-300 mb-2">
                  Hasan Atul Bhati (Solution Architect)
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Synthesizes business rules into modular SaaS blueprints, API schemas, risk & scope management logs, and engineering deliverables.
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3 border-t border-cyan-500/30 font-mono text-[11px] text-cyan-300 flex items-center gap-2 font-bold">
                <span className="text-cyan-400 font-black">⚡</span>
                <span>Fit-For-Purpose SaaS Specifications</span>
              </div>
            </div>

            {/* Stage 3: Cross-Functional Execution */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1220] border border-emerald-500/30 flex flex-col justify-between group hover:border-emerald-400 transition-colors shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <CheckCircle2 size={18} />
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 font-extrabold tracking-wider">
                    03 • DELIVERY OUTPUT
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white mb-2">
                  Product, Dev, QA & Deployment Teams
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Prioritized product backlogs, user story acceptance criteria, rigorous UAT validation, and client enablement handover.
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center gap-2 font-bold">
                <span className="text-emerald-400 font-black">✓</span>
                <span>100% On-Time Production Rollout</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
