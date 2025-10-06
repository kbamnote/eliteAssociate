import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Users } from 'lucide-react';

const TestimonialsSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      role: "Fire Safety Officer",
      company: "Global Manufacturing Inc.",
      content: "The Fire Safety Management course completely transformed my career. I went from an entry-level position to leading safety protocols for a Fortune 500 company within just 18 months.",
      rating: 5,
      image: "student-1"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Industrial Safety Specialist",
      company: "TechSafety Solutions",
      content: "The hands-on training and real-world simulations were invaluable. I felt completely prepared for my role in industrial safety management. The instructors' expertise is unmatched.",
      rating: 5,
      image: "student-2"
    },
    {
      id: 3,
      name: "Robert Garcia",
      role: "Emergency Response Coordinator",
      company: "City Emergency Services",
      content: "Elite Associates provided me with the credentials and confidence to advance in emergency response. The placement support team helped me secure my dream job within weeks of graduation.",
      rating: 5,
      image: "student-3"
    },
    {
      id: 4,
      name: "Lisa Thompson",
      role: "Occupational Health Manager",
      company: "HealthFirst Corporation",
      content: "The comprehensive curriculum and expert instruction gave me a deep understanding of workplace safety. I've been promoted twice since completing the program!",
      rating: 5,
      image: "student-4"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-purple-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from professionals who transformed their careers with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 max-w-3xl mx-auto">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center text-white">
                  <Users className="w-10 h-10" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-purple-600 font-medium text-lg">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
              <motion.button
                onClick={goToPrevious}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-purple-50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <motion.button
                onClick={goToNext}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-purple-50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>
          </div>
          
          <div className="flex justify-center mt-16 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-purple-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSec;