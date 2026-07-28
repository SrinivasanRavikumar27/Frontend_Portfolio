import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface AbstractKnotProps {
  isDark: boolean;
}

const AbstractDeveloperKnot: React.FC<AbstractKnotProps> = ({ isDark }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.15;
      ringRef.current.rotation.x += delta * 0.1;
    }

    // Gentle mouse influence
    const { x, y } = state.pointer;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 0.8, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 0.8, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      {/* Outer Floating Glow Orbit Ring */}
      <mesh ref={ringRef} scale={1.8}>
        <torusGeometry args={[1.6, 0.015, 16, 100]} />
        <meshBasicMaterial color={isDark ? '#06B6D4' : '#2563EB'} wireframe />
      </mesh>

      {/* Main Developer 3D Torus Knot */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.25}>
          <torusKnotGeometry args={[1, 0.32, 128, 32]} />
          <MeshWobbleMaterial
            factor={0.25}
            speed={2}
            color={isDark ? '#2563EB' : '#0284C7'}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Internal Glowing Core Sphere */}
      <Sphere args={[0.65, 32, 32]}>
        <meshStandardMaterial
          color={isDark ? '#7C3AED' : '#4F46E5'}
          emissive={isDark ? '#2563EB' : '#0284C7'}
          emissiveIntensity={0.6}
          roughness={0.2}
          wireframe
        />
      </Sphere>
    </group>
  );
};

const FloatingCodeNodes: React.FC<AbstractKnotProps> = ({ isDark }) => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 35;

  const positions = React.useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      pos.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
      ]);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, idx) => (
        <Float key={idx} speed={1 + Math.random() * 2} floatIntensity={1.5}>
          <mesh position={pos} scale={0.08 + Math.random() * 0.08}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? (isDark ? '#06B6D4' : '#0284C7') : isDark ? '#7C3AED' : '#2563EB'}
              emissive={idx % 3 === 0 ? '#2563EB' : '#000000'}
              emissiveIntensity={0.5}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

interface HeroSceneProps {
  theme?: 'dark' | 'light';
}

export const HeroScene: React.FC<HeroSceneProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[550px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={isDark ? 0.6 : 1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color={isDark ? '#06B6D4' : '#2563EB'} />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color={isDark ? '#7C3AED' : '#0284C7'} />

        <AbstractDeveloperKnot isDark={isDark} />
        <FloatingCodeNodes isDark={isDark} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
