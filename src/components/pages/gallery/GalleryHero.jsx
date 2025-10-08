import React, { useState, useEffect } from 'react';
import { ArrowRight, Camera, Image, Award, CheckCircle, Star, Sparkles, Users, Calendar, Trophy } from 'lucide-react';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function GalleryHero() {
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
    { icon: Image, value: '2000+', label: 'Photos' },
    { icon: Users, value: '150+', label: 'Events Covered' },
    { icon: Trophy, value: '50+', label: 'Achievements' },
    { icon: Calendar, value: '5+', label: 'Years of Memories' }
  ];

  const features = [
    'Training Sessions',
    'Corporate Events',
    'Success Stories',
    'Team Activities'
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-20 -left-4"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-20 right-0"></div>
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2 text-purple-700">
              <Camera className="w-4 h-4 fill-purple-600 text-purple-600" />
              <span className="text-sm font-medium">Capturing Moments of Excellence</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Moments That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500 animate-gradient">
                  Define Success
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Explore our vibrant collection of memories, milestones, and celebrations. Every image tells a story of growth, achievement, and community.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700 transition-all duration-300 hover:text-purple-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Explore Gallery
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-purple-600 rounded-full text-purple-700 font-semibold hover:bg-purple-50 transition-all duration-300">
                Recent Events
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative h-full bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl border-2 border-purple-200 overflow-hidden shadow-2xl">
                {/* Image Slides */}
                <div className="relative h-full">
                  {[
                    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
                    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
                    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
                  ].map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <ResponsiveImage
                        src={img}
                        alt={`Gallery moment ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        quality={90}
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-purple-200 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold text-lg">Inspiring Moments</div>
                      <div className="text-gray-600 text-sm">Celebrating Excellence Together</div>
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

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-700 to-purple-600 rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-90">Events Captured</div>
                </div>
              </div>

              {/* Additional Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-purple-200 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-900">New: 50+ Photos</span>
                </div>
              </div>

              {/* Photo Frame Decoration */}
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700"></div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(128, 90, 213, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128, 90, 213, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}