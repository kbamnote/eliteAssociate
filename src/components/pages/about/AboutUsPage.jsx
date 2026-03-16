import React from 'react'
import AboutPage from './AboutPage'
import OurHistory from './OurHistory'
import Careers from './Careers'
// import Leadership from './Leadership'
import AboutHero from './AboutHero'
import SEOHead from '../../common/SEOHead'

const AboutUsPage = () => {
  return (
  <>
  <SEOHead
    title="Elite Associate – Career Training & Placement Services in Nagpur"
    description="Learn about Elite Associate, a trusted career development and placement services provider since 2002 in Nagpur. We offer expert training, job support, career counselling, HR solutions and recruitment services for freshers and experienced professionals."
    keywords="Elite Associate, Career training and placement services, Placement consultancy Nagpur, Job oriented training programs, Career development institute, Recruitment and HR services, Professional skill training, Job support for freshers, Career counselling services in Nagpur."
  />
  <AboutHero/>
<AboutPage/>
<OurHistory/>
<Careers/>
{/* <Leadership/> */}


  </>
  )
}

export default AboutUsPage