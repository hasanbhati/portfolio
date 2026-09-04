import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';

export const Footer = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/10 py-10 sm:py-12 relative overflow-hidden font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/5 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs shadow-sm shrink-0">
              HB
            </div>
            <div className="text-left">
              <div className="font-bold text-white tracking-wider text-xs sm:text-sm">HASAN ATUL BHATI</div>
              <div className="text-[9px] sm:text-[10px] text-cyan-400 font-semibold">SOLUTION ARCHITECT & DIGITAL TRANSFORMATION</div>
            </div>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 text-slate-400 text-[10px] sm:text-[11px] font-bold">
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">// ARCHITECTURE</a>
            <a href="#clients" className="hover:text-cyan-400 transition-colors">// CLIENTS</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">// EXPERIENCE</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">// SKILLS</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">// CONTACT</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-2 cursor-pointer shadow-sm text-xs"
          >
            <ArrowUp size={14} />
            <span className="text-[10px] font-bold">TOP</span>
          </button>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-slate-400 text-[10px] sm:text-[11px] text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>SYSTEM STATUS: OPERATIONAL // 100% SPEC COMPLIANCE</span>
          </div>

          <div>
            © {new Date().getFullYear()} Hasan Atul Bhati. Engineered with Three.js, React & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
};
