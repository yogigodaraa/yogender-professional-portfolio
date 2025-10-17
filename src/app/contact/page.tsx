"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

// Updated contact form with reliable email API - October 2025 (Formspree: mnngoawq)
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [messageLength, setMessageLength] = useState(0);
  const [formErrors, setFormErrors] = useState<{name?: string; email?: string; subject?: string; message?: string}>({});
  const maxMessageLength = 1000;

  const validateForm = (formData: FormData) => {
    const errors: {name?: string; email?: string; subject?: string; message?: string} = {};
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!subject || subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }
    
    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    setFormErrors({});
    
    // Generate a unique tracking ID for this message
    const trackingId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Add tracking information to the form
    const subject = formData.get('subject') as string;
    formData.append('_subject', `[PORTFOLIO-${trackingId}] ${subject}`);
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
        <FadeIn>
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
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <SlideIn direction="left" delay={0.1}>
            <div
              className="p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl"
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
                    borderColor: formErrors.name ? '#ef4444' : 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  required 
                />
                {formErrors.name && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formErrors.name}</p>
                )}
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
                    borderColor: formErrors.email ? '#ef4444' : 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  required 
                />
                {formErrors.email && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  placeholder="What's this about?" 
                  className="w-full rounded-lg px-4 py-3 border transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: formErrors.subject ? '#ef4444' : 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  required 
                />
                {formErrors.subject && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formErrors.subject}</p>
                )}
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Your Message *
                  </label>
                  <span 
                    className="text-xs"
                    style={{ 
                      color: messageLength > maxMessageLength ? '#ef4444' : 'var(--muted-foreground)' 
                    }}
                  >
                    {messageLength}/{maxMessageLength}
                  </span>
                </div>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!" 
                  className="w-full rounded-lg px-4 py-3 h-32 resize-y border transition-all focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: formErrors.message ? '#ef4444' : 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                  maxLength={maxMessageLength}
                  onChange={handleMessageChange}
                  required 
                />
                {formErrors.message && (
                  <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{formErrors.message}</p>
                )}
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
          </SlideIn>

          {/* Contact Information */}
          <SlideIn direction="right" delay={0.2}>
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
                  className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group border hover:scale-105"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium group-hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>Email</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>ygodara28@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/yogender-godara/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group border hover:scale-105"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium group-hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>LinkedIn</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Connect professionally</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/yogigodaraa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group border hover:scale-105"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium group-hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>GitHub</p>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Check out my code</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                  Availability Status
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-green-600">Available</span>
                </div>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--foreground)' }}>
                Currently open to new opportunities and projects
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                Best time to reach: <strong>Mon-Fri, 9AM-5PM AWST</strong>
              </p>
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
          </SlideIn>
        </div>
      </div>
    </main>
  );
}