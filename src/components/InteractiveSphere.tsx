import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function DotsSphere() {
  const group = useRef<THREE.Group>(null!);

  // smooth inertia
  useFrame(({ mouse }) => {
    if (!group.current) return;
    group.current.rotation.y += (mouse.x * 1.2 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (mouse.y * 1.2 - group.current.rotation.x) * 0.05;
    group.current.rotation.y += 0.002; // auto-rotate
  });

  const dots = useMemo(() => {
    const temp = [];
    const radius = 2.2;
    const count = 240;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push(
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial
            color={new THREE.Color(`hsl(${i * 1.5}, 100%, 70%)`)}
            emissive={new THREE.Color(`hsl(${i * 1.5}, 100%, 60%)`)}
            emissiveIntensity={0.8}
          />
        </mesh>
      );
    }
    return temp;
  }, []);

  return <group ref={group}>{dots}</group>;
}

export default function InteractiveSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1.5} />

      <DotsSphere />
    </Canvas>
  );
}
