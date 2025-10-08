import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../../../assets/eeeTechnologies.jpg";
import two from "../../../assets/eliteBifs.jpg";
import three from "../../../assets/eliteBim.png";
import four from "../../../assets/eliteJobs.jpg";
import five from "../../../assets/jifsa.webp";

const ProductHero = () => {
  const images = [five, three, one, four, two];

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
      {/* Carousel */}
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full h-[70vh] md:h-[80vh] bg-gray-100"
          >
            <img
              src={img}
              alt={`banner-${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductHero;
