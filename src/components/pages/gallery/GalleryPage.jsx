import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ResponsiveImage from '../../common/ResponsiveImage';
// Real image assets
import trainingOne from '../../../assets/trainingOne.jpeg';
import trainingThree from '../../../assets/training3.jpeg';
import trainingFour from '../../../assets/trainingFour.jpeg';
import trainingSix from '../../../assets/trainingSix.jpeg';
import directorOne from '../../../assets/directorOne.jpeg';
import directorTwo from '../../../assets/directorTwo.jpeg';
import directorThree from '../../../assets/directorThree.jpeg';
import directorFour from '../../../assets/directorFour.jpeg';
import directorFive from '../../../assets/directorFive.jpeg';
import directorSix from '../../../assets/directorSix.jpeg';
import teamOne from '../../../assets/teamOne.jpeg';
import teamTwo from '../../../assets/teamTwo.jpeg';
import teamFive from '../../../assets/teamFive.jpeg';
import teamSix from '../../../assets/teamSix.jpeg';
import teamSeven from '../../../assets/teamSeven.jpeg';
import officeTwo from '../../../assets/officeTwo.jpeg';
import officeThree from '../../../assets/officeThree.jpeg';
import officeFour from '../../../assets/officeFour.jpeg';
import officeTen from '../../../assets/officeTen.jpeg';
import awardOne from '../../../assets/awardOne.jpeg';
import awardTwo from '../../../assets/awardTwo.jpeg';
import awardThree from '../../../assets/awardThree.jpeg';
import awardFour from '../../../assets/awardFour.jpeg';
import awardFive from '../../../assets/awardFive.jpeg';
import awardSix from '../../../assets/awardSix.jpeg';
import awardSeven from '../../../assets/awardSeven.jpeg';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real gallery data using local assets
  const galleryItems = [
    // Training
    { id: 1, title: 'Fire Safety Training - Session 1', category: 'Training', image: trainingOne, description: 'Hands-on fire safety and extinguisher handling.' },
    { id: 2, title: 'Fire Safety Training - Session 3', category: 'Training', image: trainingThree, description: 'Advanced training and emergency preparedness.' },
    { id: 3, title: 'Fire Safety Training - Session 4', category: 'Training', image: trainingFour, description: 'Practical drills and evacuation procedures.' },
    { id: 4, title: 'Fire Safety Training - Session 6', category: 'Training', image: trainingSix, description: 'Team-based training and safety audits.' },

    // Directors
    { id: 5, title: 'Director - Portrait 1', category: 'Directors', image: directorOne, description: 'Leadership and guidance at Elite Associate.' },
    { id: 6, title: 'Director - Portrait 2', category: 'Directors', image: directorTwo, description: 'Visionary leadership and strategy.' },
    { id: 7, title: 'Director - Portrait 3', category: 'Directors', image: directorThree, description: 'Driving excellence across departments.' },
    { id: 8, title: 'Director - Portrait 4', category: 'Directors', image: directorFour, description: 'Committed to quality and innovation.' },
    { id: 9, title: 'Director - Portrait 5', category: 'Directors', image: directorFive, description: 'Mentorship and organizational growth.' },
    { id: 15, title: 'Director - Portrait 6', category: 'Directors', image: directorSix, description: 'Leadership and operational excellence.' },

    // Team
    { id: 10, title: 'Team - Group Photo 1', category: 'Team', image: teamOne, description: 'Our dedicated team at work.' },
    { id: 11, title: 'Team - Group Photo 2', category: 'Team', image: teamTwo, description: 'Collaboration and teamwork in action.' },
    { id: 12, title: 'Team - Group Photo 5', category: 'Team', image: teamFive, description: 'Celebrating milestones together.' },
    { id: 13, title: 'Team - Group Photo 6', category: 'Team', image: teamSix, description: 'Committed to safety and excellence.' },
    { id: 14, title: 'Team - Group Photo 7', category: 'Team', image: teamSeven, description: 'Building a culture of success.' },

    // Office
   
    { id: 16, title: 'Office - Workspace 2', category: 'Office', image: officeTwo, description: 'Modern workspace and facilities.' },
    { id: 17, title: 'Office - Workspace 3', category: 'Office', image: officeThree, description: 'Collaborative environment and meeting spaces.' },
    { id: 18, title: 'Office - Lounge Area', category: 'Office', image: officeFour, description: 'Comfortable lounge for brainstorming.' },
    { id: 19, title: 'Office - Conference 10', category: 'Office', image: officeTen, description: 'Conference room prepared for events.' },
    
    // Awards
    { id: 20, title: 'Award - One', category: 'Awards', image: awardOne, description: 'Celebrating achievements and recognitions.' },
    { id: 21, title: 'Award - Two', category: 'Awards', image: awardTwo, description: 'Honoring excellence in performance.' },
    { id: 22, title: 'Award - Three', category: 'Awards', image: awardThree, description: 'Recognition of outstanding contributions.' },
    { id: 23, title: 'Award - Four', category: 'Awards', image: awardFour, description: 'Celebrating milestones and success.' },
    { id: 24, title: 'Award - Five', category: 'Awards', image: awardFive, description: 'Acknowledging team achievements.' },
    { id: 25, title: 'Award - Six', category: 'Awards', image: awardSix, description: 'Distinction for innovation and quality.' },
    { id: 26, title: 'Award - Seven', category: 'Awards', image: awardSeven, description: 'Proud moments and honors.' },
  ];

  const categories = ["All", "Training", "Directors", "Team", "Office", "Awards"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our training sessions, events, and achievements
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative overflow-hidden">
                <ResponsiveImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  width={400}
                  height={224}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button
              className="absolute left-6 text-white hover:text-gray-300 transition-colors"
              onClick={goToPrevious}
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              className="absolute right-6 text-white hover:text-gray-300 transition-colors"
              onClick={goToNext}
            >
              <ChevronRight size={32} />
            </button>
            
            <div className="max-w-4xl w-full max-h-[90vh]">
              <ResponsiveImage
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                width={800}
                height={600}
                quality={95}
                loading="eager"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-1">{selectedImage.description}</p>
                <span className="inline-block bg-purple-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;