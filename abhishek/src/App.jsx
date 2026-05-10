import { useEffect, useState } from 'react';
import './App.css';
import Lanyard from './components/Lanyard/Lanyard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 600) {
        setLanyardVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setLanyardVisible(false);
      } else {
        // Scrolling up
        setLanyardVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="dotted-bg" />
      {isWebGLSupported && isDesktop && (
        <div className={`lanyard-container ${lanyardVisible ? '' : 'hidden'}`}>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      )}
      <div className="app">
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
