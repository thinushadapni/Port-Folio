import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    padding: '50px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '48px',
    color: '#e3d888',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const projectsWrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  };

  const boxStyle = {
    backgroundColor: '#111',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
    width: '300px',
    transition: 'transform 0.3s ease',
  };

  const boxTitle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#e3d888',
    marginBottom: '10px',
  };

  const boxDescription = {
    color: '#ccc',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
  };

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#f5c211',
    fontSize: '16px',
    textDecoration: 'none',
    gap: '8px',
    marginTop: '10px',
  };

  const projects = [
    {
      title: 'Automated Time Table Generator',
      description:
        'An automated timetable scheduling system implemented in Python to efficiently generate clash-free timetables.',
      github: 'https://github.com/thinushadapni?tab=repositories',
    },
    {
      title: 'Travel Itinerary Planner',
      description:
        'A web-based travel itinerary planner built with React to organize trips and manage destinations interactively.',
      github: 'https://github.com/thinushadapni?tab=repositories',
    },
    {
      title: 'Flight Price Prediction',
      description:
        'A machine learning project in Python that predicts flight prices based on features like airline, date, and duration.',
      github: 'https://github.com/thinushadapni?tab=repositories',
    },
    {
      title: 'Game Portal',
      description:
        'A multi-game web portal integrating several casual games with user management, built using Flask and MongoDB.',
      github: 'https://github.com/thinushadapni?tab=repositories',
    },
    {
      title: 'Meeting Minutes Generator',
      description:
        'An intelligent tool that extracts and summarizes meeting transcripts into concise, structured minutes using NLP techniques.',
      github: 'https://github.com/thinushadapni?tab=repositories',
    },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Projects</h1>
      <div style={projectsWrapper}>
        {projects.map((project, index) => (
          <div key={index} style={boxStyle}>
            <div style={boxTitle}>{project.title}</div>
            <div style={boxDescription}>{project.description}</div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FaGithub />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
