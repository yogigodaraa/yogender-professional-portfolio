"use client";

import { skillCategories } from '@/data/skills';
import { SkillLevel } from '@/types/skills';

interface SkillsMatrixProps {
  compact?: boolean;
  showDescriptions?: boolean;
}

const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 'expert':
      return 'from-emerald-500 to-green-600';
    case 'advanced':
      return 'from-blue-500 to-cyan-500';
    case 'intermediate':
      return 'from-amber-500 to-orange-500';
    case 'beginner':
      return 'from-slate-400 to-slate-500';
    default:
      return 'from-slate-500 to-slate-600';
  }
};

const getLevelLabel = (level: SkillLevel): string => {
  switch (level) {
    case 'expert':
      return 'Expert';
    case 'advanced':
      return 'Advanced';
    case 'intermediate':
      return 'Intermediate';
    case 'beginner':
      return 'Beginner';
    default:
      return 'Unknown';
  }
};

const getLevelPercentage = (level: SkillLevel): number => {
  switch (level) {
    case 'expert':
      return 95;
    case 'advanced':
      return 80;
    case 'intermediate':
      return 60;
    case 'beginner':
      return 40;
    default:
      return 0;
  }
};

export default function SkillsMatrix({ compact = false, showDescriptions = true }: SkillsMatrixProps) {
  return (
    <div className="space-y-12">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          {/* Category Header */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                {category.category}
              </h3>
              {showDescriptions && (
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {category.description}
                </p>
              )}
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`grid gap-4 ${compact ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="p-4 rounded-lg border transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Skill Name and Level Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm leading-tight" style={{ color: 'var(--foreground)' }}>
                      {skill.name}
                    </h4>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded-full whitespace-nowrap ml-2 bg-gradient-to-r text-white`}
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--primary), #a855f7)`
                    }}
                  >
                    {getLevelLabel(skill.level)}
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--muted)' }}
                  >
                    <div
                      className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-500`}
                      style={{ width: `${getLevelPercentage(skill.level)}%` }}
                    />
                  </div>

                  {/* Years of Experience */}
                  {skill.yearsOfExperience && (
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''} of experience
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
