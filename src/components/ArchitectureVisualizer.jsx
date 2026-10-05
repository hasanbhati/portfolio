import { BarChart3, Compass, Handshake, Layers3 } from 'lucide-react';
import { capabilities } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

const icons = [Compass, BarChart3, Layers3, Handshake];

export function ArchitectureVisualizer() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <SectionHeading id="capabilities-title" eyebrow="Core capabilities" title="Connecting needs, decisions and delivery" description="Four complementary areas that support practical, customer-centered SaaS outcomes." />
        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = icons[index];
            return (
              <article className="capability-card" key={capability.title}>
                <div className="icon-box"><Icon size={22} aria-hidden="true" /></div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
