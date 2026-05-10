import { useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import petx1 from '../assets/petxImg/img1.png';
import petx2 from '../assets/petxImg/img2.png';
import petx3 from '../assets/petxImg/img3.png';
import petx4 from '../assets/petxImg/img4.png';
import petx5 from '../assets/petxImg/img5.png';
import petx6 from '../assets/petxImg/img6.png';
import ep1 from '../assets/EnergyPredImg/img1.jpg';
import ep2 from '../assets/EnergyPredImg/img2.png';
import ep3 from '../assets/EnergyPredImg/img3.png';
import ep4 from '../assets/EnergyPredImg/img4.png';
import ep5 from '../assets/EnergyPredImg/img5.png';
import ep6 from '../assets/EnergyPredImg/img6.png';

const projects = [
  {
    company: 'PetX',
    status: 'Launched',
    title: 'Designing a smart IoT pet feeder for modern homes',
    desc: 'Social media • Fintech • B2C • Mobile App • Web App', // Matching reference style
    link: 'https://petx.onrender.com',
    tech: ['React', 'Firebase', 'Node.js', 'ESP8266', 'IoT'],
    images: [petx1, petx2, petx3, petx4, petx5, petx6],
    color: '#667eea' // Theme color for background glow
  },
  {
    company: 'EnergyPredict',
    status: 'In Progress',
    title: 'Redesigning energy consumption analytics for better sustainability',
    desc: 'Machine Learning • Analytics • B2B • Dashboard',
    link: 'https://boltai321.vercel.app',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    images: [ep1, ep2, ep3, ep4, ep5, ep6],
    color: '#f093fb'
  },
  {
    company: 'CodeBase AI',
    status: 'Beta',
    title: 'Building an intelligent codebase assistant with deep code understanding',
    desc: 'AI • RAG • Developer Tools • Web App',
    github: 'https://github.com/abhishekvcet',
    tech: ['Python', 'ChromaDB', 'LLM', 'RAG', 'Mermaid', 'AST'],
    images: null,
    color: '#4facfe'
  },
];

function ProjectImage({ images, title }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="mockup-placeholder">
        <div className="placeholder-content">
          <span>Web App Mockup</span>
        </div>
      </div>
    );
  }

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="laptop-mockup">
      <div className="laptop-lid">
        <div className="laptop-screen">
          <div className="laptop-carousel" style={{ transform: `translateX(-${current * 100}%)` }}>
            {images.map((img, idx) => (
              <img key={idx} src={img} alt={`${title} slide ${idx + 1}`} className="laptop-slide" />
            ))}
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="carousel-controls">
          <button className="control-btn prev" onClick={prevSlide} aria-label="Previous">
            <FiChevronLeft />
          </button>
          
          <div className="external-dots">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`ext-dot ${current === idx ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
              />
            ))}
          </div>

          <button className="control-btn next" onClick={nextSlide} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-showcase" id="projects">
      <div className="showcase-header reveal">
        <div className="section-tag">{'{ Portfolio }'}</div>
        <h2 className="section-title">Selected Works</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <div className="project-row reveal" key={i} style={{ '--accent-color': project.color }}>
            <div className="project-content">
              <div className="project-meta">
                <span className="project-company" style={{ color: project.color }}>{project.company}</span>
                {project.status && (
                  <span className="project-status-badge">
                    <span className="sparkle">✦</span> {project.status}
                  </span>
                )}
              </div>
              
              <h3 className="project-display-title">{project.title}</h3>
              <p className="project-display-desc">{project.desc}</p>
              
              <div className="project-actions">
                <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="project-arrow-link">
                  <FiArrowRight />
                </a>
              </div>
            </div>

            <div className="project-visual">
              <div className="visual-glow"></div>
              <ProjectImage images={project.images} title={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

