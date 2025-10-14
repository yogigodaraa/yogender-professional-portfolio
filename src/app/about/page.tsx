export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
          <span style={{ color: 'var(--primary)' }}>Yogender Godara</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Cybersecurity & Network Graduate
          </p>
        </div>
        {/* Bio Section */}
        <section className="mb-20">
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Professional Background
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              <p>
                Someone who loves taking things apart, fixing them, and making them better. Networks and cybersecurity are where I get to do that every day,
                 whether it’s replacing hardware, tracking down a tricky issue, or learning something new just to see how it works.
                  I like solving real problems, working with good people, and staying curious about how tech connects everything.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>
            Education
          </h2>
          <div className="space-y-6">
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                Master of Information Technology
              </h3>
              <p className="font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                Murdoch University
              </p>
              <ul className="text-sm space-y-1" style={{ color: 'var(--muted-foreground)' }}>
                <li>• Major in Cybersecurity and Networking</li>
                <li>• Research in IoT devices security using Machine Learning</li>
                <li>• GPA 3.33/4</li>
              </ul>
            </div>
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                BSc Mathematics (Honours)
              </h3>
              <p className="font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                University of Delhi
              </p>
              <ul className="text-sm space-y-1" style={{ color: 'var(--muted-foreground)' }}>
                <li>• Major in Mathematics</li>
                <li>• Minor in Physics</li>
                <li>• GPA 8.4/10</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Blue Team Level 1 - Security Blue Team Academy",
              "CompTIA Security+ SYO-701 - CompTIA",
              "Cisco Certified Network Professional-ENCOR (CCNP) - Cisco",
              "Cisco Certified Network Professional-ENRSI (CCNP) - Cisco",
              "Mental Health in Cyber Security - Security Blue Team Academy"
            ].map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border-l-4"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderLeftColor: 'var(--primary)'
                }}
              >
                <span className="font-medium text-sm" style={{ color: 'var(--foreground)' }}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>
            Awards & Achievements
          </h2>
          <div className="space-y-4">
            {[
              "First Place - The Great Forensic Hunt 2025, Curtin University (Curtin Cyber Security Club)",
              "First Place - WeMoney Financial Wellness AI Hackathon, WeMoney",
              "First Place - New Light Hackathon, December 2024, Curtin University (Hosted by ComSSA)",
              "First Place - Case Night for Future Engineers, May 2025, UWA (Hosted by Venture X Enitiate)"
            ].map((award, index) => (
              <div
                key={index}
                className="flex items-start p-4 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)'
                }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  {index + 1}
                </span>
                <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {award}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
