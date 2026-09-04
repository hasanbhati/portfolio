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
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/25 via-blue-500/15 to-purple-500/25 border border-cyan-500/40 flex items-center justify-center font-mono font-black text-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.25)] group-hover:scale-105 transition-all">
            HB
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-extrabold tracking-wider text-slate-100 font-mono flex items-center gap-1.5">
              HASAN ATUL BHATI
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </span>
            <span className="text-[11px] font-mono text-cyan-400 tracking-widest uppercase font-bold">
              SOLUTION ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
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

        {/* Interactive Controls & CTA */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Audio FX Toggle */}
          <button
            onClick={toggleAudio}
            title={audioEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
            className={`p-2 rounded-xl border transition-all text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer ${
              audioEnabled 
                ? 'border-cyan-500 bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 shadow-sm' 
                : 'border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {audioEnabled ? <Volume2 size={15} className="text-cyan-600 animate-pulse" /> : <VolumeX size={15} />}
            <span className="text-[10px]">{audioEnabled ? 'FX: ON' : 'FX: OFF'}</span>
          </button>

          {/* CV Modal Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCV();
            }}
            className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <FileText size={13} className="text-cyan-600 dark:text-cyan-400" />
            <span>CV_VIEW</span>
          </button>

          {/* Contact / Connect CTA */}
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase font-mono shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <Send size={13} />
            CONNECT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg border border-white/10 text-slate-300 text-xs"
          >
            {audioEnabled ? <Volume2 size={16} className="text-cyan-400" /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg border border-white/10 text-slate-200"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d16]/95 border-b border-white/10 px-4 py-5 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-mono font-bold text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-end pt-3">
              <button
                onClick={() => {
                  onOpenCV();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-mono font-bold text-slate-200 border border-white/15 px-3 py-1.5 rounded-lg"
              >
                View CV
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="mt-2 text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs tracking-wider uppercase font-mono shadow-md"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
