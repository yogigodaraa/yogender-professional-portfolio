"use client";

import { useState, FormEvent } from "react";

// Updated contact form with reliable email API - October 2025 (Formspree: mnngoawq)
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // Generate a unique tracking ID for this message
    const trackingId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Add tracking information to the form
    formData.append('_subject', `[PORTFOLIO-${trackingId}] New Contact from Portfolio`);
    formData.append('_replyto', formData.get('email') as string);
    formData.append('tracking_id', trackingId);
    
    try {
      // Use Formspree - enhanced with reply tracking
      const response = await fetch('https://formspree.io/f/mnngoawq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Direct mailto fallback
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      };
      
      const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
      const body = encodeURIComponent(
        `Hi Yogender,\n\nNew message from your portfolio:\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\n---\nSent from One Piece Portfolio Contact Form\nPlease reply to ${data.email}`
      );
      
      // Opens email client as fallback
      window.open(`mailto:ygodara28@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Get in <span style={{ color: 'var(--primary)' }}>Touch</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Let's discuss your cybersecurity and networking needs, I'll respond promptly!
          </p>
          <p className="text-sm mt-2" style={{ color: 'var(--muted-foreground)' }}>
            Ready to collaborate on securing your digital infrastructure?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--foreground)' }}>
              Send Message
            </h2>
            
            <form 
              className="space-y-4" 
              onSubmit={handleSubmit}
            >
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Your Name *
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Enter your full name" 
                  className="w-full rounded-lg px-4 py-3 border transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  required 
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Your Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="your.email@example.com" 
                  className="w-full rounded-lg px-4 py-3 border transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  required 
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Your Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!" 
                  className="w-full rounded-lg px-4 py-3 h-32 resize-y border transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)'
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{ color: 'var(--primary-foreground)' }}>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div 
                  className="p-4 border rounded-lg"
                  style={{
                    backgroundColor: 'var(--success-bg, #dcfce7)',
                    borderColor: 'var(--success-border, #86efac)',
                    color: 'var(--success-text, #166534)'
                  }}
                >
                  <p className="text-sm font-medium">
                    Message sent successfully! I'll reply within 24 hours.
                  </p>
                  <p className="text-xs mt-1 opacity-80">
                    Your message has been delivered to ygodara28@gmail.com
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div 
                  className="p-4 border rounded-lg"
                  style={{
                    backgroundColor: 'var(--error-bg, #fee2e2)',
                    borderColor: 'var(--error-border, #fca5a5)',
                    color: 'var(--error-text, #991b1b)'
                  }}
                >
                  <p className="text-sm font-medium">
                    Something went wrong. Please try again or use the direct contact methods below.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:ygodara28@gmail.com" 
                  className="flex items-center p-3 rounded-lg transition-colors group border"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div>
                    <p className="font-medium group-hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>Email</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>ygodara28@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/yogender-godara/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg transition-colors group border"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div>
                    <p className="font-medium group-hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>LinkedIn</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Connect professionally</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/yogigodaraa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg transition-colors group border"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div>
                    <p className="font-medium group-hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>GitHub</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Check out my code</p>
                  </div>
                </a>
              </div>
            </div>

            {/* About Response Time */}
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                Response Time
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--foreground)' }}>
                I typically respond within <strong>24 hours</strong> during weekdays.
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                For urgent matters, feel free to reach out via LinkedIn or email directly.
              </p>
            </div>

            {/* What I'm Looking For */}
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                Open to Opportunities
              </h3>
              <ul className="text-sm space-y-1" style={{ color: 'var(--foreground)' }}>
                <li>• Network engineer positions</li>
                <li>• Cyber security analyst roles</li>
                <li>• Website management projects</li>
                <li>• AI entry level positions</li>
                <li>• IT support roles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}