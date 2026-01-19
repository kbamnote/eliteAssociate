import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
import SEOHead from '../../common/SEOHead';

const ProductOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Industry-Leading Curriculum",
      description: "Comprehensive courses designed by industry experts with real-world applications."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors",
      description: "Learn from professionals with years of experience in top tech companies."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Programs",
      description: "Get certified with globally recognized credentials that boost your career."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "100% placement assistance with our network of 500+ partner companies."
    }
  ];

  const stats = [
    { number: "50000+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "500+", label: "Partner Companies" },
    { number: "50+", label: "Expert Trainers" }
  ];

  return (
    <>
      <SEOHead 
        title="Product Overview - Elite Associate"
        description="Discover our comprehensive training programs and certification courses designed to accelerate your career in technology."
        keywords="training programs, certification courses, career development, technology education"
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
                Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Overview</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Explore our comprehensive suite of training programs designed to transform your career and unlock your potential in the technology industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our training programs are designed with one goal in mind: your success in the technology industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who have accelerated their careers with our training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Coming Soon....
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductOverview;