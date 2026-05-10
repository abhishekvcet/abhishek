import React from 'react';
import vnpsCert from '../assets/Certificates/VNPS_RP_Img.jpg';
import { FiExternalLink } from 'react-icons/fi';

export default function Achievements() {
  const achievements = [
    {
      title: 'Runner-Up, VNPS',
      icon: '🏆',
      desc: 'Vidyavardhini National Project Showcase — a national-level student innovation event recognizing outstanding engineering projects.',
      image: vnpsCert,
      link: vnpsCert // Or a PDF link if available
    }
  ];

  return (
    <section className="section" id="achievements">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">{'{ Achievements }'}</div>
          <h2 className="section-title">Milestones</h2>
        </div>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((item, i) => (
          <div className="achievement-card reveal" key={i}>
            <div className="achievement-content">
              <div className="achievement-top">
                <div className="achievement-icon">{item.icon}</div>
                <div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.desc}</p>
                </div>
              </div>
              
              {item.image && (
                <div className="achievement-preview">
                  <img src={item.image} alt={item.title} />
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                    <FiExternalLink /> View Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
