import './App.css';
import { useState } from 'react';
import AboutMe from './page/AboutMe';
import Projects from './page/Projects';
import Experience from './page/Experience';
import ToolsSkills from './page/ToolsSkills';
import Connect from './page/Connect';
import bonsai from './pictures/bonsai.jpg';
import Typewriter from 'typewriter-effect';

function App() {
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'About':
        return <AboutMe />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Tools':
        return <ToolsSkills />;
      case 'Connect':
        return <Connect />;
      default:
        return (
          <>
            <div className="landing-background" style={{ backgroundImage: `url(${bonsai})` }}>
              <div className="landing-text">
                <h1
                  style={{
                    fontFamily: "'Quicksand'",
                    color: '#000000',
                    background: '',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '20px',
                    marginBottom: 0,
                    fontSize: '3.5rem',
                  }}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Hey there! I\'m').start();
                    }}
                    options={{ cursor: '|', delay: 100, loop: false }}
                  />
                </h1>
                <h2
                  style={{
                    fontFamily: "'HelveticaLocal'",
                    color: '#000000',
                    background: '',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    marginTop: '2rem',
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Jay Patel').start();
                    }}
                    options={{ cursor: '|', delay: 90, loop: false }}
                  />
                </h2>
                <h3
                  style={{
                    fontFamily: "'Quicksand'",
                    color: '#000000',
                    background: '',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    marginTop: '1.5rem',
                    fontSize: '1.8rem',
                    opacity: 0.9,
                    marginLeft: '-59px',
                  }}
                >
                  <Typewriter
                    options={{
                      strings: ['Software Engineer', 'Full Stack Developer', 'AI/ML Engineer'],
                      autoStart: true,
                      loop: true,
                      delay: 90,
                      cursor: '|',
                    }}
                  />
                </h3>
              </div>
              <div className="landing-icons">
                <a className="github-icon" href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/>
                  </svg>
                </a>
                <a className="linkedin-icon" href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" fill="#0077B5"/>
                  </svg>
                </a>
              </div>
            </div>
            <section id="about-section">
              <AboutMe />
            </section>
            <section id="experience-section">
              <Experience />
            </section>
            <section id="projects-section">
              <Projects />
            </section>
          </>
        );
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <button className="nav-home" onClick={() => setPage('')}>            </button>
          </li>
          <li>
            <button className="nav-about" onClick={() => setPage('About')}>About Me</button>
          </li>
          <li>
            <button className="nav-projects" onClick={() => setPage('Projects')}>Projects</button>
          </li>
          <li>
            <button className="nav-experience" onClick={() => setPage('Experience')}>
            <span className="exp-part1">Experi</span>
            <span className="exp-part2">ence</span>
            </button>
          </li>
          <li>
            <button className="nav-tools" onClick={() => setPage('Tools')}>Tools & Skills</button>
          </li>
          <li>
            <button className="nav-connect" onClick={() => setPage('Connect')}>Connect</button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
