"use client";

import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Professional <span style={{ color: 'var(--primary)' }}>Experience</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              My journey in cybersecurity, networking, and technology leadership
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <SlideIn 
              key={index} 
              direction="left"
              delay={index * 0.1}
              duration={0.6}
            >
              <div
                className="p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
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
            </SlideIn>
          ))}
        </div>
      </div>
    </main>
  );
}
