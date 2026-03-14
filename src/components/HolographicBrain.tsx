import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export function HolographicBrain(props: any) {
    const group = useRef<THREE.Group>(null);

    // Create a procedural abstract tech object (since we can't reliably fetch external 3D models here without setup)
    // We'll use a dynamic mathematical shape that looks cool and agentic

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Outer Connection Sphere (Wireframe) */}
            <mesh>
                <icosahedronGeometry args={[2.5, 2]} />
                <meshBasicMaterial
                    color="#06b6d4" // Cyan
                    wireframe={true}
                    transparent={true}
                    opacity={0.15}
                />
            </mesh>

            {/* Inner Core (Glowing) */}
            <mesh>
                <octahedronGeometry args={[1.2, 0]} />
                <meshStandardMaterial
                    color="#8b5cf6" // Violet
                    emissive="#8b5cf6"
                    emissiveIntensity={2}
                    wireframe={true}
                />
            </mesh>

            {/* Orbiting Data Nodes */}
            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={3} />
            </mesh>
            <mesh position={[-2, 1, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0, -2, 1]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}
