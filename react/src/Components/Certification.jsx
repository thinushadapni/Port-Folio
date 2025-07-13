import React from 'react';
import cert1 from '../assets/1.png';
import cert2 from '../assets/2.png';
import cert3 from '../assets/3.png';
import cert4 from '../assets/4.jpg';
import cert5 from '../assets/image.png';

const Certifications = () => {
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

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  };

  const boxStyle = {
    backgroundColor: '#111',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
  };

  const certifications = [
    { img: cert1, title: 'NPTEL Python Certification' },
    { img: cert2, title: 'Data Science Certification' },
    { img: cert3, title: 'NPTEL Java Certification' },
    { img: cert4, title: 'Udemy Certification' },
    { img: cert5, title: 'Spoken Tutorial Certification' },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Certifications</h1>
      <div style={gridStyle}>
        {certifications.map((cert, index) => (
          <div key={index} style={boxStyle}>
            <img src={cert.img} alt={cert.title} style={imageStyle} />
            <p style={{ color: '#e3d888', marginTop: '10px', fontWeight: 'bold' }}>{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
