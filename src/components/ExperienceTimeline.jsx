import { Building2, ChevronDown, GraduationCap } from 'lucide-react';
import { additionalExperience, educationData, experienceData, volunteerExperience } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section section-muted" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" eyebrow="Career progression" title="Experience across the SaaS lifecycle" description="Official job titles, with responsibilities showing how each role built toward solution architecture." />
        <div className="timeline">
          {experienceData.map((experience, index) => (
            <article className="timeline-item" key={`${experience.role}-${experience.period}`}>
              <div className="timeline-marker"><span>{experienceData.length - index}</span></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div><p className="timeline-company">{experience.company}</p><h3>{experience.role}</h3></div>
                  <p className="timeline-period">{experience.period}</p>
                </div>
                <p className="timeline-highlight">{experience.highlight}</p>
                <ul className="responsibility-list">{experience.bulletPoints.map((point) => <li key={point}>{point}</li>)}</ul>
                <div className="tag-list" aria-label="Role focus areas">{experience.focus.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="secondary-experience-grid">
          <article className="compact-card">
            <Building2 size={22} aria-hidden="true" />
            <div><p className="card-label">Additional experience</p><h3>{additionalExperience.role} · {additionalExperience.company}</h3><p>{additionalExperience.period}</p><p>{additionalExperience.description}</p></div>
          </article>
          <article className="compact-card">
            <GraduationCap size={22} aria-hidden="true" />
            <div><p className="card-label">Education</p><h3>{educationData.degree}</h3><p>{educationData.institution}</p><p>{educationData.period} · {educationData.location}</p></div>
          </article>
        </div>

        <details className="leadership-details">
          <summary>Earlier leadership experience <ChevronDown size={18} aria-hidden="true" /></summary>
          <p>AIESEC roles demonstrating early experience in recruitment, onboarding, training, member development and organizational coordination.</p>
          <div className="leadership-list">
            {volunteerExperience.map((item) => <div key={item.role}><strong>{item.role}</strong><span>{item.organization} · {item.period}</span></div>)}
          </div>
        </details>
      </div>
    </section>
  );
}
