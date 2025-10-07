import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import one from '../../../assets/eeeTechnologies.jpg'
import two from  '../../../assets/eliteBifs.jpg'
import three from  '../../../assets/eliteBim.png'
import four from  '../../../assets/eliteJobs.jpg'
import five from '../../../assets/jifsa.png'

const ProductHero = () => {
  const images = [
   five,
   three,
    one,
    four,
    two,
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`banner-${current}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

     
    </div>
  );
};

export default ProductHero;
