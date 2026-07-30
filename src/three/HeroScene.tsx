import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface DeveloperPersonProps {
  isDark: boolean;
  isMobile: boolean;
}

const DeveloperSittingAtWorkstation: React.FC<DeveloperPersonProps> = ({ isDark, isMobile }) => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const { x, y } = state.pointer;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.05);
    }

    // Typing idle motion for developer arms and subtle head sway
    if (!isMobile) {
      const t = state.clock.elapsedTime;
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(t * 0.8) * 0.05;
        headRef.current.rotation.x = Math.cos(t * 0.6) * 0.03;
      }
      if (rightArmRef.current) {
        rightArmRef.current.position.y = 0.12 + Math.sin(t * 12) * 0.015;
      }
      if (leftArmRef.current) {
        leftArmRef.current.position.y = 0.12 + Math.cos(t * 10) * 0.015;
      }
      if (screenRef.current) {
        const mat = screenRef.current.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.emissiveIntensity = 0.65 + Math.sin(t * 2.5) * 0.15;
        }
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.65, 0]} scale={isMobile ? 1.0 : 1.15}>
      {/* --- DESK & TABLE STRUCTURE --- */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.2, 0.1, 2.2]} />
        <meshStandardMaterial
          color={isDark ? '#0B0F19' : '#E2E8F0'}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Desk Metallic Legs */}
      <mesh position={[-1.9, -0.6, -0.9]}>
        <cylinderGeometry args={[0.04, 0.04, 1.1]} />
        <meshStandardMaterial color={isDark ? '#1E293B' : '#94A3B8'} metalness={0.9} />
      </mesh>
      <mesh position={[1.9, -0.6, -0.9]}>
        <cylinderGeometry args={[0.04, 0.04, 1.1]} />
        <meshStandardMaterial color={isDark ? '#1E293B' : '#94A3B8'} metalness={0.9} />
      </mesh>

      {/* --- DEVELOPER SITTING IN CHAIR (PERSON + ERGONOMIC CHAIR) --- */}
      <group position={[0, 0, 0.85]}>
        {/* Ergonomic Office Chair Base & Wheels */}
        <mesh position={[0, -0.55, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.05]} />
          <meshStandardMaterial color={isDark ? '#0F172A' : '#475569'} metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5]} />
          <meshStandardMaterial color={isDark ? '#334155' : '#64748B'} metalness={0.9} />
        </mesh>

        {/* Chair Seat Cushion */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.75]} />
          <meshStandardMaterial color={isDark ? '#1E293B' : '#334155'} roughness={0.5} />
        </mesh>

        {/* Chair Backrest */}
        <mesh position={[0, 0.45, 0.35]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.75, 0.9, 0.1]} />
          <meshStandardMaterial color={isDark ? '#0F172A' : '#1E293B'} roughness={0.4} />
        </mesh>

        {/* Developer Torso / Body */}
        <mesh position={[0, 0.3, 0.05]}>
          <boxGeometry args={[0.6, 0.65, 0.35]} />
          <meshStandardMaterial color={isDark ? '#2563EB' : '#0284C7'} roughness={0.3} />
        </mesh>

        {/* Developer Head & Hair */}
        <mesh ref={headRef} position={[0, 0.8, 0.05]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#FDBA74" roughness={0.4} />
        </mesh>

        {/* Developer Arms (Positioned over keyboard) */}
        <mesh ref={leftArmRef} position={[-0.32, 0.12, -0.25]} rotation={[0.4, 0.2, 0]}>
          <boxGeometry args={[0.12, 0.38, 0.12]} />
          <meshStandardMaterial color="#FDBA74" />
        </mesh>
        <mesh ref={rightArmRef} position={[0.32, 0.12, -0.25]} rotation={[0.4, -0.2, 0]}>
          <boxGeometry args={[0.12, 0.38, 0.12]} />
          <meshStandardMaterial color="#FDBA74" />
        </mesh>
      </group>

      {/* --- MONITORS & HARDWARE --- */}
      {/* Main Curved Monitor Stand & Bezel */}
      <mesh position={[0, 0.5, -0.5]}>
        <cylinderGeometry args={[0.05, 0.08, 0.9]} />
        <meshStandardMaterial color={isDark ? '#334155' : '#64748B'} metalness={0.8} />
      </mesh>
      <mesh position={[0, 1.05, -0.45]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[2.8, 1.25, 0.08]} />
        <meshStandardMaterial color={isDark ? '#0F172A' : '#1E293B'} roughness={0.2} />
      </mesh>

      {/* Code Display Screen */}
      <mesh ref={screenRef} position={[0, 1.05, -0.4]} rotation={[0.05, 0, 0]}>
        <planeGeometry args={[2.7, 1.18]} />
        <meshStandardMaterial
          color={isDark ? '#06B6D4' : '#2563EB'}
          emissive={isDark ? '#0284C7' : '#1D4ED8'}
          emissiveIntensity={0.6}
          roughness={0.1}
        />
      </mesh>

      {/* Mechanical Keyboard with RGB Underglow */}
      <mesh position={[0, 0.08, 0.45]}>
        <boxGeometry args={[1.4, 0.05, 0.5]} />
        <meshStandardMaterial color={isDark ? '#1E293B' : '#475569'} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.06, 0.45]}>
        <boxGeometry args={[1.45, 0.02, 0.55]} />
        <meshBasicMaterial color={isDark ? '#06B6D4' : '#2563EB'} />
      </mesh>

      {/* Ergonomic Mouse */}
      <mesh position={[0.9, 0.09, 0.45]}>
        <boxGeometry args={[0.22, 0.08, 0.35]} />
        <meshStandardMaterial color={isDark ? '#334155' : '#64748B'} metalness={0.5} />
      </mesh>

      {/* Desktop PC Tower Case with RGB Lighting */}
      <group position={[1.85, 0.65, -0.2]}>
        <mesh>
          <boxGeometry args={[0.65, 1.15, 1.0]} />
          <meshStandardMaterial color={isDark ? '#0F172A' : '#1E293B'} metalness={0.8} />
        </mesh>
        <mesh position={[-0.33, 0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.02, 16]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
        <mesh position={[-0.33, -0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.02, 16]} />
          <meshBasicMaterial color="#7C3AED" />
        </mesh>
      </group>

      {/* Orbiting Floating Code Shapes */}
      {!isMobile && (
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={[-1.8, 1.8, 0.2]}>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial color={isDark ? '#06B6D4' : '#2563EB'} wireframe />
          </mesh>
          <mesh position={[1.8, 2.0, -0.1]}>
            <torusGeometry args={[0.18, 0.05, 16, 32]} />
            <meshStandardMaterial color={isDark ? '#7C3AED' : '#6D28D9'} wireframe />
          </mesh>
        </Float>
      )}
    </group>
  );
};

interface HeroSceneProps {
  theme?: 'dark' | 'light';
}

export const HeroScene: React.FC<HeroSceneProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[560px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 1.2, 4.2], fov: 45 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={isDark ? 0.7 : 1.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color={isDark ? '#38BDF8' : '#2563EB'} />
        <pointLight position={[-5, -2, -2]} intensity={1.2} color={isDark ? '#A78BFA' : '#6D28D9'} />

        <DeveloperSittingAtWorkstation isDark={isDark} isMobile={isMobile} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!isMobile}
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
