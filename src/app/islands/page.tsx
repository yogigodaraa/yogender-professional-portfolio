"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import IslandSceneManager from '../../components/IslandSceneManager';

// Interactive Islands Showcase Page
export default function IslandsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading for dramatic effect
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleIslandNavigation = (path: string) => {
    setSelectedIsland(path);
    // Add some delay for the island interaction animation
    setTimeout(() => {
      router.push(path);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto mb-8"></div>
          <h2 className="text-2xl font-bold text-white mb-4">🗺️ Loading the Grand Line...</h2>
          <p className="text-blue-200">Preparing your adventure across the islands</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600">
        {/* Ocean Waves Animation */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-700 to-transparent opacity-50">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        
        {/* Floating Clouds */}
        <div className="absolute top-10 left-10 w-20 h-12 bg-white/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-20 right-20 w-32 h-16 bg-white/15 rounded-full animate-float-slower"></div>
        <div className="absolute top-32 left-1/2 w-24 h-14 bg-white/10 rounded-full animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🗺️ <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Island Explorer
              </span>
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Navigate through different islands to explore my skills, projects, and experience. 
              Each island holds unique treasures of knowledge and adventure!
            </p>
          </div>
        </div>

        {/* 3D Island Scene */}
        <div className="absolute inset-0 pt-32">
          <IslandSceneManager 
            showMultipleIslands={true}
            onIslandNavigation={handleIslandNavigation}
            enableOrbitControls={true}
          />
        </div>

        {/* Navigation Guide */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-white">
                <div className="text-2xl mb-2">🏴‍☠️</div>
                <div className="text-sm font-semibold">Main Island</div>
                <div className="text-xs text-gray-300">Home Base</div>
              </div>
              <div className="text-white">
                <div className="text-2xl mb-2">⚔️</div>
                <div className="text-sm font-semibold">Skills Island</div>
                <div className="text-xs text-gray-300">Abilities</div>
              </div>
              <div className="text-white">
                <div className="text-2xl mb-2">🗺️</div>
                <div className="text-sm font-semibold">Projects Island</div>
                <div className="text-xs text-gray-300">Portfolio</div>
              </div>
              <div className="text-white">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm font-semibold">Contact Island</div>
                <div className="text-xs text-gray-300">Get in Touch</div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/20 text-center">
              <p className="text-sm text-gray-300">
                🖱️ Drag to rotate • 🔍 Scroll to zoom • 👆 Click islands to navigate
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation Menu */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-4 space-y-3">
            <button 
              onClick={() => handleIslandNavigation('/')}
              className="w-full flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <span>🏠</span>
              <span className="text-sm">Home</span>
            </button>
            <button 
              onClick={() => handleIslandNavigation('/about')}
              className="w-full flex items-center space-x-2 text-white hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <span>👨‍💻</span>
              <span className="text-sm">About</span>
            </button>
            <button 
              onClick={() => handleIslandNavigation('/projects')}
              className="w-full flex items-center space-x-2 text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <span>🚀</span>
              <span className="text-sm">Projects</span>
            </button>
            <button 
              onClick={() => handleIslandNavigation('/contact')}
              className="w-full flex items-center space-x-2 text-white hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <span>📧</span>
              <span className="text-sm">Contact</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selection Overlay */}
      {selectedIsland && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Setting Sail...</h3>
            <p className="text-gray-300">Navigating to your destination</p>
          </div>
        </div>
      )}

      {/* Custom Styles for Animations */}
      <style jsx>{`
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(45deg, #3b82f6, #1e40af);
          border-radius: 1000px;
          animation: wave 6s infinite linear;
        }
        
        .wave1 {
          animation-delay: 0s;
          opacity: 0.3;
        }
        
        .wave2 {
          animation-delay: 2s;
          opacity: 0.2;
        }
        
        .wave3 {
          animation-delay: 4s;
          opacity: 0.1;
        }
        
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
