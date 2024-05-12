import React from 'react';
import '../assets/styles.css';

const Experience = () => {
  const experiences = [
    { 
      title: 'Freelance Engineer',
      company: 'Myself',
      yearRange: '2024 — Present',
      description: 'Build and maintain critical components...',
      tags: ['JavaScript', 'TypeScript', 'React']
    }
    // Add more experiences
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <a href="/resume.pdf" target="_blank">View Resume (PDF)</a>
      {experiences.map((job, index) => (
        <div key={index} className="experience">
          <h3>{job.title} · {job.company}</h3>
          <p>{job.yearRange}</p>
          <p>{job.description}</p>
          <div className="tags">
            {job.tags.map(tag => <span key={tag} className="tag">{tag} </span>)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
