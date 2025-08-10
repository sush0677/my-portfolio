import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NavigationScene from './components/3d/NavigationScene';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  console.log('🎯 App: Component rendering');
  
  return (
    <Router>
      <div className="App">
        <div className="canvas-container">
          <Canvas
            camera={{ position: [0, 2, 10], fov: 75 }}
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            gl={{ antialias: true }}
            onCreated={({ gl, camera }) => {
              gl.setClearColor('#667eea', 0);
              console.log('🎯 App: Canvas created, camera position:', camera.position);
            }}
          >
            <ambientLight intensity={1.0} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <NavigationScene />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              maxDistance={20}
              minDistance={5}
            />
          </Canvas>
        </div>
        
        <div className="content-overlay">
          <Routes>
            <Route path="/" element={
              <div onClick={() => console.log('🎯 App: Home route clicked')}>
                <Home />
              </div>
            } />
            <Route path="/about" element={
              <div onClick={() => console.log('🎯 App: About route clicked')}>
                <About />
              </div>
            } />
            <Route path="/projects" element={
              <div onClick={() => console.log('🎯 App: Projects route clicked')}>
                <Projects />
              </div>
            } />
            <Route path="/contact" element={
              <div onClick={() => console.log('🎯 App: Contact route clicked')}>
                <Contact />
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
