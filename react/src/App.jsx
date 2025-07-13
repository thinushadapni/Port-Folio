import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Certifications from './Components/Certification.jsx';

function App() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    backgroundColor: '#111',
    padding: '20px',
    justifyContent: 'center',
  };

  const linkStyle = {
    color: '#e3d888',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/certifications" style={linkStyle}>Certifications</Link>
        </nav>

        {/* Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
