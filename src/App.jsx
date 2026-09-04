import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { ClientOrbit } from './components/ClientOrbit';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactNexus } from './components/ContactNexus';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Ambient Gradient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Cyan/Blue Glow */}
        <div className="absolute -top-32 left-1/4 w-[700px] h-[600px] rounded-full blur-[160px] bg-cyan-500/10"></div>

        {/* Center Purple/Violet Glow */}
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full blur-[180px] bg-purple-600/12"></div>

        {/* Lower Emerald/Green Glow */}
        <div className="absolute top-2/3 left-10 w-[650px] h-[600px] rounded-full blur-[180px] bg-emerald-500/10"></div>

        {/* Bottom Amber/Coral Glow */}
        <div className="absolute -bottom-32 right-1/4 w-[600px] h-[500px] rounded-full blur-[160px] bg-amber-500/10"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 1. Hero with 3D Architectural Core */}
        <Hero3D onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 2. Architecture Methodology & Independent Bridge */}
        <ArchitectureVisualizer />

        {/* 3. Global Enterprise Client Portfolio with Brand Glows */}
        <ClientOrbit />

        {/* 4. Career Evolution Timeline */}
        <ExperienceTimeline />

        {/* 5. Enterprise Skills & Multi-Color Capability Meters */}
        <SkillsMatrix />

        {/* 6. Contact Nexus & Direct Collaboration Hub */}
        <ContactNexus />

        {/* 7. Footer */}
        <Footer />

        {/* Executive CV Modal */}
        <CVModal 
          isOpen={isCVModalOpen} 
          onClose={() => setIsCVModalOpen(false)} 
        />
      </div>

    </div>
  );
}

export default App;
