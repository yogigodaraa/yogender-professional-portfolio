export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  images: string[];
  videoUrl?: string;
  startDate: string;
  endDate?: string;
  teamSize?: number;
  myRole?: string;
  challenges?: string[];
  achievements?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'blue-sentinel',
    title: 'Blue Sentinel',
    description: 'Advanced cybersecurity monitoring and threat detection system with real-time analysis capabilities.',
    longDescription: 'Blue Sentinel is a comprehensive cybersecurity solution designed for continuous threat monitoring and incident response. Features include advanced threat detection algorithms, real-time monitoring dashboards, automated alert systems, and comprehensive reporting capabilities.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker', 'Elasticsearch', 'Kibana', 'Redis'],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/yogigodaraa/blue-sentinel',
    images: ['/images/projects/blue-sentinel-dashboard.jpg', '/images/projects/blue-sentinel-alerts.jpg'],
    startDate: '2024-08-01',
    endDate: '2024-12-15',
    teamSize: 1,
    myRole: 'Lead Developer & Security Architect',
    challenges: [
      'Implementing real-time threat detection with minimal false positives',
      'Designing scalable architecture for high-volume log processing',
      'Creating intuitive dashboards for complex security data'
    ],
    achievements: [
      'Reduced threat detection time by 75%',
      'Processed over 1M security events per day',
      'Achieved 99.9% system uptime'
    ],
    metrics: [
      { label: 'Threat Detection Speed', value: '< 30 seconds' },
      { label: 'False Positive Rate', value: '< 2%' },
      { label: 'System Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'network-security-framework',
    title: 'Enterprise Network Security Framework',
    description: 'Comprehensive network security framework for enterprise environments with automated threat response.',
    longDescription: 'A robust security framework designed for enterprise networks, featuring automated threat detection, network segmentation policies, and incident response automation. Includes integration with existing security tools and comprehensive audit logging.',
    technologies: ['Python', 'Ansible', 'Nmap', 'Wireshark', 'Splunk', 'pfSense', 'SNMP'],
    category: 'backend',
    status: 'in-progress',
    featured: true,
    images: ['/images/projects/network-framework.jpg'],
    startDate: '2025-01-15',
    teamSize: 2,
    myRole: 'Security Architect & Lead Developer',
    challenges: [
      'Integrating with legacy network infrastructure',
      'Ensuring zero-downtime deployment',
      'Maintaining compliance with security standards'
    ]
  },
  {
    id: 'vulnerability-scanner',
    title: 'Advanced Vulnerability Scanner',
    description: 'Automated vulnerability assessment tool with AI-powered risk prioritization.',
    technologies: ['Python', 'Machine Learning', 'OpenVAS', 'Nessus API', 'FastAPI', 'PostgreSQL'],
    category: 'ai',
    status: 'planned',
    featured: false,
    images: ['/images/projects/vuln-scanner.jpg'],
    startDate: '2025-03-01',
    teamSize: 1,
    myRole: 'AI Security Developer'
  },
  {
    id: 'incident-response-platform',
    title: 'Incident Response Automation Platform',
    description: 'Automated incident response platform with playbook execution and threat intelligence integration.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'Kubernetes', 'MISP', 'SOAR'],
    category: 'fullstack',
    status: 'planned',
    featured: true,
    images: ['/images/projects/incident-response.jpg'],
    startDate: '2025-05-01',
    teamSize: 3,
    myRole: 'Platform Architect'
  },
  {
    id: 'secure-communication-app',
    title: 'Secure Communication Application',
    description: 'End-to-end encrypted communication platform for secure organizational messaging.',
    technologies: ['React Native', 'Node.js', 'WebRTC', 'Signal Protocol', 'PostgreSQL', 'Redis'],
    category: 'mobile',
    status: 'planned',
    featured: false,
    images: ['/images/projects/secure-comm.jpg'],
    startDate: '2025-07-01',
    teamSize: 1,
    myRole: 'Full Stack Developer'
  }
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};