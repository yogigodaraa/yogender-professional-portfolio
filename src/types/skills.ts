export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
  yearsOfExperience?: number;
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: Skill[];
  color?: string;
}

export interface Tool {
  name: string;
  category: string;
  proficiency: SkillLevel;
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon?: string;
}
