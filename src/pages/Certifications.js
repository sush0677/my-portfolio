import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: 'Generative AI Fundamentals - Google',
      date: 'November 2023',
      link: 'https://www.cloudskillsboost.google/public_profiles/2e99ef46-d65b-4741-8e83-b71d2c140f03/badges/5950450?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'Introduction to Generative AI - Google',
      date: 'October 2023',
      link: 'https://www.cloudskillsboost.google/public_profiles/2e99ef46-d65b-4741-8e83-b71d2c140f03/badges/5896470?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'Introduction to Large Language Models (LLM) - Google',
      date: 'October 2023',
      link: 'https://www.cloudskillsboost.google/public_profiles/2e99ef46-d65b-4741-8e83-b71d2c140f03/badges/5902877?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'Manthan 2021 National Level Hackathon - NLP Project',
      date: '2021',
      link: 'https://eu.docs.wps.com/view/l/sIICwgt3cAeLz86kG',
    },
    {
      title: 'Compass Hackathon - AI Tool for Video Optimization',
      date: 'June 2024',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7205315431237095424/',
    },
    {
      title: 'Hackathon - Bannari Amman Institute of Technology',
      date: 'June 2021',
      link: 'https://eu.docs.wps.com/l/sIHGwgt3cAaz186kG',
    }
    // Add more certifications as needed
  ];

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Certifications</h2>
        <div style={styles.cardContainer}>
          {certifications.map((cert, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{cert.title}</h3>
              <p style={styles.cardDate}>{cert.date}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline styles for the Certifications component
const styles = {
  pageBackground: {
    backgroundImage: 'url(/path-to-your-background-image.jpg)', // Update with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: '#ffffff', // White text for contrast
  },
  container: {
    padding: '40px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.85)', // Darker semi-transparent background
    borderRadius: '12px',
    maxWidth: '1000px',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    color: '#ffffff', // White text for contrast
  },
  heading: {
    fontSize: '2.8em',
    marginBottom: '30px',
    color: '#61dafb', // Light blue color for the heading
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px', // Increased gap for better spacing
  },
  card: {
    backgroundColor: '#282c34', // Darker background for the cards
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#61dafb', // Matching the heading color
  },
  cardDate: {
    fontSize: '1.1em',
    marginBottom: '15px',
    color: '#dddddd', // Softer white for text
  },
  cardLink: {
    fontSize: '1em',
    color: '#ffffff',
    backgroundColor: '#007bff',
    padding: '10px 15px',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  cardLinkHover: {
    backgroundColor: '#0056b3',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
  },
};

// Adding hover effects using JS
styles.card[':hover'] = styles.cardHover;
styles.cardLink[':hover'] = styles.cardLinkHover;

export default Certifications;
