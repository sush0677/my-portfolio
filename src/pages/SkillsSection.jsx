import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('ai')

  const categories = [
    { id: 'ai', label: 'AI & ML', icon: '🤖' },
    { id: 'tech', label: 'Technology', icon: '💻' },
    { id: 'business', label: 'Business', icon: '📊' },
    { id: 'soft', label: 'Soft Skills', icon: '🤝' }
  ]

  const skills = {
    ai: [
      { name: 'Machine Learning', level: 95, icon: '🧠', description: 'Deep learning, neural networks, predictive modeling' },
      { name: 'Natural Language Processing', level: 90, icon: '📝', description: 'Text analysis, sentiment analysis, chatbots' },
      { name: 'Computer Vision', level: 85, icon: '👁️', description: 'Image recognition, object detection, video analysis' },
      { name: 'AI Strategy', level: 95, icon: '🎯', description: 'AI roadmap development, implementation planning' },
      { name: 'Data Science', level: 90, icon: '📈', description: 'Statistical analysis, data visualization, insights' },
      { name: 'Robotic Process Automation', level: 88, icon: '⚙️', description: 'Process automation, workflow optimization' }
    ],
    tech: [
      { name: 'Python', level: 95, icon: '🐍', description: 'Advanced Python programming, libraries, frameworks' },
      { name: 'TensorFlow/PyTorch', level: 90, icon: '🔥', description: 'Deep learning frameworks and model development' },
      { name: 'Cloud Platforms', level: 92, icon: '☁️', description: 'AWS, Azure, Google Cloud, deployment strategies' },
      { name: 'Big Data', level: 85, icon: '📊', description: 'Hadoop, Spark, data processing pipelines' },
      { name: 'API Development', level: 88, icon: '🔌', description: 'RESTful APIs, microservices, integration' },
      { name: 'DevOps', level: 80, icon: '🚀', description: 'CI/CD, containerization, infrastructure as code' }
    ],
    business: [
      { name: 'Digital Transformation', level: 95, icon: '🔄', description: 'End-to-end transformation strategies' },
      { name: 'Change Management', level: 90, icon: '👥', description: 'Organizational change, stakeholder management' },
      { name: 'Project Management', level: 88, icon: '📋', description: 'Agile methodologies, risk management' },
      { name: 'Business Analysis', level: 92, icon: '🔍', description: 'Requirements gathering, process optimization' },
      { name: 'ROI Optimization', level: 90, icon: '💰', description: 'Cost-benefit analysis, value measurement' },
      { name: 'Strategic Planning', level: 93, icon: '🎯', description: 'Long-term planning, competitive analysis' }
    ],
    soft: [
      { name: 'Leadership', level: 92, icon: '👑', description: 'Team leadership, mentoring, decision making' },
      { name: 'Communication', level: 95, icon: '💬', description: 'Technical and non-technical communication' },
      { name: 'Problem Solving', level: 93, icon: '🧩', description: 'Analytical thinking, creative solutions' },
      { name: 'Collaboration', level: 90, icon: '🤝', description: 'Cross-functional teamwork, stakeholder engagement' },
      { name: 'Adaptability', level: 88, icon: '🔄', description: 'Change management, learning agility' },
      { name: 'Innovation', level: 91, icon: '💡', description: 'Creative thinking, emerging technology adoption' }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.2 }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5 }
    })
  }

  return (
    <div className="section">
      <div className="section-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-2 mb-6">Skills & Expertise</h2>
            <p className="body-text max-w-3xl mx-auto">
              A comprehensive skill set spanning AI/ML technologies, business strategy, and leadership 
              to drive successful digital transformations.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-glow'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {skills[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="card group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{skill.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                    <motion.div
                      custom={skill.level}
                      variants={progressVariants}
                      className="h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="font-bold text-white mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-400">
                  Regularly updating skills with latest AI technologies and methodologies
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="font-bold text-white mb-2">Certifications</h4>
                <p className="text-sm text-gray-400">
                  Certified in AWS, Azure, Google Cloud, and various AI/ML frameworks
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="font-bold text-white mb-2">Global Experience</h4>
                <p className="text-sm text-gray-400">
                  Worked with clients across multiple industries and geographies
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsSection 