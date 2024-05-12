import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router DOM

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>It has always been...</p>
      <a href="/public/resume.pdf" target="_blank">View Full Resume</a>
      <li><Link to="/ResumePage">Detailed nformation About Experience</Link></li>
    </section>
  );
};

export default About;
