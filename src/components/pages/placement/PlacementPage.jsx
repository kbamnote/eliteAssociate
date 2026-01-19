import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, TrendingUp, Award, Shield, CheckCircle } from 'lucide-react';

const PlacementPage = () => {
  const stats = [
    { number: "95%", label: "Placement Rate" },
    { number: "50000+", label: "Graduates Placed" },
    { number: "50+", label: "Partner Companies" },
    { number: "25+", label: "Years Experience" }
  ];

  const partners = [
    "Global Manufacturing Inc.", "TechSafety Solutions", "City Emergency Services", 
    "Industrial Safety Corp", "FireTech Industries", "HealthFirst Corporation",
    "SafeWork Enterprises", "ProSafety Group", "Emergency Response Systems",
    "Industrial Protection Ltd", "FireGuard Services", "Workplace Safety Inc."
  ];

  const processSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Assessment",
      description: "We evaluate your skills and interests to match you with the right opportunities."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Training & Preparation",
      description: "Receive specialized training to excel in interviews and on the job."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Company Matching",
      description: "We connect you with companies that align with your career goals."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Job Placement",
      description: "Secure your position with ongoing support for career growth."
    }
  ];

  const successStories = [
    {
      name: "Pran Wasnik",
      role: "Fire Safety Officer",
      company: "Global Manufacturing Inc.",
      quote: "Elite Associates helped me transition from an entry-level position to leading safety protocols for a Fortune 500 company within 18 months.",
      image: "public/Review/photo5.jpeg"
    },
    {
      name: "Nupur Mahore",
      role: "Industrial Safety Specialist",
      company: "TechSafety Solutions",
      quote: "The placement support team connected me with my dream job. I'm now managing safety for a major tech company.",
      image: "public/Review/photo3.jpeg"
    },
    {
      name: "Purvanshu khapra",
      role: "Emergency Response Coordinator",
      company: "City Emergency Services",
      quote: "Within weeks of graduation, I had multiple job offers. Elite Associates truly delivers on their placement promise.",
      image: "student-3"
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
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">Placement</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just train you - we help you launch and advance your career in fire and safety
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Placement Process */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure your success in the job market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step {index + 1}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Companies */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are employed by top organizations in fire and safety
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-gray-700 font-medium text-center">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real careers transformed by our placement support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center text-white">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-blue-600 font-medium">{story.role}</p>
                    <p className="text-gray-600 text-sm">{story.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 italic">"{story.quote}"</p>
                
                <div className="flex items-center gap-1 mt-6 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Successfully Placed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementPage;