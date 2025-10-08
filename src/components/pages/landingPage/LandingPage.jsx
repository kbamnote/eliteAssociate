import React from "react";
import HeroSec from "./HeroSec";
import FeaturesSec from "./FeaturesSec";
import CoursesSec from "./CoursesSec";
import TrainersSec from "./TrainersSec";
import TestimonialsSec from "./TestimonialsSec";
import PlacementStatsSec from "./PlacementStatsSec";
import FAQSec from "./FAQSec";
import HeroVideo from "./HeroVideo";
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

const LandingPage = () => {
  return (
    <div>
      <HeroVideo />
      <HeroSec />
      <FeaturesSec />
      <StatsSection />
      <CoursesSec />
      <TrainersSec />
      <TestimonialsSection />
      <TestimonialsSec />
      <PlacementStatsSec />
      <CompaniesSec />
      <FAQSec />
    </div>
  );
};

export default LandingPage;
