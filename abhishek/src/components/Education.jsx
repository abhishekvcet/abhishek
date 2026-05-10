export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-header">
        <div>
          <div className="section-tag">{'{ Education }'}</div>
          <h2 className="section-title">Academic Background</h2>
        </div>
      </div>
      <div className="education-card reveal">
        <div className="education-info">
          <h3>Vidyavardhini&apos;s College of Engineering and Technology</h3>
          <p className="edu-location">Mumbai, India</p>
          <p className="edu-degree">Bachelor of Engineering, Artificial Intelligence and Data Science</p>
        </div>
        <div className="education-meta">
          <div className="edu-year">2023 – 2027</div>
          <div className="edu-cgpa">
            <span>📊</span> CGPA: 8.41
          </div>
        </div>
      </div>
    </section>
  );
}
