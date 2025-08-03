import React from 'react'
import { motion } from 'framer-motion'

const ProjectsSection = () => {
  return (
    <div className="section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="heading-2 mb-8">Projects</h2>
          <p className="body-text max-w-3xl mx-auto">
            This section will feature my projects with 3D gallery and interactive showcases. 
            Coming soon in Phase 3.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsSection 