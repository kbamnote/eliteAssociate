import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-8 h-8" />,
      value: 50000,
      suffix: '+',
      label: 'Students Placed',
      description: 'Successfully placed in top companies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8" />,
      value: 500,
      suffix: '+',
      label: 'Partner Companies',
      description: 'Trusted hiring partners worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8" />,
      value: 25,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise and training',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Success Rate',
      description: 'Job placement success rate',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: <CheckCircle className="w-8 h-8" />,
      value: 100,
      suffix: '%',
      label: 'Placement Assistance',
      description: 'Guaranteed placement support',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 6,
      icon: <Star className="w-8 h-8" />,
      value: 4.9,
      suffix: '/5',
      label: 'Student Rating',
      description: 'Average student satisfaction',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence in training and placement
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>

                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    delay={index * 200}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Success Stories
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
