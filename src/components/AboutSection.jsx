import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="section section-muted" aria-labelledby="about-title">
      <div className="container about-grid">
        <SectionHeading id="about-title" eyebrow="About" title="From customer support to solution architecture" description="A career built across the complete SaaS delivery lifecycle." />
        <div className="about-copy">
          {personalInfo.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
