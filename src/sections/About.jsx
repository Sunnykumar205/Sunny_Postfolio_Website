import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title="About Me" subtitle="whoami" />
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm <strong>Sunny</strong>, a passionate developer with a focus on full-stack development.
              Recently, I completed a <strong>2-month internship</strong> at <strong>Truebodh Technologies</strong>,
              where I worked extensively with <strong>.NET Core</strong> and <strong>Blazor</strong>.
            </p>
            <p>
              During my internship, I built single-page applications that are also compatible with 
              mobile platforms using MAUI. I enjoy creating intuitive, performant, and accessible 
              web experiences.
            </p>
            <div className="about-tags">
              <span className="tag">React</span>
              <span className="tag">Java</span>
              <span className="tag">SpringBoot</span>
              <span className="tag">.NET Core</span>
              <span className="tag">MAUI Blazor</span>
              <span className="tag">Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;