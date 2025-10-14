import Link from "next/link";
// import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span style={{ color: 'var(--foreground)' }}>Network &</span>
                <br />
                <span style={{ color: 'var(--primary)' }}>Cybersecurity Graduate</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Recent Master's graduate in Cybersecurity and Networking with strong technical foundations 
                and hands-on experience through internships, research projects, and hackathon wins. 
                Eager to apply knowledge and contribute fresh ideas in network engineering and cybersecurity roles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    backgroundColor: 'var(--background)'
                  }}
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="aspect-square rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-xl)'
                }}
              >
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div
                      className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      <svg className="w-10 h-10" style={{ color: 'var(--primary-foreground)' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                                        <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                      IT Graduate
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      Ready to apply cybersecurity and networking knowledge in real-world challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Core <span style={{ color: 'var(--primary)' }}>Knowledge Areas</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
              Academic expertise and practical skills developed through studies and projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Design & Implementation",
                description: "Routing protocols (BGP/OSPF), VLANs, VPNs, NAT, DHCP, QoS, and network infrastructure design.",
                icon: "🌐"
              },
              {
                title: "Cybersecurity & Compliance",
                description: "Threat Intelligence, ISO27001, MITRE ATT&CK, Digital Forensics, and security frameworks.",
                icon: "🛡️"
              },
              {
                title: "IoT Security Research",
                description: "Machine Learning for IoT device security, achieving >88% accuracy in threat detection models.",
                icon: "🔬"
              },
              {
                title: "Scripting & Automation",
                description: "Python, Bash scripting, SQL, and automation for security analysis and network management.",
                icon: "⚙️"
              },
              {
                title: "Security Tools & Analysis",
                description: "CrowdStrike Falcon, Elastic Stack, Wireshark, Nessus, SIEM, and log analysis techniques.",
                icon: "�"
              },
              {
                title: "Professional Certifications",
                description: "CCNP (ENCOR & ENARSI), CompTIA Security+, Blue Team Level 1, and continuous learning.",
                icon: "🏆"
              }
            ].map((knowledge, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105 stats-card"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div className="text-3xl mb-4">{knowledge.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  {knowledge.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {knowledge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "4", label: "Hackathon Wins", description: "First place in cybersecurity and tech competitions" },
              { number: "88%", label: "ML Accuracy", description: "IoT security threat detection research" },
              { number: "3.3", label: "GPA", description: "Master's in Cybersecurity & Networking" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl stats-card transition-all duration-300"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {stat.label}
                </div>
                <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Ready to Start My Career Journey?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--muted-foreground)' }}>
            I'm actively seeking graduate programs, internships, and entry-level opportunities in cybersecurity and networking. Let's connect and discuss how I can contribute to your team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
      
      {/* ChatBot Component - Temporarily hidden for security */}
      {/* <ChatBot /> */}
    </div>
  );
}
