import React from 'react';
import '../assets/Layout.css'; // Make sure to have the CSS file in the correct path

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <h1>Daniel Grijalva</h1>
        <h3>Junior Software Engineer</h3>
        <p>Efficiency and simplicty are the main concepts that should be taken into account when designing.</p>
        {/* You can add more links or information here */}
        <div className="links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* More social links can be added here */}
        </div>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
