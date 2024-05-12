// ProjectsPage.js
import React from 'react';
import projects from '../data/projects.js'; // Adjust path to your data file

const ProjectsPage = () => {
  return (
    <section id="all-projects">
      <h2>All Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.year}</p>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" without rel="noreferrer">Learn More</a>
        </div>
      ))}
    </section>
  );
};

export default ProjectsPage;
