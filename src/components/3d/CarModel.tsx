import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CarModelProps {
  position: [number, number, number];
  onClick: () => void;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}

const CarModel: React.FC<CarModelProps> = ({
  position,
  onClick,
  onHover,
  isHovered
}) => {
  console.log('CarModel created with position:', position);
  const carRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (carRef.current) {
      // Simple floating animation
      carRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });
  
  return (
    <group
      ref={carRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Car clicked!');
        onClick();
      }}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
      scale={isHovered ? 1.2 : 1.5}
    >
      {/* Main clickable area - large invisible box for better click detection */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial 
          color="transparent" 
          transparent
          opacity={0}
        />
      </mesh>
      
      {/* Car Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.6, 0.8]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#3498db"} 
        />
      </mesh>
      
      {/* Car Roof */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1, 0.4, 0.6]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#2980b9"} 
        />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[-0.5, -0.2, 0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
        <meshBasicMaterial color="#2c3e50" />
      </mesh>
      
      <mesh position={[0.5, -0.2, 0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
        <meshBasicMaterial color="#2c3e50" />
      </mesh>
      
      <mesh position={[-0.5, -0.2, -0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
        <meshBasicMaterial color="#2c3e50" />
      </mesh>
      
      <mesh position={[0.5, -0.2, -0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
        <meshBasicMaterial color="#2c3e50" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[0.75, 0, 0.2]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshBasicMaterial 
          color={isHovered ? "#ffff00" : "#ffffff"} 
        />
      </mesh>
      
      <mesh position={[0.75, 0, -0.2]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshBasicMaterial 
          color={isHovered ? "#ffff00" : "#ffffff"} 
        />
      </mesh>
      
      {/* Hover effect */}
      {isHovered && (
        <mesh position={[0, 0, 0]} scale={1.5}>
          <boxGeometry args={[1.5, 0.6, 0.8]} />
          <meshBasicMaterial
            color="#ff6b6b"
            transparent
            opacity={0.2}
            wireframe
          />
        </mesh>
      )}
    </group>
  );
};

export default CarModel;
