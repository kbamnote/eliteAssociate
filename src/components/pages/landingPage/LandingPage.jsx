import React from 'react'
import HeroSec from './HeroSec'
import LearningSec from './LearningSec'
import CompaniesSec from './CompaniesSec'
import PlacementProgramSec from './PlacementProgramSec'
import TestimonalSec from './TestimonalSec'
import UnwaveringCommitmentSec from './UnwaveringCommitmentSec'
import OurAwardsSec from './OurAwardsSec'
import OurMediaSec from './OurMediaSec'

const LandingPage = () => {
  return (
    <div>
        <HeroSec/>
        <LearningSec/>
        <CompaniesSec/>
        <PlacementProgramSec/>
        <TestimonalSec/>
        <UnwaveringCommitmentSec/>
        <OurAwardsSec/>
        <OurMediaSec/>
    </div>
  )
}

export default LandingPage