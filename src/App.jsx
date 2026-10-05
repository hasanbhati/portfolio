import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { AboutSection } from './components/AboutSection';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ClientOrbit } from './components/ClientOrbit';
import { CaseStudies } from './components/CaseStudies';
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
    console.error('Portfolio rendering error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <main className="error-state">This page could not be displayed. Please refresh and try again.</main>;
    }
    return this.props.children;
  }
}

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar onOpenCV={() => setIsCVModalOpen(true)} />
        <main id="main-content">
          <Hero3D onOpenCV={() => setIsCVModalOpen(true)} />
          <AboutSection />
          <ArchitectureVisualizer />
          <ExperienceTimeline />
          <ClientOrbit />
          <CaseStudies />
          <SkillsMatrix />
          <ContactNexus />
        </main>
        <Footer />
        <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
