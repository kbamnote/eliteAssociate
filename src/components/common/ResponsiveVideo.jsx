import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { trackVideoPlay } from '../../utils/analytics';

const ResponsiveVideo = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  preload = 'metadata',
  width,
  height,
  onPlay,
  onPause,
  onEnded,
  trackingName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: '50px'
  });

  useEffect(() => {
    if (inView && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        // Auto-play failed, which is expected in many browsers
      });
    }
  }, [inView, autoPlay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handlePlay = (e) => {
    setIsPlaying(true);
    if (trackingName) {
      trackVideoPlay(trackingName, src);
    }
    if (onPlay) onPlay(e);
  };

  const handlePause = (e) => {
    setIsPlaying(false);
    if (onPause) onPause(e);
  };

  const handleEnded = (e) => {
    setIsPlaying(false);
    if (onEnded) onEnded(e);
  };

  const handleError = (e) => {
    setHasError(true);
    console.error('Video loading error:', e);
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Failed to load video</p>
          </div>
        </div>
      )}

      {/* Video element */}
      <motion.video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay={autoPlay && inView}
        muted={muted}
        loop={loop}
        controls={controls}
        preload={preload}
        onLoadedData={handleLoadedData}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onError={handleError}
        variants={videoVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        style={{
          width: width || '100%',
          height: height || 'auto'
        }}
      >
        Your browser does not support the video tag.
      </motion.video>

      {/* Play button overlay for non-autoplay videos */}
      {!autoPlay && !isPlaying && isLoaded && (
        <motion.button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
          onClick={() => videoRef.current?.play()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </motion.button>
      )}
    </div>
  );
};

export default ResponsiveVideo;