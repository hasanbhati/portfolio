import { Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function SkillsMatrix() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Tools & technical skills" title="Practical tools for analysis and delivery" description="A concise view of verified hands-on skills, without subjective proficiency scores." />
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <article className="skill-group" key={category}><h3>{category}</h3><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
          ))}
        </div>
        <div className="interest-note"><Sparkles size={20} aria-hidden="true" /><p><strong>AI interest</strong> — Interested in practical applications of AI for discovery, documentation, analysis and delivery workflows.</p></div>
      </div>
    </section>
  );
}
