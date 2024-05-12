// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header.js';  // Assuming these paths are correct
import Footer from '../components/Footer.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js'; // If you have a Projects component

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default HomePage;
