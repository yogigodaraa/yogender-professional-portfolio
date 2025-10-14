"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

interface CustomIslandProps {
  islandType?: 'tropical' | 'volcanic' | 'floating' | 'crystal' | 'cyber';
  size?: number;
  complexity?: number;
  position?: [number, number, number];
  onIslandClick?: () => void;
}

// Procedural island generator
function generateIslandGeometry(size: number, complexity: number, type: string) {
  const geometry = new THREE.ConeGeometry(size, size * 0.8, 8 + complexity * 4, 1);
  const positions = geometry.attributes.position.array as Float32Array;
  
  // Add noise and variations based on island type
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];
    
    // Add procedural noise
    const noise = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 0.1;
    const heightVariation = Math.random() * 0.2 - 0.1;
    
    positions[i + 1] = y + noise + heightVariation;
    
    // Type-specific modifications
    switch (type) {
      case 'volcanic':
        if (y > size * 0.3) positions[i + 1] += Math.random() * 0.3;
        break;
      case 'floating':
        positions[i + 1] += Math.sin(Math.sqrt(x*x + z*z)) * 0.1;
        break;
      case 'crystal':
        positions[i + 1] += Math.abs(Math.sin(x * 2) * Math.cos(z * 2)) * 0.2;
        break;
      case 'cyber':
        // More angular, geometric shape
        positions[i] = Math.round(positions[i] * 4) / 4;
        positions[i + 2] = Math.round(positions[i + 2] * 4) / 4;
        break;
    }
  }
  
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();
  
  return geometry;
}

// Custom materials for different island types
function getIslandMaterial(type: string, hovered: boolean) {
  const materials = {
    tropical: new THREE.MeshStandardMaterial({
      color: hovered ? '#10b981' : '#059669',
      roughness: 0.8,
      metalness: 0.1,
    }),
    volcanic: new THREE.MeshStandardMaterial({
      color: hovered ? '#ef4444' : '#dc2626',
      roughness: 0.6,
      metalness: 0.2,
      emissive: hovered ? '#7f1d1d' : '#451a03',
    }),
    floating: new THREE.MeshStandardMaterial({
      color: hovered ? '#8b5cf6' : '#7c3aed',
      roughness: 0.3,
      metalness: 0.4,
      transparent: true,
      opacity: 0.9,
    }),
    crystal: new THREE.MeshStandardMaterial({
      color: hovered ? '#06b6d4' : '#0891b2',
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.8,
    }),
    cyber: new THREE.MeshStandardMaterial({
      color: hovered ? '#f59e0b' : '#d97706',
      roughness: 0.2,
      metalness: 0.9,
      emissive: hovered ? '#92400e' : '#451a03',
    }),
  };
  
  return materials[type as keyof typeof materials] || materials.tropical;
}

export default function CustomIslandModel({
  islandType = 'tropical',
  size = 1,
  complexity = 2,
  position = [0, 0, 0],
  onIslandClick,
}: CustomIslandProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  // Generate geometry once
  const geometry = useMemo(() => 
    generateIslandGeometry(size, complexity, islandType), 
    [size, complexity, islandType]
  );
  
  const material = useMemo(() => 
    getIslandMaterial(islandType, hovered), 
    [islandType, hovered]
  );

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Gentle rotation
      meshRef.current.rotation.y = time * 0.2;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.1;
      
      // Hover effects
      if (hovered) {
        meshRef.current.scale.setScalar(1.05 + Math.sin(time * 4) * 0.02);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const islandInfo = {
    tropical: { emoji: '🏝️', name: 'Tropical Paradise' },
    volcanic: { emoji: '🌋', name: 'Volcanic Island' },
    floating: { emoji: '🌸', name: 'Floating Gardens' },
    crystal: { emoji: '💎', name: 'Crystal Caverns' },
    cyber: { emoji: '🤖', name: 'Cyber Nexus' },
  };

  return (
    <group position={position}>
      {/* Main Island */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={material}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onIslandClick}
      />
      
      {/* Decorative elements based on island type */}
      {islandType === 'tropical' && (
        <>
          {/* Palm trees */}
          <group position={[0.3, size * 0.4, 0.2]}>
            <mesh>
              <cylinderGeometry args={[0.05, 0.08, 0.6]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[0, 0.4, 0]}>
              <sphereGeometry args={[0.2, 8, 6]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          </group>
        </>
      )}
      
      {islandType === 'volcanic' && (
        <>
          {/* Lava glow */}
          <pointLight 
            position={[0, size * 0.8, 0]} 
            color="#ff4500" 
            intensity={hovered ? 2 : 1} 
            distance={5}
          />
          {/* Smoke particles effect would go here */}
        </>
      )}
      
      {islandType === 'crystal' && (
        <>
          {/* Crystal formations */}
          <mesh position={[0.2, size * 0.6, 0.1]}>
            <octahedronGeometry args={[0.1, 0]} />
            <meshStandardMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.8}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </>
      )}
      
      {islandType === 'cyber' && (
        <>
          {/* Neon grid lines */}
          <mesh position={[0, size * 0.05, 0]}>
            <ringGeometry args={[size * 0.8, size * 0.9, 16]} />
            <meshBasicMaterial 
              color="#00ff41" 
              transparent 
              opacity={hovered ? 0.8 : 0.4}
            />
          </mesh>
        </>
      )}
      
      {/* Floating label */}
      {hovered && (
        <Float speed={2} rotationIntensity={0.1}>
          <Text
            position={[0, size + 0.5, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {islandInfo[islandType].emoji} {islandInfo[islandType].name}
          </Text>
        </Float>
      )}
    </group>
  );
}
