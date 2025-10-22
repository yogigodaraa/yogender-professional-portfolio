import { SkillCategory, Tool, Certification } from '@/types/skills';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cybersecurity',
    description: 'Threat detection, incident response, and security operations',
    icon: '🛡️',
    color: 'from-red-500 to-orange-500',
    skills: [
      { name: 'Threat Detection & Hunting', level: 'expert', yearsOfExperience: 2 },
      { name: 'SIEM & Log Analysis', level: 'expert', yearsOfExperience: 2 },
      { name: 'Incident Response', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Vulnerability Assessment', level: 'advanced', yearsOfExperience: 2 },
      { name: 'Security Operations (SOC)', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Blue Team Operations', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Penetration Testing', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Threat Intelligence', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Digital Forensics', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'ISO 27001 & Compliance', level: 'intermediate', yearsOfExperience: 1 }
    ]
  },
  {
    category: 'Network Engineering',
    description: 'Network design, protocols, and infrastructure management',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Enterprise Network Design', level: 'advanced', yearsOfExperience: 2 },
      { name: 'Routing Protocols (BGP, OSPF)', level: 'expert', yearsOfExperience: 2.5 },
      { name: 'Network Security Architecture', level: 'advanced', yearsOfExperience: 2 },
      { name: 'Cisco Technologies (CCNP)', level: 'expert', yearsOfExperience: 2.5 },
      { name: 'VPN & Remote Access', level: 'advanced', yearsOfExperience: 2 },
      { name: 'Network Monitoring & Analytics', level: 'advanced', yearsOfExperience: 2 },
      { name: 'VLAN & Network Segmentation', level: 'expert', yearsOfExperience: 2 },
      { name: 'QoS & Traffic Management', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Firewall Configuration', level: 'advanced', yearsOfExperience: 2 },
      { name: 'NAT & DHCP', level: 'expert', yearsOfExperience: 2 }
    ]
  },
  {
    category: 'Programming & Scripting',
    description: 'Automation, development, and systems programming',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', level: 'expert', yearsOfExperience: 3 },
      { name: 'Bash/Shell Scripting', level: 'advanced', yearsOfExperience: 2.5 },
      { name: 'SQL', level: 'advanced', yearsOfExperience: 2 },
      { name: 'TypeScript/JavaScript', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Security Automation', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'System Administration', level: 'advanced', yearsOfExperience: 2 },
      { name: 'Ansible Automation', level: 'advanced', yearsOfExperience: 1 },
      { name: 'REST API Development', level: 'intermediate', yearsOfExperience: 1.5 },
      { name: 'Django/FastAPI', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Git & Version Control', level: 'advanced', yearsOfExperience: 2.5 }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    description: 'Cloud security, containerization, and infrastructure as code',
    icon: '☁️',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Docker & Containerization', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Kubernetes Orchestration', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Azure Cloud Services', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Cloud Security', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Infrastructure as Code', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Linux System Administration', level: 'expert', yearsOfExperience: 3 }
    ]
  },
  {
    category: 'AI & Machine Learning',
    description: 'ML models, data analysis, and intelligent systems',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Machine Learning for Security', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'IoT Security Research', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Anomaly Detection', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Data Analysis & Visualization', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'TensorFlow/PyTorch', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Threat Detection Models', level: 'advanced', yearsOfExperience: 1.5 }
    ]
  },
  {
    category: 'Web Development',
    description: 'Full-stack web development and modern frameworks',
    icon: '🌐',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Next.js & React', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'Tailwind CSS', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'React Three Fiber', level: 'intermediate', yearsOfExperience: 1 },
      { name: 'Full Stack Development', level: 'advanced', yearsOfExperience: 1.5 },
      { name: 'UI/UX Design Principles', level: 'intermediate', yearsOfExperience: 1.5 },
      { name: 'Responsive Design', level: 'advanced', yearsOfExperience: 1.5 }
    ]
  }
];

export const tools: Tool[] = [
  // Security & Monitoring
  { name: 'CrowdStrike Falcon', category: 'Endpoint Protection', proficiency: 'expert', icon: '🔒' },
  { name: 'Elasticsearch & Kibana', category: 'SIEM & Analytics', proficiency: 'expert', icon: '📊' },
  { name: 'Splunk', category: 'SIEM & Analytics', proficiency: 'advanced', icon: '📊' },
  { name: 'Wireshark', category: 'Network Analysis', proficiency: 'expert', icon: '🔍' },
  { name: 'Nmap', category: 'Network Scanning', proficiency: 'advanced', icon: '🎯' },
  { name: 'Nessus', category: 'Vulnerability Scanning', proficiency: 'advanced', icon: '🛡️' },
  { name: 'Metasploit', category: 'Penetration Testing', proficiency: 'intermediate', icon: '⚔️' },
  { name: 'Burp Suite', category: 'Web Security Testing', proficiency: 'intermediate', icon: '🔐' },
  
  // Network Tools
  { name: 'Cisco IOS/NX-OS', category: 'Network Devices', proficiency: 'expert', icon: '🌐' },
  { name: 'EVE-NG', category: 'Network Emulation', proficiency: 'expert', icon: '🖥️' },
  { name: 'Cisco Packet Tracer', category: 'Network Simulation', proficiency: 'advanced', icon: '📡' },
  { name: 'pfSense', category: 'Firewall & VPN', proficiency: 'advanced', icon: '🔥' },
  { name: 'GNS3', category: 'Network Emulation', proficiency: 'intermediate', icon: '🖥️' },
  { name: 'SNMP', category: 'Network Monitoring', proficiency: 'advanced', icon: '📊' },
  
  // Development Tools
  { name: 'Git & GitHub', category: 'Version Control', proficiency: 'advanced', icon: '📚' },
  { name: 'Docker', category: 'Containerization', proficiency: 'advanced', icon: '📦' },
  { name: 'Kubernetes', category: 'Orchestration', proficiency: 'intermediate', icon: '⚡' },
  { name: 'VS Code', category: 'Code Editor', proficiency: 'expert', icon: '💻' },
  { name: 'PostgreSQL', category: 'Database', proficiency: 'advanced', icon: '🗄️' },
  { name: 'MongoDB', category: 'Database', proficiency: 'intermediate', icon: '🗄️' },
  { name: 'Redis', category: 'Caching', proficiency: 'intermediate', icon: '⚡' },
  { name: 'Postman', category: 'API Testing', proficiency: 'advanced', icon: '🧪' },
  
  // Cloud & Infrastructure
  { name: 'Azure', category: 'Cloud Platform', proficiency: 'intermediate', icon: '☁️' },
  { name: 'Terraform', category: 'Infrastructure as Code', proficiency: 'intermediate', icon: '🏗️' },
  { name: 'Ansible', category: 'Automation', proficiency: 'advanced', icon: '🤖' },
  
  // Analysis & Research
  { name: 'MITRE ATT&CK', category: 'Threat Framework', proficiency: 'expert', icon: '🎯' },
  { name: 'Jupyter Notebook', category: 'Data Analysis', proficiency: 'advanced', icon: '📓' },
  { name: 'Pandas/NumPy', category: 'Data Processing', proficiency: 'advanced', icon: '📊' }
];

export const certifications: Certification[] = [
  {
    name: 'Blue Team Level 1 (BTL1)',
    issuer: 'Security Blue Team Academy',
    date: '2024',
    icon: '🔵'
  },
  {
    name: 'CompTIA Security+ (SYO-701)',
    issuer: 'CompTIA',
    date: '2024',
    icon: '🏆'
  },
  {
    name: 'CCNP ENCOR (300-401)',
    issuer: 'Cisco',
    date: '2024',
    icon: '🌐'
  },
  {
    name: 'CCNP ENARSI (300-410)',
    issuer: 'Cisco',
    date: '2024',
    icon: '🌐'
  },
  {
    name: 'Mental Health in Cybersecurity',
    issuer: 'Security Blue Team Academy',
    date: '2024',
    icon: '🧠'
  }
];

// Helper functions
export const getSkillsByLevel = (level: string) => {
  return skillCategories.flatMap(cat => 
    cat.skills.filter(skill => skill.level === level)
  );
};

export const getSkillsByCategory = (category: string) => {
  return skillCategories.find(cat => cat.category === category)?.skills || [];
};

export const getExpertSkills = () => {
  return skillCategories.flatMap(cat =>
    cat.skills.filter(skill => skill.level === 'expert')
  );
};

export const getToolsByCategory = (category: string) => {
  return tools.filter(tool => tool.category === category);
};

export const getUniqueCertifications = () => {
  return certifications;
};
