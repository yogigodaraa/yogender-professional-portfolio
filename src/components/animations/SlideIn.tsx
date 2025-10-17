"use client";

import { useEffect, useRef, useState } from 'react';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6, 
  className = '' 
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getTransform = () => {
    const distance = 40;
    switch (direction) {
      case 'left':
        return isVisible ? 'translateX(0)' : `translateX(-${distance}px)`;
      case 'right':
        return isVisible ? 'translateX(0)' : `translateX(${distance}px)`;
      case 'up':
        return isVisible ? 'translateY(0)' : `translateY(${distance}px)`;
      case 'down':
        return isVisible ? 'translateY(0)' : `translateY(-${distance}px)`;
      default:
        return 'translateY(0)';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
