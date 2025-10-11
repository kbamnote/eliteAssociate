import React, { useState, useEffect, useRef } from "react";
import HeroSec from "./HeroSec";
import FeaturesSec from "./FeaturesSec";
import CoursesSec from "./CoursesSec";
import TrainersSec from "./TrainersSec";
import TestimonialsSec from "./TestimonialsSec";
import PlacementStatsSec from "./PlacementStatsSec";
import FAQSec from "./FAQSec";
import HeroVideo from "./HeroVideo";
import AwardVideo from "./AwardVideo";
// Adding the remaining components
import CompaniesSec from "./CompaniesSec";
import LearningSec from "./LearningSec";
import OurAwardsSec from "./OurAwardsSec";
import OurMediaSec from "./OurMediaSec";
import PlacementProgramSec from "./PlacementProgramSec";
import PricingSec from "./PricingSec";
import TestimonalSec from "./TestimonalSec";
import UnwaveringCommitmentSec from "./UnwaveringCommitmentSec";

// New modern components
import StatsSection from "../../common/StatsSection";
import TestimonialsSection from "../../common/TestimonialsSection";
import AwardsSection from "./AwardsSection";
import ContactFormPopup from "../../common/ContactFormPopup";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggeredPopup, setHasTriggeredPopup] = useState(false);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggeredPopup) return;

      const heroVideoElement = heroVideoRef.current;
      if (heroVideoElement) {
        const rect = heroVideoElement.getBoundingClientRect();
        const heroVideoBottom = rect.bottom;
        
        // Trigger popup when user scrolls past the HeroVideo section
        if (heroVideoBottom < 0) {
          setShowPopup(true);
          setHasTriggeredPopup(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggeredPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div ref={heroVideoRef}>
        <HeroVideo />
      </div>
      <AwardsSection/>
      <HeroSec />
      <FeaturesSec />
       <AwardVideo />
      <StatsSection />
      <CoursesSec />
      <TrainersSec />
      <TestimonialsSection />
      <TestimonialsSec />
      <PlacementStatsSec />
      <CompaniesSec />
      <FAQSec />
      
      {/* Contact Form Popup */}
      <ContactFormPopup 
        isOpen={showPopup} 
        onClose={handleClosePopup}
        title="Ready to Transform Your Career?"
      />
    </div>
  );
};

export default LandingPage;
