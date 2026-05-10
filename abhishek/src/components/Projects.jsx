import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    tag: 'IoT Project',
    title: 'PetX – IoT Pet Feeder',
    desc: 'Automated Pet Feeding System',
    link: 'https://petx.onrender.com',
    bullets: [
      'Developed a real-time IoT-based automated pet feeding system with remote access.',
      'Built frontend using React and Firebase for real-time control and monitoring.',
      'Implemented backend services using Node.js for secure device communication.',
      'Integrated ESP8266 microcontroller for automated hardware-based feeding operations.',
    ],
    tech: ['React', 'Firebase', 'Node.js', 'ESP8266', 'IoT'],
    image: null,
  },
  {
    tag: 'Machine Learning',
    title: 'Energy Consumption Predictor',
    desc: 'Population-Based Energy Prediction',
    link: 'https://boltai321.vercel.app',
    bullets: [
      'Built a Linear Regression model to predict energy consumption based on population data.',
      'Performed data preprocessing and feature analysis using Pandas and NumPy.',
      'Visualized trends and correlations using Matplotlib to understand growth patterns.',
      'Trained and evaluated the model to estimate future energy demand accurately.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    image: null,
  },
  {
    tag: 'AI / RAG',
    title: 'Intelligent Codebase Assistant',
    desc: 'AI-Powered Code Intelligence Platform',
    link: null,
    github: 'https://github.com/abhishekvcet',
    bullets: [
      'Built an AI-powered Intelligent Codebase Assistant with AST-aware RAG pipelines.',
      'Implemented hybrid LLM orchestration for intelligent code analysis.',
      'Developed semantic debugging capabilities for deep code understanding.',
      'Automated architecture visualization using Mermaid and ChromaDB.',
    ],
    tech: ['Python', 'ChromaDB', 'LLM', 'RAG', 'Mermaid', 'AST'],
    image: null,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <div>
          <div className="section-tag">{'{ Projects }'}</div>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <p className="section-subtitle">
            A showcase of projects spanning IoT, Machine Learning, and AI-powered development tools.
          </p>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card reveal" key={i}>
            <div className="project-card-tag">{'{ '}{project.tag}{' }'}</div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-desc">{project.desc}</p>

            <div className="project-card-image">
              <div className="placeholder-icon">
                {project.tag.includes('IoT') && '🐾'}
                {project.tag.includes('Machine') && '⚡'}
                {project.tag.includes('AI') && '🧠'}
              </div>
              <div className="project-card-overlay">
                <div className="overlay-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-link">
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-link">
                      <FiGithub size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-card-bullets">
              {project.bullets.map((bullet, j) => (
                <div className="project-bullet" key={j}>
                  <span className="bullet-dot"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="project-tech-stack">
              {project.tech.map((t, j) => (
                <span className="tech-tag" key={j}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
