import { FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Online badge */}
      <div className="hero-online-badge">
        <span className="online-dot"></span>
        Online Now
      </div>

      <div className="hero-layout">
        {/* Main Text - Left aligned */}
        <div className="hero-text">
          <div className="hero-line">
            <span className="hero-big-text">Hi! I&apos;m</span>
            <span className="hero-pill hero-pill-gradient">Abhishek Singh</span>
          </div>
          <div className="hero-line">
            <span className="hero-big-text">an</span>
            <span className="hero-pill hero-pill-dark">AI &amp; Data Science Student</span>
          </div>
          <div className="hero-line">
            <span className="hero-big-text">from</span>
            <span className="hero-pill hero-pill-outline">Mumbai <span className="pill-flag">IN</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
