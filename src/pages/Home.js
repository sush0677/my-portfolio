import React from 'react';

function Home() {
  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        {/* Profile Photo */}
        <img src="/photo.jpg" alt="Sushant P" style={styles.profilePhoto} />

        {/* Introduction Section */}
        <h1 style={styles.heading}>Welcome to My Portfolio</h1>
        <p style={styles.introduction}>
          I am <strong>Sushant P</strong>, a passionate developer specializing in 
          <strong> Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and <strong>UI/UX Design</strong>. 
          I enjoy creating innovative solutions that bridge the gap between technology and user experience.
        </p>

        {/* Additional Information */}
        <p style={styles.additionalInfo}>
          With a strong background in computer science, I have worked on numerous projects that involve 
          the application of AI and ML in real-world scenarios. My work spans developing machine learning 
          models, building interactive websites, and crafting intuitive user experiences. Check out my 
          resume and LinkedIn profile for more details.
        </p>
        
        {/* Hobbies Section */}
        <div style={styles.hobbies}>
          <h2 style={styles.subheading}>My Hobbies</h2>
          <ul style={styles.hobbyList}>
            <li>Playing cricket</li>
            <li>Photography</li>
            <li>Exploring different places</li>
          </ul>
        </div>

        {/* Call to Action */}
        <p style={styles.callToAction}>
          Explore my portfolio to learn more about my skills, experience, and projects. I'm always eager 
          to take on new challenges and collaborate on exciting projects!
        </p>

        {/* Resume and LinkedIn Links */}
        <p style={styles.links}>
          <a href="/resume.pdf" style={styles.link}>View My Resume</a> | 
          <a href="https://www.linkedin.com/in/sushant-p-a105a9240/" style={styles.link}>Connect on LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

// Inline styles for the Home component
const styles = {
  pageBackground: {
    backgroundImage: 'url(/path-to-your-background-image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    color: '#fff',
  },
  container: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for readability
    borderRadius: '8px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  profilePhoto: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    border: '3px solid #007bff', // Border matching the theme
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#61dafb',
  },
  introduction: {
    fontSize: '1.2em',
    marginBottom: '30px',
    lineHeight: '1.6',
    color: '#ddd',
  },
  additionalInfo: {
    fontSize: '1.1em',
    marginBottom: '30px',
    lineHeight: '1.6',
    color: '#ccc',
  },
  hobbies: {
    marginBottom: '30px',
  },
  subheading: {
    fontSize: '1.8em',
    marginBottom: '15px',
    color: '#61dafb',
  },
  hobbyList: {
    listStyleType: 'circle',
    color: '#ddd',
    paddingLeft: '20px',
    fontSize: '1.1em',
  },
  callToAction: {
    fontSize: '1.2em',
    marginTop: '20px',
    color: '#61dafb',
  },
  links: {
    marginTop: '30px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '0 10px',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#007bff',
  },
};

export default Home;
