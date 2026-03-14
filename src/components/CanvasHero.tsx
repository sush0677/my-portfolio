import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { HolographicBrain } from './HolographicBrain';

export function CanvasHero() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                    <HolographicBrain scale={1.2} position={[2, 0, 0]} />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2 - 0.2}
                    maxPolarAngle={Math.PI / 2 + 0.2}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
                <Preload all />
            </Canvas>
        </div>
    );
}
