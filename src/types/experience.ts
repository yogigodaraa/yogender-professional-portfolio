export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  skills?: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'volunteer' | 'contract';
  highlights?: string[];
}

export interface ExperienceCategory {
  category: string;
  items: ExperienceItem[];
}
