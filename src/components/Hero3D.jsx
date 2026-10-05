import { ArrowDown, FileText, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

export function Hero3D({ onOpenCV }) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">B2B SaaS • Discovery to implementation</p>
          <h1 id="hero-title">
            <span className="hero-name">{personalInfo.shortName}</span>
            <span className="hero-role">Solution <span>Architect</span></span>
          </h1>
          <p className="hero-supporting">{personalInfo.supportingLine}</p>
          <p className="hero-description">{personalInfo.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${personalInfo.email}`}><Mail size={18} aria-hidden="true" /> Email me</a>
            <a className="button button-secondary" href={personalInfo.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={18} aria-hidden="true" /> LinkedIn</a>
            <button className="button button-quiet" type="button" onClick={onOpenCV}><FileText size={18} aria-hidden="true" /> View CV</button>
          </div>
          <p className="hero-location"><MapPin size={16} aria-hidden="true" /> {personalInfo.location}</p>
        </div>

        <aside className="career-card" aria-label="Career progression summary">
          <p className="career-card-label">Career progression</p>
          <ol>
            <li><span>2021</span><strong>Platform Support Analyst</strong></li>
            <li><span>2022</span><strong>Implementation Specialist / Project Manager</strong></li>
            <li><span>2024</span><strong>Business Analyst</strong></li>
            <li className="current"><span>2025</span><strong>Solution Architect</strong></li>
          </ol>
          <p className="career-path">Support <ArrowDown size={14} /> Implementation <ArrowDown size={14} /> Requirements <ArrowDown size={14} /> Solution architecture</p>
        </aside>
      </div>
    </section>
  );
}
