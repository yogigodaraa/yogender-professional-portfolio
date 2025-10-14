// Island system configuration and utilities

export interface IslandTheme {
  name: string;
  emoji: string;
  primaryColor: string;
  secondaryColor: string;
  particleColor: string;
  description: string;
  features: string[];
  navigation: {
    label: string;
    path: string;
  };
}

export const ISLAND_THEMES: Record<string, IslandTheme> = {
  main: {
    name: "Thousand Sunny Island",
    emoji: "🏴‍☠️",
    primaryColor: "#f59e0b",
    secondaryColor: "#fbbf24", 
    particleColor: "#fcd34d",
    description: "The main hub of adventure - where the journey begins",
    features: [
      "Interactive 3D environment",
      "Dynamic weather effects", 
      "Ambient ocean sounds",
      "Responsive design"
    ],
    navigation: {
      label: "Set Sail Home",
      path: "/"
    }
  },
  
  skills: {
    name: "Training Ground Island",
    emoji: "⚔️",
    primaryColor: "#ef4444",
    secondaryColor: "#f87171",
    particleColor: "#fca5a5", 
    description: "Where skills are honed and abilities are mastered",
    features: [
      "Skill progression tracking",
      "Interactive technology stack",
      "Certification showcase",
      "Experience timeline"
    ],
    navigation: {
      label: "Train Skills",
      path: "/about"
    }
  },

  projects: {
    name: "Shipwright Island", 
    emoji: "🗺️",
    primaryColor: "#3b82f6",
    secondaryColor: "#60a5fa",
    particleColor: "#93c5fd",
    description: "The workshop where amazing projects come to life",
    features: [
      "Project galleries with live demos",
      "Technology deep-dives", 
      "Source code exploration",
      "Case study walkthroughs"
    ],
    navigation: {
      label: "View Projects", 
      path: "/projects"
    }
  },

  contact: {
    name: "Communication Tower",
    emoji: "📧", 
    primaryColor: "#10b981",
    secondaryColor: "#34d399",
    particleColor: "#6ee7b7",
    description: "Send messages across the Grand Line",
    features: [
      "Real-time email delivery",
      "Professional contact forms",
      "Social media integration", 
      "Response tracking"
    ],
    navigation: {
      label: "Send Message",
      path: "/contact"
    }
  },

  blog: {
    name: "Knowledge Library",
    emoji: "📚",
    primaryColor: "#8b5cf6", 
    secondaryColor: "#a78bfa",
    particleColor: "#c4b5fd",
    description: "Repository of wisdom and technical insights",
    features: [
      "Technical blog posts",
      "Tutorial walkthroughs",
      "Industry insights",
      "Learning resources"
    ],
    navigation: {
      label: "Read Blog",
      path: "/blogs"
    }
  }
};

// Island interaction sound effects (optional)
export const ISLAND_SOUNDS = {
  hover: "/sounds/island-hover.mp3",
  click: "/sounds/island-click.mp3", 
  ambient: "/sounds/ocean-ambient.mp3",
  wind: "/sounds/island-wind.mp3",
};

// Island animation presets
export const ISLAND_ANIMATIONS = {
  gentle: {
    rotationSpeed: 0.1,
    floatIntensity: 0.05,
    hoverScale: 1.02
  },
  
  moderate: {
    rotationSpeed: 0.2, 
    floatIntensity: 0.1,
    hoverScale: 1.05
  },
  
  dynamic: {
    rotationSpeed: 0.3,
    floatIntensity: 0.15, 
    hoverScale: 1.08
  },

  energetic: {
    rotationSpeed: 0.4,
    floatIntensity: 0.2,
    hoverScale: 1.1
  }
};

// Weather effects for islands
export const WEATHER_EFFECTS = {
  sunny: {
    clouds: false,
    rain: false,
    lighting: "bright",
    particles: "sparkles"
  },
  
  cloudy: {
    clouds: true,
    rain: false, 
    lighting: "soft",
    particles: "dust"
  },
  
  stormy: {
    clouds: true,
    rain: true,
    lighting: "dramatic", 
    particles: "lightning"
  },

  mystical: {
    clouds: false,
    rain: false,
    lighting: "ethereal",
    particles: "magic"
  }
};

// Island performance settings
export const PERFORMANCE_SETTINGS = {
  mobile: {
    particleCount: 50,
    shadowQuality: "low",
    renderDistance: "near", 
    frameRateTarget: 30
  },
  
  desktop: {
    particleCount: 150,
    shadowQuality: "high", 
    renderDistance: "far",
    frameRateTarget: 60
  },
  
  highEnd: {
    particleCount: 300,
    shadowQuality: "ultra",
    renderDistance: "infinite",
    frameRateTarget: 120  
  }
};

// Utility functions
export const getIslandTheme = (islandType: string): IslandTheme => {
  return ISLAND_THEMES[islandType] || ISLAND_THEMES.main;
};

export const detectDeviceCapability = (): keyof typeof PERFORMANCE_SETTINGS => {
  if (typeof window === 'undefined') return 'desktop';
  
  // Simple device detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isHighEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency >= 8;
  
  if (isMobile) return 'mobile';
  if (isHighEnd) return 'highEnd'; 
  return 'desktop';
};

export const getOptimalSettings = () => {
  const deviceCapability = detectDeviceCapability();
  return PERFORMANCE_SETTINGS[deviceCapability];
};
