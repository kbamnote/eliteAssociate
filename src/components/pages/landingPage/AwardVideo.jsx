import React from "react";
import { motion } from "framer-motion";
import { Award, PlayCircle } from "lucide-react";
import awardVideo from "../../../assets/awardVideo.mp4";

const AwardVideo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 text-blue-600 mb-3">
            <Award className="w-6 h-6" />
            <span className="font-semibold">Awards & Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Celebrating Excellence in Fire & Safety
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Watch highlights from our recent award ceremony recognizing outstanding achievements
            and our commitment to industry-leading training and student success.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Portrait Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-[300px] w-full aspect-[9/16]">
              <video
                src={awardVideo}
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
              />
              <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                <PlayCircle className="w-4 h-4" />
                Award Highlights
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                Our Journey of Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Elite Associates has been consistently recognized for excellence in training,
                mentorship, and placement support. These awards reflect our dedication to empowering
                students with practical skills and real-world opportunities.
              </p>
              <ul className="space-y-3">
                {[
                  "National accolades for safety education and industry collaboration",
                  "Outstanding placement records across top companies",
                  "Innovative, hands-on curriculum designed by experts",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardVideo;
