import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Users, Headphones, MessageCircle, Zap } from 'lucide-react';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function ContactHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Phone, value: '+91 8855885807', label: 'Phone' },
    { icon: Mail, value: 'info@eliteassociates.in', label: 'Email' },
    { icon: Clock, value: 'Mon–Fri', label: '9:00 AM – 6:00 PM' },
    { icon: Users, value: '5000+', label: 'Learners Helped' }
  ];

  const features = [
    { icon: Headphones, text: 'Dedicated Support' },
    { icon: MessageCircle, text: 'Quick Responses' },
    { icon: MapPin, text: 'Multiple Locations' }
  ];

  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-20 -left-4"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-20 right-0"></div>
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2 text-purple-700">
              <Phone className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">We’re here to help</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Get In Touch With Elite Associate
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Reach out for admissions, programs, placements, or partnerships. Our team will get back to you quickly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact-info" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition">
                Get a Callback
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <f.icon className="w-5 h-5 text-purple-600" />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Carousel (like BlogHero) */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative h-full bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl border-2 border-purple-200 overflow-hidden shadow-2xl">
                {/* Image Slides */}
                <div className="relative h-full">
                  {[
                    'https://images.unsplash.com/photo-1590650046871-92c887180603?w=1200&q=80&auto=format&fit=crop', // support team
                    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop', // handshake partnership
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop' // office meeting
                  ].map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <ResponsiveImage
                        src={img}
                        alt={`Contact hero ${index + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover"
                        quality={90}
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-purple-200 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-600 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold text-lg">Talk to Our Team</div>
                      <div className="text-gray-600 text-sm">Fast support for admissions and placements</div>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'w-8 bg-purple-700' : 'w-2 bg-purple-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}