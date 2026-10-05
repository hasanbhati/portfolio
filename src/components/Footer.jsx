import { personalInfo } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} {personalInfo.shortName}</p>
        <p>Solution Architect · B2B SaaS</p>
      </div>
    </footer>
  );
}
