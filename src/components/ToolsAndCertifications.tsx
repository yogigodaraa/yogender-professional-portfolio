"use client";

import { tools, certifications, getToolsByCategory } from '@/data/skills';

interface ToolsAndCertificationsProps {
  showCertifications?: boolean;
  showTools?: boolean;
}

export default function ToolsAndCertifications({ 
  showCertifications = true, 
  showTools = true 
}: ToolsAndCertificationsProps) {
  // Get unique tool categories
  const toolCategories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="space-y-12">
      {/* Tools Section */}
      {showTools && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              Tools & <span style={{ color: 'var(--primary)' }}>Platforms</span>
            </h2>
            <p style={{ color: 'var(--muted-foreground)' }}>
              Technologies and tools I work with daily
            </p>
          </div>

          <div className="space-y-6">
            {toolCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getToolsByCategory(category).map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="p-4 rounded-lg border flex items-start gap-3 transition-all duration-300 hover:scale-105 group"
                      style={{
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>
                          {tool.name}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                            {tool.category}
                          </span>
                          <span
                            className="px-2 py-0.5 text-xs font-semibold rounded-full text-white"
                            style={{
                              backgroundColor: 
                                tool.proficiency === 'expert' ? '#059669' :
                                tool.proficiency === 'advanced' ? '#0ea5e9' :
                                tool.proficiency === 'intermediate' ? '#f59e0b' :
                                '#6b7280'
                            }}
                          >
                            {tool.proficiency === 'expert' ? '⭐ Expert' :
                             tool.proficiency === 'advanced' ? '⭐⭐ Advanced' :
                             tool.proficiency === 'intermediate' ? '⭐⭐⭐ Intermediate' :
                             'Beginner'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications Section */}
      {showCertifications && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              Professional <span style={{ color: 'var(--primary)' }}>Certifications</span>
            </h2>
            <p style={{ color: 'var(--muted-foreground)' }}>
              Industry-recognized credentials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, certIndex) => (
              <div
                key={certIndex}
                className="p-6 rounded-lg border transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{cert.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>
                      {cert.name}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                      {cert.issuer}
                    </p>
                    <p className="text-xs px-2 py-1 rounded-full w-fit" style={{ 
                      backgroundColor: 'var(--muted)',
                      color: 'var(--muted-foreground)' 
                    }}>
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
