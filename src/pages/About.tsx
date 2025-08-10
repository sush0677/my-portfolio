import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Three.js', level: 80, color: '#000000' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Python', level: 80, color: '#3776ab' },
    { name: 'CSS/SCSS', level: 90, color: '#1572b6' }
  ];

  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating immersive digital experiences. 
              My journey in web development started with a curiosity about how things work on the internet, 
              and it has evolved into a passion for building beautiful, functional, and user-friendly applications.
            </p>
            <p>
              I specialize in modern web technologies, with particular expertise in React, TypeScript, and 3D graphics. 
              I believe in writing clean, maintainable code and creating experiences that users love to interact with.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="interests"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <span className="interest-icon">🎮</span>
              <span>Game Development</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🎨</span>
              <span>Digital Art</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">📚</span>
              <span>Learning New Tech</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🌍</span>
              <span>Open Source</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
