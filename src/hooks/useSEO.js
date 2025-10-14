import { useEffect } from 'react';
import { updatePageSEO } from '../utils/seo';

/**
 * Custom hook for managing SEO meta tags
 * @param {object} seoData - SEO configuration object
 */
export const useSEO = (seoData) => {
  useEffect(() => {
    if (seoData) {
      updatePageSEO(seoData);
    }
  }, [seoData]);
};

/**
 * Custom hook for dynamic title updates
 * @param {string} title - Page title
 * @param {string} siteName - Site name
 */
export const useTitle = (title, siteName) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = siteName ? `${title} | ${siteName}` : title;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title, siteName]);
};

/**
 * Custom hook for meta description updates
 * @param {string} description - Meta description
 */
export const useMetaDescription = (description) => {
  useEffect(() => {
    let metaDescription = document.querySelector('meta[name="description"]');
    const previousContent = metaDescription?.content;
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      if (document.head) {
        document.head.appendChild(metaDescription);
      }
    }
    
    metaDescription.content = description;
    
    return () => {
      if (previousContent) {
        metaDescription.content = previousContent;
      }
    };
  }, [description]);
};

export default useSEO;