import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Import testimonial images
import photo6 from '../../assets/images/Review/photo6.jpeg';
import photo4 from '../../assets/images/Review/photo4.jpeg';
import photo10 from '../../assets/images/Review/photo10.jpeg';
import photo3 from '../../assets/images/Review/photo3.jpeg';
import photo11 from '../../assets/images/Review/photo11.jpeg';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "TCS",
      image: photo6,
      rating: 5,
      text: "Elite Associate transformed my career completely. The training was industry-focused and the placement assistance was exceptional. I got placed in TCS with a great package!",
      course: "Full Stack Development"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Data Analyst",
      company: "Infosys",
      image: photo4,
      rating: 5,
      text: "The best decision I made was joining Elite Associate. The trainers are industry experts and the curriculum is updated with latest technologies. Highly recommended!",
      course: "Data Science"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "DevOps Engineer",
      company: "Wipro",
      image: photo10,
      rating: 5,
      text: "100% placement assistance is not just a promise here, it's a reality. The support team helped me throughout the placement process. Thank you Elite Associate!",
      course: "DevOps & Cloud"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "UI/UX Designer",
      company: "Accenture",
      image: photo3,
      rating: 5,
      text: "The practical approach to learning and live project experience gave me the confidence to crack interviews. Elite Associate is truly the best training institute!",
      course: "UI/UX Design"
    },
    {
      id: 5,
      name: "Vikash Singh",
      role: "Cybersecurity Analyst",
      company: "IBM",
      image: photo11,
      rating: 5,
      text: "From zero knowledge to getting placed in IBM, Elite Associate made it possible. The mentorship and guidance throughout the journey was outstanding.",
      course: "Cybersecurity"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students who transformed their careers with Elite Associate
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative px-16">
          {/* Navigation Buttons - Outside the card */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 z-10 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 z-10 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      <Quote className="w-8 h-8 text-blue-500" />
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>

                    <div className="flex justify-center md:justify-start items-center gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentTestimonial].course} Graduate
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">5000+</div>
            <div className="text-sm text-gray-500">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">98%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">500+</div>
            <div className="text-sm text-gray-500">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">4.9/5</div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;