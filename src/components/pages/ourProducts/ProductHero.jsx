import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../../../assets/eeeTechnologies.jpg";
import two from "../../../assets/eliteBifs.jpg";
import three from "../../../assets/eliteBim.png";
import four from "../../../assets/eliteJobs.jpg";
import five from "../../../assets/jifsa.webp";

const ProductHero = () => {
  const images = [
    // External high-quality banners
    
    // Local brand visuals
    five, three, one, four, two
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
    fade: true, // smooth fading effect
    cssEase: "linear",
  };

  return (
    <section className="w-full max-w-screen overflow-hidden relative mx-auto">
      {/* Animated background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 bottom-10 right-10"></div>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full h-[70vh] md:h-[80vh]">
            <img src={img} alt={`banner-${idx + 1}`} className="w-full h-full object-cover object-center" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

            {/* Hero content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl"
                >
                 
                
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductHero;
