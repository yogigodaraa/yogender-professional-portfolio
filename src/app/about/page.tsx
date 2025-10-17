"use client";

import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

export default function AboutPage() {
  const sections = [
    {
      title: "Professional Summary",
      content: [
        "Cybersecurity and Networking professional with a Master's degree in Information Technology from Murdoch University, specializing in threat detection, network security, and IoT device protection using machine learning. Proven track record of winning multiple hackathons and cybersecurity competitions, demonstrating exceptional problem-solving abilities and technical expertise.",
        "With hands-on experience in enterprise network infrastructure, security operations, and vulnerability assessment, I combine deep technical knowledge with practical implementation skills. My expertise spans across network protocol analysis, security architecture design, threat hunting, and incident response automation. I hold industry-recognized certifications including Blue Team Level 1, CompTIA Security+, and dual CCNP certifications (ENCOR & ENRSI).",
        "Passionate about securing digital infrastructure and staying ahead of emerging threats, I actively contribute to the cybersecurity community through research, mentorship, and hands-on projects. Whether it's designing secure network architectures, hunting threats, or building automation tools, I thrive on solving complex security challenges that make systems more resilient and organizations safer."
      ],
      category: "About Me"
    },
    {
      title: "Core Competencies",
      skills: [
        {
          title: "Cybersecurity",
          items: ["Threat Detection & Hunting", "Vulnerability Assessment", "Incident Response", "Security Operations (SOC)", "SIEM & Log Analysis", "Blue Team Operations"]
        },
        {
          title: "Network Engineering",
          items: ["Enterprise Network Design", "Routing Protocols (BGP, OSPF)", "Network Security Architecture", "Cisco Technologies (CCNP)", "VPN & Remote Access", "Network Monitoring"]
        },
        {
          title: "Technical Skills",
          items: ["Python & Automation", "Machine Learning for Security", "Penetration Testing", "Cloud Security (Azure)", "Linux System Administration", "Docker & Kubernetes"]
        },
        {
          title: "Tools & Platforms",
          items: ["CrowdStrike Falcon", "Elastic Stack", "Wireshark", "Nmap", "Splunk", "EVE-NG", "Git", "Cisco IOS/NX-OS"]
        }
      ],
      category: "Skills"
    },
    {
      title: "Academic Excellence",
      education: [
        {
          degree: "Master of Information Technology",
          institution: "Murdoch University, Perth, Australia",
          period: "2023 - 2025",
          gpa: "3.33/4.0",
          specializations: "Cybersecurity, Network Engineering, IoT Security Research using Machine Learning",
          honors: "Global Excellence Scholarship, International Postgraduate Student Scholarship"
        },
        {
          degree: "BSc Mathematics (Honours)",
          institution: "University of Delhi, India",
          period: "2018 - 2022",
          gpa: "8.4/10",
          specializations: "Advanced Mathematics, Cryptography, Algorithm Design • Minor: Physics, Computational Methods",
          honors: "Academic Excellence Award"
        }
      ],
      category: "Education"
    },
    {
      title: "Professional Certifications",
      certifications: [
        { name: "Blue Team Level 1", issuer: "Security Blue Team Academy", desc: "SOC operations & threat hunting" },
        { name: "CompTIA Security+ SYO-701", issuer: "CompTIA", desc: "Core security principles" },
        { name: "CCNP ENCOR", issuer: "Cisco", desc: "Enterprise network core technologies" },
        { name: "CCNP ENRSI", issuer: "Cisco", desc: "Secure network solutions" },
        { name: "Mental Health in Cybersecurity", issuer: "Security Blue Team Academy", desc: "Wellness in security roles" }
      ],
      category: "Certifications"
    },
    {
      title: "Competition Victories & Honors",
      awards: [
        { title: "The Great Forensic Hunt 2025", org: "Curtin Cyber Security Club", desc: "1st Place - Digital forensics competition" },
        { title: "WeMoney Financial Wellness AI Hackathon", org: "WeMoney", desc: "1st Place - AI solution for fraud detection" },
        { title: "New Light Hackathon", org: "ComSSA, Curtin University", desc: "1st Place - 48-hour cybersecurity hackathon" },
        { title: "Case Night for Future Engineers", org: "Venture X Enitiate, UWA", desc: "1st Place - Engineering security challenge" },
        { title: "Global Excellence Scholarship", org: "Murdoch University", desc: "Academic achievement in cybersecurity research" },
        { title: "International Postgraduate Scholarship", org: "Murdoch University", desc: "Research capabilities recognition" },
        { title: "Academic Excellence Award", org: "University of Delhi", desc: "Mathematics and analytical sciences" }
      ],
      category: "Achievements"
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              About <span style={{ color: 'var(--primary)' }}>Me</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Cybersecurity and Networking professional with a passion for securing digital infrastructure and staying ahead of emerging threats.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <SlideIn key={index} direction="up" delay={index * 0.1}>
              <div
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
                    {section.title}
                  </h2>
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    {section.category}
                  </span>
                </div>

                {/* Professional Summary Content */}
                {section.content && (
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Core Competencies Content */}
                {section.skills && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.skills.map((skillGroup, sIndex) => (
                      <div key={sIndex} className="space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: 'var(--primary)' }}>
                          {skillGroup.title}
                        </h3>
                        <ul className="space-y-2">
                          {skillGroup.items.map((item, iIndex) => (
                            <li key={iIndex} className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                              <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Content */}
                {section.education && (
                  <div className="space-y-8">
                    {section.education.map((edu, eIndex) => (
                      <div key={eIndex}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--primary)' }}>
                              {edu.degree}
                            </h3>
                            <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                              {edu.institution}
                            </p>
                            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                              {edu.period}
                            </p>
                          </div>
                          <div 
                            className="px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap"
                            style={{
                              backgroundColor: 'var(--primary)',
                              color: 'var(--primary-foreground)'
                            }}
                          >
                            GPA: {edu.gpa}
                          </div>
                        </div>
                        <div className="pl-4 border-l-2" style={{ borderColor: 'var(--border)' }}>
                          <p className="text-sm mb-2" style={{ color: 'var(--muted-foreground)' }}>
                            <strong style={{ color: 'var(--foreground)' }}>Specializations:</strong> {edu.specializations}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                            <strong style={{ color: 'var(--foreground)' }}>Honors:</strong> {edu.honors}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Certifications Content */}
                {section.certifications && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.certifications.map((cert, cIndex) => (
                      <div
                        key={cIndex}
                        className="p-4 rounded-lg border-l-2 transition-all duration-300 hover:pl-5"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderLeftColor: 'var(--primary)'
                        }}
                      >
                        <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--foreground)' }}>
                          {cert.name}
                        </h3>
                        <p className="text-xs font-medium mb-1" style={{ color: 'var(--primary)' }}>
                          {cert.issuer}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          {cert.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Awards Content */}
                {section.awards && (
                  <div className="space-y-4">
                    {section.awards.map((award, aIndex) => (
                      <div
                        key={aIndex}
                        className="p-4 border-l-2 transition-all duration-300 hover:pl-5"
                        style={{ borderLeftColor: aIndex < 4 ? 'var(--primary)' : 'var(--muted-foreground)' }}
                      >
                        <h3 className="font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                          {award.title}
                        </h3>
                        <p className="text-sm font-medium mb-1" style={{ color: 'var(--primary)' }}>
                          {award.org}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                          {award.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </main>
  );
}

