import React from "react";
import heroVideo from "../../../assets/AZm5_8IEeXnFAANsg8S6nA-AZm5_8IE2VF8dXOiFxIcow.mp4"; // 👈 update the path if needed

const HeroVideo = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 text-white">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
    Unlock Your Career Potential with Elite Associates
  </h1>
  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
    Get trained by industry experts and secure your dream job. Elite Associates bridges the gap between learning and employment.
  </p>
  <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-8 py-3 rounded-full transition">
    Start Your Journey
  </button>
</div>

    </section>
  );
};

export default HeroVideo;
