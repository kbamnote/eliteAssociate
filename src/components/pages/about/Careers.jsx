import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Award, Mail } from 'lucide-react';

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'training', name: 'Training & Instruction' },
    { id: 'operations', name: 'Operations' },
    { id: 'technology', name: 'Technology' },
    { id: 'marketing', name: 'Marketing & Sales' }
  ];

  const positions = [
    {
      id: 1,
      title: "Senior Fire Safety Instructor",
      department: "training",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead fire safety training programs and mentor junior instructors.",
      requirements: [
        "Certified Fire Safety Officer",
        "5+ years of training experience",
        "Excellent communication skills"
      ]
    },
    {
      id: 2,
      title: "Industrial Safety Specialist",
      department: "training",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and deliver industrial safety training modules.",
      requirements: [
        "Diploma in Industrial Safety",
        "3+ years of industry experience",
        "Strong technical knowledge"
      ]
    },
    {
      id: 3,
      title: "Operations Manager",
      department: "operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "7+ years",
      description: "Oversee daily operations of training centers and coordinate logistics.",
      requirements: [
        "MBA or equivalent",
        "7+ years of operations experience",
        "Leadership skills"
      ]
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain our learning management system and website.",
      requirements: [
        "Proficiency in React.js",
        "3+ years of frontend experience",
        "UI/UX design skills"
      ]
    },
    {
      id: 5,
      title: "Marketing Executive",
      department: "marketing",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2+ years",
      description: "Drive marketing campaigns and student enrollment initiatives.",
      requirements: [
        "Marketing degree",
        "2+ years of marketing experience",
        "Digital marketing skills"
      ]
    },
    {
      id: 6,
      title: "Content Writer",
      department: "marketing",
      location: "Remote",
      type: "Part-time",
      experience: "1+ years",
      description: "Create educational content for training materials and marketing.",
      requirements: [
        "Excellent writing skills",
        "1+ years of content writing",
        "Knowledge of safety industry"
      ]
    }
  ];

  const benefits = [
    {
      icon: <img src="/growth.svg" alt="Career Growth" className="w-8 h-8" />,
      title: "Career Growth",
      description: "Opportunities for professional development and advancement"
    },
    {
      icon: <img src="/training.svg" alt="Training" className="w-8 h-8" />,
      title: "Training",
      description: "Continuous learning and skill development programs"
    },
    {
      icon: <img src="/team.svg" alt="Team Culture" className="w-8 h-8" />,
      title: "Team Culture",
      description: "Collaborative and inclusive work environment"
    },
    {
      icon: <img src="/performance.svg" alt="Work-Life Balance" className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options"
    }
  ];

  const filteredPositions = activeDepartment === 'all' 
    ? positions 
    : positions.filter(position => position.department === activeDepartment);

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
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a mission-driven organization committed to making the world safer through education and training.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a fulfilling work environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't see a position that fits?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll get in touch.
          </p>
          <button className="bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
            Send Your Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;