import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase } from 'lucide-react';

const Leadership = () => {
  const executives = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Chief Executive Officer",
      bio: "Dr. Kumar brings over 25 years of experience in fire safety management and industrial safety protocols. He established Elite Associates with a vision to create world-class safety training programs.",
      image: "executive-1",
      education: "Ph.D. in Fire Engineering, M.Sc. in Industrial Safety",
      experience: "25+ years"
    },
    {
      name: "Priya Sharma",
      role: "Chief Operating Officer",
      bio: "Priya oversees all operational aspects of Elite Associates. With a background in organizational development and training program management, she ensures our programs meet the highest standards.",
      image: "executive-2",
      education: "MBA, B.Tech in Chemical Engineering",
      experience: "20+ years"
    },
    {
      name: "Amit Patel",
      role: "Chief Technology Officer",
      bio: "Amit leads our digital transformation initiatives and oversees the development of our online learning platforms. He brings extensive experience in educational technology and virtual training solutions.",
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
      name: "Rajesh Gupta",
      role: "Industry Relations Advisor",
      bio: "Former VP at Reliance Industries, provides insights on industrial safety practices and workforce development.",
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
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">Leadership</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This page is currently under development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Leadership;