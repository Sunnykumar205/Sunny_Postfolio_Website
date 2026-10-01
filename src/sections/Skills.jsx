import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle title="Skills" subtitle="tech stack" />
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;