import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import ResponsiveImage from '../../common/ResponsiveImage';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample gallery data - in a real app, this would come from an API or CMS
  const galleryItems = [
    {
      id: 1,
      title: "Fire Safety Training Session",
      category: "Training",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&h=600",
      description: "Hands-on fire extinguisher training for new recruits"
    },
    {
      id: 2,
      title: "Industrial Safety Workshop",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=600",
      description: "Advanced industrial safety protocols workshop"
    },
    {
      id: 3,
      title: "Emergency Response Drill",
      category: "Drill",
      image: "https://images.unsplash.com/photo-1588776813677-78b3e9d2e5b7?auto=format&fit=crop&w=800&h=600",
      description: "Annual emergency response drill with local fire department"
    },
    {
      id: 4,
      title: "Safety Equipment Showcase",
      category: "Equipment",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&h=600",
      description: "Latest safety equipment on display at our facility"
    },
    {
      id: 5,
      title: "Graduation Ceremony",
      category: "Event",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=600",
      description: "Congratulations to our latest batch of certified professionals"
    },
    {
      id: 6,
      title: "Instructor Training",
      category: "Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=600",
      description: "Our instructors receiving advanced training certification"
    },
    {
      id: 7,
      title: "Safety Seminar",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=600",
      description: "Industry experts sharing insights on workplace safety"
    },
    {
      id: 8,
      title: "Practical Assessment",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&h=600",
      description: "Students demonstrating their practical skills"
    }
  ];

  const categories = ["All", "Training", "Workshop", "Drill", "Equipment", "Event", "Seminar", "Assessment"];
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