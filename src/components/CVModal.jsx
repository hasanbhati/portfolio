import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { educationData, experienceData, personalInfo, skillsData } from '../data/portfolioData';

export function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="cv-modal" role="dialog" aria-modal="true" aria-labelledby="cv-title">
        <div className="modal-toolbar">
          <p>Curriculum vitae</p>
          <div>
            <a className="button button-secondary button-small" href="/hasan_atul_bhati_cv.html" target="_blank" rel="noreferrer"><ExternalLink size={15} /> Open printable CV</a>
            <button className="modal-close" type="button" onClick={onClose} aria-label="Close CV"><X /></button>
          </div>
        </div>
        <div className="cv-content">
          <header><h2 id="cv-title">{personalInfo.name}</h2><p>{personalInfo.headline}</p><address>{personalInfo.location} · <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> · <a href={personalInfo.linkedin}>LinkedIn</a></address></header>
          <section><h3>Professional summary</h3><p>{personalInfo.summary}</p></section>
          <section><h3>Professional experience</h3>{experienceData.map((item) => <article className="cv-role" key={item.role}><div><h4>{item.role} · {item.company}</h4><strong>{item.period}</strong></div><ul>{item.bulletPoints.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</section>
          <section><h3>Education</h3><p><strong>{educationData.degree}</strong><br />{educationData.institution} · {educationData.period}</p></section>
          <section><h3>Skills</h3><p>{Object.values(skillsData).flat().join(' · ')}</p></section>
        </div>
      </section>
    </div>
  );
}
