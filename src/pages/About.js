import React from 'react';

function About() {
  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        {/* Section Title */}
        <h2 style={styles.heading}>About Me</h2>

        {/* Introduction Paragraph */}
        <p style={styles.paragraph}>
          I am currently pursuing a <strong>Master's in Artificial Intelligence and Machine Learning</strong> at the University of Birmingham, where I am honing my skills in cutting-edge technologies.
        </p>

        {/* Specialization Section */}
        <p style={styles.paragraph}>
          My expertise lies in developing innovative websites and applications that leverage <strong>AI</strong> and <strong>ML</strong> technologies to solve real-world problems. With a passion for both backend and frontend development, I strive to create seamless user experiences powered by intelligent systems.
        </p>

        {/* Additional Information */}
        <p style={styles.paragraph}>
          I am driven by a curiosity to explore how AI can be integrated into various aspects of web development, from enhancing user interfaces to building complex data-driven applications. My goal is to bridge the gap between technology and user experience, creating solutions that are not only functional but also intuitive and user-friendly.
        </p>

        {/* Education Section */}
        <h3 style={styles.subheading}>Education</h3>
        <p style={styles.paragraph}>
          <strong>University of Birmingham, Dubai</strong><br />
          Master's in Artificial Intelligence and Machine Learning (2023 - 2025)
        </p>
        <p style={styles.paragraph}>
          <strong>Gogte Institute of Technology, Karnataka, India</strong><br />
          Bachelor of Engineering in Computer Science (2019 - 2023)
        </p>

        {/* Extracurricular Activities Section */}
        <h3 style={styles.subheading}>Extracurricular Activities</h3>
        <p style={styles.paragraph}>
          I have a keen interest in Augmented Reality (AR) and have created Snapchat AR lenses that users can interact with directly. You can try out one of my AR lenses by clicking the link below.
        </p>
        <div style={styles.socialMediaLinks}>
          <a href="https://lensstudio.snapchat.com/creator/soijLSzYV4vAnyYWhm8QaA" style={styles.link} target="_blank" rel="noopener noreferrer">
            Try My Snapchat Lens
          </a>
        </div>
        <p style={styles.paragraph}>
          In addition to AR, I also enjoy creating AI-generated photos and weaving them into compelling stories. These stories are shared as videos on my YouTube channel and Instagram, where I explore the artistic and narrative potential of AI. Check them out to see how AI can bring imagination to life!
        </p>

        {/* Social Media Links */}
        <div style={styles.socialMediaLinks}>
          <a href="https://www.youtube.com/channel/UChhvcgGTBrI9JLZFirWGPRw" style={styles.link} target="_blank" rel="noopener noreferrer">
            Watch My YouTube Channel
          </a> | 
          <a href="https://www.instagram.com/ai_canvas0677?igsh=MXVtc2Nid2N6ODhxeg%3D%3D" style={styles.link} target="_blank" rel="noopener noreferrer">
            Follow Me on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

// Inline styles for the About component
const styles = {
  pageBackground: {
    backgroundImage: 'url(/path-to-your-background-image.jpg)', // Update with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 0',
    color: '#fff',
  },
  container: {
    padding: '40px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for readability
    borderRadius: '8px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#61dafb',
  },
  subheading: {
    fontSize: '1.8em',
    marginBottom: '15px',
    color: '#61dafb',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.8',
    color: '#ddd',
    marginBottom: '20px',
  },
  socialMediaLinks: {
    marginTop: '20px',
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

export default About;
