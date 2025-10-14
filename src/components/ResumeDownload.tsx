"use client";

import { useState } from 'react';

// Resume download component with analytics tracking
export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Track download event
    if (typeof window !== 'undefined' && (window as any).trackPortfolioEvent) {
      (window as any).trackPortfolioEvent('resume_download', {
        format: 'pdf',
        source: 'portfolio_site'
      });
    }

    try {
      // Create download link
      const link = document.createElement('a');
      link.href = '/documents/Yogender_CV.pdf'; // Your resume file
      link.download = 'Yogender_Godara_Resume.pdf';
      link.target = '_blank';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Send download notification to your email
      await fetch('/api/email-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'resume_download',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          page: window.location.pathname,
        }),
      }).catch(console.error);
      
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* PDF Download */}
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume (PDF)</span>
          </>
        )}
      </button>

      {/* View Online */}
      <a
        href="/documents/Yogender_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).trackPortfolioEvent) {
            (window as any).trackPortfolioEvent('resume_view', {
              format: 'pdf',
              source: 'portfolio_site'
            });
          }
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>View Online</span>
      </a>

      {/* LinkedIn Profile */}
            {/* LinkedIn Profile */}
      <a
        href="https://www.linkedin.com/in/yogender-godara/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).trackPortfolioEvent('linkedin_click', {
              location: 'resume_section'
            });
          }
        }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
