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
    id: 'onepiece-portfolio',
    title: 'One Piece Themed Portfolio',
    description: 'A modern, responsive portfolio website with One Piece anime theme, featuring 3D island models, contact forms, and email management system.',
    longDescription: 'Built with Next.js 15, TypeScript, and Tailwind CSS. Features include 3D Three.js island model, professional contact form with Formspree integration, email reply management system, responsive design, and comprehensive SEO optimization.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'React Three Fiber', 'Formspree', 'Vercel'],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/yogigodaraa/onepieceportfolio',
    liveUrl: 'https://your-portfolio-url.vercel.app',
    images: ['/images/projects/portfolio-home.jpg', '/images/projects/portfolio-contact.jpg'],
    startDate: '2025-10-01',
    endDate: '2025-10-14',
    teamSize: 1,
    myRole: 'Full Stack Developer & Designer',
    challenges: [
      'Implementing complex 3D island model with React Three Fiber',
      'Creating reliable email delivery system with multiple fallbacks',
      'Ensuring mobile responsiveness with complex animations'
    ],
    achievements: [
      'Successfully integrated 3D graphics with optimal performance',
      'Built comprehensive email management system',
      'Achieved 95+ Lighthouse performance score'
    ],
    metrics: [
      { label: 'Performance Score', value: '95+' },
      { label: 'Mobile Responsive', value: '100%' },
      { label: 'Email Delivery', value: '99%' }
    ]
  },
  // Add your other projects here...
  {
    id: 'project-template',
    title: 'Your Next Project',
    description: 'Add your projects here with detailed information, technologies used, and achievements.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'web',
    status: 'planned',
    featured: false,
    images: ['/images/projects/placeholder.jpg'],
    startDate: '2025-11-01',
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