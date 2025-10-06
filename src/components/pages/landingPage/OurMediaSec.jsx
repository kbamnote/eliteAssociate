import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurMediaSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = [
    {
      logo: "Business News This Week",
      logoColor: "bg-red-600",
      title: "Imarticus Learning and KPMG Complete Financial Analysis Program for 2,300 Learners, Launch 50th Batch"
    },
    {
      logo: "The Economic Times",
      logoColor: "bg-white",
      title: "Imarticus Learning partners with PwC Academy for GenAI program"
    },
    {
      logo: "The Economic Times",
      logoColor: "bg-white",
      title: "Imarticus Learning, London Business School launch CFO Programme for financial leaders"
    },
    {
      logo: "India Today",
      logoColor: "bg-white",
      title: "IIT Roorkee expands strategic partnership with Imarticus Learning to introduce more industry-focused programmes"
    },
    {
      logo: "Economic Times",
      logoColor: "bg-white",
      title: "Economic Times Story"
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= mediaItems.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? mediaItems.length - 4 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-teal-600">media</span> presence
          </h2>
          <p className="text-xl text-gray-600">
            We make careers... and headlines
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-80 flex flex-col">
                    {/* Logo Area */}
                    <div className="mb-6 h-24 flex items-center justify-center">
                      {item.logo === "Business News This Week" ? (
                        <div className="bg-red-600 text-white px-6 py-4 rounded-lg text-center w-full">
                          <p className="text-xs mb-1">A leading business news portal</p>
                          <p className="text-xl font-bold">Business News</p>
                          <p className="text-xl font-bold">This Week</p>
                        </div>
                      ) : item.logo === "India Today" ? (
                        <div className="text-center">
                          <p className="text-4xl font-bold text-red-600">INDIA</p>
                          <p className="text-4xl font-bold text-red-600">TODAY</p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-sm">ET</span>
                          </div>
                          <span className="text-2xl font-serif text-gray-800">The Economic Times</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <div className="flex-grow flex items-center">
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: mediaItems.length - 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-teal-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMediaSec;