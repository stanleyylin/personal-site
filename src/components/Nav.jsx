import React, { useState } from 'react';
import logo from '../res/main-logo.png';
import { Link, animateScroll } from 'react-scroll'
import projects from '../res/projects-button.png';
import experience from '../res/experience-button.png';
import connect from '../res/connect-button.png';
import './nav.css';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  function toggleNav() {
    setVisible(!visible);
  }

  return (
    <header className="primary">
      <div>
        <img className='logo' onClick={() => animateScroll.scrollToTop()} src={logo} alt="Stanley Lin"/>
      </div>

      <button onClick={toggleNav} className="mobile-nav-toggle" aria-controls="primary-naviation" aria-expanded={visible}>
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul id="primary-navigation" className={`primary-navigation ${visible ? 'visible' : ''}`}>
          <li>
            <Link
            activeClass="active" to="project-section"
            spy={true} smooth={true}>
              <img alt="Projects" src={projects}/>
            </Link>
          </li>

          <li>
            <Link
            activeClass="active" to="experience-section"
            spy={true} offset={50} smooth={true}>
              <img alt="Experience" src={experience}/>
            </Link>
          </li>
          <li>
            <Link
            activeClass="active" to="connect-section"
            spy={true} smooth={true}>
              <img alt="Connect" src={connect}/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav
