export default function ExperiencePage() {
  const roles = [
    {
      title: "Web Technology Manager (Volunteer), Western Suburbs Cricket Club, Perth, Australia",
      detail: `•	Administering and updating the club website with news, events, and announcements.
•	Managing user access, registrations, and member information.
•	Supporting event organisation by ensuring schedules, results, and details are published online.
•	Providing technical support for the committee and members when needed.
•	Helping strengthen community engagement through effective digital communication.
`,
    },
    {
      title: "Cybersecurity Intern (Trojan Hunt India LLP) ",
      detail: `•Gained foundational exposure to ISO 27001–aligned security practices, including how
organisations structure policies, conduct gap assessments, and align with compliance standards.
Built practical familiarity with threat detection and log analysis using CrowdStrike Falcon and
Elastic Stack.
Maintained clear and organised technical records while building strong communication skills in
team settings.`,
    },
    {
      title: "Network Engineer (Brocent ASIA)",
      detail: `Contributed to an access point replacement project, assisting with deployment schedules, site
coordination, and documentation.
Supported the rollout of new access points, helping deliver reliable connectivity and improved
performance with minimal disruption.
Assisted in coordinating a four-person team by tracking tasks, progress, and documentation
during migration.
Led a short-term project to migrate and configure Juniper Mist access points across data centres and client sites, replacing legacy Cisco Meraki hardware.`,
    },
     {
      title: "Python Tutor & Robotics Mentor (Private)",
      detail: `Mentored a RoboCup Junior competitor on Python programming and algorithm design for the
Mighty Maisy Maze competition.
Taught maze‑solving strategies, sensor‑based navigation and real‑time obstacle avoidance
using EV3/Spike Prime platforms.`,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold mb-6">🗺️ Voyages (Experience)</h1>
      <div className="space-y-4">
        {roles.map((r) => (
          <div key={r.title} className="rounded-xl border border-black/10 bg-white p-5">
            <h2 className="font-semibold">{r.title}</h2>
            <p className="text-stone-600">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
