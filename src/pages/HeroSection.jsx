import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [imageError, setImageError] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="section">
      <div className="section-content text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-400 shadow-glow-lg animate-float">
                {!imageError ? (
                  <img
                    src="/assests/images/photo.jpg"
                    alt="Sushant Patil"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-cyan-400 flex items-center justify-center text-white font-bold text-2xl">
                    SP
                  </div>
                )}
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="heading-1 mb-6"
          >
            Sushant Patil
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="heading-3 mb-4 text-primary-300"
          >
            AI Adoptions Coordinator
          </motion.h2>

          {/* Company */}
          <motion.p
            variants={itemVariants}
            className="body-text mb-8 text-cyan-300"
          >
            at <span className="font-semibold">Nathan Digital</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="body-text mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging AI Innovation with Business Adoption. Transforming organizations through strategic AI integration and digital transformation.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn-primary"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Journey
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection 