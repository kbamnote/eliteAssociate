import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Globe, Users, Building, Zap, Code, TrendingUp, ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const ProductShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const products = [
    {
      id: 1,
      name: "JIFSA",
      tagline: "Job Integrated Financial Services Academy",
      description: "Comprehensive training and certification for finance professionals",
      fullDescription: "JIFSA offers industry-leading financial education programs that combine theoretical knowledge with practical application. Our curriculum is designed by industry experts and updated regularly to match market demands. With over 50,000+ professionals trained, we're the preferred choice for financial upskilling.",
      features: [
        "Certified courses in investment banking",
        "Real-time market simulations",
        "Industry expert mentorship",
        "Global certification recognition"
      ],
      icon: <TrendingUp className="w-10 h-10" />,
      color: "from-blue-500 to-teal-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      link: "https://www.jifsacareers.com",
      stats: { users: "50K+", rating: "4.9/5" }
    },
    {
      id: 2,
      name: "Elite Jobs",
      tagline: "Premium Career Platform",
      description: "Job portal connecting top talent with leading organizations",
      fullDescription: "Elite Jobs is India's most sophisticated job platform that uses AI-driven matching to connect the right candidates with the right opportunities. Our platform features advanced filtering, real-time job alerts, and career progression tracking tools.",
      features: [
        "AI-powered job matching",
        "Real-time job alerts",
        "Career progression tracking",
        "Premium employer network"
      ],
      icon: <Users className="w-10 h-10" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      link: "https://www.eliteindiajobs.com",
      stats: { users: "2M+", rating: "4.8/5" }
    },
    {
      id: 3,
      name: "Elite BIM",
      tagline: "Building Information Modeling",
      description: "Solutions for construction and infrastructure projects",
      fullDescription: "Elite BIM revolutionizes construction project management through advanced 3D modeling and collaborative platforms. Our solution helps architects, engineers, and contractors streamline workflows, reduce errors, and accelerate project delivery.",
      features: [
        "3D collaborative modeling",
        "Real-time project tracking",
        "Clash detection algorithms",
        "Mobile field management"
      ],
      icon: <Building className="w-10 h-10" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      link: "https://www.elitebim.in",
      stats: { users: "15K+", rating: "4.7/5" }
    },
    {
      id: 4,
      name: "Elite BISF",
      tagline: "Business Intelligence & Strategic Forecasting",
      description: "Data-driven decision making platform",
      fullDescription: "Elite BISF transforms raw data into actionable insights through advanced analytics and forecasting models. Our platform helps businesses predict market trends, optimize operations, and make strategic decisions with confidence.",
      features: [
        "Predictive analytics engine",
        "Real-time data visualization",
        "Custom forecasting models",
        "Integration with 50+ data sources"
      ],
      icon: <Zap className="w-10 h-10" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      link: "https://www.elitebifs.in",
      stats: { users: "8K+", rating: "4.9/5" }
    },
    {
      id: 5,
      name: "EEE Technologies",
      tagline: "Energy Efficient Engineering",
      description: "Sustainable and green technology implementations",
      fullDescription: "EEE Technologies pioneers sustainable engineering solutions that reduce energy consumption while maximizing efficiency. Our innovative products help businesses transition to greener operations without compromising performance.",
      features: [
        "Energy consumption analytics",
        "Smart grid integration",
        "Renewable energy solutions",
        "Carbon footprint tracking"
      ],
      icon: <Code className="w-10 h-10" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
      link: "https://www.eeetechnologies.in",
      stats: { users: "12K+", rating: "4.8/5" }
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Finance Director",
      company: "Global Investments Ltd",
      content: "JIFSA transformed our team's capabilities. The practical approach to financial education has directly contributed to a 35% improvement in our portfolio performance.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Rahul Mehta",
      role: "Construction Manager",
      company: "UrbanBuild Corp",
      content: "Elite BIM reduced our project errors by 60% and accelerated delivery timelines. The collaborative platform has revolutionized how we work with stakeholders.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Anjali Verma",
      role: "Data Scientist",
      company: "TechInsights",
      content: "Elite BISF's predictive models have improved our forecasting accuracy by 42%. The platform's intuitive interface makes complex analytics accessible to our entire team.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Flagship</span> Products
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
            variants={itemVariants}
          >
            Innovative solutions designed to empower businesses and professionals across various domains
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className={`p-1 bg-gradient-to-r ${product.color}`}>
                <div className="bg-white p-6 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl ${product.bgColor} ${product.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mb-3">{product.tagline}</p>
                  <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-sm">{product.stats.users} Users</span>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(parseFloat(product.stats.rating)) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-700 font-medium ml-1">{product.stats.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center font-semibold ${product.textColor} group`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button 
                      className="text-gray-400 hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our <span className="text-teal-400">Clients</span> Say</h3>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-teal-400"
                    />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-xl italic mb-6">"{testimonials[currentTestimonial].content}"</p>
                    <div>
                      <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-teal-400">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
                <motion.button 
                  onClick={prevTestimonial}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button 
                  onClick={nextTestimonial}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
            
            <div className="flex justify-center mt-16 gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-teal-400 w-8' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              className="text-2xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business?
            </motion.h3>
            <motion.p 
              className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of satisfied customers using our innovative solutions to drive growth and efficiency
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button 
                className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`p-1 bg-gradient-to-r ${selectedProduct.color}`}>
                <div className="bg-white p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h3>
                      <p className="text-teal-600 font-medium">{selectedProduct.tagline}</p>
                    </div>
                    <motion.button 
                      onClick={() => setSelectedProduct(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl ${selectedProduct.bgColor} ${selectedProduct.textColor} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {selectedProduct.icon}
                  </motion.div>
                  
                  <p className="text-gray-700 text-lg mb-6">{selectedProduct.fullDescription}</p>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <ul className="mb-8 space-y-3">
                    {selectedProduct.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${selectedProduct.bgColor} ${selectedProduct.textColor} flex items-center justify-center mr-3 mt-1`}>
                          ✓
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedProduct.stats.users}</div>
                      <div className="text-gray-600">Active Users</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedProduct.stats.rating}</div>
                      <div className="text-gray-600">User Rating</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a 
                      href={selectedProduct.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${selectedProduct.color} text-white font-bold py-4 px-6 rounded-full text-center transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Website
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.button 
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 rounded-full transition-all duration-300 hover:bg-gray-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;