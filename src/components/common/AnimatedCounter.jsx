import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '',
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const timer = setTimeout(() => {
            let startTime = null;
            const startValue = 0;
            const endValue = end;

            const animate = (currentTime) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);

              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              let currentCount = easeOutQuart * (endValue - startValue) + startValue;

              // ✅ Smart rounding for small numbers
              if (endValue < 10) {
                currentCount = parseFloat(currentCount.toFixed(1));
              } else {
                currentCount = Math.floor(currentCount);
              }

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }, delay);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <span className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
};

export default AnimatedCounter;
