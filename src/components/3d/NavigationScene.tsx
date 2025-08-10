import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import HouseModel from './HouseModel';
import CarModel from './CarModel';
import RobotModel from './RobotModel';
import PhoneModel from './PhoneModel';

console.log('Models imported:', { HouseModel, CarModel, RobotModel, PhoneModel });

interface NavigationSceneProps {}

const NavigationScene: React.FC<NavigationSceneProps> = () => {
  const groupRef = useRef<THREE.Group>(null);
  const navigate = useNavigate();
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);

  console.log('🎯 NavigationScene: Component mounted');
  console.log('🎯 NavigationScene: navigate function:', navigate);
  console.log('🎯 NavigationScene: hoveredObject state:', hoveredObject);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const navigationObjects = [
    { id: 'home', position: [0, 1, 0] as [number, number, number], text: 'HOME', route: '/', model: 'house' as const },
    { id: 'about', position: [-2, 0, 0] as [number, number, number], text: 'ABOUT', route: '/about', model: 'car' as const },
    { id: 'projects', position: [2, 0, 0] as [number, number, number], text: 'PROJECTS', route: '/projects', model: 'robot' as const },
    { id: 'contact', position: [0, -1, 0] as [number, number, number], text: 'CONTACT', route: '/contact', model: 'phone' as const }
  ];

  const handleObjectClick = (route: string) => {
    console.log('🎯 NavigationScene: handleObjectClick called with route:', route);
    console.log('🎯 NavigationScene: About to navigate to:', route);
    try {
      navigate(route);
      console.log('🎯 NavigationScene: Navigation successful to:', route);
    } catch (error) {
      console.error('🎯 NavigationScene: Navigation failed:', error);
    }
  };

  const handleObjectHover = (id: string, isHovered: boolean) => {
    setHoveredObject(isHovered ? id : null);
  };

  return (
    <group 
      ref={groupRef}
      onClick={(e) => {
        e.stopPropagation();
        console.log('🎯 NavigationScene: Main group clicked!');
      }}
      onPointerEnter={() => console.log('🎯 NavigationScene: Main group hovered')}
      onPointerLeave={() => console.log('🎯 NavigationScene: Main group left')}
    >
      {/* Central floating title */}
      <group position={[0, 4, 0]}>
        <mesh>
          <boxGeometry args={[3, 0.6, 0.2]} />
          <meshBasicMaterial color="#667eea" />
        </mesh>
        
        <Html
          position={[0, 0, 0.2]}
          center
          distanceFactor={15}
          style={{
            background: 'rgba(102, 126, 234, 0.9)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            transform: 'translateY(-50%)',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
          }}
        >
          PORTFOLIO
        </Html>
      </group>

      {/* Debug: Large visible markers for each position - easier to click */}
      {navigationObjects.map((obj) => (
        <mesh 
          key={`debug-${obj.id}`} 
          position={obj.position}
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Debug sphere clicked for ${obj.id}!`);
            handleObjectClick(obj.route);
          }}
          onPointerEnter={() => handleObjectHover(obj.id, true)}
          onPointerLeave={() => handleObjectHover(obj.id, false)}
        >
          <sphereGeometry args={[0.5, 16, 12]} />
          <meshBasicMaterial color="lime" transparent opacity={0.8} />
        </mesh>
      ))}
      
      {/* Debug: Position info */}
      {navigationObjects.map((obj) => (
        <Html
          key={`debug-html-${obj.id}`}
          position={[obj.position[0], obj.position[1] + 0.5, obj.position[2]]}
          center
          distanceFactor={8}
          style={{
            background: 'rgba(255, 255, 0, 0.8)',
            color: 'black',
            padding: '4px 8px',
            borderRadius: '10px',
            fontSize: '10px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
          }}
        >
          {obj.id}: [{obj.position[0]}, {obj.position[1]}, {obj.position[2]}]
        </Html>
      ))}

      {/* Test: Large visible cube - easy to see and click */}
      <mesh 
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          console.log('Center cube clicked! Going to home page');
          handleObjectClick('/');
        }}
        onPointerEnter={() => console.log('Hovering over center cube')}
        onPointerLeave={() => console.log('Left center cube')}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="red" transparent opacity={0.9} />
      </mesh>

      {/* Navigation objects */}
      {navigationObjects.map((obj) => {
        console.log(`Rendering ${obj.model} model for ${obj.id}`);
        const props = {
          position: obj.position,
          onClick: () => handleObjectClick(obj.route),
          onHover: (isHovered: boolean) => handleObjectHover(obj.id, isHovered),
          isHovered: hoveredObject === obj.id
        };

        return (
          <group key={obj.id}>
            {/* Render the appropriate 3D model */}
            {obj.model === 'house' && (
              <>
                {console.log(`Rendering HouseModel for ${obj.id}`)}
                <HouseModel {...props} />
              </>
            )}
            {obj.model === 'car' && (
              <>
                {console.log(`Rendering CarModel for ${obj.id}`)}
                <CarModel {...props} />
              </>
            )}
            {obj.model === 'robot' && (
              <>
                {console.log(`Rendering RobotModel for ${obj.id}`)}
                <RobotModel {...props} />
              </>
            )}
            {obj.model === 'phone' && (
              <>
                {console.log(`Rendering PhoneModel for ${obj.id}`)}
                <PhoneModel {...props} />
              </>
            )}
            
            {/* Floating label */}
            <Html
              position={[obj.position[0], obj.position[1] + 1.2, obj.position[2]]}
              center
              distanceFactor={10}
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                transform: 'translateY(-50%)',
                opacity: hoveredObject === obj.id ? 1 : 0.7,
                transition: 'opacity 0.3s ease'
              }}
            >
              {obj.text}
            </Html>
          </group>
        );
      })}

      {/* Ambient floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]}>
          <sphereGeometry args={[0.02, 8, 6]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Debug Info Panel */}
      <Html
        position={[0, 6, 0]}
        center
        distanceFactor={12}
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '1rem',
          borderRadius: '15px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          minWidth: '200px'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>🎯 3D Navigation Debug</div>
          <div>Hovered: {hoveredObject || 'None'}</div>
          <div>Click the objects below!</div>
          <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '0.5rem' }}>
            Look for: 🔴 Red Cube, 🟢 Lime Spheres
          </div>
        </div>
      </Html>
    </group>
  );
};

export default NavigationScene;
