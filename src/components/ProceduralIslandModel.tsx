"use client";

import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";

interface ProceduralIslandProps {
  seed?: number;
  terrainType?: 'mountainous' | 'hilly' | 'flat' | 'canyon' | 'mesa';
  biome?: 'forest' | 'desert' | 'tundra' | 'swamp' | 'lava';
  size?: number;
  detail?: number;
  position?: [number, number, number];
}

// Advanced noise functions for terrain generation
class NoiseGenerator {
  static simplex2D(x: number, y: number, seed: number = 0): number {
    // Simple noise implementation (you could use a library like simplex-noise for better results)
    const random = (x: number, y: number) => {
      const hash = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453;
      return hash - Math.floor(hash);
    };
    
    const i = Math.floor(x);
    const j = Math.floor(y);
    const fx = x - i;
    const fy = y - j;
    
    const a = random(i, j);
    const b = random(i + 1, j);
    const c = random(i, j + 1);
    const d = random(i + 1, j + 1);
    
    const u = fx * fx * (3 - 2 * fx);
    const v = fy * fy * (3 - 2 * fy);
    
    return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
  }
  
  static fractalNoise(x: number, y: number, octaves: number = 4, seed: number = 0): number {
    let value = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;
    
    for (let i = 0; i < octaves; i++) {
      value += this.simplex2D(x * frequency, y * frequency, seed) * amplitude;
      maxValue += amplitude;
      amplitude *= 0.5;
      frequency *= 2;
    }
    
    return value / maxValue;
  }
}

// Terrain generator
class TerrainGenerator {
  static generateTerrain(
    size: number,
    detail: number,
    terrainType: string,
    biome: string,
    seed: number
  ): THREE.BufferGeometry {
    const segments = Math.max(8, detail * 8);
    const geometry = new THREE.PlaneGeometry(size * 2, size * 2, segments, segments);
    
    const positions = geometry.attributes.position.array as Float32Array;
    const colors = new Float32Array(positions.length);
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      
      // Generate base height using noise
      let height = NoiseGenerator.fractalNoise(x * 0.1, z * 0.1, 6, seed);
      
      // Apply terrain type modifications
      switch (terrainType) {
        case 'mountainous':
          height = Math.pow(Math.abs(height), 0.8) * Math.sign(height);
          height *= 2;
          break;
        case 'hilly':
          height = Math.sin(height * Math.PI) * 0.8;
          break;
        case 'flat':
          height *= 0.2;
          break;
        case 'canyon':
          height = Math.abs(height) > 0.3 ? height * 1.5 : height * 0.1;
          break;
        case 'mesa':
          height = height > 0.2 ? 1 : height * 0.3;
          break;
      }
      
      // Distance from center for island shape
      const distance = Math.sqrt(x * x + z * z) / size;
      const falloff = Math.max(0, 1 - distance * distance);
      height *= falloff;
      
      positions[i + 1] = height * size * 0.5;
      
      // Generate colors based on height and biome
      const normalizedHeight = (height + 1) / 2;
      let color = new THREE.Color();
      
      switch (biome) {
        case 'forest':
          if (normalizedHeight < 0.3) color.setRGB(0.2, 0.4, 0.8); // Water
          else if (normalizedHeight < 0.5) color.setRGB(0.8, 0.7, 0.4); // Beach
          else if (normalizedHeight < 0.8) color.setRGB(0.2, 0.6, 0.2); // Forest
          else color.setRGB(0.5, 0.3, 0.2); // Mountain
          break;
          
        case 'desert':
          if (normalizedHeight < 0.2) color.setRGB(0.3, 0.5, 0.8);
          else color.setRGB(0.9, 0.8, 0.4 + normalizedHeight * 0.2);
          break;
          
        case 'lava':
          if (normalizedHeight < 0.3) color.setRGB(1, 0.3, 0); // Lava
          else color.setRGB(0.2, 0.1, 0.1 + normalizedHeight * 0.3);
          break;
          
        case 'tundra':
          color.setRGB(0.8, 0.9, 1 - normalizedHeight * 0.3);
          break;
          
        default: // swamp
          if (normalizedHeight < 0.4) color.setRGB(0.1, 0.3, 0.2);
          else color.setRGB(0.3, 0.4, 0.2);
      }
      
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.rotateX(-Math.PI / 2);
    geometry.computeVertexNormals();
    
    return geometry;
  }
}

export default function ProceduralIslandModel({
  seed = Math.random() * 1000,
  terrainType = 'mountainous',
  biome = 'forest',
  size = 2,
  detail = 3,
  position = [0, 0, 0],
}: ProceduralIslandProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  // Generate terrain geometry
  const geometry = useMemo(() => 
    TerrainGenerator.generateTerrain(size, detail, terrainType, biome, seed),
    [seed, terrainType, biome, size, detail]
  );
  
  // Material with vertex colors
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.8,
    metalness: 0.1,
    wireframe: false,
  }), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.1;
      
      if (hovered) {
        meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.05 + 0.1;
      } else {
        meshRef.current.position.y = position[1] + Math.sin(time) * 0.05;
      }
    }
  });
  
  const biomeInfo = {
    forest: { emoji: '🌲', name: 'Forest Island', particles: '#22c55e' },
    desert: { emoji: '🏜️', name: 'Desert Oasis', particles: '#fbbf24' },
    tundra: { emoji: '🏔️', name: 'Frozen Peaks', particles: '#e0f2fe' },
    swamp: { emoji: '🐊', name: 'Mystic Swamp', particles: '#065f46' },
    lava: { emoji: '🌋', name: 'Volcanic Isle', particles: '#ef4444' },
  };
  
  return (
    <group position={position}>
      {/* Main terrain */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={material}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      
      {/* Environmental effects */}
      <Sparkles
        count={hovered ? 100 : 50}
        scale={[size * 2, size, size * 2]}
        size={2}
        speed={0.5}
        color={biomeInfo[biome].particles}
        opacity={hovered ? 0.8 : 0.4}
      />
      
      {/* Biome-specific effects */}
      {biome === 'lava' && (
        <pointLight
          position={[0, size * 0.5, 0]}
          color="#ff4500"
          intensity={hovered ? 2 : 1}
          distance={size * 3}
        />
      )}
      
      {hovered && (
        <Text
          position={[0, size + 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {biomeInfo[biome].emoji} {biomeInfo[biome].name}
        </Text>
      )}
    </group>
  );
}
