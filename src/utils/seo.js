// SEO utilities for better search engine optimization

/**
 * Update document title
 * @param {string} title - Page title
 * @param {string} siteName - Site name (optional)
 */
export const updateTitle = (title, siteName = 'Elite Associate') => {
  document.title = siteName ? `${title} | ${siteName}` : title;
};

/**
 * Update meta description
 * @param {string} description - Meta description
 */
export const updateMetaDescription = (description) => {
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;
};

/**
 * Update meta keywords
 * @param {string|array} keywords - Meta keywords
 */
export const updateMetaKeywords = (keywords) => {
  const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = keywordString;
};

/**
 * Update Open Graph meta tags
 * @param {object} ogData - Open Graph data
 */
export const updateOpenGraph = (ogData) => {
  const {
    title,
    description,
    image,
    url,
    type = 'website',
    siteName = 'Elite Associate'
  } = ogData;

  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: siteName }
  ];

  ogTags.forEach(({ property, content }) => {
    if (content) {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    }
  });
};

/**
 * Update Twitter Card meta tags
 * @param {object} twitterData - Twitter Card data
 */
export const updateTwitterCard = (twitterData) => {
  const {
    card = 'summary_large_image',
    title,
    description,
    image,
    site,
    creator
  } = twitterData;

  const twitterTags = [
    { name: 'twitter:card', content: card },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: site },
    { name: 'twitter:creator', content: creator }
  ];

  twitterTags.forEach(({ name, content }) => {
    if (content) {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    }
  });
};

/**
 * Add canonical URL
 * @param {string} url - Canonical URL
 */
export const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

/**
 * Add structured data (JSON-LD)
 * @param {object} data - Structured data object
 */
export const addStructuredData = (data) => {
  if (typeof document === 'undefined') return; // SSR safety check
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  
  if (document.head) {
    document.head.appendChild(script);
  }
};

/**
 * Generate breadcrumb structured data
 * @param {array} breadcrumbs - Array of breadcrumb items
 * @returns {object} Structured data for breadcrumbs
 */
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generate organization structured data
 * @param {object} orgData - Organization data
 * @returns {object} Structured data for organization
 */
export const generateOrganizationStructuredData = (orgData) => {
  const {
    name,
    url,
    logo,
    description,
    address,
    phone,
    email,
    socialMedia = []
  } = orgData;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    "address": address,
    "telephone": phone,
    "email": email,
    "sameAs": socialMedia
  };
};

/**
 * Generate course structured data
 * @param {object} courseData - Course data
 * @returns {object} Structured data for course
 */
export const generateCourseStructuredData = (courseData) => {
  const {
    name,
    description,
    provider,
    url,
    image,
    duration,
    price,
    currency = 'INR'
  } = courseData;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "url": url,
    "image": image,
    "timeRequired": duration,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency
    }
  };
};

/**
 * Update all SEO meta tags for a page
 * @param {object} seoData - Complete SEO data
 */
export const updatePageSEO = (seoData) => {
  const {
    title,
    description,
    keywords,
    canonical,
    openGraph,
    twitterCard,
    structuredData
  } = seoData;

  if (title) updateTitle(title);
  if (description) updateMetaDescription(description);
  if (keywords) updateMetaKeywords(keywords);
  if (canonical) updateCanonical(canonical);
  if (openGraph) updateOpenGraph(openGraph);
  if (twitterCard) updateTwitterCard(twitterCard);
  if (structuredData) addStructuredData(structuredData);
};

/**
 * Generate sitemap entry
 * @param {string} url - Page URL
 * @param {string} lastmod - Last modified date
 * @param {string} changefreq - Change frequency
 * @param {number} priority - Priority (0.0 to 1.0)
 * @returns {object} Sitemap entry
 */
export const generateSitemapEntry = (url, lastmod, changefreq = 'weekly', priority = 0.5) => {
  return {
    url,
    lastmod,
    changefreq,
    priority
  };
};

/**
 * Preload critical resources
 * @param {array} resources - Array of resource objects
 */
export const preloadCriticalResources = (resources) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};

/**
 * Add hreflang tags for internationalization
 * @param {array} languages - Array of language objects
 */
export const addHreflangTags = (languages) => {
  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang.code;
    link.href = lang.url;
    document.head.appendChild(link);
  });
};