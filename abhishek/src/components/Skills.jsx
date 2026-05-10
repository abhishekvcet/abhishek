import { FiCode, FiLayers, FiTool } from 'react-icons/fi';

const categories = [
  {
    title: 'Programming Languages',
    icon: <FiCode />,
    iconClass: 'code',
    skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FiLayers />,
    iconClass: 'framework',
    skills: ['React', 'Bootstrap', 'Tailwind', 'Flask', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FiTool />,
    iconClass: 'tools',
    skills: ['Firebase', 'Git', 'Figma', 'ChromaDB', 'Node.js'],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <div>
          <div className="section-tag">{'{ Skills }'}</div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A curated toolkit of languages, frameworks, and platforms.
          </p>
        </div>
      </div>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div className="skill-category reveal" key={i}>
            <div className={`skill-category-icon ${cat.iconClass}`}>
              {cat.icon}
            </div>
            <h3 className="skill-category-title">{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, j) => (
                <span className="skill-item" key={j}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
