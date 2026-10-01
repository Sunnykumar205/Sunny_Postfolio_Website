import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { projectsData } from '../data/projects';
// import project1 from "../assets/BPIO_INTERNSHIP_PAGE.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle title="Projects" subtitle="portfolio" />
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {/* <img src={project1} alt={project.name} /> */}
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="project-tech">{project.technologies}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;