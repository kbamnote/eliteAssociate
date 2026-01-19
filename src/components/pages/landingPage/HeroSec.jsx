import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';
import CTAButton from '../../common/CTAButton';
import AnimatedCounter from '../../common/AnimatedCounter';
import ResponsiveImage from '../../common/ResponsiveImage';
import ContactFormPopup from '../../common/ContactFormPopup';
import { trackButtonClick } from '../../../utils/analytics';

// Import hero image
import bg3 from '../../../assets/images/Hero/bg3.jpeg';

const HeroSec = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEnrollPopupOpen, setIsEnrollPopupOpen] = useState(false);

  const handleEnrollNow = () => {
    trackButtonClick('Enroll Now', 'Hero Section');
    setIsEnrollPopupOpen(true);
  };

  const handleBookDemo = () => {
    trackButtonClick('Book Free Demo', 'Hero Section');
    setIsVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  #1 Training & Placement Institute
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Best Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">Placement Institute</span>
                </h1>
              </motion.div>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Transform your career with our job-ready courses and 100% placement assistance. 
                Join Elite Associate - India's top IT training institute with guaranteed career success.
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Industry Expert Trainers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Job-Ready Courses</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Live Project Training</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CTAButton 
                variant="primary" 
                size="large"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={handleEnrollNow}
              >
                Enroll Now
              </CTAButton>
              
              <CTAButton 
                variant="secondary" 
                size="large"
                icon={<Play className="w-5 h-5" />}
                onClick={handleBookDemo}
              >
                Book Free Demo
              </CTAButton>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={50000} suffix="+" />
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Students Placed</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={500} suffix="+" delay={200} />
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Partner Companies</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={98} suffix="%" delay={400} />
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={15} suffix="+" delay={600} />
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ResponsiveImage
                src={bg3}
                alt="Training and Placement - Students learning technology skills"
                className="w-full h-auto aspect-video rounded-3xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder={
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 aspect-video rounded-3xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
                        <Shield className="w-24 h-24 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-6">Training & Placement</h3>
                      <p className="text-blue-100 mt-2">Professional IT Courses</p>
                    </div>
                  </div>
                }
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Elite Associates Introduction</h3>
                  <button 
                    onClick={() => setIsVideoModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-500">Video player would appear here</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    This is where the promotional video for Elite Associates would be displayed.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Popup for Enrollment */}
      <ContactFormPopup
        isOpen={isEnrollPopupOpen}
        onClose={() => setIsEnrollPopupOpen(false)}
        title="Enroll Now - Start Your Journey!"
      />
    </div>
  );
};

export default HeroSec;