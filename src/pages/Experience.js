import React from 'react';

function Experience() {
  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Experience</h2>
        <ul style={styles.list}>
          {/* Exquitech Internship */}
          <li style={styles.item}>
            <strong>Artificial Intelligence Engineer Intern - Exquitech (Dubai, UAE)</strong>
            <p style={styles.description}>
              March 2024 - July 2024: Focused on implementing AI tools by integrating them with LangChain, creating AI agents designed for specific purposes. This role enhanced my understanding of AI-driven applications in real-world scenarios.
            </p>
          </li>

          {/* Kiya.AI Internship */}
          <li style={styles.item}>
            <strong>Machine Learning Engineer Intern - Kiya.AI (Dubai, UAE)</strong>
            <p style={styles.description}>
              December 2023 - May 2024: Contributed to the Loan Default Prediction project by developing and implementing machine learning models to enhance the accuracy of loan default predictions. This experience provided hands-on exposure to analyzing large datasets and applying advanced ML techniques.
            </p>
          </li>

          {/* Cybernetics Software Pvt. Ltd. Internship */}
          <li style={styles.item}>
            <strong>Intern Game Developer - Cybernetics Software Pvt. Ltd. (Pune, India)</strong>
            <p style={styles.description}>
              September 2022 - November 2022: Played a key role in developing interactive gaming features using Unity3D. Focused on game logic and UI components, utilizing C# and C++ to build a robust and scalable gaming architecture.
            </p>
          </li>

          {/* Compass Hackathon */}
          <li style={styles.item}>
            <strong>Compass Hackathon - AI Tool for Video Optimization (Abu Dhabi, UAE)</strong>
            <p style={styles.description}>
              June 2024: Participated in a 24-hour hackathon, where I developed an AI-driven tool for optimizing videos for Myco.io. This project involved collaboration, rapid problem-solving, and applying AI techniques to enhance video content.
            </p>
          </li>

          {/* Manthan 2021 National Level Hackathon */}
          <li style={styles.item}>
            <strong>Manthan 2021 National Level Hackathon - NLP Project (Karnataka, India)</strong>
            <p style={styles.description}>
              2021: Developed a pioneering NLP solution for analyzing "Hinglish" social media content. The project included slang detection and image-based text extraction, earning recognition for its innovative approach to Natural Language Processing.
            </p>
          </li>

          {/* Other Hackathons */}
          <li style={styles.item}>
            <strong>Hackathons</strong>
            <p style={styles.description}>
              Participated in various hackathons including Hack Bit, HACKFEST, WED hackathon, and KPIT Innovation hackathons. These experiences honed my skills in AI, machine learning, and team collaboration under time constraints.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Inline styles for the Experience component
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
    backgroundColor: 'rgba(0, 0, 0, 0.85)', // Darker semi-transparent background for readability
    borderRadius: '12px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Deep shadow for a 3D effect
  },
  heading: {
    fontSize: '2.8em',
    marginBottom: '30px',
    color: '#61dafb', // Light blue color for the heading
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  item: {
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.8',
    color: '#d1d1e0', // Softer, light gray text color for better contrast
    marginTop: '10px',
  },
};

export default Experience;
