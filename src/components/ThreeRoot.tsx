"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import EnhancedIslandModel from "./EnhancedIslandModel";
import { ISLAND_TYPES } from "./EnhancedIslandModel";

interface ThreeRootProps {
  showControls?: boolean;
  islandType?: 'main' | 'skills' | 'projects' | 'contact';
}

export default function ThreeRoot({ 
  showControls = true,
  islandType 
}: ThreeRootProps) {
  const pathname = usePathname();
  
  // Determine island type based on current page if not specified
  const currentIslandType = islandType || 
    (pathname === '/about' ? ISLAND_TYPES.SKILLS :
     pathname === '/projects' ? ISLAND_TYPES.PROJECTS :
     pathname === '/contact' ? ISLAND_TYPES.CONTACT :
     ISLAND_TYPES.MAIN);

  return (
    <div className="relative h-[70vh] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [3, 2, 6], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.0} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 2, -5]} color="#3b82f6" intensity={0.3} />

        <Suspense fallback={null}>
          {/* Enhanced Island Model */}
          <EnhancedIslandModel 
            islandType={currentIslandType}
            interactive={showControls}
            onIslandClick={() => {
              // Track analytics
              if (typeof window !== 'undefined' && (window as any).trackPortfolioEvent) {
                (window as any).trackPortfolioEvent('island_click', {
                  island_type: currentIslandType,
                  page: pathname
                });
              }
            }}
          />
          
          <Environment preset="sunset" />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.35}
            scale={10}
            blur={1.5}
            far={4}
          />
        </Suspense>

        {/* User controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={0.6}
          maxPolarAngle={1.3}
        />
      </Canvas>

      {/* Overlay label */}
      <div className="absolute left-3 top-3 rounded bg-white/70 px-3 py-1 text-sm">
        🏝️ Drag to orbit • Scroll to zoom
      </div>
    </div>
  );
}
