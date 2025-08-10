import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PhoneModelProps {
  position: [number, number, number];
  onClick: () => void;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}

const PhoneModel: React.FC<PhoneModelProps> = ({
  position,
  onClick,
  onHover,
  isHovered
}) => {
  console.log('PhoneModel created with position:', position);
  const phoneRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (phoneRef.current) {
      // Simple floating animation
      phoneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });
  
  return (
    <group
      ref={phoneRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Phone clicked!');
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
      
      {/* Phone Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.1]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#34495e"} 
        />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.35, 1.1, 0.02]} />
        <meshBasicMaterial 
          color={isHovered ? "#00ff00" : "#2c3e50"} 
        />
      </mesh>
      
      {/* Home Button */}
      <mesh position={[0, -0.4, 0.06]}>
        <ringGeometry args={[0.08, 0.12, 8]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#95a5a6"} 
        />
      </mesh>
      
      {/* Camera */}
      <mesh position={[0, 0.4, 0.06]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#2c3e50"} 
        />
      </mesh>
      
      {/* Speaker */}
      <mesh position={[0, 0.2, 0.06]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 8]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#7f8c8d"} 
        />
      </mesh>
      
      {/* Hover effect */}
      {isHovered && (
        <mesh position={[0, 0, 0]} scale={1.5}>
          <boxGeometry args={[0.4, 1.2, 0.1]} />
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

export default PhoneModel;
