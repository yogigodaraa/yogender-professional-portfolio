import Script from 'next/script';

// Analytics component for tracking portfolio performance
export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      {/* Vercel Analytics (if using Vercel) */}
      <Script
        src="https://va.vercel-scripts.com/v1/script.debug.js"
        strategy="afterInteractive"
      />

      {/* Custom Portfolio Analytics */}
      <Script id="portfolio-analytics" strategy="afterInteractive">
        {`
          // Track page views
          function trackPortfolioEvent(eventName, eventData = {}) {
            if (typeof gtag !== 'undefined') {
              gtag('event', eventName, {
                'custom_parameter': 'portfolio_interaction',
                ...eventData
              });
            }
            
            // Also send to your own analytics endpoint
            fetch('/api/analytics', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                event: eventName,
                timestamp: new Date().toISOString(),
                page: window.location.pathname,
                ...eventData
              })
            }).catch(console.error);
          }

          // Track contact form interactions
          window.trackPortfolioEvent = trackPortfolioEvent;
          
          // Track scroll depth
          let maxScroll = 0;
          window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
              maxScroll = scrollPercent;
              if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                trackPortfolioEvent('scroll_depth', { percent: maxScroll });
              }
            }
          });
        `}
      </Script>
    </>
  );
}
