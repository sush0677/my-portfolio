import React from 'react';

function Contact() {
  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        {/* Section Title */}
        <h2 style={styles.heading}>Contact Me</h2>
        
        {/* Contact Information */}
        <p style={styles.paragraph}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
        </p>

        {/* Email */}
        <p style={styles.contactInfo}>
          <strong>Email:</strong> 
          <a href="mailto:sushant007.p7@gmail.com" style={styles.link}> sushant007.p7@gmail.com</a>
        </p>
        
        {/* LinkedIn */}
        <p style={styles.contactInfo}>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/sushant-p-a105a9240" target="_blank" rel="noopener noreferrer" style={styles.link}> linkedin.com/in/sushant-p-a105a9240</a>
        </p>
        
        {/* GitHub */}
        <p style={styles.contactInfo}>
          <strong>GitHub:</strong> 
          <a href="https://github.com/sush0677" target="_blank" rel="noopener noreferrer" style={styles.link}> github.com/sush0677</a>
        </p>
      </div>
    </div>
  );
}

// Inline styles for the Contact component
const styles = {
  pageBackground: {
    backgroundImage: 'url(/path-to-your-background-image.jpg)', // Update with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    padding: '50px 30px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Darker semi-transparent background
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    color: '#ffffff', // White text for contrast
    transition: 'transform 0.3s ease',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#61dafb', // Light blue color for the heading
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.8',
    color: '#dddddd', // Softer white for paragraph text
    marginBottom: '30px',
  },
  contactInfo: {
    fontSize: '1.2em',
    marginBottom: '15px',
  },
  link: {
    color: '#61dafb', // Matching link color with heading
    textDecoration: 'none',
    marginLeft: '10px',
    transition: 'color 0.3s ease', // Smooth transition for hover effect
  },
  linkHover: {
    color: '#007bff', // Darker blue on hover
  },
};

export default Contact;
