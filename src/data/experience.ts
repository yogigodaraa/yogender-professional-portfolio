import { ExperienceItem } from '@/types/experience';

export const experiences: ExperienceItem[] = [
  {
    id: 'kpmg-robogals-mentee',
    title: 'Cybersecurity Mentee',
    company: 'KPMG Australia x Robogals Perth',
    location: 'Perth, Australia',
    period: '2025',
    startDate: '2025-09-01',
    endDate: '2025-10-30',
    type: 'volunteer',
    responsibilities: [
      'Participated in a 6-week mentoring program focused on cybersecurity career development',
      'Engaged in one-on-one mentoring sessions with Anoo Dowlutrao, discussing career paths and industry insights',
      'Explored various aspects of cybersecurity roles, daily work life, and professional growth opportunities',
      'Gained practical insights into bridging the gap between university education and industry requirements'
    ],
    skills: ['Cybersecurity', 'Professional Development', 'Career Planning', 'Industry Knowledge'],
    highlights: [
      'Completed 6-week structured mentoring program',
      'Developed clear long-term career goals in cybersecurity',
      'Gained insights into tech industry teamwork and problem-solving'
    ]
  },
  {
    id: 'web-tech-manager',
    title: 'Web Technology Manager',
    company: 'Western Suburbs Cricket Club',
    location: 'Perth, Australia',
    period: '2023 - Present',
    startDate: '2023-01-01',
    type: 'volunteer',
    responsibilities: [
      'Administering and updating the club website with news, events, and announcements',
      'Managing user access, registrations, and member information',
      'Supporting event organisation by ensuring schedules, results, and details are published online',
      'Providing technical support for the committee and members when needed',
      'Helping strengthen community engagement through effective digital communication'
    ],
    skills: ['Web Management', 'WordPress', 'User Support', 'Community Engagement', 'Content Management'],
    highlights: [
      'Maintained 99%+ website uptime',
      'Managed 1000+ registered members',
      'Improved member engagement through digital channels'
    ]
  },
  {
    id: 'cybersecurity-intern',
    title: 'Cybersecurity Intern',
    company: 'Trojan Hunt India LLP',
    location: 'Remote',
    period: '2024',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    type: 'internship',
    responsibilities: [
      'Gained foundational exposure to ISO 27001–aligned security practices, including how organisations structure policies, conduct gap assessments, and align with compliance standards',
      'Built practical familiarity with threat detection and log analysis using CrowdStrike Falcon and Elastic Stack',
      'Maintained clear and organised technical records while building strong communication skills in team settings'
    ],
    skills: ['ISO 27001', 'CrowdStrike Falcon', 'Elastic Stack', 'Threat Detection', 'Log Analysis', 'Compliance'],
    highlights: [
      'Completed ISO 27001 compliance audit documentation',
      'Analyzed 1M+ security events',
      'Contributed to security incident response procedures'
    ]
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    company: 'Brocent ASIA',
    location: 'Singapore',
    period: '2023',
    startDate: '2023-06-01',
    endDate: '2023-12-31',
    type: 'full-time',
    responsibilities: [
      'Contributed to an access point replacement project, assisting with deployment schedules, site coordination, and documentation',
      'Supported the rollout of new access points, helping deliver reliable connectivity and improved performance with minimal disruption',
      'Assisted in coordinating a four-person team by tracking tasks, progress, and documentation during migration',
      'Led a short-term project to migrate and configure Juniper Mist access points across data centres and client sites, replacing legacy Cisco Meraki hardware'
    ],
    skills: ['Juniper Mist', 'Cisco Meraki', 'Network Deployment', 'Access Points', 'Project Coordination', 'Site Surveys'],
    highlights: [
      'Successfully migrated 50+ access points with zero downtime',
      'Improved network coverage by 35%',
      'Led 4-person team coordination',
      'Completed project 2 weeks ahead of schedule'
    ]
  },
  {
    id: 'python-tutor',
    title: 'Python Tutor & Robotics Mentor',
    company: 'Private Tutoring',
    location: 'Perth, Australia',
    period: '2023 - 2024',
    startDate: '2023-03-01',
    endDate: '2024-12-31',
    type: 'part-time',
    responsibilities: [
      'Mentored a RoboCup Junior competitor on Python programming and algorithm design for the Mighty Maisy Maze competition',
      'Taught maze‑solving strategies, sensor‑based navigation and real‑time obstacle avoidance using EV3/Spike Prime platforms'
    ],
    skills: ['Python', 'Robotics', 'EV3/Spike Prime', 'Maze Solving', 'Algorithm Design', 'Mentoring'],
    highlights: [
      'Student qualified for RoboCup Junior National Finals',
      'Developed custom Python maze-solving algorithms',
      'Improved code efficiency by 40%'
    ]
  }
];

// Helper functions
export const getExperienceById = (id: string): ExperienceItem | undefined => {
  return experiences.find(exp => exp.id === id);
};

export const getExperienceByType = (type: ExperienceItem['type']): ExperienceItem[] => {
  return experiences.filter(exp => exp.type === type);
};

export const getAllExperienceSkills = (): string[] => {
  const allSkills = experiences.flatMap(exp => exp.skills || []);
  return [...new Set(allSkills)];
};

export const getExperienceWithHighlights = (): ExperienceItem[] => {
  return experiences.filter(exp => exp.highlights && exp.highlights.length > 0);
};
