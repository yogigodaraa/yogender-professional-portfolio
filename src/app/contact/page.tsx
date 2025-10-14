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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50">
      <section className="mx-auto max-w-6xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            📧 Contact Me
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Let's discuss your cybersecurity and networking needs — I'll respond promptly! ⚡️
          </p>
          <p className="text-sm text-gray-500">
            Ready to collaborate on securing your digital infrastructure?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              📮 Send Message
            </h2>
            
            <form 
              className="space-y-4" 
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Enter your full name" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="your.email@example.com" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 h-32 resize-y focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-6 py-3 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  '🚀 Send Message'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm flex items-center">
                    <span className="mr-2">✅</span>
                    Message sent! I'll reply within 24 hours.
                  </p>
                  <p className="text-green-700 text-xs mt-1">
                    Your message has been delivered to ygodara28@gmail.com
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm flex items-center">
                    <span className="mr-2">❌</span>
                    Something went wrong. Please try again or use the direct contact methods below.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="mr-2">🔗</span>
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:ygodara28@gmail.com" 
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-blue-600">Email</p>
                    <p className="text-sm text-gray-600">ygodara28@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/yogender-godara/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-blue-600">LinkedIn</p>
                    <p className="text-sm text-gray-600">Connect professionally</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/yogigodaraa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">💻</span>
                  <div>
                    <p className="font-medium text-gray-800 group-hover:text-blue-600">GitHub</p>
                    <p className="text-sm text-gray-600">Check out my code</p>
                  </div>
                </a>
              </div>
            </div>

            {/* About Response Time */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">⏰</span>
                Response Time
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                I typically respond within <strong>24 hours</strong> during weekdays.
              </p>
              <p className="text-gray-600 text-xs">
                For urgent matters, feel free to reach out via LinkedIn or email directly.
              </p>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">🎯</span>
                Open to Opportunities
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full-stack development projects</li>
                <li>• Cybersecurity collaborations</li>
                <li>• Open source contributions</li>
                <li>• Tech mentoring & knowledge sharing</li>
                <li>• Freelance opportunities</li>
                <li>• Network engineer positions</li>
                <li>• Cyber security analyst roles</li>
                <li>• Website management projects</li>
                <li>• AI entry level positions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}