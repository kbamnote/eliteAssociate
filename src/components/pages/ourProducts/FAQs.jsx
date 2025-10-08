import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import SEOHead from '../../common/SEOHead';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'courses', label: 'Courses' },
    { id: 'enrollment', label: 'Enrollment' },
    { id: 'payment', label: 'Payment' },
    { id: 'certification', label: 'Certification' },
    { id: 'support', label: 'Support' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'courses',
      question: "What programming languages and technologies are covered in your courses?",
      answer: "Our courses cover a wide range of modern technologies including React, Node.js, Python, Java, JavaScript, TypeScript, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, and many more. Each course is designed to include the most in-demand technologies in the current job market."
    },
    {
      id: 2,
      category: 'enrollment',
      question: "How do I enroll in a course?",
      answer: "Enrollment is simple! Just browse our course catalog, select the course you're interested in, and click 'Enroll Now'. You can pay online using various payment methods including credit/debit cards, UPI, and net banking. Once payment is confirmed, you'll get immediate access to the course materials."
    },
    {
      id: 3,
      category: 'courses',
      question: "Are the courses suitable for beginners?",
      answer: "Absolutely! Our courses are designed for learners at all levels. We start with fundamentals and gradually progress to advanced topics. Each course includes prerequisite information, so you can choose the right starting point based on your current skill level."
    },
    {
      id: 4,
      category: 'payment',
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including credit cards (Visa, MasterCard, American Express), debit cards, UPI payments, net banking, and digital wallets. We also offer EMI options for courses above ₹25,000."
    },
    {
      id: 5,
      category: 'certification',
      question: "Will I receive a certificate upon completion?",
      answer: "Yes! Upon successful completion of the course and passing the final assessment, you'll receive an industry-recognized certificate. Our certificates are verified and can be shared on LinkedIn, added to your resume, and are recognized by our 500+ partner companies."
    },
    {
      id: 6,
      category: 'courses',
      question: "How long do I have access to the course materials?",
      answer: "Once you enroll in a course, you get lifetime access to all course materials, including video lectures, assignments, projects, and any future updates. You can learn at your own pace and revisit the content whenever needed."
    },
    {
      id: 7,
      category: 'support',
      question: "What kind of support is available during the course?",
      answer: "We provide comprehensive support including 24/7 technical assistance, dedicated mentors for each course, live doubt-clearing sessions, community forums, and 1-on-1 mentoring sessions. Our support team is always ready to help you succeed."
    },
    {
      id: 8,
      category: 'enrollment',
      question: "Can I switch between courses after enrollment?",
      answer: "Yes, you can switch to a different course within 7 days of enrollment if you feel the current course isn't the right fit. We want to ensure you're in the course that best matches your career goals and learning objectives."
    },
    {
      id: 9,
      category: 'courses',
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites vary by course. Basic courses require no prior experience, while advanced courses may require fundamental knowledge. Each course page clearly lists the prerequisites, recommended background, and what you should know before starting."
    },
    {
      id: 10,
      category: 'certification',
      question: "How is the final assessment conducted?",
      answer: "The final assessment includes a combination of practical projects, coding assignments, and theoretical questions. You'll work on real-world projects that demonstrate your skills. The assessment is designed to be comprehensive yet achievable with proper preparation."
    },
    {
      id: 11,
      category: 'payment',
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, you can request a full refund. We believe in the quality of our courses and want you to be completely satisfied with your learning experience."
    },
    {
      id: 12,
      category: 'support',
      question: "How does the placement assistance work?",
      answer: "Our placement assistance includes resume building, interview preparation, mock interviews, and direct referrals to our 500+ partner companies. We have a dedicated placement team that works with you throughout your job search until you land your dream job."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const contactOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "+1 (555) 123-4567",
      action: "Call Now",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "support@eliteassociate.com",
      action: "Send Email",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <>
      <SEOHead 
        title="FAQs - Elite Associate"
        description="Find answers to frequently asked questions about our training programs, enrollment process, certification, and support services."
        keywords="FAQs, frequently asked questions, course information, enrollment help, support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-body">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our courses, enrollment process, and support services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={ref} className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you 24/7.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    {option.action}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful learners and transform your career with our expert-led training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Browse Courses
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Contact Support
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQs;