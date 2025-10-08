import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageOptimizer = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 80,
  format = 'webp',
  fallbackFormat = 'jpg',
  sizes = '100vw',
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL,
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);
  const imgRef = useRef(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  });

  // Generate optimized image URLs
  const generateImageSrc = (originalSrc, width, height, quality, format) => {
    // In a real application, this would integrate with an image optimization service
    // like Cloudinary, ImageKit, or a custom CDN
    if (originalSrc.startsWith('http')) {
      // For external URLs, return as-is or apply query parameters if supported
      return originalSrc;
    }
    
    // For local images, return the original path
    // In production, you'd want to integrate with your build process
    return originalSrc;
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (originalSrc, width, height, quality, format) => {
    if (!width || !height) return '';
    
    const breakpoints = [0.5, 0.75, 1, 1.5, 2];
    return breakpoints
      .map(multiplier => {
        const scaledWidth = Math.round(width * multiplier);
        const scaledHeight = Math.round(height * multiplier);
        const src = generateImageSrc(originalSrc, scaledWidth, scaledHeight, quality, format);
        return `${src} ${scaledWidth}w`;
      })
      .join(', ');
  };

  useEffect(() => {
    if ((inView || priority) && !currentSrc) {
      const optimizedSrc = generateImageSrc(src, width, height, quality, format);
      setCurrentSrc(optimizedSrc);
    }
  }, [inView, priority, src, width, height, quality, format, currentSrc]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    // Try fallback format
    if (format !== fallbackFormat) {
      const fallbackSrc = generateImageSrc(src, width, height, quality, fallbackFormat);
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    }
    if (onError) onError(e);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Blur placeholder */}
      {!isLoaded && !hasError && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : 'linear-gradient(45deg, #f3f4f6, #e5e7eb)'
          }}
        />
      )}

      {/* Loading spinner */}
      {!isLoaded && !hasError && placeholder !== 'blur' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}

      {/* Optimized image */}
      {currentSrc && (
        <motion.picture>
          {/* WebP source for modern browsers */}
          <source
            srcSet={generateSrcSet(src, width, height, quality, 'webp')}
            sizes={sizes}
            type="image/webp"
          />
          {/* Fallback source */}
          <motion.img
            ref={imgRef}
            src={currentSrc}
            srcSet={generateSrcSet(src, width, height, quality, fallbackFormat)}
            sizes={sizes}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            variants={imageVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            style={{
              width: width || 'auto',
              height: height || 'auto'
            }}
          />
        </motion.picture>
      )}
    </div>
  );
};

export default ImageOptimizer;