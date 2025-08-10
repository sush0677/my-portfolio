import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RobotModelProps {
  position: [number, number, number];
  onClick: () => void;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}

const RobotModel: React.FC<RobotModelProps> = ({
  position,
  onClick,
  onHover,
  isHovered
}) => {
  console.log('RobotModel created with position:', position);
  const robotRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (robotRef.current) {
      // Simple floating animation
      robotRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.8) * 0.1;
    }
  });
  
  return (
    <group
      ref={robotRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Robot clicked!');
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
      
      {/* Robot Head */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#95a5a6"} 
        />
      </mesh>
      
      {/* Robot Body */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1, 1.2, 0.6]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#7f8c8d"} 
        />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 0.5, 0.4]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshBasicMaterial 
          color={isHovered ? "#00ff00" : "#3498db"} 
        />
      </mesh>
      
      <mesh position={[0.2, 0.5, 0.4]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshBasicMaterial 
          color={isHovered ? "#00ff00" : "#3498db"} 
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.8, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#95a5a6"} 
        />
      </mesh>
      
      <mesh position={[0.8, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#95a5a6"} 
        />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.3, -1.1, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.3]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#7f8c8d"} 
        />
      </mesh>
      
      <mesh position={[0.3, -1.1, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.3]} />
        <meshBasicMaterial 
          color={isHovered ? "#ff6b6b" : "#7f8c8d"} 
        />
      </mesh>
      
      {/* Hover effect */}
      {isHovered && (
        <mesh position={[0, 0, 0]} scale={1.5}>
          <boxGeometry args={[1, 1.2, 0.6]} />
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

export default RobotModel;
