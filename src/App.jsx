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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center text-slate-300 font-mono text-xs">
          Component failed to initialize. Please reload the page.
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Ambient Gradient Lighting - Ultra-lightweight hardware-native radial gradients (zero blur filter GPU overhead) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Top Cyan Glow */}
          <div 
            className="absolute -top-32 left-1/4 w-[700px] h-[600px] max-w-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, rgba(0, 242, 254, 0) 70%)' }}
          />

          {/* Center Purple Glow */}
          <div 
            className="absolute top-1/3 right-0 w-[600px] h-[600px] max-w-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.09) 0%, rgba(168, 85, 247, 0) 70%)' }}
          />

          {/* Lower Emerald Glow */}
          <div 
            className="absolute top-2/3 left-0 w-[650px] h-[600px] max-w-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, rgba(16, 185, 129, 0) 70%)' }}
          />

          {/* Bottom Amber Glow */}
          <div 
            className="absolute -bottom-32 right-1/4 w-[600px] h-[500px] max-w-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, rgba(245, 158, 11, 0) 70%)' }}
          />
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
    </ErrorBoundary>
  );
}

export default App;
