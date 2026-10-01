import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title="Experience" subtitle="internship" />
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="exp-company">{exp.company}</span>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <p className="exp-description">{exp.description}</p>
              <div className="exp-tech">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;