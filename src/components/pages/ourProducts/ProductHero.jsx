import React from "react";
import Slider from "react-slick";

import one from '../../../assets/eeeTechnologies.jpg';
import two from '../../../assets/eliteBifs.jpg';
import three from '../../../assets/eliteBim.png';
import four from '../../../assets/eliteJobs.jpg';
import five from '../../../assets/jifsa.png';

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
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow-lg">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-[80vh] relative">
            <img
              src={img}
              alt={`banner-${idx}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductHero;
