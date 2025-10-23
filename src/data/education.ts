export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  specializations?: string[];
  honors?: string[];
  coursework?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: 'master-mit',
    degree: 'Master of Information Technology',
    institution: 'Murdoch University',
    location: 'Perth, Australia',
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    gpa: '3.33/4.0',
    specializations: [
      'Cybersecurity',
      'Network Engineering',
      'IoT Security Research using Machine Learning'
    ],
    honors: [
      'Global Excellence Scholarship',
      'International Postgraduate Student Scholarship'
    ],
    coursework: [
      'Network Security',
      'Threat Detection & Analysis',
      'Enterprise Network Design',
      'Machine Learning for Security',
      'Digital Forensics',
      'Cloud Security',
      'Incident Response Automation'
    ]
  },
  {
    id: 'bsc-mathematics',
    degree: 'BSc Mathematics (Honours)',
    institution: 'University of Delhi',
    location: 'New Delhi, India',
    startDate: '2018-06-01',
    endDate: '2022-05-31',
    gpa: '8.4/10',
    specializations: [
      'Advanced Mathematics',
      'Cryptography',
      'Algorithm Design',
      'Physics (Minor)',
      'Computational Methods'
    ],
    honors: [
      'Academic Excellence Award'
    ],
    coursework: [
      'Linear Algebra & Matrices',
      'Real Analysis',
      'Abstract Algebra',
      'Discrete Mathematics',
      'Cryptography Fundamentals',
      'Computational Physics',
      'Numerical Methods'
    ]
  }
];

// Helper functions
export const getEducationById = (id: string): EducationItem | undefined => {
  return educationData.find(edu => edu.id === id);
};

export const getAllEducation = (): EducationItem[] => {
  return educationData;
};

export const getEducationByInstitution = (institution: string): EducationItem | undefined => {
  return educationData.find(edu => edu.institution.includes(institution));
};

export const getAllSpecializations = (): string[] => {
  const allSpecs = educationData.flatMap(edu => edu.specializations || []);
  return [...new Set(allSpecs)];
};

export const getAllCoursework = (): string[] => {
  const allCourses = educationData.flatMap(edu => edu.coursework || []);
  return [...new Set(allCourses)];
};
