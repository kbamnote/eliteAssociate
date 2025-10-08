import React from "react";
import { motion } from "framer-motion";
import ResponsiveVideo from "../../common/ResponsiveVideo";
import CTAButton from "../../common/CTAButton";
import { trackButtonClick } from "../../../utils/analytics";
import heroVideo from "../../../assets/AZm5_8IEeXnFAANsg8S6nA-AZm5_8IE2VF8dXOiFxIcow.mp4"; // 👈 update the path if needed

const HeroVideo = () => {
  const handleStartJourney = () => {
    trackButtonClick('Start Your Journey', 'Hero Video Section');
    // Add navigation logic here
  };

  return (
    <section className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden">
      {/* Background Video - Banner Style */}
      <ResponsiveVideo
        src={heroVideo}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
        preload="auto"
        trackingName="Hero Background Video"
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      {/* Content - Positioned for banner layout */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center px-6 md:px-12 text-white max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Unlock Your Career Potential with Elite Associates
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Get trained by industry experts and secure your dream job. Elite Associates bridges the gap between learning and employment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <CTAButton
              onClick={handleStartJourney}
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 md:px-8 md:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              trackingName="Start Your Journey"
              trackingLocation="Hero Video Section"
            >
              Start Your Journey
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideo;
