import React, { useState, useEffect } from 'react';
import { Briefcase, Handshake, Settings, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const PlacementProgramSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      icon: Briefcase,
      title: 'Job Search Assistance',
      description: 'Get personlised live support in crafting applications, preparing for interviews, and finding opportunities for you via the Imarticus job portal with over 3500+ hiring partners.',
      bgImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      iconBg: 'bg-emerald-300'
    },
    {
      icon: Handshake,
      title: 'Personal Branding',
      description: 'Create and communicate a unique professional identity to make you stand out. Learn what to say and how to say it to get through the door.',
      bgImage: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
      iconBg: 'bg-emerald-300'
    },
    {
      icon: Settings,
      title: 'Profile Enhancement',
      description: 'Refine your resumes and LinkedIn profiles to highlight your skills and achievements.',
      bgImage: 'linear-gradient(135deg, #37474f 0%, #263238 100%)',
      iconBg: 'bg-emerald-300'
    },
    {
      icon: Headphones,
      title: 'Career Counselling',
      description: 'Get personalised guidance and mentorship to effectively navigate your career path and achieve your career goals.',
      bgImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      iconBg: 'bg-emerald-300'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cards.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(cards[(currentIndex + i) % cards.length]);
    }
    return visible;
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-emerald-600">Holding your hand</span> every step of the way
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Our placement program won't let you down
          </p>
        </div>

        {/* Desktop View - All 4 Cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-96"
                style={{ background: card.bgImage }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="relative h-full p-8 flex flex-col">
                  <div className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet View - 2 Cards */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 mb-8">
          {getVisibleCards().slice(0, 2).map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-96"
                style={{ background: card.bgImage }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="relative h-full p-8 flex flex-col">
                  <div className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View - 1 Card Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div
                      className="relative rounded-2xl overflow-hidden shadow-xl h-96"
                      style={{ background: card.bgImage }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                      <div className="relative h-full p-6 flex flex-col">
                        <div className={`${card.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                          <Icon className="w-7 h-7 text-gray-800" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Mobile & Tablet */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Tablet Navigation Arrows */}
        <div className="hidden md:block lg:hidden relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-emerald-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-emerald-50 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator - Mobile & Tablet */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-emerald-600 w-8 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementProgramSec;