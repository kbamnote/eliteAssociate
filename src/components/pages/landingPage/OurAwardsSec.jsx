import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const OurAwardsSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      logo: "ET Business Leaders",
      year: "2024",
      title: "Outstanding Education Company of the Year",
      color: "from-slate-700 to-slate-900"
    },
    {
      logo: "World Education Summit",
      year: "2024",
      edition: "30th elets",
      title: "Best Education Provider in Finance",
      color: "from-red-600 to-red-800"
    },
    {
      logo: "Education Leaders",
      year: "2024",
      edition: "8th",
      organization: "OBSERVER NOW",
      title: "Outstanding Education Company for Data Science and Analytics in 2024",
      color: "from-blue-600 to-blue-800"
    },
    {
      logo: "GSV 150",
      year: "2024",
      title: "One of the World's Most Transformational Growth Companies in Digital Learning and Workforce Skilling in 2024",
      color: "from-blue-500 to-blue-700"
    },
    {
      logo: "Best EdTech",
      year: "2024",
      title: "Best EdTech Platform",
      color: "from-teal-600 to-teal-800"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= awards.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? awards.length - 4 : prev - 1
    );
  };

  const renderLogo = (award) => {
    if (award.logo === "ET Business Leaders") {
      return (
        <div className={`bg-gradient-to-br ${award.color} text-white p-6 rounded-xl h-full flex flex-col items-center justify-center`}>
          <div className="border-2 border-yellow-400 px-3 py-1 rounded mb-2">
            <span className="text-yellow-400 font-bold">ET</span>
          </div>
          <p className="text-2xl font-bold text-yellow-400">BUSINESS</p>
          <p className="text-2xl font-bold text-yellow-400">LEADERS</p>
          <p className="text-3xl font-bold text-yellow-400 mt-2">{award.year}</p>
        </div>
      );
    } else if (award.logo === "World Education Summit") {
      return (
        <div className="bg-white p-6 rounded-xl h-full flex flex-col items-center justify-center border-2 border-gray-200">
          <p className="text-sm text-gray-600 mb-1">{award.edition}</p>
          <p className="text-3xl font-bold text-red-600">WORLD</p>
          <p className="text-3xl font-bold text-red-600">EDUCATION</p>
          <p className="text-3xl font-bold text-red-600">SUMMIT</p>
          <p className="text-4xl font-bold text-gray-800 mt-2">{award.year}</p>
        </div>
      );
    } else if (award.logo === "Education Leaders") {
      return (
        <div className="bg-white p-6 rounded-xl h-full flex flex-col items-center justify-center border-2 border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex flex-col">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                  ))}
                </div>
              ))}
            </div>
            <span className="text-xl font-bold text-blue-600">N</span>
          </div>
          <p className="text-xs text-gray-600 mb-2">{award.organization}</p>
          <p className="text-sm text-gray-700 mb-1">{award.edition}</p>
          <p className="text-2xl font-bold text-black">Education</p>
          <p className="text-2xl font-bold text-black">Leaders</p>
          <p className="text-sm text-gray-600">Conclave & Awards</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{award.year}</p>
        </div>
      );
    } else if (award.logo === "GSV 150") {
      return (
        <div className="bg-white p-6 rounded-xl h-full flex items-center justify-center border-2 border-gray-200">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-4 border-blue-600 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-600">{award.year}</p>
                <p className="text-4xl font-bold text-blue-600">GSV</p>
                <p className="text-5xl font-bold text-blue-600">150</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`bg-gradient-to-br ${award.color} text-white p-6 rounded-xl h-full flex flex-col items-center justify-center`}>
          <Award size={48} className="mb-3" />
          <p className="text-2xl font-bold">{award.logo}</p>
          <p className="text-xl font-semibold mt-2">{award.year}</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-teal-600">awards</span> speak for themselves!
          </h2>
          <p className="text-xl text-gray-600">
            Prestigious honours, a track record of excellence
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
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-96 flex flex-col">
                    {/* Logo Area */}
                    <div className="h-56">
                      {renderLogo(award)}
                    </div>

                    {/* Title */}
                    <div className="p-6 flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                      <p className="text-gray-700 text-center text-base leading-relaxed font-medium">
                        {award.title}
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
            {Array.from({ length: awards.length - 3 }).map((_, index) => (
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

export default OurAwardsSec;