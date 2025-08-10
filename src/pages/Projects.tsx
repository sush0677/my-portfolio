import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: '3D Portfolio Website',
      description: 'An interactive 3D portfolio built with React, Three.js, and TypeScript. Features floating navigation objects and smooth animations.',
      technologies: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
      category: 'web',
      image: '🎨',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      image: '🛒',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI, featuring natural language processing and smart responses.',
      technologies: ['Python', 'TensorFlow', 'WebSocket', 'React'],
      category: 'ai',
      image: '🤖',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mobile Game',
      description: 'Cross-platform mobile game built with Unity, featuring 3D graphics and multiplayer functionality.',
      technologies: ['Unity', 'C#', 'Photon', 'Blender'],
      category: 'game',
      image: '🎮',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing and visualizing complex datasets with real-time updates.',
      technologies: ['D3.js', 'React', 'Python', 'PostgreSQL'],
      category: 'data',
      image: '📊',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Blockchain DApp',
      description: 'Decentralized application built on Ethereum, featuring smart contracts and Web3 integration.',
      technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
      category: 'blockchain',
      image: '⛓️',
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'game', name: 'Game Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      className="page projects-page"
      initial={{ opacity: 0, x: 20 }}
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
          My Projects
        </motion.h1>

        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
