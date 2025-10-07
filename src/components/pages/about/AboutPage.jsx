import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, Target, Lightbulb, Clock, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "We prioritize the safety and well-being of our students and communities above all else."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Excellence in Education",
      description: "We deliver world-class training programs that exceed industry standards."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our operations and interactions."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "We constantly evolve our programs to meet changing industry demands."
    }
  ];

  const team = [
    {
      name: "Dr. Robert Johnson",
      role: "Founder & CEO",
      bio: "20+ years in fire safety management and industrial safety protocols.",
      image: "team-1"
    },
    {
      name: "Sarah Williams",
      role: "Director of Training",
      bio: "Expert in occupational health and safety with 15+ years experience.",
      image: "team-2"
    },
    {
      name: "Michael Chen",
      role: "Chief Instructor",
      bio: "Former emergency response coordinator with extensive field experience.",
      image: "team-3"
    },
    {
      name: "Emma Rodriguez",
      role: "Placement Director",
      bio: "Specializes in career development and industry partnerships.",
      image: "team-4"
    }
  ];

  const subPages = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Our History",
      description: "Explore our journey and milestones over the years.",
      link: "/about/history"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Meet our executive team and advisory board members.",
      link: "/about/leadership"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Elite Associates</span>
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
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide world-class fire and safety training that empowers individuals with the knowledge, skills, and certifications needed to excel in their careers while contributing to safer communities and workplaces globally.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading provider of fire and safety education globally, recognized for our innovative training methods, industry partnerships, and the success of our graduates in making workplaces and communities safer.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-100 text-lg">{stat.label}</div>
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
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center text-purple-600 mb-6">
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
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  {page.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{page.title}</h3>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <Link 
                  to={page.link}
                  className="text-purple-700 font-semibold flex items-center gap-2 hover:text-purple-800 transition-colors"
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

        {/* Team Section */}
        <div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
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
                    <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10" />
                    </div>
                    <h3 className="text-lg font-bold">{member.image.replace('-', ' ')}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;