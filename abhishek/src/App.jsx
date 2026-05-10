import { useEffect, useState } from 'react';
import './App.css';
import Lanyard from './components/Lanyard/Lanyard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 768
  );
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        setIsWebGLSupported(
          !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
        );
      } catch (e) {
        setIsWebGLSupported(false);
      }
    };
    checkWebGL();

    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Lanyard scroll visibility
  const [lanyardVisible, setLanyardVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show lanyard when near the top of the page
      if (currentScrollY < 600) {
        setLanyardVisible(true);
      } else {
        setLanyardVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDoubleClick = (e) => {
    const colors = ['#a3ff47', '#667eea', '#f093fb', '#4facfe', '#fd79a8', '#ffcc33'];
    const count = 20;
    
    for (let i = 0; i < count; i++) {
      const thread = document.createElement('div');
      thread.className = 'confetti-thread';
      
      // Random physics
      const tx = (Math.random() - 0.5) * 300 + 'px';
      const ty = (Math.random() - 0.5) * 300 + 'px';
      const tr = Math.random() * 720 + 'deg';
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      thread.style.left = e.clientX + 'px';
      thread.style.top = e.clientY + 'px';
      thread.style.backgroundColor = color;
      thread.style.setProperty('--tx', tx);
      thread.style.setProperty('--ty', ty);
      thread.style.setProperty('--tr', tr);
      
      document.body.appendChild(thread);
      
      // Cleanup
      setTimeout(() => {
        thread.remove();
      }, 1200);
    }
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      <Navbar />
      <div className="dotted-bg" />
      {isWebGLSupported && isDesktop && (
        <div className={`lanyard-container ${lanyardVisible ? '' : 'hidden'}`}>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      )}
      <div className="app">
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
