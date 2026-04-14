import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'zoom-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: 700 | 1000 | 1500;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  duration = 1000,
  delay = 0,
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [once]);

  // Base classes according to animation type
  let baseClass = '';
  switch (animation) {
    case 'fade-up':
      baseClass = 'translate-y-12 opacity-0';
      break;
    case 'fade-in':
      baseClass = 'opacity-0';
      break;
    case 'fade-left':
      baseClass = '-translate-x-12 opacity-0';
      break;
    case 'fade-right':
      baseClass = 'translate-x-12 opacity-0';
      break;
    case 'zoom-in':
      baseClass = 'scale-95 opacity-0';
      break;
  }

  // Active classes when visible
  const activeClass = isVisible ? '!translate-x-0 !translate-y-0 !scale-100 !opacity-100' : '';

  return (
    <div
      ref={ref}
      className={`transition-all ${baseClass} ${activeClass} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}
