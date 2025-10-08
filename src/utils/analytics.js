// Google Analytics and tracking utilities

// Initialize Google Analytics
export const initGA = (trackingId) => {
  if (typeof window !== 'undefined' && trackingId) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'General', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('click', 'Button', `${buttonName}${location ? ` - ${location}` : ''}`, 1);
};

// Track form submissions
export const trackFormSubmission = (formName, success = true) => {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', 'Form', formName, success ? 1 : 0);
};

// Track course enrollments
export const trackCourseEnrollment = (courseName, courseCategory = '') => {
  trackEvent('course_enrollment', 'Course', `${courseName}${courseCategory ? ` - ${courseCategory}` : ''}`, 1);
};

// Track video plays
export const trackVideoPlay = (videoTitle, videoLocation = '') => {
  trackEvent('video_play', 'Video', `${videoTitle}${videoLocation ? ` - ${videoLocation}` : ''}`, 1);
};

// Track downloads
export const trackDownload = (fileName, fileType = '') => {
  trackEvent('download', 'File', `${fileName}${fileType ? ` - ${fileType}` : ''}`, 1);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', 'Engagement', `${depth}%`, depth);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds, pageName = '') => {
  trackEvent('time_on_page', 'Engagement', pageName, Math.round(timeInSeconds));
};

// Track search queries
export const trackSearch = (query, resultsCount = 0) => {
  trackEvent('search', 'Search', query, resultsCount);
};

// Track contact form submissions
export const trackContactForm = (formType = 'contact', success = true) => {
  trackEvent(success ? 'contact_form_success' : 'contact_form_error', 'Contact', formType, success ? 1 : 0);
};

// Track newsletter signups
export const trackNewsletterSignup = (success = true) => {
  trackEvent(success ? 'newsletter_signup_success' : 'newsletter_signup_error', 'Newsletter', '', success ? 1 : 0);
};

// Performance tracking
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      trackEvent('page_load_time', 'Performance', window.location.pathname, Math.round(loadTime));
    }
  }
};

// Error tracking
export const trackError = (error, errorInfo = '') => {
  trackEvent('javascript_error', 'Error', `${error.message} - ${errorInfo}`, 0);
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackCourseEnrollment,
  trackVideoPlay,
  trackDownload,
  trackScrollDepth,
  trackTimeOnPage,
  trackSearch,
  trackContactForm,
  trackNewsletterSignup,
  trackPerformance,
  trackError,
};