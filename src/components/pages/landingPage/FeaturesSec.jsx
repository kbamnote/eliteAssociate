import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Award, 
  Clock, 
  Globe, 
  Zap,
  Shield,
  BookOpen
} from 'lucide-react';

const FeaturesSec = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Industry-Aligned Curriculum",
      description: "Courses designed by fire and safety experts to match current industry standards and future trends."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from professionals with years of experience in fire safety and industrial safety management."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognized Certifications",
      description: "Earn certificates that are recognized by top companies and regulatory bodies worldwide."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials and resources."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect with learners from around the world and build a global professional network."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hands-on Training",
      description: "Apply your knowledge with real-world projects and practical safety simulations."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Placement Support",
      description: "Get resume building, interview prep, and job placement assistance with top employers."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Lifetime Access",
      description: "Enjoy lifetime access to course materials and future updates."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-purple-600">Elite Associates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide unparalleled learning experiences that transform careers and empower professionals in fire and safety
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-white transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-indigo-100">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-indigo-100">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-indigo-100">Careers Transformed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSec;