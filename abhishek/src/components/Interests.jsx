import { FiCpu, FiGlobe } from 'react-icons/fi';

export default function Interests() {
  const interests = [
    { label: 'AI & Machine Learning', icon: <FiCpu /> },
    { label: 'MERN-Stack Web Development', icon: <FiGlobe /> },
  ];

  return (
    <section className="section" id="interests">
      <div className="section-header">
        <div>
          <div className="section-tag">{'{ Interests }'}</div>
          <h2 className="section-title">What Excites Me</h2>
        </div>
      </div>
      <div className="interests-grid">
        {interests.map((item, i) => (
          <div className="interest-card reveal" key={i}>
            <span className="interest-icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
