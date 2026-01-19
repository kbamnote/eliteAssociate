import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, User, Mail, Phone, Briefcase, GraduationCap, Building, Calendar, MapPin, FileText, Send } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    experience: '',
    education: '',
    portfolio: '',
    availability: '',
    salaryExpectation: '',
    linkedin: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock opportunity data based on ID
  const opportunities = {
    1: {
      title: "Frontend Development Intern",
      company: "Tech Innovations Pvt Ltd",
      type: "internship",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "2 days ago",
      applicants: 120,
      rating: 4.5,
      tags: ["React", "JavaScript", "CSS", "HTML"],
      description: "Work on cutting-edge web applications using modern frontend technologies. Gain hands-on experience with UI/UX implementation and responsive design."
    },
    2: {
      title: "Backend Development Intern",
      company: "Tech Innovations Pvt Ltd",
      type: "internship",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "1 day ago",
      applicants: 95,
      rating: 4.6,
      tags: ["Node.js", "Express", "MongoDB", "API Development"],
      description: "Build robust server-side applications and RESTful APIs. Learn database integration and server management techniques."
    },
    3: {
      title: "Full Stack Development Intern",
      company: "Tech Innovations Pvt Ltd",
      type: "internship",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "3 days ago",
      applicants: 150,
      rating: 4.7,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      description: "Work on complete web applications from frontend to backend. Gain comprehensive experience in full-stack development."
    },
    4: {
      title: "Digital Marketing Specialist",
      company: "Digital Growth Agency",
      type: "full-time",
      location: "Mumbai, Maharashtra",
      salary: "₹4,00,000 - ₹6,00,000 PA",
      experience: "1-3 years",
      posted: "1 day ago",
      applicants: 85,
      rating: 4.7,
      tags: ["SEO", "Social Media", "Analytics"],
      description: "Drive digital marketing campaigns for diverse clients. Manage social media presence and optimize conversion rates."
    },
    5: {
      title: "AI/ML Engineer",
      company: "Future Tech Labs",
      type: "full-time",
      location: "Hyderabad, Telangana",
      salary: "₹8,00,000 - ₹12,00,000 PA",
      experience: "3-5 years",
      posted: "3 days ago",
      applicants: 65,
      rating: 4.8,
      tags: ["Python", "TensorFlow", "Deep Learning"],
      description: "Develop machine learning models for predictive analytics and automation. Work on cutting-edge AI research projects."
    },
    6: {
      title: "Content Creator",
      company: "Creative Minds Studio",
      type: "contract",
      location: "Remote",
      salary: "₹2,50,000 - ₹4,00,000 PA",
      experience: "1-2 years",
      posted: "5 days ago",
      applicants: 200,
      rating: 4.3,
      tags: ["Video Production", "Writing", "Social Media"],
      description: "Create engaging content for multiple platforms. Develop creative strategies for brand storytelling."
    },
    7: {
      title: "Business Analyst (MBA)",
      company: "Strategic Consulting Group",
      type: "full-time",
      location: "Gurgaon, Haryana",
      salary: "₹6,00,000 - ₹9,00,000 PA",
      experience: "2-4 years",
      posted: "1 week ago",
      applicants: 90,
      rating: 4.6,
      tags: ["Strategy", "Analysis", "Consulting"],
      description: "Analyze business processes and recommend strategic improvements. Work directly with C-suite executives."
    },
    8: {
      title: "Data Science Intern",
      company: "Analytics Pro",
      type: "internship",
      location: "Company Office",
      salary: "Unpaid",
      experience: "0-1 years",
      posted: "4 days ago",
      applicants: 150,
      rating: 4.4,
      tags: ["Python", "SQL", "Machine Learning"],
      description: "Apply statistical analysis and machine learning techniques to real-world business problems."
    }
  };

  const currentOpportunity = opportunities[id] || opportunities[1];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', { formData, opportunity: currentOpportunity });
    setIsSubmitted(true);
    
    // Simulate form submission success
    setTimeout(() => {
      navigate('/hiring-internships');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for applying to {currentOpportunity.title} at {currentOpportunity.company}. 
                Our team will review your application and contact you soon.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium">Reference ID: APP-{id}-{Date.now()}</p>
              </div>
              <button
                onClick={() => navigate('/hiring-internships')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                Browse Other Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link to="/hiring-internships" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Opportunities
          </Link>

          {/* Opportunity Info */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentOpportunity.title}</h1>
                <p className="text-lg text-blue-600 font-semibold">{currentOpportunity.company}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{currentOpportunity.salary}</div>
                <div className="text-sm text-gray-600">Experience: {currentOpportunity.experience}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {currentOpportunity.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Posted {currentOpportunity.posted}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {currentOpportunity.type.charAt(0).toUpperCase() + currentOpportunity.type.slice(1)}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for This Position</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Information
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2 years"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., B.Tech Computer Science"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    name="salaryExpectation"
                    value={formData.salaryExpectation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ₹5-7 LPA"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability Date
                  </label>
                  <input
                    type="date"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Documents */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Documents
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX format (Max 5MB)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationForm;