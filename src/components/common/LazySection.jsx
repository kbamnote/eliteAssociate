import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LazySection = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  triggerOnce = true,
  fallback = null,
  ...props 
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1 
      }}
      {...props}
    >
      {inView ? children : fallback}
    </motion.section>
  );
};

export default LazySection;