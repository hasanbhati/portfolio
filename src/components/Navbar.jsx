import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Send, Menu, X, FileText } from 'lucide-react';
import { sound } from '../utils/audio';

export const Navbar = ({ onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const enabled = sound.toggle();
    setAudioEnabled(enabled);
  };

  const navLinks = [
    { label: '// ARCHITECTURE', href: '#architecture' },
    { label: '// CLIENTS', href: '#clients' },
    { label: '// EXPERIENCE', href: '#experience' },
    { label: '// SKILLS', href: '#skills' },
    { label: '// CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#"
          onClick={() => sound.playClick()}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500/25 via-blue-500/15 to-purple-500/25 border border-cyan-500/40 flex items-center justify-center font-mono font-black text-cyan-400 text-xs sm:text-sm shadow-[0_0_15px_rgba(0,242,254,0.25)] group-hover:scale-105 transition-all shrink-0">
            HB
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-100 font-mono flex items-center gap-1.5 truncate">
              HASAN ATUL BHATI
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-mono text-cyan-400 tracking-widest uppercase font-bold truncate">
              SOLUTION ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playHover()}
              className="text-xs font-mono font-bold text-slate-300 hover:text-cyan-300 transition-colors tracking-wider py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Medium Screen (Tablet) Navigation (Compact) */}
        <nav className="hidden md:flex xl:hidden items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playHover()}
              className="text-[11px] font-mono font-bold text-slate-300 hover:text-cyan-300 transition-colors tracking-wide py-1"
            >
              {link.label.replace('// ', '')}
            </a>
          ))}
        </nav>

        {/* Interactive Controls & CTA (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">

          {/* Audio FX Toggle */}
          <button
            onClick={toggleAudio}
            title={audioEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
            className={`p-2 rounded-xl border transition-all text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer ${
              audioEnabled 
                ? 'border-cyan-500 bg-cyan-500/15 text-cyan-300 shadow-sm' 
                : 'border-white/10 bg-white/5 text-slate-300 hover:text-white'
            }`}
          >
            {audioEnabled ? <Volume2 size={15} className="text-cyan-400 animate-pulse" /> : <VolumeX size={15} />}
            <span className="text-[10px] hidden lg:inline">{audioEnabled ? 'FX: ON' : 'FX: OFF'}</span>
          </button>

          {/* CV Modal Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCV();
            }}
            className="px-3 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono font-bold text-slate-200 hover:border-cyan-500 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <FileText size={13} className="text-cyan-400" />
            <span className="hidden lg:inline">CV_VIEW</span>
            <span className="lg:hidden">CV</span>
          </button>

          {/* Contact / Connect CTA */}
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase font-mono shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <Send size={13} />
            <span>CONNECT</span>
          </a>
        </div>

        {/* Mobile Action Buttons (Small devices < md) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            aria-label={audioEnabled ? "Disable sound" : "Enable sound"}
            className={`p-2 rounded-xl border transition-colors ${
              audioEnabled ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-300' : 'border-white/10 text-slate-300'
            }`}
          >
            {audioEnabled ? <Volume2 size={16} className="text-cyan-400" /> : <VolumeX size={16} />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-white/10 text-slate-200 hover:border-cyan-500/40 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d16]/98 border-b border-cyan-500/20 px-5 py-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest pb-2 border-b border-white/5 font-bold">
              // NAVIGATION INDEX
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-mono font-bold text-slate-200 hover:text-cyan-300 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500 font-normal">→</span>
              </a>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenCV();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:border-cyan-500 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileText size={15} className="text-cyan-400" />
                <span>VIEW EXECUTIVE CV</span>
              </button>

              <a
                href="#contact"
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase font-mono shadow-md text-center flex items-center justify-center gap-2 active:scale-98"
              >
                <Send size={14} />
                <span>LET'S CONNECT</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
