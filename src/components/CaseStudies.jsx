import { caseStudies } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function CaseStudies() {
  return (
    <section id="case-studies" className="section section-muted" aria-labelledby="case-studies-title">
      <div className="container">
        <SectionHeading id="case-studies-title" eyebrow="Selected case studies" title="How I contribute from discovery through adoption" description="Representative examples focused on personal contribution, collaboration and factual outcomes." />
        <div className="case-study-grid">
          {caseStudies.map((study, index) => (
            <article className="case-study" key={study.title}>
              <p className="case-number">0{index + 1}</p>
              <h3>{study.title}</h3>
              <dl>
                <div><dt>Context</dt><dd>{study.context}</dd></div>
                <div><dt>My role</dt><dd>{study.role}</dd></div>
                <div><dt>Collaboration</dt><dd>{study.collaboration}</dd></div>
                <div><dt>Deliverables</dt><dd>{study.deliverables.join(' · ')}</dd></div>
                <div><dt>Outcome</dt><dd>{study.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
