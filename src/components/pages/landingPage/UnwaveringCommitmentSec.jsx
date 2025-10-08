import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveImage from '../../common/ResponsiveImage';

const commitments = [
  {
    title: "Certified by the best",
    desc: "Learn from prestigious institutions like IIMs, IITs, ISB, and XLRI for an unmatched experience.",
    img: "https://webcdn.imarticus.org/iimu/careertransitions2.webp",
  },
  {
    title: "Real-world learning from 650+ industry experts",
    desc: "Get real-world learning by professionals with 15+ years of experience at top global firms.",
    img: "https://webcdn.imarticus.org/iimu/careertransitions2.webp",
  },
  {
    title: "3,500+ hiring partners",
    desc: "70% of our learners land jobs at top global companies through our vast hiring network.",
    img: "https://webcdn.imarticus.org/iimu/careertransitions2.webp",
  },
  {
    title: "1,00,000+ career transformations",
    desc: "We place nearly 15 students every day at companies like JP Morgan, Deloitte, PwC, and Amazon.",
    img: "https://webcdn.imarticus.org/iimu/careertransitions2.webp",
  },
];

const UnwaveringCommitmentSec = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Unwavering commitment to exceptional education
      </h2>
      <p className="text-gray-600 mb-10 text-lg">
        Makes us India’s #1 professional institute
      </p>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {commitments.map((item, index) => (
            <div key={index} className="px-4">
              <div className="h-[400px] bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col justify-between">
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <ResponsiveImage
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={160}
                    className="rounded-b-2xl object-cover w-full h-40"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button className="mt-12 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center mx-auto transition">
        View Programs <ChevronRight className="ml-2 w-5 h-5" />
      </button>
    </section>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center bg-emerald-700 hover:bg-emerald-800 !rounded-full !w-10 !h-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="text-white w-5 h-5" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center bg-emerald-700 hover:bg-emerald-800 !rounded-full !w-10 !h-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="text-white w-5 h-5" />
    </div>
  );
};

export default UnwaveringCommitmentSec;
