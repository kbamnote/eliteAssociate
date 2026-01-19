import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Users, TrendingUp, Zap, Code, Filter, Search } from 'lucide-react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'education', name: 'Education' },
    { id: 'technology', name: 'Technology' },
    { id: 'jobs', name: 'Jobs' },
    { id: 'business', name: 'Business Solutions' }
  ];

  const products = [
    {
      id: 1,
      title: "JIFSA",
      subtitle: "Job Integrated Financial Services Academy",
      category: "education",
      description: "Comprehensive financial education and certification programs designed to equip professionals with industry-recognized skills.",
      features: ["Certified courses", "Real-time market simulations", "Expert mentorship", "Global recognition"],
      users: "50K+",
      rating: "4.9/5",
      price: "Starting at $499",
      image: "jifsa",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 2,
      title: "EEE Technologies",
      subtitle: "Energy Efficient Engineering",
      category: "technology",
      description: "Sustainable and green technology implementations for businesses looking to reduce energy consumption while maximizing efficiency.",
      features: ["Energy analytics", "Smart grid integration", "Renewable solutions", "Carbon tracking"],
      users: "12K+",
      rating: "4.8/5",
      price: "Starting at $2,999",
      image: "eee-technologies",
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Elite BIM",
      subtitle: "Building Information Modeling",
      category: "technology",
      description: "Revolutionary 3D modeling and collaborative platforms for construction and infrastructure projects.",
      features: ["3D collaborative modeling", "Real-time tracking", "Clash detection", "Mobile management"],
      users: "15K+",
      rating: "4.7/5",
      price: "Starting at $1,499",
      image: "elite-bim",
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Elite BISF",
      subtitle: "Business Intelligence & Strategic Forecasting",
      category: "business",
      description: "Data-driven decision making platform with advanced analytics and forecasting models.",
      features: ["Predictive analytics", "Data visualization", "Forecasting models", "50+ integrations"],
      users: "8K+",
      rating: "4.9/5",
      price: "Starting at $1,999",
      image: "elite-bisf",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Elite India Jobs",
      subtitle: "Premium Career Platform",
      category: "jobs",
      description: "Sophisticated job platform using AI-driven matching to connect talent with leading organizations.",
      features: ["AI-powered matching", "Real-time alerts", "Career tracking", "Premium network"],
      users: "2M+",
      rating: "4.8/5",
      price: "Free for job seekers",
      image: "elite-india-jobs",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">Innovative Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-body">
            Cutting-edge solutions designed to empower businesses and professionals across various domains
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-body"
              />
            </div>
            
            {/* Filter Button */}
            <div className="flex items-center gap-3">
              <Filter className="text-gray-500 w-5 h-5" />
              <span className="text-gray-700 font-medium font-body">Filter by:</span>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-body ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-3">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading">{product.image.replace('-', ' ')}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{product.title}</h3>
                    <p className="text-blue-600 text-sm font-medium font-body">{product.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 font-body">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full font-body">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="font-body">{product.users} users</span>
                    <span className="font-body">{product.rating} rating</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900 font-heading">{product.price}</span>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all font-body"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">No products found</h3>
            <p className="text-gray-600 font-body">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;