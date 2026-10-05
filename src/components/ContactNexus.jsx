import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { LinkedinIcon } from './Icons';

export function ContactNexus() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Let’s discuss practical SaaS delivery" description="For Solution Architecture, Business Analysis, Product Discovery and SaaS Delivery opportunities." />
        <div className="contact-card">
          <a href={`mailto:${personalInfo.email}`}><span><Mail size={20} aria-hidden="true" /><small>Email</small><strong>{personalInfo.email}</strong></span><ArrowUpRight aria-hidden="true" /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><span><LinkedinIcon size={20} aria-hidden="true" /><small>LinkedIn</small><strong>linkedin.com/in/hasanbhati</strong></span><ArrowUpRight aria-hidden="true" /></a>
          <div className="contact-location"><MapPin size={20} aria-hidden="true" /><span><small>Based in</small><strong>{personalInfo.location}</strong></span></div>
        </div>
      </div>
    </section>
  );
}
