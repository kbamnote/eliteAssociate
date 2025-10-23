import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Shield } from 'lucide-react';

const FAQSec = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What certifications will I receive after completing the course?",
      answer: "Upon successful completion of our courses, you'll receive industry-recognized certifications that are valued by employers worldwide. Our Fire Safety courses are accredited by the National Fire Protection Association (NFPA), and our Industrial Safety programs are aligned with OSHA standards."
    },
    {
      question: "How long do the courses take to complete?",
      answer: "Course durations vary depending on the program. Our short courses range from 2-4 weeks, while comprehensive programs can take 6-12 weeks. We offer both full-time and part-time options to accommodate different schedules."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we have a dedicated placement team that helps graduates find employment opportunities. Our services include resume building, interview preparation, and direct connections with our network of 50+ partner companies in the fire and safety industry."
    },
    {
      question: "Are the courses available online or in-person?",
      answer: "We offer both online and in-person options for all our courses. Our online programs include live interactive sessions, virtual labs, and hands-on projects. In-person training includes practical workshops and real-world simulations at our state-of-the-art facilities."
    },
    {
      question: "What are the prerequisites for enrollment?",
      answer: "Most of our courses require a high school diploma or equivalent. Some advanced programs may require prior experience or specific certifications. Our admissions team will guide you through the requirements for your chosen program during the application process."
    },
    {
      question: "Do you offer financing options for the courses?",
      answer: "Yes, we offer flexible payment plans and financing options to make our programs accessible. We partner with leading financial institutions to provide low-interest education loans. Additionally, we offer scholarships for deserving candidates based on merit and need."
    }
  ];

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
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our training programs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                <p className="text-purple-100 mb-4">
                  Our admissions team is ready to help you find the perfect program
                </p>
                <Link to="/contact">
                  <motion.button
                    className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSec;