import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Calendar, Shield } from 'lucide-react';

const CoursesSec = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'fire', name: 'Fire Safety' },
    { id: 'industrial', name: 'Industrial Safety' },
    { id: 'health', name: 'Health & First Aid' },
    { id: 'management', name: 'Safety Management' }
  ];

  const courses = [
 {
  "id": 1,
  "title": "Advanced Fire Fighting & Prevention",
  "category": "fire",
  "duration": "6 weeks",
  "students": "1200+",
  "level": "Advanced",
  "description": "Comprehensive training in fire prevention, detection, and suppression techniques.",
  "image": "https://images.unsplash.com/photo-1743422854977-e6948800765e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
,

    {
      id: 2,
      title: "Industrial Safety Management",
      category: "industrial",
      duration: "8 weeks",
      students: "950+",
      level: "Intermediate",
      description: "Learn to manage safety protocols in industrial environments effectively.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "First Aid & Emergency Response",
      category: "health",
      duration: "4 weeks",
      students: "1500+",
      level: "Beginner",
      description: "Essential first aid skills and emergency response procedures.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Occupational Health & Safety",
      category: "health",
      duration: "6 weeks",
      students: "1100+",
      level: "Intermediate",
      description: "Comprehensive understanding of workplace health and safety regulations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Risk Assessment & Management",
      category: "management",
      duration: "5 weeks",
      students: "800+",
      level: "Advanced",
      description: "Master the art of identifying and mitigating workplace risks.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Hazardous Materials Handling",
      category: "industrial",
      duration: "7 weeks",
      students: "750+",
      level: "Advanced",
      description: "Safe handling and disposal of hazardous materials in industrial settings.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Training Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional courses designed to equip you with industry-recognized skills
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/our-products">
          <motion.button
            className="bg-white border border-purple-600 text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-50 transition-all flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSec;