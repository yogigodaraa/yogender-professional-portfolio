"use client";

import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

export default function ProjectsPage() {
  const projects = [
    {
      title: "One Piece Anime Portfolio Website",
      description: "A creative, interactive portfolio website featuring One Piece anime theme with 3D island models, immersive navigation, and pirate-themed design elements. Built with cutting-edge web technologies to create an immersive user experience.",
      technologies: ["Next.js", "React", "Three.js", "React Three Fiber", "Tailwind CSS", "TypeScript"],
      category: "Web Development",
      githubUrl: "https://github.com/yogigodaraa/one-piece-portfolio",
      image: "/images/projects/one-piece-portfolio.jpg"
    },
    {
      title: "Blue Sentinel - Log Analysis Platform",
      description: "Advanced cybersecurity log analysis platform with real-time monitoring, threat detection, and automated incident response capabilities. Features machine learning-based anomaly detection and comprehensive security event correlation.",
      technologies: ["Python", "Elasticsearch", "Kibana", "Machine Learning", "Django", "PostgreSQL"],
      category: "Cybersecurity",
      githubUrl: "https://github.com/yogigodaraa/blue-sentinel",
      image: "/images/projects/blue-sentinel.jpg"
    },
    {
      title: "Professional Portfolio Website",
      description: "A modern, professional portfolio website showcasing cybersecurity expertise. Features OKLCH color system, AI-powered chatbot, responsive design, and professional theme transformation with seamless dark/light mode switching.",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Google Gemini AI", "OKLCH Colors"],
      category: "Web Development",
      githubUrl: "https://github.com/yogigodaraa/yogender-professional-portfolio",
      image: "/images/projects/professional-portfolio.jpg"
    },
    {
      title: "Enterprise Network Infrastructure - EVE-NG",
      description: "Comprehensive enterprise-level network design and implementation using EVE-NG virtualization platform. Features advanced routing protocols, network security, and scalable architecture for large organizations with high availability requirements.",
      technologies: ["BGP", "OSPF", "NAT", "DHCP", "VLAN", "VPN", "EVE-NG", "Cisco IOS", "Network Security"],
      category: "Networking",
      githubUrl: "https://github.com/yogigodaraa/enterprise-network-eveng",
      image: "/images/projects/network-infrastructure.jpg"
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Professional <span style={{ color: 'var(--primary)' }}>Projects</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              A showcase of cybersecurity and networking projects demonstrating technical expertise and problem-solving capabilities.
            </p>
          </div>
        </FadeIn>

        {/* Projects - Alternating Layout */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <SlideIn 
              key={index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div
                  className="relative h-80 rounded-2xl overflow-hidden border group"
                  style={{
                    borderColor: 'var(--border)',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                >
                  <div 
                    className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: 'var(--muted)',
                      backgroundImage: `linear-gradient(45deg, var(--primary) 0%, var(--muted) 100%)`
                    }}
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg 
                        className="w-24 h-24 opacity-30" 
                        style={{ color: 'var(--foreground)' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm"
                      style={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--muted-foreground)' }}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-sm rounded-lg border"
                        style={{
                          backgroundColor: 'var(--card)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            </SlideIn>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-20">
            <div
              className="max-w-2xl mx-auto p-8 rounded-2xl"
              style={{
                backgroundColor: 'var(--muted)',
                border: '1px solid var(--border)'
              }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Interested in Collaboration?
              </h2>
              <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
                I'm always open to discussing new projects and opportunities in cybersecurity and networking.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
