import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Calendar, Filter, Search, Shield } from 'lucide-react';

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'fire', name: 'Fire Safety' },
    { id: 'industrial', name: 'Industrial Safety' },
    { id: 'health', name: 'Health & First Aid' },
    { id: 'management', name: 'Safety Management' },
    { id: 'online', name: 'Online Programs' }
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced Fire Fighting & Prevention",
      category: "fire",
      duration: "6 weeks",
      mode: "Online & In-person",
      students: "1200+",
      level: "Advanced",
      description: "Comprehensive training in fire prevention, detection, and suppression techniques with hands-on practical sessions.",
      image: "fire-fighting",
      price: "$1,299",
      nextBatch: "Oct 15, 2025"
    },
    {
      id: 2,
      title: "Industrial Safety Management",
      category: "industrial",
      duration: "8 weeks",
      mode: "Online & In-person",
      students: "950+",
      level: "Intermediate",
      description: "Learn to manage safety protocols in industrial environments effectively with real-world case studies.",
      image: "industrial-safety",
      price: "$1,499",
      nextBatch: "Oct 22, 2025"
    },
    {
      id: 3,
      title: "First Aid & Emergency Response",
      category: "health",
      duration: "4 weeks",
      mode: "Online",
      students: "1500+",
      level: "Beginner",
      description: "Essential first aid skills and emergency response procedures for workplace and community settings.",
      image: "first-aid",
      price: "$799",
      nextBatch: "Oct 10, 2025"
    },
    {
      id: 4,
      title: "Occupational Health & Safety",
      category: "health",
      duration: "6 weeks",
      mode: "In-person",
      students: "1100+",
      level: "Intermediate",
      description: "Comprehensive understanding of workplace health and safety regulations with OSHA compliance training.",
      image: "occupational-health",
      price: "$1,199",
      nextBatch: "Nov 5, 2025"
    },
    {
      id: 5,
      title: "Risk Assessment & Management",
      category: "management",
      duration: "5 weeks",
      mode: "Online",
      students: "800+",
      level: "Advanced",
      description: "Master the art of identifying and mitigating workplace risks with industry-standard assessment tools.",
      image: "risk-assessment",
      price: "$1,399",
      nextBatch: "Oct 30, 2025"
    },
    {
      id: 6,
      title: "Hazardous Materials Handling",
      category: "industrial",
      duration: "7 weeks",
      mode: "In-person",
      students: "750+",
      level: "Advanced",
      description: "Safe handling and disposal of hazardous materials in industrial settings with regulatory compliance.",
      image: "hazardous-materials",
      price: "$1,599",
      nextBatch: "Nov 12, 2025"
    },
    {
      id: 7,
      title: "Fire Safety for Construction Sites",
      category: "fire",
      duration: "3 weeks",
      mode: "Online",
      students: "650+",
      level: "Intermediate",
      description: "Specialized fire safety protocols for construction environments with site-specific risk management.",
      image: "construction-fire-safety",
      price: "$899",
      nextBatch: "Oct 18, 2025"
    },
    {
      id: 8,
      title: "Emergency Evacuation Planning",
      category: "management",
      duration: "4 weeks",
      mode: "Online & In-person",
      students: "900+",
      level: "Intermediate",
      description: "Design and implement effective emergency evacuation procedures for various facility types.",
      image: "evacuation-planning",
      price: "$999",
      nextBatch: "Nov 2, 2025"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Training Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional courses designed to equip you with industry-recognized skills and certifications
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
                placeholder="Search courses..."
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
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-md'
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-3">
                    <Shield className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold">{course.image.replace('-', ' ')}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.mode}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Next: {course.nextBatch}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-sm text-gray-500"> excl. tax</span>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;