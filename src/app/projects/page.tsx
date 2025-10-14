"use client";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Professional <span style={{ color: 'var(--primary)' }}>Projects</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            A showcase of cybersecurity and networking projects demonstrating technical expertise and problem-solving capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
              title: "One Piece Anime Portfolio Website",
              description: "A creative, interactive portfolio website featuring One Piece anime theme with 3D island models, immersive navigation, and pirate-themed design elements.",
              technologies: ["Next.js", "React", "Three.js", "React Three Fiber", "Tailwind CSS", "TypeScript"],
              category: "Web Development"
            },
            {
              title: "Blue Sentinel - Log Analysis Platform",
              description: "Advanced cybersecurity log analysis platform with real-time monitoring, threat detection, and automated incident response capabilities.",
              technologies: ["Python", "Elasticsearch", "Kibana", "Machine Learning", "Django", "PostgreSQL"],
              category: "Cybersecurity"
            },
            {
              title: "Zero Trust Network Implementation",
              description: "Designed and deployed a zero trust architecture for a multi-site enterprise, ensuring granular access controls and continuous authentication.",
              technologies: ["Zero Trust", "Microsegmentation", "IAM", "Continuous Authentication"],
              category: "Network Security"
            },
            {
              title: "Hybrid Cloud Security Automation",
              description: "Automated security policy enforcement and monitoring across AWS and Azure hybrid environments using Infrastructure as Code.",
              technologies: ["AWS", "Azure", "Terraform", "Security Automation"],
              category: "Cloud Architecture"
            },
            {
              title: "Custom SIEM Integration",
              description: "Developed and integrated a custom SIEM solution for real-time log aggregation, threat detection, and compliance reporting.",
              technologies: ["SIEM", "Log Aggregation", "Threat Detection", "Compliance"],
              category: "Security Tools"
            },
            {
              title: "Advanced Phishing Detection Platform",
              description: "Built a machine learning-powered platform to detect and block phishing attempts across email and web traffic.",
              technologies: ["Machine Learning", "Email Security", "Web Filtering", "Threat Intelligence"],
              category: "Cybersecurity"
            },
            {
              title: "SD-WAN Performance Optimization",
              description: "Optimized SD-WAN deployment for high availability and performance, including automated failover and traffic analytics.",
              technologies: ["SD-WAN", "Traffic Analytics", "High Availability", "Automation"],
              category: "Network Management"
            },
            {
              title: "Automated GDPR Compliance Toolkit",
              description: "Created a toolkit for automated GDPR compliance checks, risk assessments, and reporting for cloud-based applications.",
              technologies: ["GDPR", "Risk Assessment", "Automation", "Reporting"],
              category: "Governance"
            }
            ].map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div
              className="p-6 rounded-xl h-full border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
              >
              <div className="flex items-center justify-between mb-4">
                <span
                className="px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)'
                }}
                >
                {project.category}
                </span>
                <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--muted)' }}
                >
                <svg className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                {project.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>
                {project.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>
                Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                  key={techIndex}
                  className="px-2 py-1 text-xs rounded"
                  style={{
                    backgroundColor: 'var(--muted)',
                    color: 'var(--muted-foreground)'
                  }}
                  >
                  {tech}
                  </span>
                ))}
                </div>
              </div>
              </div>
            </div>
            ))}
        </div>

        {/* Call to Action */}
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
      </div>
    </main>
  );
}
