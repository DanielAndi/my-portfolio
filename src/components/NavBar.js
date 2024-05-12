// src/components/NavBar.js
import { Link as ScrollLink, Element } from 'react-scroll';

import '../assts/NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><ScrollLink to="about" smooth={true} duration={500} spy={true} activeClass="active">About</ScrollLink></li>
        <li><ScrollLink to="experience" smooth={true} duration={500} spy={true} activeClass="active">Experience</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</ScrollLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
