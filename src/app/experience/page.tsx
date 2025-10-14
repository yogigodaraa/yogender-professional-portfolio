export default function ExperiencePage() {
  const experiences = [
    {
      title: "Web Technology Manager (Volunteer)",
      company: "Western Suburbs Cricket Club",
      location: "Perth, Australia", 
      period: "2023 - Present",
      responsibilities: [
        "Administering and updating the club website with news, events, and announcements",
        "Managing user access, registrations, and member information",
        "Supporting event organisation by ensuring schedules, results, and details are published online",
        "Providing technical support for the committee and members when needed",
        "Helping strengthen community engagement through effective digital communication"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "Trojan Hunt India LLP",
      location: "Remote",
      period: "2024",
      responsibilities: [
        "Gained foundational exposure to ISO 27001–aligned security practices, including how organisations structure policies, conduct gap assessments, and align with compliance standards",
        "Built practical familiarity with threat detection and log analysis using CrowdStrike Falcon and Elastic Stack",
        "Maintained clear and organised technical records while building strong communication skills in team settings"
      ]
    },
    {
      title: "Network Engineer",
      company: "Brocent ASIA",
      location: "Singapore",
      period: "2023",
      responsibilities: [
        "Contributed to an access point replacement project, assisting with deployment schedules, site coordination, and documentation",
        "Supported the rollout of new access points, helping deliver reliable connectivity and improved performance with minimal disruption",
        "Assisted in coordinating a four-person team by tracking tasks, progress, and documentation during migration",
        "Led a short-term project to migrate and configure Juniper Mist access points across data centres and client sites, replacing legacy Cisco Meraki hardware"
      ]
    },
    {
      title: "Python Tutor & Robotics Mentor",
      company: "Private Tutoring",
      location: "Perth, Australia",
      period: "2023 - 2024",
      responsibilities: [
        "Mentored a RoboCup Junior competitor on Python programming and algorithm design for the Mighty Maisy Maze competition",
        "Taught maze‑solving strategies, sensor‑based navigation and real‑time obstacle avoidance using EV3/Spike Prime platforms"
      ]
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Professional <span style={{ color: 'var(--primary)' }}>Experience</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            My journey in cybersecurity, networking, and technology leadership
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                    {experience.title}
                  </h2>
                  <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    {experience.company}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    {experience.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'var(--muted)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {experience.period}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)' }}>
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start text-sm leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: 'var(--primary)' }}
                      ></span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
