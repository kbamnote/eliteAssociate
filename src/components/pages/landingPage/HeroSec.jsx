import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSec = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Jayesh Badani',
      title: 'Fresher Upskilled with',
      program: 'Postgraduate Program in Banking and Finance (PGBAF)',
      status: 'Placed at:',
      company: 'HDFC BANK',
      companyColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Lynel Serrao',
      title: 'Upskilled with ISB Executive',
      program: "Education's CFO Programme",
      status: 'Promoted as:',
      role: 'Chief Financial Officer',
      company: '',
      companyColor: 'bg-gray-800',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Vishakha Ghodake',
      title: 'US CMA cleared in first attempt',
      program: '',
      status: 'Works at:',
      company: 'COSMOS BANK',
      companyColor: 'bg-red-600',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Amit Sharma',
      title: 'Fresher Investment',
      program: 'Operations (CIBO)',
      status: 'Placed at:',
      company: 'MORGAN STANLEY',
      companyColor: 'bg-blue-800',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return slides;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                <span className="bg-emerald-400 px-2 inline-block transform -skew-x-6">Real Learning</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                that delivers your
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                career goals
              </h2>
              <p className="text-lg text-gray-600">
                <span className="font-semibold">Unmatched Outcomes</span> from job-ready, certification, and executive programs
              </p>
            </div>

            <button className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
              Explore Our Programs
              <span className="text-2xl">→</span>
            </button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">10 Lakh+</h3>
                <p className="text-gray-600 font-medium">Careers Transformed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">#1 in</h3>
                <p className="text-gray-600 font-medium">Job-Ready Programs</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">3500+</h3>
                <p className="text-gray-600 font-medium">Hiring Partners</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">3X</h3>
                <p className="text-gray-600 font-medium">Salary Growth</p>
              </div>
            </div>

            {/* Ratings */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="font-bold text-gray-900">4.7</span>
                <span className="text-blue-600 font-semibold">Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="font-bold text-gray-900">4.5</span>
                <span className="text-blue-700 font-semibold">facebook</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="font-bold text-gray-900">4.5</span>
                <span className="text-green-600 font-semibold">Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="font-bold text-gray-900">4.6</span>
                <span className="text-green-700 font-semibold">CourseReport</span>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="flex gap-4 items-center justify-center lg:justify-end">
              {/* Carousel Container */}
              <div className="relative w-full max-w-3xl overflow-hidden">
                <div className="flex gap-4 transition-transform duration-500 ease-in-out">
                  {getVisibleSlides().map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full sm:w-80 bg-gradient-to-b from-teal-100 to-teal-400 rounded-3xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105"
                    >
                      <div className="space-y-4">
                        <div className="text-sm text-gray-800 font-semibold min-h-16">
                          {testimonial.title}
                          {testimonial.program && (
                            <div className="font-bold">{testimonial.program}</div>
                          )}
                        </div>
                        
                        <div className="text-xs text-gray-700 font-semibold">
                          {testimonial.status}
                        </div>

                        {testimonial.company && (
                          <div className={`${testimonial.companyColor} text-white px-4 py-2 rounded-lg text-center font-bold text-sm`}>
                            {testimonial.company}
                          </div>
                        )}
                        
                        {testimonial.role && (
                          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-center font-bold text-sm">
                            {testimonial.role}
                          </div>
                        )}

                        <div className="relative aspect-square rounded-2xl overflow-hidden mt-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-bold text-xl">
                              {testimonial.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-teal-800 w-8' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;