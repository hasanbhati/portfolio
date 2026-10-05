import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar({ onOpenCV }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="#main-content" aria-label="Hasan Bhati, home">
          <span className="brand-mark" aria-hidden="true">HB</span>
          <span><strong>Hasan Bhati</strong><small>Solution Architect</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <div className="nav-actions">
          <button className="button button-secondary button-small desktop-cv" type="button" onClick={onOpenCV}>
            <FileText size={16} aria-hidden="true" /> View CV
          </button>
          <a className="button button-primary button-small desktop-contact" href="#contact">Get in touch</a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <button type="button" onClick={() => { setOpen(false); onOpenCV(); }}>View CV</button>
        </nav>
      )}
    </header>
  );
}
