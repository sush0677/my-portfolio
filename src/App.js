import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import './App.css';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  const getPageBackground = () => {
    switch (location.pathname) {
      case '/':
        return styles.homeBackground;
      case '/about':
        return styles.aboutBackground;
      case '/projects':
        return styles.projectsBackground;
      case '/experience':
        return styles.experienceBackground;
      case '/contact':
        return styles.contactBackground;
      case '/certifications':
        return styles.certificationsBackground;
      default:
        return styles.defaultBackground;
    }
  };

  return (
    <div style={getPageBackground()}>
      <Navbar />
      <main style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Background Styles
const styles = {
  homeBackground: {
    backgroundImage: 'url(/assests/images/home.webp)', // Correct path for public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  aboutBackground: {
    backgroundImage: 'url(/assests/images/about.webp)', // Correct path for public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectsBackground: {
    backgroundImage: 'url(/assests/images/project.webp)', // Correct path for public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  experienceBackground: {
    backgroundImage: 'url(/assests/images/Expierence.webp)', // Correct path for public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  contactBackground: {
    backgroundImage: 'url(/assests/images/contact.webp)', // Correct path for public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  certificationsBackground: {
    backgroundImage: 'url(/assests/images/certification.webp)', // Correct path for public directory
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  defaultBackground: {
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  mainContent: {
    padding: '20px',
    minHeight: 'calc(100vh - 120px)',
    color: '#fff',
  },
};


export default App;
