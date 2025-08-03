import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('journey')

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: '🚀' },
    { id: 'mission', label: 'Mission', icon: '🎯' },
    { id: 'values', label: 'Values', icon: '💎' },
    { id: 'approach', label: 'Approach', icon: '🔬' }
  ]

  const timelineData = [
    {
      year: '2023 - Present',
      title: 'AI Adoptions Coordinator',
      company: 'Nathan Digital',
      description: 'Leading AI adoption strategies and digital transformation initiatives across multiple industries.',
      achievements: ['Implemented AI solutions for 15+ clients', 'Reduced operational costs by 40%', 'Improved efficiency by 60%']
    },
    {
      year: '2022 - 2023',
      title: 'Digital Transformation Specialist',
      company: 'Tech Innovations Ltd',
      description: 'Specialized in helping organizations transition to AI-driven business models.',
      achievements: ['Led 10+ transformation projects', 'Trained 200+ employees', 'Achieved 95% client satisfaction']
    },
    {
      year: '2021 - 2022',
      title: 'AI Strategy Consultant',
      company: 'Future Solutions',
      description: 'Developed comprehensive AI strategies for mid to large-scale enterprises.',
      achievements: ['Created AI roadmaps for 20+ companies', 'Generated $2M+ in value', 'Established best practices']
    }
  ]

  const values = [
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Building strong partnerships with stakeholders to ensure successful AI adoption.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Continuously exploring cutting-edge AI technologies and methodologies.'
    },
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Focusing on measurable outcomes and tangible business value.'
    },
    {
      icon: '🔄',
      title: 'Adaptability',
      description: 'Flexible approach to meet the unique needs of each organization.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const tabVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, y: -2 }
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
            <h2 className="heading-2 mb-6">About Me</h2>
            <p className="body-text max-w-3xl mx-auto">
              A passionate AI adoption specialist with a proven track record of transforming organizations 
              through strategic AI integration and digital innovation.
            </p>
          </motion.div>

          {/* Interactive Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={tabVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-glow'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-[400px]"
            >
              {activeTab === 'journey' && (
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="card relative pl-8 border-l-4 border-primary-400"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-400 rounded-full"></div>
                      <div className="mb-2">
                        <span className="text-primary-400 font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{item.company}</p>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                            <span className="text-primary-400">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="text-center space-y-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl"
                  >
                    🎯
                  </motion.div>
                  <div className="space-y-6">
                    <h3 className="heading-3">Bridging AI Innovation with Business Adoption</h3>
                    <p className="body-text max-w-4xl mx-auto">
                      My mission is to democratize AI technology by making it accessible, practical, and valuable 
                      for organizations of all sizes. I believe that successful AI adoption isn't just about 
                      implementing cutting-edge technology—it's about creating sustainable, human-centered 
                      solutions that drive real business outcomes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="card text-center">
                        <div className="text-4xl mb-4">🚀</div>
                        <h4 className="font-bold text-white mb-2">Accelerate</h4>
                        <p className="text-sm text-gray-400">Speed up AI adoption processes</p>
                      </div>
                      <div className="card text-center">
                        <div className="text-4xl mb-4">💡</div>
                        <h4 className="font-bold text-white mb-2">Innovate</h4>
                        <p className="text-sm text-gray-400">Create breakthrough solutions</p>
                      </div>
                      <div className="card text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h4 className="font-bold text-white mb-2">Transform</h4>
                        <p className="text-sm text-gray-400">Drive measurable business growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card hover:shadow-glow transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                      <p className="text-gray-300">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="heading-3 mb-4">My 4-Step AI Adoption Framework</h3>
                    <p className="body-text">
                      A proven methodology for successful AI implementation and digital transformation.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { step: '01', title: 'Assess', desc: 'Evaluate current state and identify opportunities', icon: '🔍' },
                      { step: '02', title: 'Plan', desc: 'Develop comprehensive AI strategy and roadmap', icon: '📋' },
                      { step: '03', title: 'Implement', desc: 'Execute solutions with continuous monitoring', icon: '⚡' },
                      { step: '04', title: 'Optimize', desc: 'Iterate and improve based on results', icon: '🎯' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="card text-center relative"
                      >
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div className="text-3xl mb-4">{item.icon}</div>
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection 