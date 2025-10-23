import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const TestimonalSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      image: '👨‍💼',
      name: 'Monu Verma',
      role: "IIM Lucknow's Global Senior Leadership Programme",
      specialization: 'Specialization: Chief Financial Officer',
      testimonial:
        'The Global Senior Leadership Programme by IIM Lucknow (Chief Financial Officers Specialization) was transformative. The curriculum blended',
      highlight1: 'rigorous academics with practical industry insights',
      highlight2: 'networking opportunities were invaluable',
      fullText:
        ', enhancing my leadership skills. The networking opportunities were invaluable. Special thanks to the Program Coordinator whose exceptional dedication made the experience seamless and engaging.',
      company: '',
      shortTestimonial: 'Imarticus has offered an invaluable overall experience',
    },
    {
      id: 2,
      image: '👩‍💼',
      name: 'Shamamanaaz Khan',
      role: 'Certified Investment Banking Operations Professional',
      specialization: '(CIBOP)',
      testimonial: 'The training at Imarticus was',
      highlight1: 'guided by exceptional mentors',
      highlight2: '',
      fullText:
        ' who played a key role in helping me secure placement. Their guidance and the opportunity to learn from industry experts were instrumental in my career growth.',
      company: 'NOMURA',
      companyColor: 'text-red-600',
      shortTestimonial: 'Guided by exceptional mentors',
    },
    {
      id: 3,
      image: '👨‍💼',
      name: 'Rahul Sharma',
      role: 'Financial Analytics Professional',
      specialization: 'Specialization: Data Analytics',
      testimonial: 'The comprehensive curriculum and',
      highlight1: 'hands-on projects',
      highlight2: 'industry connections',
      fullText:
        ' provided by Imarticus were exceptional. The hands-on projects and industry connections helped me transition into my dream role seamlessly.',
      company: 'GOLDMAN SACHS',
      companyColor: 'text-blue-600',
      shortTestimonial: 'Career transformation through excellence',
    },
    {
      id: 4,
      image: '👩‍💼',
      name: 'Priya Patel',
      role: 'Business Analytics Graduate',
      specialization: 'Specialization: Business Intelligence',
      testimonial: 'Imarticus provided',
      highlight1: 'world-class training',
      highlight2: 'personalized mentorship',
      fullText:
        ' that transformed my career. The world-class training and personalized mentorship prepared me for the competitive industry landscape.',
      company: 'JP MORGAN',
      companyColor: 'text-blue-800',
      shortTestimonial: 'Excellence in education and support',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const current = testimonials[currentIndex];
  const next = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="w-full bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-800 py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Watch and read, what our alumni have to say
          </h2>
          <p className="text-lg md:text-xl text-teal-100 mt-4">
            Real stories of achievement and growth
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-3 gap-6">
            {/* Left */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[500px] transform hover:scale-105 transition-all duration-300">
              <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="text-9xl mb-4">{current.image}</div>
                <p className="text-sm text-gray-600 text-center italic">
                  "{current.shortTestimonial}"
                </p>
              </div>
            </div>

            {/* Middle */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[500px] p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {current.testimonial}{' '}
                    <span className="text-teal-600 font-semibold">
                      {current.highlight1}
                    </span>
                    {current.highlight2 && (
                      <>
                        , enhancing my leadership skills. The{' '}
                        <span className="text-teal-600 font-semibold">
                          {current.highlight2}
                        </span>
                      </>
                    )}
                    {current.fullText}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-auto">
                  <h3 className="text-2xl font-bold text-teal-700 mb-2">
                    {current.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{current.role}</p>
                  <p className="text-gray-500 text-sm">{current.specialization}</p>
                  {current.company && (
                    <div className="mt-4">
                      <p className="text-teal-600 font-semibold text-sm mb-1">
                        Placed at:
                      </p>
                      <p className={`text-2xl font-bold ${current.companyColor}`}>
                        {current.company}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[500px] transform hover:scale-105 transition-all duration-300">
              <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="text-9xl mb-4">{next.image}</div>
                <p className="text-sm text-gray-600 text-center italic">
                  "{next.shortTestimonial}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={goToPrevious}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/our-products">
            <button className="group bg-white hover:bg-teal-50 text-teal-700 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <span className="text-lg">Explore Our Courses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonalSec;
