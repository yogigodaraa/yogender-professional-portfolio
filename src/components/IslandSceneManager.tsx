"use client";

import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import EnhancedIslandModel, { ISLAND_TYPES } from "./EnhancedIslandModel";

interface IslandSceneManagerProps {
  currentPage?: string;
  onIslandNavigation?: (page: string) => void;
  showMultipleIslands?: boolean;
  enableOrbitControls?: boolean;
}

// Loading component for 3D models
function IslandLoader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6b7280" wireframe />
    </mesh>
  );
}

export default function IslandSceneManager({ 
  currentPage = 'home',
  onIslandNavigation,
  showMultipleIslands = false,
  enableOrbitControls = true 
}: IslandSceneManagerProps) {
  const [focusedIsland, setFocusedIsland] = useState<string | null>(null);

  const handleIslandClick = useCallback((islandType: string) => {
    setFocusedIsland(islandType);
    
    // Navigate to corresponding page
    const pageMap = {
      main: '/',
      skills: '/about',
      projects: '/projects', 
      contact: '/contact',
    };
    
    const targetPage = pageMap[islandType as keyof typeof pageMap];
    if (targetPage && onIslandNavigation) {
      setTimeout(() => {
        onIslandNavigation(targetPage);
      }, 500); // Delay for animation
    }
  }, [onIslandNavigation]);

  const getCameraPosition = (): [number, number, number] => {
    if (showMultipleIslands) {
      return [0, 8, 12];
    }
    return [0, 3, 8];
  };

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: getCameraPosition(), fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Ocean-like point lights */}
        <pointLight position={[-10, 0, -10]} color="#3b82f6" intensity={0.3} />
        <pointLight position={[10, 0, -10]} color="#06b6d4" intensity={0.3} />

        {/* Environment */}
        <Environment preset="sunset" />
        
        <Suspense fallback={<IslandLoader />}>
          {showMultipleIslands ? (
            // Multiple Islands Layout
            <>
              {/* Main Island - Center */}
              <EnhancedIslandModel
                islandType={ISLAND_TYPES.MAIN}
                position={[0, 0, 0]}
                scale={1.2}
                onIslandClick={() => handleIslandClick('main')}
              />
              
              {/* Skills Island - Left */}
              <EnhancedIslandModel
                islandType={ISLAND_TYPES.SKILLS}
                position={[-6, -1, 2]}
                scale={0.8}
                rotationSpeed={0.1}
                onIslandClick={() => handleIslandClick('skills')}
              />
              
              {/* Projects Island - Right */}
              <EnhancedIslandModel
                islandType={ISLAND_TYPES.PROJECTS}
                position={[6, -0.5, 1]}
                scale={0.9}
                rotationSpeed={0.15}
                onIslandClick={() => handleIslandClick('projects')}
              />
              
              {/* Contact Island - Back */}
              <EnhancedIslandModel
                islandType={ISLAND_TYPES.CONTACT}
                position={[0, -1.5, -4]}
                scale={0.7}
                rotationSpeed={0.25}
                onIslandClick={() => handleIslandClick('contact')}
              />
            </>
          ) : (
            // Single Island - Dynamic based on current page
            <EnhancedIslandModel
              islandType={
                currentPage === '/about' ? ISLAND_TYPES.SKILLS :
                currentPage === '/projects' ? ISLAND_TYPES.PROJECTS :
                currentPage === '/contact' ? ISLAND_TYPES.CONTACT :
                ISLAND_TYPES.MAIN
              }
              position={[0, 0, 0]}
              scale={1.0}
              onIslandClick={() => handleIslandClick('main')}
            />
          )}
        </Suspense>

        {/* Ocean Surface Effect */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial 
            color="#1e40af"
            transparent
            opacity={0.3}
            roughness={0}
            metalness={0.8}
          />
        </mesh>

        {/* Contact Shadows for better grounding */}
        <ContactShadows 
          position={[0, -1.9, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />

        {/* Controls */}
        {enableOrbitControls && (
          <OrbitControls
            enablePan={showMultipleIslands}
            enableZoom={true}
            enableRotate={true}
            minDistance={showMultipleIslands ? 8 : 4}
            maxDistance={showMultipleIslands ? 20 : 12}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate={!focusedIsland}
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
      
      {/* Island Navigation Overlay */}
      {showMultipleIslands && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
            <p className="text-white text-sm text-center">
              🗺️ Click on any island to explore that section
            </p>
          </div>
        </div>
      )}
      
      {/* Island Info Popup */}
      {focusedIsland && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
          <h3 className="font-bold text-gray-800">
            {focusedIsland === 'main' && '🏴‍☠️ Welcome to My Portfolio!'}
            {focusedIsland === 'skills' && '⚔️ Skills & Expertise'}
            {focusedIsland === 'projects' && '🗺️ My Projects'}
            {focusedIsland === 'contact' && '📧 Get In Touch'}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {focusedIsland === 'main' && 'Explore my journey as a Full Stack Developer'}
            {focusedIsland === 'skills' && 'Discover my technical skills and experience'}
            {focusedIsland === 'projects' && 'Check out my latest work and achievements'}
            {focusedIsland === 'contact' && 'Ready to start your next adventure together?'}
          </p>
          <button
            onClick={() => setFocusedIsland(null)}
            className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
