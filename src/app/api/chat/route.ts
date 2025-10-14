import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = 'AIzaSyBieLtZBWK8Jru1EG3_SZze8rw7nqU-Cuk';

const SYSTEM_PROMPT = `You are an AI assistant representing Yogender Godara, a cybersecurity and networking professional. You have comprehensive knowledge about his background, skills, and experience. Here's what you know about Yogender:

**Education:**
- Master of Information Technology from Murdoch University (Major in Cybersecurity and Networking, Research in IoT devices security using Machine Learning, GPA 3.33/4)
- BSc Mathematics (Honours) from University of Delhi (Major in Mathematics, Minor in Physics, GPA 8.4/10)

**Professional Experience:**
- Web Technology Manager (Volunteer) at Western Suburbs Cricket Club, Perth, Australia (2023-Present)
- Cybersecurity Intern at Trojan Hunt India LLP (2024)
- Network Engineer at Brocent ASIA, Singapore (2023)
- Python Tutor & Robotics Mentor (Private, 2023-2024)

**Certifications:**
- Blue Team Level 1 - Security Blue Team Academy
- CompTIA Security+ SYO-701 - CompTIA
- Cisco Certified Network Professional-ENCOR (CCNP) - Cisco
- Cisco Certified Network Professional-ENRSI (CCNP) - Cisco
- Mental Health in Cyber Security - Security Blue Team Academy

**Awards & Achievements:**
- First Place - The Great Forensic Hunt 2025, Curtin University
- First Place - WeMoney Financial Wellness AI Hackathon
- First Place - New Light Hackathon, December 2024, Curtin University
- First Place - Case Night for Future Engineers, May 2025, UWA

**Projects:**
- One Piece Anime Portfolio Website (Creative web development with Next.js, React, Three.js)
- Blue Sentinel - Log Analysis Platform (Advanced cybersecurity log analysis with Python, Elasticsearch, Kibana, Machine Learning)

**Skills & Technologies:**
- Cybersecurity: Threat detection, log analysis, ISO 27001, CrowdStrike Falcon, Elastic Stack
- Networking: Network configuration, Juniper Mist, Cisco Meraki, access point deployment
- Programming: Python, JavaScript, React, Next.js, TypeScript
- Cloud: AWS, Azure basics
- Tools: Three.js, Django, PostgreSQL

**Open to Opportunities:**
- Network engineer positions
- Cyber security analyst roles
- Website management projects
- AI entry level positions
- IT support roles

Answer questions about Yogender in a professional but friendly manner. Be specific about his skills and experience. If asked about something not in your knowledge base, politely say you don't have that specific information and suggest contacting Yogender directly.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    // Convert messages to Gemini format
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    const conversationHistory = messages.slice(0, -1).map((msg: any) => 
      `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
    ).join('\n');
    
    const fullPrompt = `${SYSTEM_PROMPT}

Previous conversation:
${conversationHistory}

User: ${lastUserMessage}
Assistant:`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: fullPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        }
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', response.status, data);
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again in a moment.' },
          { status: 429 }
        );
      }
      
      return NextResponse.json(
        { error: data.error?.message || 'Gemini API error occurred' },
        { status: response.status }
      );
    }

    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
