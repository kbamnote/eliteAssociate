import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, FileText, Zap, HelpCircle } from 'lucide-react';
import ProductHero from './ProductHero';
import ProductShowcase from './ProductShowcase';
import ProductOverview from './ProductOverview';
// import ProductDetails from './ProductDetails';
import Features from './Features';
import FAQs from './FAQs';
import SEOHead from '../../common/SEOHead';

const OurProducts = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add a class to body for specific styling if needed
    const bodyClassList = typeof document !== 'undefined' && document.body && document.body.classList;
    if (bodyClassList && typeof bodyClassList.add === 'function') {
      bodyClassList.add('products-page');
    }
    
    // Cleanup function
    return () => {
      const removeClassList = typeof document !== 'undefined' && document.body && document.body.classList;
      if (removeClassList && typeof removeClassList.remove === 'function') {
        removeClassList.remove('products-page');
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const productSections = [
    {
      title: "Product Overview",
      description: "Get a comprehensive overview of all our training programs and services.",
      icon: <Eye className="w-8 h-8" />,
      sectionId: "overview",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Product Details",
      description: "Detailed information about courses, curriculum, and certification programs.",
      icon: <FileText className="w-8 h-8" />,
      sectionId: "details",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Features",
      description: "Discover the powerful features that make our training programs unique.",
      icon: <Zap className="w-8 h-8" />,
      sectionId: "features",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "FAQs",
      description: "Find answers to frequently asked questions about our services.",
      icon: <HelpCircle className="w-8 h-8" />,
      sectionId: "faqs",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Our Products - Elite Associate"
        description="Explore our comprehensive range of training programs and professional development services designed to accelerate your career growth."
        keywords="training programs, professional development, courses, certification, career growth"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-body">
        <ProductHero />
        <ProductShowcase />
        
        {/* Navigation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Product Sections</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Navigate through our comprehensive product information organized in easy-to-browse sections.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <button 
                    onClick={() => scrollToSection(section.sectionId)}
                    className="block w-full text-left"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full group-hover:-translate-y-2">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {section.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                        <span className="mr-2">View Section</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <div id="overview">
          <ProductOverview />
        </div>
        
        {/* <div id="details">
          <ProductDetails />
        </div> */}
        
        <div id="features">
          <Features />
        </div>
        
        <div id="faqs">
          <FAQs />
        </div>
      </div>
    </>
  );
};

export default OurProducts;