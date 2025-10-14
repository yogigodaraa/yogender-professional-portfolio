"use client";

import React, { useRef, useState, useMemo, useCallback } from "react";
import { useGLTF, Text, Float, Sparkles, Cloud } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface IslandProps {
  islandType?: 'main' | 'skills' | 'projects' | 'contact';
  floatIntensity?: number;
  rotationSpeed?: number;
  scale?: number;
  glowColor?: string;
  interactive?: boolean;
  onIslandClick?: () => void;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function EnhancedIslandModel({
  islandType = 'main',
  floatIntensity = 0.1,
  rotationSpeed = 0.2,
  scale = 1,
  glowColor = '#fbbf24',
  interactive = true,
  onIslandClick,
  ...props
}: IslandProps) {
  const group = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { scene } = useGLTF("/models/island.glb");
  const { camera, size } = useThree();
  
  // Clone the scene to allow multiple instances
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  
  // Island-specific configurations
  const islandConfig = useMemo(() => {
    const configs = {
      main: {
        label: "🏴‍☠️ Main Island",
        color: '#f59e0b',
        particles: 100,
        sparkleColor: '#fbbf24',
        clouds: true,
      },
      skills: {
        label: "⚔️ Skills Island", 
        color: '#ef4444',
        particles: 80,
        sparkleColor: '#f87171',
        clouds: false,
      },
      projects: {
        label: "🗺️ Projects Island",
        color: '#3b82f6',
        particles: 120,
        sparkleColor: '#60a5fa',
        clouds: true,
      },
      contact: {
        label: "📧 Contact Island",
        color: '#10b981',
        particles: 60,
        sparkleColor: '#34d399',
        clouds: false,
      },
    };
    return configs[islandType];
  }, [islandType]);

  // Enhanced animation with more realistic movement
  useFrame((state, delta) => {
    if (!group.current) return;

    const time = state.clock.getElapsedTime();
    const mouseX = (state.mouse.x * size.width) / size.width;
    const mouseY = (state.mouse.y * size.height) / size.height;

    // More dynamic rotation based on mouse and hover state
    const baseRotationSpeed = rotationSpeed * (hovered ? 1.5 : 1);
    group.current.rotation.y += delta * baseRotationSpeed;
    
    // Subtle mouse tracking
    if (interactive) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouseY * 0.1,
        0.02
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        mouseX * 0.05,
        0.02
      );
    }

    // Enhanced floating animation
    const floatY = Math.sin(time * 0.8) * floatIntensity + Math.cos(time * 0.3) * (floatIntensity * 0.3);
    group.current.position.y = floatY;

    // Pulsing scale when clicked
    if (clicked) {
      const pulse = 1 + Math.sin(time * 10) * 0.05;
      group.current.scale.setScalar(scale * pulse);
    } else {
      group.current.scale.setScalar(scale * (hovered ? 1.05 : 1));
    }
  });

  const handleClick = useCallback(() => {
    if (!interactive) return;
    
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).trackPortfolioEvent) {
      (window as any).trackPortfolioEvent('island_interaction', {
        island_type: islandType,
        interaction: 'click'
      });
    }
    
    onIslandClick?.();
  }, [interactive, islandType, onIslandClick]);

  const handlePointerOver = useCallback(() => {
    if (!interactive) return;
    setHovered(true);
    document.body.style.cursor = 'pointer';
    
    // Track hover analytics
    if (typeof window !== 'undefined' && (window as any).trackPortfolioEvent) {
      (window as any).trackPortfolioEvent('island_interaction', {
        island_type: islandType,
        interaction: 'hover'
      });
    }
  }, [interactive, islandType]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = 'default';
  }, []);

  return (
    <group {...props}>
      {/* Main Island Group */}
      <group
        ref={group}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        dispose={null}
        position={[0, -0.5, 0]}
        castShadow
        receiveShadow
      >
        {/* Island Model */}
        <primitive object={clonedScene} />
        
        {/* Glow Effect */}
        {hovered && (
          <mesh position={[0, -0.2, 0]} scale={2}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial 
              color={islandConfig.color}
              transparent 
              opacity={0.1}
            />
          </mesh>
        )}

        {/* Floating Label */}
        {hovered && interactive && (
          <Float
            speed={2}
            rotationIntensity={0.1}
            floatIntensity={0.2}
            position={[0, 1.5, 0]}
          >
            <Text
              fontSize={0.2}
              color={islandConfig.color}
              anchorX="center"
              anchorY="middle"
              font="/fonts/pirata-one.woff" // You'll need to add this font
            >
              {islandConfig.label}
            </Text>
          </Float>
        )}

        {/* Particle Effects */}
        <Sparkles
          count={islandConfig.particles}
          scale={[4, 2, 4]}
          size={hovered ? 8 : 4}
          speed={hovered ? 1.5 : 0.5}
          color={islandConfig.sparkleColor}
          opacity={hovered ? 0.8 : 0.4}
        />
        
        {/* Clouds for certain islands */}
        {islandConfig.clouds && (
          <>
            <Cloud
              position={[-2, 1, -1]}
              speed={0.2}
              opacity={0.3}
              color="#ffffff"
              segments={20}
            />
            <Cloud
              position={[2, 1.5, 1]}
              speed={0.1}
              opacity={0.2}
              color="#ffffff"
              segments={15}
            />
          </>
        )}
      </group>
      
      {/* Ambient Light Ring */}
      {hovered && (
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2, 2.5, 32]} />
          <meshBasicMaterial 
            color={islandConfig.color}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload("/models/island.glb");

// Export island types for use in other components
export const ISLAND_TYPES = {
  MAIN: 'main' as const,
  SKILLS: 'skills' as const,
  PROJECTS: 'projects' as const,
  CONTACT: 'contact' as const,
} as const;
