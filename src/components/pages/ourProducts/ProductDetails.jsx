import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, Award, BookOpen, Play, Download, CheckCircle, Shield } from 'lucide-react';
import SEOHead from '../../common/SEOHead';
import ContactFormPopup from '../../common/ContactFormPopup';
import ResponsiveImage from '../../common/ResponsiveImage';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [isEnrollPopupOpen, setIsEnrollPopupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      id: 1,
      title: "Full Stack Development",
      duration: "6 Months",
      students: "1200+",
      rating: 4.8,
      price: "₹49,999",
      originalPrice: "₹79,999",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Master modern web development with React, Node.js, and cloud technologies.",
      highlights: [
        "React & Redux",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "AWS Cloud Services",
        "DevOps & CI/CD"
      ]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      duration: "8 Months",
      students: "800+",
      rating: 4.9,
      price: "₹59,999",
      originalPrice: "₹89,999",
      image: "https://images.unsplash.com/photo-1504868584819-f8e90526a693?w=800&q=80",
      description: "Become a data scientist with Python, machine learning, and AI technologies.",
      highlights: [
        "Python & R Programming",
        "Machine Learning",
        "Deep Learning & AI",
        "Data Visualization",
        "Big Data Technologies"
      ]
    },
    {
      id: 3,
      title: "Cloud Computing & DevOps",
      duration: "4 Months",
      students: "600+",
      rating: 4.7,
      price: "₹39,999",
      originalPrice: "₹59,999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      description: "Master cloud platforms and DevOps practices for modern software delivery.",
      highlights: [
        "AWS/Azure/GCP",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ]
    }
  ];

  const tabs = [
    { id: 'curriculum', label: 'Curriculum', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'instructors', label: 'Instructors', icon: <Users className="w-4 h-4" /> },
    { id: 'certification', label: 'Certification', icon: <Award className="w-4 h-4" /> },
    { id: 'resources', label: 'Resources', icon: <Download className="w-4 h-4" /> }
  ];

  const handleEnrollNow = (course) => {
    setSelectedCourse(course);
    setIsEnrollPopupOpen(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'curriculum':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Course Curriculum</h3>
            <div className="space-y-4">
              {[
                { module: "Module 1", title: "Fundamentals & Setup", duration: "2 weeks", lessons: 12 },
                { module: "Module 2", title: "Core Concepts", duration: "3 weeks", lessons: 18 },
                { module: "Module 3", title: "Advanced Topics", duration: "4 weeks", lessons: 24 },
                { module: "Module 4", title: "Project Development", duration: "3 weeks", lessons: 15 },
                { module: "Module 5", title: "Deployment & Best Practices", duration: "2 weeks", lessons: 10 }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.module}: {item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.lessons} lessons</p>
                    </div>
                    <span className="text-blue-600 font-medium text-sm">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'instructors':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Meet Your Instructors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Ankit Sharma", role: "Senior Full Stack Developer", company: "TCS", experience: "8+ years" },
                { name: "Priya Verma", role: "Data Science Lead", company: "Infosys", experience: "10+ years" },
                { name: "Rahul Gupta", role: "Cloud Architect", company: "Wipro", experience: "12+ years" }
              ].map((instructor, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{instructor.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{instructor.role}</p>
                  <p className="text-gray-600 text-sm">{instructor.company} • {instructor.experience}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certification':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Certification Program</h3>
            <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Industry-Recognized Certificate</h4>
              </div>
              <ul className="space-y-3">
                {[
                  "Globally recognized certification",
                  "Verified by industry partners",
                  "Digital badge for LinkedIn profile",
                  "Lifetime validity",
                  "Career support included"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Learning Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Video Lectures", count: "100+ Hours", icon: <Play className="w-6 h-6" /> },
                { title: "Practice Projects", count: "15+ Projects", icon: <BookOpen className="w-6 h-6" /> },
                { title: "Study Materials", count: "500+ Pages", icon: <Download className="w-6 h-6" /> },
                { title: "Code Samples", count: "200+ Examples", icon: <CheckCircle className="w-6 h-6" /> }
              ].map((resource, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="text-blue-600 mb-3">{resource.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                  <p className="text-gray-600">{resource.count}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead 
        title="Product Details - Elite Associate"
        description="Detailed information about our training programs, curriculum, instructors, and certification options."
        keywords="course details, training curriculum, certification programs, expert instructors"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-body">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Details</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dive deep into our comprehensive training programs with detailed curriculum, expert instructors, and industry-recognized certifications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <ResponsiveImage
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      placeholder={
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-white/50" />
                        </div>
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-600 font-medium">⭐ {course.rating}</span>
                      <span className="text-sm text-gray-500">{course.students} students</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {course.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{course.price}</div>
                        <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleEnrollNow(course)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <ContactFormPopup
        isOpen={isEnrollPopupOpen}
        onClose={() => setIsEnrollPopupOpen(false)}
        title={selectedCourse ? `Enroll in ${selectedCourse.title}` : "Enroll Now"}
      />
    </>
  );
};

export default ProductDetails;