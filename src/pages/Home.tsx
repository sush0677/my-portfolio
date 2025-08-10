import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Interactive 3D Developer Portfolio
        </motion.p>
        
        <motion.div
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            Click on the floating 3D objects above to navigate through different sections of my portfolio.
            Each object represents a different section and will take you on an interactive journey.
          </p>
          <p>
            Use your mouse to rotate the view and explore the 3D space. Hover over objects to see them glow!
          </p>
        </motion.div>
        
        <motion.div
          className="features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Interactive Navigation</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🚀</span>
            <span>Modern 3D Graphics</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💡</span>
            <span>Creative Design</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
