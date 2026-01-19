import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Users, Target } from 'lucide-react';

const OurHistory = () => {
  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description: "Elite Associates was founded with a vision to revolutionize fire and safety training in India.",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2010",
      title: "First Certification Program",
      description: "Launched our flagship Fire Safety Officer certification program with 50 students.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2012",
      title: "Industry Partnership",
      description: "Established partnerships with leading industrial companies for practical training.",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2015",
      title: "National Recognition",
      description: "Received the National Safety Excellence Award from the Government of India.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Expanded our training programs to include international safety standards.",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online training platforms to reach students across the globe.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "10,000+ Graduates",
      description: "Celebrated our 10,000th graduate placement in leading organizations.",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Opened our state-of-the-art Innovation and Research Center for Safety Technology.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of milestones and achievements that shaped Elite Associates into India's leading fire and safety training institute.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Year */}
                <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-end md:pr-8">
                  <div className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        {milestone.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100 text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100 text-lg">Training Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100 text-lg">Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 text-lg">Industry Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurHistory;