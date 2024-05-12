import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Daniel Grijalva</h1>
      <h2>Junior Software Engineer</h2>
      <p>I build logically efficient programs with and emphazis on simpliciy.</p>
      <div className="social-links">
        <a href="https://github.com"><i className="icon-github"></i></a>
        <a href="https://linkedin.com"><i className="icon-linkedin"></i></a>
        {/* Add other social icons */}
      </div>
    </header>
  );
};

export default Header;
