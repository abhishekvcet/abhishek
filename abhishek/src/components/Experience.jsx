import React from 'react';
import crownLogo from '../assets/Internship1/img1.png';

const Experience = () => {
  const experiences = [
    {
      company: 'Crown Solution Pvt. Ltd.',
      logo: crownLogo,
      role: 'Software Engineer Intern',
      period: 'March 2026 — Present',
      location: 'Vasai West, Maharashtra',
      description: [
        'Developing and optimizing technical solutions for assigned projects and services.',
        'Conducting software testing and generating comprehensive diagnostic reports.',
        'Actively researching and learning new technologies to improve existing system architectures.',
        'Collaborating with the Technical Team to deliver high-quality software solutions.'
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{'{ Work }'}</div>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item reveal" key={index}>
              <div className="exp-left">
                <div className="exp-logo-container">
                  <img src={exp.logo} alt={exp.company} className="exp-logo" />
                </div>
                <div className="exp-company-info">
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
              </div>

              <div className="exp-right">
                <div className="exp-role-info">
                  <h4 className="exp-role">{exp.role}</h4>
                  <span className="exp-location">{exp.location}</span>
                </div>
                <ul className="exp-points">
                  {exp.description.map((point, i) => (
                    <li key={i} className="exp-point">
                      <span className="point-dot"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
