import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="logo-triangle">▲</span>
        ABHISHEK
      </a>
      <div className="nav-links">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>About &amp; Contact</a>
      </div>
      <div className="nav-right">
        <span className="nav-email">Email: abhishek.236427101@vcet.edu.in</span>
        <a href="#contact" className="nav-resume-btn" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
          <FiDownload size={14} />
          My Resume
        </a>
      </div>
    </nav>
  );
}
