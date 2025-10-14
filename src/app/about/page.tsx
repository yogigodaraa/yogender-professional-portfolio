export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 space-y-16">
      {/* Skills & Certs */}
      <section>
        <h1 className="font-[var(--font-pirata)] text-4xl mb-6 text-passion">
          📜 Wanted Posters
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="border-2 border-black p-6 text-center bg-stone-50">
            Routing — 1,000,000 Berries
          </div>
          <div className="border-2 border-black p-6 text-center bg-stone-50">
            Switching — 1,500,000 Berries
          </div>
          <div className="border-2 border-black p-6 text-center bg-stone-50">
            Cybersecurity — 800,000 Berries
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="font-[var(--font-pirata)] text-3xl mb-6 text-ocean">
          🎓 Academy
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>Murdoch University</strong>, Master of Information Technology
            <ul className="ml-4 mt-2 space-y-1">
              <li>• Major in Cybersecurity and Networking</li> 
              <li>• Research in IoT devices security using Machine Learning</li>
              <li>• GPA 3.33/4</li>
            </ul>
          </li>
          <li>
            <strong>University of Delhi</strong>, BSc Mathematics (Honours)
            <ul className="ml-4 mt-2 space-y-1">
              <li>• Major in Mathematics</li> 
              <li>• Minor in Physics</li>
              <li>• GPA 8.4/10</li>
            </ul>
          </li>
        </ul>
      </section>
      {/* Certifications */}
      <section>
        <h2 className="font-[var(--font-pirata)] text-3xl mb-6 text-ocean">
          🎓 Certifications
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>Blue Team Level 1</strong>,  Security Blue Team Academy
          </li>
          <li>
            <strong>CompTIA Security+ SYO-701</strong>,  CompTIA
          </li>
          <li>
            <strong>Cisco Certified Network Professional-ENCOR (CCNP)</strong>,  Cisco
          </li>
          <li>
            <strong>Cisco Certified Network Professional-ENRSI (CCNP)</strong>,  Cisco
          </li>
          <li>
            <strong>Mental Health in Cyber Security</strong>,  Security Blue Team Academy
          </li>
        </ul>
      </section>

      {/* Awards & Achievements */}
      <section>
        <h2 className="font-[var(--font-pirata)] text-3xl mb-6 text-sun-dark">
          🏆 Battles Won
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>First Place - The Great Forensic Hunt 2025, Curtin University, (Curtin Cyber Security Club)</li>
          <li>First Place - WeMoney Financial Wellness AI Hackathon, WeMoney</li>
          <li>First Place - New Light Hackathon, December 2024, Curtin University (Hosted by ComSSA)</li>
          <li>First Place - Case Night for Future Engineers, May 2025, UWA (Hosted by Venture X Enitiate)</li>
        </ol>
      </section>
    </main>
  );
}
