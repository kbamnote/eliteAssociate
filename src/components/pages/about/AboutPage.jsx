import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, Lightbulb, Clock, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "50000+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" }
  ];

  const values = [
    {
      icon: <img src="/icon.svg" alt="Safety Shield" className="w-12 h-12" />,
      title: "Safety First",
      description: "We prioritize the safety and well-being of our students and communities above all else."
    },
    {
      icon: <img src="/education.svg" alt="Education" className="w-8 h-8" />,
      title: "Excellence in Education",
      description: "We deliver world-class training programs that exceed industry standards."
    },
    {
      icon: <img src="/honesty.svg" alt="Integrity" className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our operations and interactions."
    },
    {
      icon: <img src="/growth.svg" alt="Growth" className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "We constantly evolve our programs to meet changing industry demands."
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      bio: "20+ years in fire safety management and industrial safety protocols.",
      image: "team-1"
    },
    {
      name: "Priya Sharma",
      role: "Director of Training",
      bio: "Expert in occupational health and safety with 15+ years experience.",
      image: "team-2"
    },
    {
      name: "Amit Patel",
      role: "Chief Instructor",
      bio: "Former emergency response coordinator with extensive field experience.",
      image: "team-3"
    },
    {
      name: "Sneha Nair",
      role: "Placement Director",
      bio: "Specializes in career development and industry partnerships.",
      image: "team-4"
    }
  ];

  const subPages = [
    {
      icon: <img src="/history.svg" alt="Our History" className="w-8 h-8" />,
      title: "Our History",
      description: "Explore our journey and milestones over the years.",
      link: "/about/history"
    },
    {
      icon: <img src="/businessman-doing-data-analysis.svg" alt="Leadership" className="w-10 h-10" />,
      title: "Leadership",
      description: "Meet our executive team and advisory board members.",
      link: "/about/leadership"
    },
    {
      icon: <img src="/career-roadmap.svg" alt="Careers" className="w-8 h-8" />,
      title: "Careers",
      description: "Join our mission to make the world safer through education.",
      link: "/about/careers"
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">Elite Associates</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering careers in fire and safety through cutting-edge training and industry partnerships since 2008.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Equip learners with job-ready skills through high-quality training and practical learning experiences.
Deliver personalized career support that enhances confidence, competence, and employability.
Connect motivated professionals with the right opportunities through reliable placement assistance and recruitment services.
Foster long-term success by cultivating lifelong learners who adapt and thrive in a dynamic work environment
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
             Our vision is to be recognized as India’s leading career development and placement solutions provider, empowering thousands of individuals to:
Achieve meaningful careers aligned with their goals and aspirations.
Become confident professionals ready to excel in a global workforce.
Be catalysts of innovation and positive change within their industries.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12 mb-20"
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

        {/* Values Section */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subpages Section */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover different aspects of our organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subPages.map((page, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {page.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{page.title}</h3>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <Link 
                  to={page.link}
                  className="text-blue-700 font-semibold flex items-center gap-2 hover:text-blue-800 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;