import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projectList = [
    {
      title: 'Fintech Website project',
      description: 'Developed a website for a fintech company focused on managing accounts and creating online accounts for banking services.',
      link: 'https://sush0677.github.io/ProjectX/'
    },
    {
      title: 'Loan Default Prediction',
      description: 'Developed and implemented machine learning models to predict loan defaults, improving the accuracy and efficiency of the prediction process.',
      link: 'https://github.com/sush0677/Loan_Default_Prediction'
    },
    {
      title: 'AI-Driven Fashion Therapy',
      description: 'A platform that recommends fashion choices based on emotional states using AI models.',
      link: 'https://github.com/sush0677/StylisticAI'
    },
    {
      title: 'LangChain AI Agents',
      description: 'Created AI agents using LangChain for specific tasks, integrating various AI tools for enhanced functionality.',
      link: 'https://github.com/sush0677/Langchain_project'
    },
    {
      title: 'Compass Hackathon',
      description: 'Developed an advanced NLP solution using LangChain for processing and understanding natural language inputs.',
      link: 'https://github.com/sush0677/Compass_hack'
    },
    {
      title: 'Pytorch project',
      description: 'Developing certain basic codes using the pytorch library related CNN, RNN, Computer Vision, etc. Basically its more on Machine learning models.',
      link: 'https://github.com/sush0677/pytorch_coding'
    },
  ];

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.projectList}>
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline styles for the Projects component
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background for readability
    borderRadius: '12px',
    maxWidth: '1000px',
    margin: 'auto',
    textAlign: 'center',
    color: '#ffffff', // White text for contrast
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Enhanced shadow for a 3D effect
  },
  heading: {
    fontSize: '2.8em',
    marginBottom: '30px',
    color: '#61dafb', // Light blue color for the heading
  },
  projectList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px', // Increased gap for better spacing
  },
};

export default Projects;
