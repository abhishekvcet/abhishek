const skills = [
  'React', 'Python', 'Java', 'JavaScript', 'Flask',
  'Firebase', 'NumPy', 'Pandas', 'Tailwind',
  'Git', 'IoT', 'Machine Learning', 'Node.js',
  'HTML/CSS', 'Bootstrap', 'Figma', 'Matplotlib',
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {[...skills, ...skills].map((skill, i) => (
            <span key={i}>
              <span className="marquee-item">
                <span className="marquee-dot"></span>
                {skill}
              </span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...skills, ...skills].map((skill, i) => (
            <span key={`dup-${i}`}>
              <span className="marquee-item">
                <span className="marquee-dot"></span>
                {skill}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
