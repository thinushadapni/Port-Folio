import React from 'react';
import profile from '../assets/image.jpg'; // Make sure this matches your file name

const About = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    padding: '50px',
    boxSizing: 'border-box',
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '50px',
    maxWidth: '1200px',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const textStyle = {
    flex: 1,
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#ccc',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: '800',
    color: '#e3d888',
    marginBottom: '20px',
  };

  const imageStyle = {
    flex: 1,
    maxWidth: '100%',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        {/* Text on the Left */}
        <div style={textStyle}>
          <h1 style={headingStyle}>I’m N.Thinusha Dapni </h1>
          <h1 style={headingStyle}>Student</h1>
          <p>
            I am an enthusiastic and dedicated learner with a deep interest in Artificial Intelligence and Data Science. 
            I’ve always been intrigued by the way data can shape decisions and drive innovation, which inspired me to pursue my B.Tech 
            at Mepco Schlenk Engineering College, Sivakasi. With a strong foundation in both theory and application, I am excited to explore 
            real-world solutions through data-driven approaches.
            <br /><br />
            I am a confident and proactive individual who enjoys taking initiative, whether in academics or extracurriculars. 
            I have actively participated in paper presentations, ideathons, and technical events, which have helped sharpen my communication 
            and leadership skills. I also find joy in team-based environments where collaboration leads to creative problem-solving.
            <br /><br />
            My technical expertise includes Python, Java, C++, C, HTML, CSS, JavaScript, SQL, and I have hands-on experience working on projects 
            like an Eco-FootPrint Management System, Checker Game, and Flight Price Prediction. I completed certified courses such as 
            "Joy of Computing using Python," "Programming with Java," and "Data Science" from Internshala. 
            Outside of tech, I enjoy playing kho-kho and chess at the district level, drawing, and practicing yoga—activities that 
            keep me focused and balanced. I’m passionate about lifelong learning and committed to growing as a future data professional.
            </p>

        </div>

        {/* Image on the Right */}
        <img src={profile}  style={imageStyle} />
      </div>
    </div>
  );
};

export default About;