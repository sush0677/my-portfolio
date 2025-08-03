import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

// Components
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import ExperienceSection from './pages/ExperienceSection'
import SkillsSection from './pages/SkillsSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'
import Navigation from './components/layout/Navigation'
import LoadingScreen from './components/ui/LoadingScreen'

// 3D Components
import Scene3D from './components/3d/Scene3D'

function App() {
  useEffect(() => {
    console.log('App component mounted successfully!')
  }, [])

  return (
    <div className="App relative">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Three.js Canvas - Enhanced 3D Background */}
      <div className="three-canvas">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene3D />
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1}
            />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={0.3}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content Sections */}
        <main className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Section */}
            <section id="hero" className="section">
              <HeroSection />
            </section>

            {/* About Section */}
            <section id="about" className="section">
              <AboutSection />
            </section>

            {/* Experience Section */}
            <section id="experience" className="section">
              <ExperienceSection />
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
              <SkillsSection />
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
              <ProjectsSection />
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
              <ContactSection />
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default App 