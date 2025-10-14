"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState } from "react";
import CustomIslandModel from "./CustomIslandModel";
import ProceduralIslandModel from "./ProceduralIslandModel";

type ModelType = 'custom' | 'procedural';
type IslandStyle = 'tropical' | 'volcanic' | 'floating' | 'crystal' | 'cyber';
type TerrainType = 'mountainous' | 'hilly' | 'flat' | 'canyon' | 'mesa';
type BiomeType = 'forest' | 'desert' | 'tundra' | 'swamp' | 'lava';

export default function Custom3DShowcase() {
  const [modelType, setModelType] = useState<ModelType>('custom');
  const [islandStyle, setIslandStyle] = useState<IslandStyle>('tropical');
  const [terrainType, setTerrainType] = useState<TerrainType>('mountainous');
  const [biome, setBiome] = useState<BiomeType>('forest');
  const [seed, setSeed] = useState(42);

  const regenerateIsland = () => {
    setSeed(Math.floor(Math.random() * 1000));
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900">
      {/* Controls Panel */}
      <div className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-sm">
        <h3 className="text-white font-bold text-lg mb-4">🏗️ 3D Island Builder</h3>
        
        {/* Model Type Selector */}
        <div className="mb-4">
          <label className="block text-white text-sm mb-2">Model Type:</label>
          <select 
            value={modelType} 
            onChange={(e) => setModelType(e.target.value as ModelType)}
            className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
          >
            <option value="custom">🎨 Custom Geometric</option>
            <option value="procedural">🗺️ Procedural Terrain</option>
          </select>
        </div>

        {modelType === 'custom' ? (
          /* Custom Island Controls */
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Island Style:</label>
            <select 
              value={islandStyle} 
              onChange={(e) => setIslandStyle(e.target.value as IslandStyle)}
              className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
            >
              <option value="tropical">🏝️ Tropical Paradise</option>
              <option value="volcanic">🌋 Volcanic Island</option>
              <option value="floating">🌸 Floating Gardens</option>
              <option value="crystal">💎 Crystal Caverns</option>
              <option value="cyber">🤖 Cyber Nexus</option>
            </select>
          </div>
        ) : (
          /* Procedural Island Controls */
          <>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Terrain Type:</label>
              <select 
                value={terrainType} 
                onChange={(e) => setTerrainType(e.target.value as TerrainType)}
                className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
              >
                <option value="mountainous">🏔️ Mountainous</option>
                <option value="hilly">🏞️ Hilly</option>
                <option value="flat">🏖️ Flat Plains</option>
                <option value="canyon">🏜️ Canyon</option>
                <option value="mesa">🗻 Mesa</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Biome:</label>
              <select 
                value={biome} 
                onChange={(e) => setBiome(e.target.value as BiomeType)}
                className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
              >
                <option value="forest">🌲 Forest</option>
                <option value="desert">🏜️ Desert</option>
                <option value="tundra">🏔️ Tundra</option>
                <option value="swamp">🐊 Swamp</option>
                <option value="lava">🌋 Volcanic</option>
              </select>
            </div>
          </>
        )}

        <button 
          onClick={regenerateIsland}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
        >
          🎲 Generate New Island
        </button>
        
        <div className="mt-4 text-xs text-gray-300">
          <p>• Drag to rotate camera</p>
          <p>• Scroll to zoom in/out</p>
          <p>• Hover over island for info</p>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [4, 3, 4], fov: 60 }}
        gl={{ antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 3, -5]} color="#3b82f6" intensity={0.5} />

        <Suspense fallback={null}>
          {modelType === 'custom' ? (
            <CustomIslandModel
              islandType={islandStyle}
              size={1.5}
              complexity={3}
              position={[0, 0, 0]}
            />
          ) : (
            <ProceduralIslandModel
              seed={seed}
              terrainType={terrainType}
              biome={biome}
              size={2}
              detail={4}
              position={[0, 0, 0]}
            />
          )}

          <Environment preset="sunset" />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={false}
        />
      </Canvas>

      {/* Info Panel */}
      <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-xs">
        <h4 className="text-white font-bold mb-2">🎯 Current Configuration</h4>
        <div className="text-sm text-gray-300 space-y-1">
          <p><strong>Type:</strong> {modelType === 'custom' ? 'Custom Geometric' : 'Procedural Terrain'}</p>
          {modelType === 'custom' ? (
            <p><strong>Style:</strong> {islandStyle}</p>
          ) : (
            <>
              <p><strong>Terrain:</strong> {terrainType}</p>
              <p><strong>Biome:</strong> {biome}</p>
              <p><strong>Seed:</strong> {seed}</p>
            </>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-4 right-4 text-right">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          🏗️ Custom 3D Islands
        </h1>
        <p className="text-white/80 mt-2">Build your own unique 3D models</p>
      </div>
    </div>
  );
}
