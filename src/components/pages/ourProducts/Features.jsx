import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Users, 
  Award, 
  Clock, 
  BookOpen, 
  Headphones, 
  Globe, 
  TrendingUp,
  Shield,
  Smartphone,
  Video,
  MessageCircle
} from 'lucide-react';
import SEOHead from '../../common/SEOHead';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with hands-on projects, live coding sessions, and interactive assignments that make learning enjoyable and effective.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Get personalized guidance from industry experts with 1-on-1 mentoring sessions and career counseling.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certification",
      description: "Earn globally recognized certifications that are valued by top companies worldwide.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with flexible timing options that fit your busy lifestyle.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Access to extensive learning materials, video lectures, and practical exercises covering all aspects.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Support",
      description: "100% placement assistance with resume building, interview preparation, and job referrals.",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "HD Video Content",
      description: "Crystal clear video lectures with downloadable content for offline learning."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Learning",
      description: "Access courses on any device with our responsive mobile-friendly platform."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community Support",
      description: "Join our active community of learners and get help from peers and instructors."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Lifetime Access",
      description: "Once enrolled, get lifetime access to course materials and updates."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Our certifications are recognized by companies across the globe."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical and academic support whenever you need help."
    }
  ];

  const comparisonData = [
    {
      feature: "Live Interactive Sessions",
      us: true,
      others: false
    },
    {
      feature: "1-on-1 Mentorship",
      us: true,
      others: false
    },
    {
      feature: "100% Placement Assistance",
      us: true,
      others: false
    },
    {
      feature: "Industry Expert Instructors",
      us: true,
      others: true
    },
    {
      feature: "Lifetime Course Access",
      us: true,
      others: false
    },
    {
      feature: "Real-world Projects",
      us: true,
      others: true
    },
    {
      feature: "24/7 Support",
      us: true,
      others: false
    },
    {
      feature: "Mobile Learning App",
      us: true,
      others: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="Features - Elite Associate"
        description="Discover the comprehensive features and benefits of our training programs including expert mentorship, flexible learning, and career support."
        keywords="training features, online learning, mentorship, certification, career support"
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
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Features</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover what makes our training programs stand out with cutting-edge features designed to accelerate your learning journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section ref={ref} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Even More Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We've packed our platform with everything you need for a successful learning experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="text-purple-600 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Why Choose Elite Associate?
              </h2>
              <p className="text-xl text-gray-600">
                See how we compare to other training providers in the market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Features</th>
                      <th className="px-6 py-4 text-center font-semibold">Elite Associate</th>
                      <th className="px-6 py-4 text-center font-semibold">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {item.us ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.others ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
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
                Experience These Features Today
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful learners who have transformed their careers with our comprehensive training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  View All Courses
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;