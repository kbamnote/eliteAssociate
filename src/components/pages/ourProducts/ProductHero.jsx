import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ProductHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800 text-white min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15px 15px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full text-teal-300 text-sm font-medium mb-6 border border-teal-500/30">
              INNOVATION UNLEASHED
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Flagship</span> Products
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our suite of cutting-edge solutions designed to transform businesses and empower professionals with next-generation technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Products
            </button>
            <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={floatingAnimation}
        >
          <div className="flex flex-col items-center">
            <span className="text-blue-200 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-teal-400 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductHero;