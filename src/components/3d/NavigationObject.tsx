import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface NavigationObjectProps {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  text: string;
  route: string;
  geometry: 'sphere' | 'cube' | 'torus' | 'octahedron';
  onClick: () => void;
  onHover: (isHovered: boolean) => void;
  isHovered: boolean;
}

const NavigationObject: React.FC<NavigationObjectProps> = ({
  position,
  rotation,
  scale,
  color,
  text,
  geometry,
  onClick,
  onHover,
  isHovered
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += 0.01;
      
      // Hover animation
      if (isHovered) {
        meshRef.current.scale.setScalar(scale * 1.2);
        // Cast to MeshStandardMaterial to access emissiveIntensity
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        if (material) {
          material.emissiveIntensity = 0.3;
        }
      } else {
        meshRef.current.scale.setScalar(scale);
        // Cast to MeshStandardMaterial to access emissiveIntensity
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        if (material) {
          material.emissiveIntensity = 0;
        }
      }
    }
  });

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      onClick();
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere': return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'cube': return <boxGeometry args={[1, 1, 1]} />;
      case 'torus': return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
      case 'octahedron': return <octahedronGeometry args={[0.5]} />;
      default: return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <group rotation={rotation}>
        <mesh
          ref={meshRef}
          onClick={handleClick}
          onPointerEnter={() => onHover(true)}
          onPointerLeave={() => onHover(false)}
          scale={scale}
        >
          {renderGeometry()}
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>

        {/* Floating label */}
        <Html
          position={[0, 1.2, 0]}
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
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.3s ease'
          }}
        >
          {text}
        </Html>

        {/* Glow effect when hovered */}
        {isHovered && (
          <mesh position={[0, 0, 0]} scale={scale * 1.5}>
            {renderGeometry()}
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.1}
            />
          </mesh>
        )}
      </group>
    </Float>
  );
};

export default NavigationObject;
