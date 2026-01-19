import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Fire Safety Officer",
      company: "Global Manufacturing Inc.",
      content: "The Fire Safety Management course completely transformed my career. I went from an entry-level position to leading safety protocols for a Fortune 500 company within just 18 months.",
      rating: 5,
      image: "public/Review/photo5.jpeg"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Industrial Safety Specialist",
      company: "TechSafety Solutions",
      content: "The hands-on training and real-world simulations were invaluable. I felt completely prepared for my role in industrial safety management. The instructors' expertise is unmatched.",
      rating: 5,
      image: "public/Review/photo1.jpeg"
    },
    {
      id: 3,
      name: "Vikash Sharma",
      role: "Emergency Response Coordinator",
      company: "City Emergency Services",
      content: "Elite Associates provided me with the credentials and confidence to advance in emergency response. The placement support team helped me secure my dream job within weeks of graduation.",
      rating: 5,
      image: "public/Review/photo9.jpeg"
    },
    {
      id: 4,
      name: "Arjun Nair",
      role: "Occupational Health Manager",
      company: "HealthFirst Corporation",
      content: "The comprehensive curriculum and expert instruction gave me a deep understanding of workplace safety. I've been promoted twice since completing the program!",
      rating: 5,
      image: "public/Review/photo7.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from professionals who transformed their careers with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
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
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
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