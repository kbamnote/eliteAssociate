import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase } from 'lucide-react';

const Leadership = () => {
  const executives = [
    {
      name: "Dr. Robert Johnson",
      role: "Founder & Chief Executive Officer",
      bio: "Dr. Johnson brings over 25 years of experience in fire safety management and industrial safety protocols. He established Elite Associates with a vision to create world-class safety training programs.",
      image: "executive-1",
      education: "Ph.D. in Fire Engineering, M.Sc. in Industrial Safety",
      experience: "25+ years"
    },
    {
      name: "Sarah Williams",
      role: "Chief Operating Officer",
      bio: "Sarah oversees all operational aspects of Elite Associates. With a background in organizational development and training program management, she ensures our programs meet the highest standards.",
      image: "executive-2",
      education: "MBA, B.Tech in Chemical Engineering",
      experience: "20+ years"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael leads our digital transformation initiatives and oversees the development of our online learning platforms. He brings extensive experience in educational technology and virtual training solutions.",
      image: "executive-3",
      education: "M.Tech in Computer Science, B.E. in Electronics",
      experience: "18+ years"
    }
  ];

  const advisors = [
    {
      name: "Dr. Priya Sharma",
      role: "Safety Standards Advisor",
      bio: "Former Director of National Safety Council, advises on regulatory compliance and safety standards.",
      image: "advisor-1"
    },
    {
      name: "James Wilson",
      role: "Industry Relations Advisor",
      bio: "Former VP at ExxonMobil, provides insights on industrial safety practices and workforce development.",
      image: "advisor-2"
    },
    {
      name: "Dr. Anil Kumar",
      role: "Academic Advisor",
      bio: "Dean of Fire Engineering at IIT, guides curriculum development and academic excellence.",
      image: "advisor-3"
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Leadership</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders and advisors who guide Elite Associates toward excellence in fire and safety education.
          </p>
        </motion.div>

        {/* Executive Leadership */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Briefcase className="text-purple-600" />
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The executive team driving our mission forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-bold">{executive.image.replace('-', ' ')}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{executive.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{executive.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{executive.bio}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Education:</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{executive.education}</p>
                    
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Experience:</span>
                    </div>
                    <p className="text-sm text-gray-600">{executive.experience}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Users className="text-purple-600" />
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry experts guiding our strategic direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{advisor.role}</p>
                  <p className="text-gray-600 text-sm">{advisor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;