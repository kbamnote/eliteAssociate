import React from 'react'
import GalleryHero from './GalleryHero'
import GalleryPage from './GalleryPage'
import SEOHead from '../../common/SEOHead'

const GalleryComp = () => {
  return (
   <>
   <SEOHead
     title="Training & Placement Moments | Elite Associate Nagpur"
     description="View real photos of classroom sessions, student activities, events, training programs, placement moments and institute environment at Elite Associate in Nagpur. Get a glimpse of our success stories and learning experiences."
     keywords="Elite Associate photo gallery, Training and placement gallery, Nagpur training institute pictures, Student activities and events photos, Classroom and training environment, Placement moments gallery, Career development institute gallery, Professional training photo collection, Course and campus visuals, Alumni success gallery."
   />
   <GalleryHero/>
   <GalleryPage/>
   
   </>
  )
}

export default GalleryComp