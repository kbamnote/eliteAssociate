import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, MapPin, Award, Star, Filter, Search, ChevronDown, ExternalLink } from 'lucide-react';

const HiringInternships = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const opportunities = [
    {
      id: 1,
      title: "Frontend Development Intern",
      company: "Elite Associates",
      type: "internship",
      category: "it-services",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "2 days ago",
      applicants: 120,
      rating: 4.5,
      tags: ["React", "JavaScript", "CSS", "HTML"],
      description: "Work on cutting-edge web applications using modern frontend technologies. Gain hands-on experience with UI/UX implementation and responsive design."
    },
    {
      id: 2,
      title: "Backend Development Intern",
      company: "Elite Associates",
      type: "internship",
      category: "it-services",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "1 day ago",
      applicants: 95,
      rating: 4.6,
      tags: ["Node.js", "Express", "MongoDB", "API Development"],
      description: "Build robust server-side applications and RESTful APIs. Learn database integration and server management techniques."
    },
    {
      id: 3,
      title: "Full Stack Development Intern",
      company: "Elite Associates",
      type: "internship",
      category: "it-services",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "3 days ago",
      applicants: 150,
      rating: 4.7,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      description: "Work on complete web applications from frontend to backend. Gain comprehensive experience in full-stack development."
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      company: "Elite Associates",
      type: "internship",
      category: "digital-marketing",
      location: "Mumbai, Maharashtra",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "1 day ago",
      applicants: 85,
      rating: 4.7,
      tags: ["SEO", "Social Media", "Analytics"],
      description: "Drive digital marketing campaigns for diverse clients. Manage social media presence and optimize conversion rates."
    },
    {
      id: 5,
      title: "AI/ML Engineer",
      company: "Elite Associates",
      type: "internship",
      category: "ai-ml",
      location: "Hyderabad, Telangana",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "3 days ago",
      applicants: 65,
      rating: 4.8,
      tags: ["Python", "TensorFlow", "Deep Learning"],
      description: "Develop machine learning models for predictive analytics and automation. Work on cutting-edge AI research projects."
    },
    {
      id: 6,
      title: "Content Creator",
      company: "Elite Associates",
      type: "internship",
      category: "content-creation",
      location: "Remote",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "5 days ago",
      applicants: 200,
      rating: 4.3,
      tags: ["Video Production", "Writing", "Social Media"],
      description: "Create engaging content for multiple platforms. Develop creative strategies for brand storytelling."
    },
    {
      id: 7,
      title: "Business Analyst (MBA)",
      company: "Elite Associates",
      type: "internship",
      category: "mba",
      location: "Gurgaon, Haryana",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "1 week ago",
      applicants: 90,
      rating: 4.6,
      tags: ["Strategy", "Analysis", "Consulting"],
      description: "Analyze business processes and recommend strategic improvements. Work directly with C-suite executives."
    },
    {
      id: 8,
      title: "Data Science Intern",
      company: "Elite Associates",
      type: "internship",
      category: "ai-ml",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
    {
      id: 9,
      title: "HR Intern",
      company: "Elite Associates",
      type: "internship",
      category: "hr intern",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
    {
      id: 10,
      title: "Counseling Intern",
      company: "Elite Associates",
      type: "internship",
      category: "counseling intern",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
    {
      id: 11,
      title: "Marketing Intern",
      company: "Elite Associates",
      type: "internship",
      category: "marketing intern",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
        {
      id: 12,
      title: "Telecalling Intern",
      company: "Elite Associates",
      type: "internship",
      category: "telecalling intern",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
        {
      id: 13,
      title: "MBA Sales Intern",
      company: "Elite Associates",
      type: "internship",
      category: "mba",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
        {
      id: 14,
      title: "App Developer Intern",
      company: "Elite Associates",
      type: "internship",
      category: "app developer intern",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    },
  ];

  const categories = [
    { id: 'all', name: 'All Opportunities', count: opportunities.length },
    { id: 'it-services', name: 'IT Services', count: opportunities.filter(o => o.category === 'it-services').length },
    { id: 'digital-marketing', name: 'Digital Marketing', count: opportunities.filter(o => o.category === 'digital-marketing').length },
    { id: 'ai-ml', name: 'AI/ML', count: opportunities.filter(o => o.category === 'ai-ml').length },
    { id: 'content-creation', name: 'Content Creation', count: opportunities.filter(o => o.category === 'content-creation').length },
    { id: 'mba', name: 'MBA Roles', count: opportunities.filter(o => o.category === 'mba').length },
    { id: 'hr intern', name: 'HR Intern', count: opportunities.filter(o => o.category === 'hr intern').length },
    { id: 'counseling intern', name: 'Counsellor Intern', count: opportunities.filter(o => o.category === 'counseling intern').length },
    { id: 'telecalling intern', name: 'Telecalling Intern', count: opportunities.filter(o => o.category === 'telecalling intern').length },
    { id: 'marketing intern', name: 'Marketing Intern', count: opportunities.filter(o => o.category === 'marketing intern').length },
    { id: 'mba sales intern', name: 'MBA Intern', count: opportunities.filter(o => o.category === 'mba sales intern').length },
    { id: 'App dev intern', name: 'App Developer Intern', count: opportunities.filter(o => o.category === 'app developer intern').length },
  
  
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesCategory = activeTab === 'all' || opp.category === activeTab || opp.type === activeTab;
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Banner Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/90"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="text-white max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-40 text-5xl md:text-6xl font-bold mb-6">
              Find Your Dream <span className="text-cyan-300">Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover exciting career opportunities and internships across IT services, digital marketing, AI/ML, content creation, and MBA roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Browse Opportunities
              </button>
              
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-14">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 -mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{opportunities.length}+</div>
            <div className="text-gray-600">Opportunities</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">4.8/5</div>
            <div className="text-gray-600">Avg Rating</div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search opportunities..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Opportunities List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filteredOpportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      opportunity.type === 'internship' ? 'bg-purple-100 text-purple-800' :
                      opportunity.type === 'contract' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-semibold text-blue-600">{opportunity.company}</span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600">{opportunity.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3">{opportunity.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {opportunity.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Posted {opportunity.posted}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {opportunity.applicants} applied
                    </div>
                  </div>
                </div>

                <div className="lg:w-80">
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="text-lg font-bold text-gray-900 mb-1">{opportunity.salary}</div>
                    <div className="text-sm text-gray-600">Experience: {opportunity.experience}</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredOpportunities.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HiringInternships;