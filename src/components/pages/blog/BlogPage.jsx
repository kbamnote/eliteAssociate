import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'safety-tips', name: 'Safety Tips' },
    { id: 'industry-news', name: 'Industry News' },
    { id: 'training', name: 'Training Insights' },
    { id: 'regulations', name: 'Regulations' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Fire Safety Tips for Industrial Facilities",
      excerpt: "Discover the critical fire safety measures every industrial facility should implement to protect workers and assets.",
      category: "safety-tips",
      author: "Dr. Robert Johnson",
      date: "Oct 5, 2025",
      readTime: "5 min read",
      image: "fire-safety-tips"
    },
    {
      id: 2,
      title: "New OSHA Regulations for 2025: What You Need to Know",
      excerpt: "Stay compliant with the latest OSHA safety standards and avoid costly penalties with our comprehensive guide.",
      category: "regulations",
      author: "Sarah Williams",
      date: "Oct 12, 2025",
      readTime: "8 min read",
      image: "osha-regulations"
    },
    {
      id: 3,
      title: "The Future of Industrial Safety Training",
      excerpt: "How virtual reality and AI are revolutionizing safety education and improving learning outcomes.",
      category: "training",
      author: "Michael Chen",
      date: "Sep 28, 2025",
      readTime: "6 min read",
      image: "future-training"
    },
    {
      id: 4,
      title: "Emergency Response Planning for Manufacturing Plants",
      excerpt: "Best practices for developing and implementing effective emergency response procedures in manufacturing environments.",
      category: "safety-tips",
      author: "Emma Rodriguez",
      date: "Sep 20, 2025",
      readTime: "7 min read",
      image: "emergency-planning"
    },
    {
      id: 5,
      title: "Industry Trends: Safety Technology in 2025",
      excerpt: "Explore the latest technological advancements transforming workplace safety and risk management.",
      category: "industry-news",
      author: "Dr. Robert Johnson",
      date: "Sep 15, 2025",
      readTime: "6 min read",
      image: "safety-technology"
    },
    {
      id: 6,
      title: "First Aid Certification: Why It Matters for All Employees",
      excerpt: "The importance of first aid training in creating safer workplaces and building a culture of safety awareness.",
      category: "training",
      author: "Sarah Williams",
      date: "Sep 10, 2025",
      readTime: "4 min read",
      image: "first-aid"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Safety <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, industry news, and safety tips to keep you informed and protected
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* Filter Button */}
            <div className="flex items-center gap-3">
              <Filter className="text-gray-500 w-5 h-5" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-3">
                    <BookOpen className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold">{post.image.replace('-', ' ')}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <motion.button
                  className="text-purple-600 font-semibold flex items-center gap-2 hover:text-purple-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="bg-white border border-purple-600 text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-50 transition-all flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;