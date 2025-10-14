'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm here to help you learn about Yogender's skills and experience in cybersecurity and networking. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fallback responses when API is unavailable
  const getFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('skill') || input.includes('technology') || input.includes('programming')) {
      return "Yogender has expertise in:\n• Cybersecurity: Threat detection, log analysis, ISO 27001, CrowdStrike Falcon, Elastic Stack\n• Networking: Cisco CCNP certified, Juniper Mist, Cisco Meraki, network configuration\n• Programming: Python, JavaScript, React, Next.js, TypeScript\n• Cloud: AWS, Azure basics\n• Tools: Three.js, Django, PostgreSQL";
    }
    
    if (input.includes('education') || input.includes('degree') || input.includes('university')) {
      return "Yogender's educational background:\n• Master of Information Technology from Murdoch University (Major in Cybersecurity and Networking, Research in IoT devices security using Machine Learning, GPA 3.33/4)\n• BSc Mathematics (Honours) from University of Delhi (Major in Mathematics, Minor in Physics, GPA 8.4/10)";
    }
    
    if (input.includes('certification') || input.includes('cert')) {
      return "Yogender holds these professional certifications:\n• Blue Team Level 1 - Security Blue Team Academy\n• CompTIA Security+ SYO-701\n• Cisco Certified Network Professional-ENCOR (CCNP)\n• Cisco Certified Network Professional-ENRSI (CCNP)\n• Mental Health in Cyber Security - Security Blue Team Academy";
    }
    
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return "Yogender's professional experience includes:\n• Web Technology Manager (Volunteer) at Western Suburbs Cricket Club, Perth, Australia (2023-Present)\n• Cybersecurity Intern at Trojan Hunt India LLP (2024)\n• Network Engineer at Brocent ASIA, Singapore (2023)\n• Python Tutor & Robotics Mentor (Private, 2023-2024)";
    }
    
    if (input.includes('project') || input.includes('portfolio')) {
      return "Yogender's notable projects:\n• One Piece Anime Portfolio Website - Creative web development with Next.js, React, Three.js\n• Blue Sentinel - Log Analysis Platform - Advanced cybersecurity log analysis with Python, Elasticsearch, Kibana, Machine Learning";
    }
    
    if (input.includes('achievement') || input.includes('award') || input.includes('hackathon')) {
      return "Yogender's achievements:\n• First Place - The Great Forensic Hunt 2025, Curtin University\n• First Place - WeMoney Financial Wellness AI Hackathon\n• First Place - New Light Hackathon, December 2024, Curtin University\n• First Place - Case Night for Future Engineers, May 2025, UWA";
    }
    
    if (input.includes('contact') || input.includes('hire') || input.includes('opportunity')) {
      return "Yogender is open to opportunities in:\n• Network engineer positions\n• Cyber security analyst roles\n• Website management projects\n• AI entry level positions\n• IT support roles\n\nYou can contact him through the contact page on this website.";
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn about Yogender's background in cybersecurity and networking. You can ask me about his skills, education, certifications, experience, projects, or achievements. What would you like to know?";
    }
    
    return "I can help you learn about Yogender's cybersecurity and networking expertise. You can ask me about his:\n• Skills and technologies\n• Education and certifications\n• Professional experience\n• Projects and achievements\n• Career opportunities\n\nWhat specific area interests you?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      // Use fallback response when API is unavailable
      const fallbackResponse = getFallbackResponse(userMessage.content);
      const errorMessage: Message = {
        role: 'assistant',
        content: fallbackResponse + "\n\n(Note: AI assistant is temporarily unavailable, but I can still help with basic information about Yogender!)"
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        style={{
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          boxShadow: 'var(--shadow-xl)'
        }}
        aria-label="Open chat"
      >
        <svg 
          className="w-6 h-6 mx-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat Window */}
          <div 
            className="relative w-full max-w-md h-96 rounded-lg shadow-2xl flex flex-col"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)'
            }}
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between p-4 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <h3 
                  className="font-semibold text-sm"
                  style={{ color: 'var(--foreground)' }}
                >
                  Ask about Yogender
                </h3>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Cybersecurity & Networking Expert
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-opacity-20"
                style={{ 
                  color: 'var(--muted-foreground)',
                  backgroundColor: 'var(--muted)'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'rounded-br-none'
                        : 'rounded-bl-none'
                    }`}
                    style={{
                      backgroundColor: message.role === 'user' 
                        ? 'var(--primary)' 
                        : 'var(--muted)',
                      color: message.role === 'user' 
                        ? 'var(--primary-foreground)' 
                        : 'var(--foreground)'
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="max-w-xs px-3 py-2 rounded-lg rounded-bl-none text-sm"
                    style={{
                      backgroundColor: 'var(--muted)',
                      color: 'var(--foreground)'
                    }}
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div 
              className="p-4 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, experience..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}