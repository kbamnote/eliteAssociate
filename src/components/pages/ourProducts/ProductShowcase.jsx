import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, Building, Zap, Code, TrendingUp, ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const ResponsiveImage = ({ src, alt, className, width, height }) => (
  <img src={src} alt={alt} className={className} width={width} height={height} loading="lazy" />
);

const ProductShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const products = [
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
      stats: { users: "2M+", rating: "4.8/5" },
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Elite Cards",
      tagline: "Professional Networking Cards",
      description: "Digital business cards with advanced networking features",
      fullDescription: "Elite Cards revolutionizes professional networking with smart digital business cards that adapt to your audience. With real-time analytics, customizable templates, and seamless integration with leading CRM platforms, Elite Cards helps professionals make meaningful connections that matter.",
      features: [
        "Smart digital business cards",
        "Real-time interaction analytics",
        "Customizable templates",
        "CRM integration"
      ],
      icon: <Code className="w-10 h-10" />,
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-100",
      textColor: "text-teal-800",
      link: "https://www.elitedigitalcards.com",
      stats: { users: "500K+", rating: "4.9/5" },
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=crop"
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
      stats: { users: "12K+", rating: "4.8/5" },
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80&auto=format&fit=crop"
    },
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
      stats: { users: "50K+", rating: "4.9/5" },
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=80&auto=format&fit=crop"
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
      stats: { users: "15K+", rating: "4.7/5" },
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop"
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
      stats: { users: "8K+", rating: "4.9/5" },
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop"
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
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
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10"
            variants={itemVariants}
          >
            Our <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Flagship
            </motion.span> Products
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 relative z-10"
            variants={itemVariants}
          >
            Innovative solutions designed to empower businesses and professionals across various domains
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full relative z-10 overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="h-full w-1/2 bg-white/50"
              animate={{
                x: ['-100%', '300%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>

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
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer group relative"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'linear'
                  }}
                />
              </div>
              
              <div className={`p-1 bg-gradient-to-r ${product.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      'linear-gradient(0deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                      'linear-gradient(360deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                <div className="bg-white h-full flex flex-col relative">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl m-6 mt-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ResponsiveImage
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${product.bgColor} ${product.textColor} backdrop-blur`}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {product.tagline}
                    </motion.div>
                  </div>
                  
                  <div className="px-6 pb-6 flex-1 flex flex-col">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl ${product.bgColor} ${product.textColor} flex items-center justify-center mb-6 relative overflow-hidden`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: [0, 1, 0] }}
                        transition={{ duration: 0.6 }}
                      />
                      {product.icon}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-purple-600 font-medium text-sm mb-3">{product.tagline}</p>
                    <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                    
                    <motion.div 
                      className="flex justify-between items-center mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-gray-500 text-sm">{product.stats.users} Users</span>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              whileHover={{ 
                                scale: 1.3,
                                rotate: 180,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <Star 
                                className={`w-4 h-4 ${i < Math.floor(parseFloat(product.stats.rating)) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-gray-700 font-medium ml-1">{product.stats.rating}</span>
                      </div>
                    </motion.div>
                    
                    <div className="flex justify-between items-center">
                      <motion.a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center font-semibold ${product.textColor}`}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Website
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </motion.div>
                      </motion.a>
                      <motion.button 
                        className="text-gray-400 hover:text-gray-700 relative px-3 py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="relative z-10">Details</span>
                        <motion.div
                          className="absolute inset-0 bg-gray-200 rounded"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 md:p-12 text-white mb-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our <motion.span 
                className="text-purple-400"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(192, 132, 252, 0.5)',
                    '0 0 20px rgba(192, 132, 252, 0.8)',
                    '0 0 10px rgba(192, 132, 252, 0.5)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Clients
              </motion.span> Say
            </motion.h3>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -90 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <motion.div 
                    className="flex-shrink-0 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <ResponsiveImage 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover border-4 border-purple-400 relative z-10"
                    />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <motion.div 
                      className="flex justify-center md:justify-start mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ 
                            scale: 1.3,
                            rotate: 360,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Star 
                            className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.p 
                      className="text-xl italic mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonials[currentTestimonial].content}"
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-purple-400">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
                <motion.button 
                  onClick={prevTestimonial}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.2, rotate: -90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button 
                  onClick={nextTestimonial}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.2, rotate: 90 }}
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
                  className={`h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-400 w-8' : 'bg-white/30 w-3'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  animate={index === currentTestimonial ? {
                    boxShadow: ['0 0 0 0 rgba(192, 132, 252, 0.7)', '0 0 0 10px rgba(192, 132, 252, 0)', '0 0 0 0 rgba(192, 132, 252, 0)']
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
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
                className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Get Started Today</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Schedule a Demo</span>
                <ExternalLink className="w-5 h-5 relative z-10" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

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
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className={`p-1 bg-gradient-to-r ${selectedProduct.color}`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                <div className="bg-white p-8 rounded-xl">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h3>
                      <p className="text-teal-600 font-medium">{selectedProduct.tagline}</p>
                    </motion.div>
                    <motion.button 
                      onClick={() => setSelectedProduct(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl ${selectedProduct.bgColor} ${selectedProduct.textColor} flex items-center justify-center mb-6 relative overflow-hidden`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.4 }}
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      scale: 1.1 
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    {selectedProduct.icon}
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-700 text-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedProduct.fullDescription}
                  </motion.p>
                  
                  <motion.h4 
                    className="text-xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Key Features
                  </motion.h4>
                  <ul className="mb-8 space-y-3">
                    {selectedProduct.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <motion.span 
                          className={`flex-shrink-0 w-6 h-6 rounded-full ${selectedProduct.bgColor} ${selectedProduct.textColor} flex items-center justify-center mr-3 mt-1 font-bold text-sm`}
                          whileHover={{ 
                            scale: 1.3,
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          ✓
                        </motion.span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="text-2xl font-bold text-gray-900 relative z-10"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {selectedProduct.stats.users}
                      </motion.div>
                      <div className="text-gray-600 relative z-10">Active Users</div>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-1 relative z-10">
                        {selectedProduct.stats.rating}
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </motion.div>
                      </div>
                      <div className="text-gray-600 relative z-10">User Rating</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <motion.a 
                      href={selectedProduct.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${selectedProduct.color} text-white font-bold py-4 px-6 rounded-full text-center transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%', skewX: -20 }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Visit Website</span>
                      <ExternalLink className="w-5 h-5 relative z-10" />
                    </motion.a>
                    <motion.button 
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 rounded-full transition-all duration-300 hover:bg-gray-50 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gray-100"
                        initial={{ scale: 0, borderRadius: '50%' }}
                        whileHover={{ scale: 2, borderRadius: '0%' }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative z-10">Close</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;