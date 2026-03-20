import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HolographicBrain(props: any) {
    const group = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.Points>(null);

    // Custom particle geometry using useMemo for performance
    const particleCount = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const r = 2.4 + Math.random() * 0.8;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
            group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.05;
        }
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.getElapsedTime() * -0.2;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Outer Glow Sphere */}
            <mesh>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshBasicMaterial
                    color="#06b6d4"
                    transparent={true}
                    opacity={0.03}
                />
            </mesh>

            {/* Wireframe Structure */}
            <mesh>
                <icosahedronGeometry args={[2.5, 3]} />
                <meshBasicMaterial
                    color="#06b6d4"
                    wireframe={true}
                    transparent={true}
                    opacity={0.08}
                />
            </mesh>

            {/* Inner Core (Glowing) */}
            <mesh>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#8b5cf6"
                    emissiveIntensity={5}
                    wireframe={true}
                />
            </mesh>

            {/* Pulsing Core Sphere */}
            <mesh>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#8b5cf6"
                    emissiveIntensity={2}
                    transparent
                    opacity={0.4}
                />
            </mesh>

            {/* Orbiting Points */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.02} color="#06b6d4" transparent opacity={0.4} sizeAttenuation={true} />
            </points>

            {/* Floating Data Nodes */}
            {[...Array(6)].map((_, i) => (
                <group key={i} rotation={[i * Math.PI / 3, i * Math.PI / 2, 0]}>
                    <mesh position={[2, 0, 0]}>
                        <sphereGeometry args={[0.06, 16, 16]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? "#06b6d4" : "#ec4899"}
                            emissive={i % 2 === 0 ? "#06b6d4" : "#ec4899"}
                            emissiveIntensity={4}
                        />
                    </mesh>
                    <mesh position={[2, 0, 0]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshBasicMaterial color={i % 2 === 0 ? "#06b6d4" : "#ec4899"} transparent opacity={0.1} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}
