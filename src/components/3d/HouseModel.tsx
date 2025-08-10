import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HouseModelProps {
  position: [number, number, number];
  onClick: () => void;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}

const HouseModel: React.FC<HouseModelProps> = ({
  position,
  onClick,
  onHover,
  isHovered
}) => {
  console.log('HouseModel created with position:', position);
  const houseRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (houseRef.current) {
      // Simple floating animation
      houseRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
  });
  
  return (
    <group
      ref={houseRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        console.log('House clicked!');
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
      
      {/* House Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.8, 1]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#e74c3c"} 
        />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[0.8, 0.6, 4]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#c0392b"} 
        />
      </mesh>
      
      {/* Chimney */}
      <mesh position={[0.3, 0.9, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshBasicMaterial color="#8b4513" />
      </mesh>
      
      {/* Front Door */}
      <mesh position={[0, -0.1, 0.51]}>
        <boxGeometry args={[0.3, 0.6, 0.05]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#8b4513"} 
        />
      </mesh>
      
      {/* Windows */}
      <mesh position={[-0.4, 0.1, 0.51]}>
        <boxGeometry args={[0.25, 0.25, 0.05]} />
        <meshBasicMaterial 
          color="#87ceeb" 
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh position={[0.4, 0.1, 0.51]}>
        <boxGeometry args={[0.25, 0.25, 0.05]} />
        <meshBasicMaterial 
          color="#87ceeb" 
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Hover effect */}
      {isHovered && (
        <mesh position={[0, 0, 0]} scale={1.5}>
          <boxGeometry args={[1.2, 0.8, 1]} />
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

export default HouseModel;
