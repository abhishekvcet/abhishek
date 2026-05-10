import { useState, useEffect } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-triangle">▲</span>
          ABHISHEK
        </a>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Experience</a>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollTo('education'); }}>Education</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </div>
          
          <div className="nav-mobile-footer">
            <span className="nav-email">abhishek.236427101@vcet.edu.in</span>
          </div>
        </div>

        <div className="nav-right">
          <span className="nav-email desktop-only">abhishek.236427101@vcet.edu.in</span>
          <a href="#contact" className="nav-resume-btn" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            <FiDownload size={14} />
            Resume
          </a>
          
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
