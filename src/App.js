import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaGoodreadsG } from 'react-icons/fa';

import './App.css';

function App() {
  useEffect(() => {
    const spotlight = document.querySelector('.spotlight');
    const handleMouseMove = (e) => {
      if (spotlight) {
        spotlight.style.top = `${e.clientY}px`;
        spotlight.style.left = `${e.clientX}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="spotlight-wrapper">
        <div className="spotlight"></div>


        <main className="main">

          <section className="intro">
            <h1 className="name">Srushti Gangireddy</h1>
            <h2 className="role">Senior Software Developer</h2>


            <div className="social-icons">
              <a href="https://github.com/SrushtiGangireddy" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/srushtigangireddy/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>

            <p className="short-description">
              Bridging clinical needs and cutting-edge software
            </p>

            {/* Vertical Menu */}
            <nav className="menu">
              <ul className="menu-list">
                <li className="menu-item active">
                  <span className="sparkle"></span>About
                </li>
                <li className="menu-item">
                  <span className="sparkle"></span>Experience
                </li>
                <li className="menu-item">
                  <span className="sparkle"></span>Projects
                </li>
              </ul>
            </nav>
          </section>

          <section className="about-text">
            <p>
              I'm a senior software developer specializing in computational phenotyping, data analytics, and backend-driven web application development for healthcare and clinical research. I build scalable, secure systems that transform complex biomedical data into actionable insights.
              <br /><br />
              My work focuses on designing robust web platforms that support large-scale research initiatives, with an emphasis on data-driven decision-making, clinical integration, and research innovation.
              <br /><br />
              Beyond software development, I am passionate about advancing precision medicine through phenotyping research and leveraging data to improve healthcare outcomes.
              <br /><br />
              Outside of work, I find joy in reading books — especially fiction that sparks imagination and new perspectives — and spending quality time with my two young daughters, who constantly inspire me to see the world with curiosity, creativity, and kindness.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
