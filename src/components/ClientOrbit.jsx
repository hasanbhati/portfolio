import { clientPortfolio } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function ClientOrbit() {
  return (
    <section id="enterprise-experience" className="section" aria-labelledby="enterprise-title">
      <div className="container">
        <SectionHeading id="enterprise-title" eyebrow="Enterprise project experience" title="Selected organizations supported through Zoovu projects" description="Exposure to enterprise projects across technology, home appliances, industrial products, retail and healthcare." />
        <div className="organization-grid">
          {clientPortfolio.map((organization) => <div className="organization-card" key={organization}>{organization}</div>)}
        </div>
        <p className="disclaimer">Selected organizations associated with projects delivered during my work at Zoovu. Names are shown for professional portfolio context only and do not imply endorsement.</p>
      </div>
    </section>
  );
}
