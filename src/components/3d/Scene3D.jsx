import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Box, Sphere, Cylinder, Text3D, Float } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced Particle Field with more particles and better performance
function ParticleField({ count = 2000 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0ea5e9"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// Interactive Floating Shapes with hover effects
function FloatingShapes() {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: ['box', 'sphere', 'cylinder'][Math.floor(Math.random() * 3)],
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: Math.random() * 0.5 + 0.3,
      color: ['#0ea5e9', '#06b6d4', '#38bdf8', '#22d3ee'][Math.floor(Math.random() * 4)]
    }))
  }, [])

  return (
    <group>
      {shapes.map((shape) => (
        <Float
          key={shape.id}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={shape.position}
        >
          {shape.type === 'box' && (
            <Box
              args={[1, 1, 1]}
              scale={shape.scale}
              rotation={shape.rotation}
            >
              <meshStandardMaterial
                color={shape.color}
                transparent
                opacity={0.7}
                wireframe
              />
            </Box>
          )}
          {shape.type === 'sphere' && (
            <Sphere
              args={[0.5, 16, 16]}
              scale={shape.scale}
              rotation={shape.rotation}
            >
              <meshStandardMaterial
                color={shape.color}
                transparent
                opacity={0.6}
                wireframe
              />
            </Sphere>
          )}
          {shape.type === 'cylinder' && (
            <Cylinder
              args={[0.5, 0.5, 1, 16]}
              scale={shape.scale}
              rotation={shape.rotation}
            >
              <meshStandardMaterial
                color={shape.color}
                transparent
                opacity={0.7}
                wireframe
              />
            </Cylinder>
          )}
        </Float>
      ))}
    </group>
  )
}

// Neural Network Visualization
function NeuralNetwork() {
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      connections: Array.from({ length: 3 }, () => Math.floor(Math.random() * 20))
    }))
  }, [])

  return (
    <group>
      {nodes.map((node) => (
        <group key={node.id}>
          <Sphere position={node.position} args={[0.1, 8, 8]}>
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.2} />
          </Sphere>
          {node.connections.map((connectionId, index) => {
            const targetNode = nodes[connectionId]
            if (targetNode && targetNode.id !== node.id) {
              const start = new THREE.Vector3(...node.position)
              const end = new THREE.Vector3(...targetNode.position)
              const distance = start.distanceTo(end)
              const midPoint = start.clone().lerp(end, 0.5)
              
              return (
                <Cylinder
                  key={`${node.id}-${connectionId}-${index}`}
                  position={midPoint}
                  args={[0.01, 0.01, distance]}
                  rotation={[
                    Math.atan2(end.y - start.y, Math.sqrt((end.x - start.x) ** 2 + (end.z - start.z) ** 2)),
                    0,
                    Math.atan2(end.x - start.x, end.z - start.z)
                  ]}
                >
                  <meshStandardMaterial color="#38bdf8" transparent opacity={0.3} />
                </Cylinder>
              )
            }
            return null
          })}
        </group>
      ))}
    </group>
  )
}

// Data Flow Particles
function DataFlowParticles() {
  const ref = useRef()
  const particles = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ]
    }))
  }, [])

  useFrame(() => {
    if (ref.current) {
      particles.forEach((particle, i) => {
        particle.position[0] += particle.velocity[0]
        particle.position[1] += particle.velocity[1]
        particle.position[2] += particle.velocity[2]

        // Wrap around boundaries
        if (Math.abs(particle.position[0]) > 15) particle.velocity[0] *= -1
        if (Math.abs(particle.position[1]) > 15) particle.velocity[1] *= -1
        if (Math.abs(particle.position[2]) > 15) particle.velocity[2] *= -1

        ref.current.geometry.attributes.position.array[i * 3] = particle.position[0]
        ref.current.geometry.attributes.position.array[i * 3 + 1] = particle.position[1]
        ref.current.geometry.attributes.position.array[i * 3 + 2] = particle.position[2]
      })
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const positions = useMemo(() => {
    const pos = new Float32Array(particles.length * 3)
    particles.forEach((particle, i) => {
      pos[i * 3] = particle.position[0]
      pos[i * 3 + 1] = particle.position[1]
      pos[i * 3 + 2] = particle.position[2]
    })
    return pos
  }, [particles])

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.3}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function Scene3D() {
  const { camera } = useThree()

  useFrame((state) => {
    // Subtle camera movement
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.3
  })

  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#0ea5e9" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#38bdf8" />
      
      {/* 3D Elements */}
      <ParticleField count={2500} />
      <FloatingShapes />
      <NeuralNetwork />
      <DataFlowParticles />
      
      {/* Atmospheric Effects */}
      <fog attach="fog" args={['#0c4a6e', 15, 60]} />
    </>
  )
}

export default Scene3D 