import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { Text3D, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import NavigationObject from './NavigationObject';

interface NavigationSceneProps {}

const NavigationScene: React.FC<NavigationSceneProps> = () => {
  const groupRef = useRef<THREE.Group>(null);
  const navigate = useNavigate();
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const navigationObjects = [
    {
      id: 'home',
      position: [0, 2, 0] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: 1,
      color: '#ff6b6b',
      text: 'HOME',
      route: '/',
      geometry: 'sphere'
    },
    {
      id: 'about',
      position: [-3, 0, 2] as [number, number, number],
      rotation: [0, Math.PI / 4, 0] as [number, number, number],
      scale: 0.8,
      color: '#4ecdc4',
      text: 'ABOUT',
      route: '/about',
      geometry: 'cube'
    },
    {
      id: 'projects',
      position: [3, 0, 2] as [number, number, number],
      rotation: [0, -Math.PI / 4, 0] as [number, number, number],
      scale: 0.8,
      color: '#45b7d1',
      text: 'PROJECTS',
      route: '/projects',
      geometry: 'torus'
    },
    {
      id: 'contact',
      position: [0, -2, 0] as [number, number, number],
      rotation: [0, Math.PI / 2, 0] as [number, number, number],
      scale: 0.9,
      color: '#96ceb4',
      text: 'CONTACT',
      route: '/contact',
      geometry: 'octahedron'
    }
  ];

  const handleObjectClick = (route: string) => {
    navigate(route);
  };

  const handleObjectHover = (id: string, isHovered: boolean) => {
    setHoveredObject(isHovered ? id : null);
  };

  return (
    <group ref={groupRef}>
      {/* Central floating title */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        position={[0, 4, 0]}
      >
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          PORTFOLIO
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </Float>

      {/* Navigation objects */}
      {navigationObjects.map((obj) => (
        <NavigationObject
          key={obj.id}
          {...obj}
          onClick={() => handleObjectClick(obj.route)}
          onHover={(isHovered) => handleObjectHover(obj.id, isHovered)}
          isHovered={hoveredObject === obj.id}
        />
      ))}

      {/* Ambient floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
        >
          <sphereGeometry args={[0.02, 8, 6]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

export default NavigationScene;
