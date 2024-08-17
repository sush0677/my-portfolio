import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = React.useState('light');
  const location = useLocation();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getLinkStyle = (path) => {
    return location.pathname === path
      ? { ...styles.navLink, ...styles.activeNavLink }
      : styles.navLink;
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <h2 style={styles.logo}>Sushant P</h2>
        <ul style={styles.navMenu}>
          <li style={styles.navItem}><Link to="/" style={getLinkStyle('/')}>Home</Link></li>
          <li style={styles.navItem}><Link to="/about" style={getLinkStyle('/about')}>About</Link></li>
          <li style={styles.navItem}><Link to="/projects" style={getLinkStyle('/projects')}>Projects</Link></li>
          <li style={styles.navItem}><Link to="/experience" style={getLinkStyle('/experience')}>Experience</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link></li>
          <li style={styles.navItem}><Link to="/certifications" style={getLinkStyle('/certifications')}>Certifications</Link></li>
        </ul>
        <button onClick={toggleTheme} style={styles.themeToggle}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#000', // Black background color
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem', // Slightly larger logo text
    fontWeight: 'bold',
    color: '#61dafb', // Add some color to the logo
  },
  navMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem', // Increase spacing between menu items
    margin: 0,
  },
  navItem: {
    listStyle: 'none',
  },
  navLink: {
    color: '#fff', // Keep link color white
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease', // Smooth color transition on hover
  },
  activeNavLink: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: '#61dafb', // Highlight active link with a color change
  },
  navLinkHover: {
    color: '#61dafb', // Hover effect color change
  },
  themeToggle: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: '#61dafb', // Use the same color as active link and logo
    transition: 'transform 0.3s ease', // Smooth transition for hover effect
  },
  themeToggleHover: {
    transform: 'scale(1.1)', // Slightly enlarge on hover
  },
};

export default Navbar;
