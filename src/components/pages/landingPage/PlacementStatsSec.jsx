import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, TrendingUp, Award } from 'lucide-react';
import ContactFormPopup from '../../common/ContactFormPopup';

const PlacementStatsSec = () => {
  const [isCallbackPopupOpen, setIsCallbackPopupOpen] = useState(false);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50000+",
      label: "Students Trained",
      description: "Professional safety professionals trained since 2008"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Placement Rate",
      description: "Of our graduates find employment within 3 months"
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: "50+",
      label: "Partner Companies",
      description: "Leading organizations that trust our training programs"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "25+",
      label: "Years Experience",
      description: "Of excellence in fire and safety education"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Placement Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impressive results that demonstrate our commitment to your career success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {stat.label}
              </h3>
              
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Career in Fire & Safety?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our training programs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/our-products">
                <motion.button
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Courses
                </motion.button>
              </Link>
              <motion.button
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCallbackPopupOpen(true)}
              >
                Get a Callback
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactFormPopup
        isOpen={isCallbackPopupOpen}
        onClose={() => setIsCallbackPopupOpen(false)}
        title="Request a Callback"
      />
    </section>
  );
};

export default PlacementStatsSec;