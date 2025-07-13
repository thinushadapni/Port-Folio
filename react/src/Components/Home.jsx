import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const containerStyle = {
    minHeight: '100vh',
    width: '100vw', // Ensures full viewport width
    backgroundColor: '#000',
    color: '#fff',
    padding: '50px',
    fontFamily: 'sans-serif',
    lineHeight: '1.8',
    boxSizing: 'border-box',
    overflowX: 'hidden', // Prevent horizontal scroll
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: '800',
    color: '#e3d888',
    marginBottom: '10px',
  };

  const subHeadingStyle = {
    fontSize: '24px',
    fontWeight: '500',
    color: '#fff',
    marginBottom: '30px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#ccc',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    fontSize: '18px',
    color: '#ccc',
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My Portfolio</h1>
      <h2 style={subHeadingStyle}>Student</h2>

      <p style={paragraphStyle}>
        I’m a passionate and curious learner currently pursuing my B.Tech in Artificial Intelligence and Data Science at
        Mepco Schlenk Engineering College, Sivakasi. I enjoy building intelligent systems that solve real-world problems,
        and I’m deeply interested in fields like machine learning, data science, and web development.
      </p>

      <p style={paragraphStyle}>
        I’ve worked on exciting projects like Game Portal,Flight Price Prediction,Travel Itinerary Planner ,Meeting Minutes,Automated TimeTable Scheduling and I’m constantly
        exploring new technologies to sharpen my skills. I’m proficient in Python, Java, C++, SQL, and web technologies
        like HTML, CSS, and JavaScript.
      </p>

      <p style={paragraphStyle}>
        I’ve also completed internships and certified courses that have helped me gain hands-on experience in data analysis,
        machine learning models, and frontend development. Beyond coding, I love playing chess, practicing yoga, and
        participating in paper presentations and ideathons.
      </p>

      {/* Social Links */}
      <div>
        <a
          href="https://github.com/thinushadapni?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, color: '#f5c211' }}
        >
          <FaGithub style={{ fontSize: '20px' }} />
          <span>Follow on GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/thinushadapni"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, color: '#0a66c2' }}
        >
          <FaLinkedin style={{ fontSize: '20px' }} />
          <span>Follow on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
