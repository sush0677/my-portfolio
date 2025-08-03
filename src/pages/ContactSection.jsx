import React from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
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
          <h2 className="heading-2 mb-8">Contact</h2>
          <p className="body-text max-w-3xl mx-auto mb-8">
            This section will feature contact information with 3D form and social links. 
            Coming soon in Phase 3.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:sushant007.p7@gmail.com" 
              className="btn-primary"
            >
              Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactSection 