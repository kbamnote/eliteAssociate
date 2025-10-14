// Image optimization utilities

/**
 * Generate a blur data URL for placeholder images
 * @param {string} src - Original image source
 * @param {number} width - Blur image width (default: 10)
 * @param {number} height - Blur image height (default: 10)
 * @returns {string} Base64 encoded blur data URL
 */
export const generateBlurDataURL = (src, width = 10, height = 10) => {
  // Create a simple gradient as blur placeholder
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Create a simple gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Calculate optimal image dimensions based on container and device
 * @param {number} containerWidth - Container width
 * @param {number} containerHeight - Container height
 * @param {number} devicePixelRatio - Device pixel ratio
 * @returns {object} Optimal width and height
 */
export const calculateOptimalDimensions = (containerWidth, containerHeight, devicePixelRatio = 1) => {
  const dpr = Math.min(devicePixelRatio, 2); // Cap at 2x for performance
  return {
    width: Math.round(containerWidth * dpr),
    height: Math.round(containerHeight * dpr)
  };
};

/**
 * Generate responsive image sizes attribute
 * @param {array} breakpoints - Array of breakpoint objects {width, size}
 * @returns {string} Sizes attribute value
 */
export const generateSizesAttribute = (breakpoints = []) => {
  if (breakpoints.length === 0) {
    return '100vw';
  }
  
  return breakpoints
    .map(bp => `(max-width: ${bp.width}px) ${bp.size}`)
    .join(', ') + ', 100vw';
};

/**
 * Preload critical images
 * @param {array} imageSources - Array of image sources to preload
 * @param {string} as - Resource type (default: 'image')
 */
export const preloadImages = (imageSources, as = 'image') => {
  imageSources.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Lazy load images with Intersection Observer
 * @param {string} selector - CSS selector for images to lazy load
 * @param {object} options - Intersection Observer options
 */
export const lazyLoadImages = (selector = 'img[data-src]', options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img && img.dataset && img.dataset.src) {
          img.src = img.dataset.src;
        }
        if (img && img.classList) {
          img.classList.remove('lazy');
        }
        observer.unobserve(img);
      }
    });
  }, observerOptions);
  
  const images = document.querySelectorAll(selector);
  images.forEach(img => imageObserver.observe(img));
  
  return imageObserver;
};

/**
 * Convert image to WebP format (client-side)
 * @param {File} file - Image file
 * @param {number} quality - WebP quality (0-1)
 * @returns {Promise<Blob>} WebP blob
 */
export const convertToWebP = (file, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob(resolve, 'image/webp', quality);
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Check if browser supports WebP format
 * @returns {Promise<boolean>} WebP support status
 */
export const supportsWebP = () => {
  return new Promise(resolve => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Get optimal image format based on browser support
 * @returns {Promise<string>} Optimal image format
 */
export const getOptimalImageFormat = async () => {
  const webpSupported = await supportsWebP();
  return webpSupported ? 'webp' : 'jpg';
};

/**
 * Compress image file
 * @param {File} file - Image file to compress
 * @param {number} maxWidth - Maximum width
 * @param {number} maxHeight - Maximum height
 * @param {number} quality - Compression quality (0-1)
 * @returns {Promise<Blob>} Compressed image blob
 */
export const compressImage = (file, maxWidth = 1920, maxHeight = 1080, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(resolve, 'image/jpeg', quality);
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Create responsive image srcset
 * @param {string} baseSrc - Base image source
 * @param {array} widths - Array of widths for srcset
 * @returns {string} Srcset attribute value
 */
export const createSrcSet = (baseSrc, widths = [480, 768, 1024, 1280, 1920]) => {
  return widths
    .map(width => `${baseSrc}?w=${width} ${width}w`)
    .join(', ');
};

/**
 * Monitor image loading performance
 * @param {string} src - Image source
 * @returns {Promise<object>} Performance metrics
 */
export const monitorImagePerformance = (src) => {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      resolve({
        src,
        loadTime,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        success: true
      });
    };
    
    img.onerror = () => {
      const loadTime = performance.now() - startTime;
      resolve({
        src,
        loadTime,
        success: false,
        error: 'Failed to load image'
      });
    };
    
    img.src = src;
  });
};