import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '../utils/personalInfo';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Welcome Header */}
          <motion.h1
            className="welcome-header"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            Welcome to Sushant Portfolio
          </motion.h1>
          
          <motion.h2
            className="welcome-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: '1.8rem',
              fontWeight: '500',
              marginBottom: '2rem',
              color: '#ffffff',
              textAlign: 'center',
              opacity: 0.9,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            What do you want to look at?
          </motion.h2>

          <h1 className="title">{personalInfo.title}</h1>
        </motion.div>
        
        <motion.div
          className="personal-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="name-title">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h2>
          <p className="subtitle">
            {personalInfo.title}
          </p>
        </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            I'm passionate about building and implementing AI-driven solutions that solve real-world problems. 
            Currently pursuing my master's in AI/ML at the University of Birmingham Dubai, I focus on 
            applying machine learning models to practical projects and exploring cutting-edge technologies.
          </p>
          <p>
            With experience in developing loan prediction models, generative AI agents, and participating in 
            Kaggle competitions, I bring practical AI/ML expertise to every project.
          </p>
          
          {/* 3D Navigation Instructions */}
          <motion.div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              marginTop: '2rem',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>
              🎯 3D Navigation Guide
            </h3>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              <strong>Click on the 3D objects in the background to navigate:</strong>
            </p>
            <ul style={{ textAlign: 'left', marginLeft: '2rem', fontSize: '0.9rem' }}>
              <li>🔴 <strong>Red Cube</strong> (center) → Home page</li>
              <li>🚗 <strong>Car</strong> (left) → About page</li>
              <li>🤖 <strong>Robot</strong> (right) → Projects page</li>
              <li>📱 <strong>Phone</strong> (bottom) → Contact page</li>
            </ul>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.8 }}>
              💡 <strong>Tip:</strong> Look for the bright lime spheres and red cube - they're easier to click!
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {personalInfo.interests.slice(0, 3).map((interest, index) => (
            <div key={index} className="feature">
              <span className="feature-icon">{interest.icon}</span>
              <span>{interest.label}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Test navigation buttons */}
        <motion.div
          style={{ marginTop: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>
            🧪 Test Navigation (HTML Buttons)
          </h3>
          <button 
            onClick={() => {
              console.log('🎯 Home: Test About button clicked');
              navigate('/about');
            }}
            style={{
              padding: '0.75rem 1.5rem',
              margin: '0.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Test: Go to About
          </button>
          <button 
            onClick={() => {
              console.log('🎯 Home: Test Projects button clicked');
              navigate('/projects');
            }}
            style={{
              padding: '0.75rem 1.5rem',
              margin: '0.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Test: Go to Projects
          </button>
          <button 
            onClick={() => {
              console.log('🎯 Home: Test Contact button clicked');
              navigate('/contact');
            }}
            style={{
              padding: '0.75rem 1.5rem',
              margin: '0.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Test: Go to Contact
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
