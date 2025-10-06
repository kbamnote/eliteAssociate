import React, { useEffect } from 'react';
import ProductHero from './ProductHero';
import ProductShowcase from './ProductShowcase';

const OurProducts = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add a class to body for specific styling if needed
    document.body.classList.add('products-page');
    
    // Cleanup function
    return () => {
      document.body.classList.remove('products-page');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ProductHero />
      <ProductShowcase />
    </div>
  );
};

export default OurProducts;