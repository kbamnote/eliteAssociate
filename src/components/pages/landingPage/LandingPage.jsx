import React from 'react'
import HeroSec from './HeroSec'
import FeaturesSec from './FeaturesSec'
import CoursesSec from './CoursesSec'
import TrainersSec from './TrainersSec'
import TestimonialsSec from './TestimonialsSec'
import PlacementStatsSec from './PlacementStatsSec'
import FAQSec from './FAQSec'
import HeroVideo from './HeroVideo'

const LandingPage = () => {
  return (
    <div>
      <HeroVideo/>
        <HeroSec/>
        <FeaturesSec/>
        <CoursesSec/>
        <TrainersSec/>
        <TestimonialsSec/>
        <PlacementStatsSec/>
        <FAQSec/>
    </div>
  )
}

export default LandingPage