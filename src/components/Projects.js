// Projects.js
import React from 'react';
import projects from '../data/projects.js'; // Adjust path to your data file

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.slice(0, 2).map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.year}</p>
          <p>{project.description}</p>
          <a href={project.link} target="_blank">Learn More</a>
        </div>
      ))}
      <a href="/all-projects">View All Projects</a> {/* Link to the full projects page */}
    </section>
  );
};

export default Projects;
