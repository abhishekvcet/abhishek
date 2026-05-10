export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-header">
        <div>
          <div className="section-tag">{'{ Achievements }'}</div>
          <h2 className="section-title">Milestones</h2>
        </div>
      </div>
      <div className="achievements-grid">
        <div className="achievement-card reveal">
          <div className="achievement-icon">🏆</div>
          <div>
            <h3 className="achievement-title">Runner-Up, VNPS</h3>
            <p className="achievement-desc">
              Vidyavardhini National Project Showcase — a national-level student innovation event 
              recognizing outstanding engineering projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
