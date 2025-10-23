import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const PricingSec = () => {
  const [billingCycle, setBillingCycle] = useState('annual');

  const plans = [
    {
      name: "Starter",
      price: { monthly: "49", annual: "39" },
      description: "Perfect for individuals getting started",
      features: [
        "Access to 5 courses",
        "Basic certification",
        "Community support",
        "Weekly webinars",
        "1 project submission"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: { monthly: "99", annual: "79" },
      description: "Ideal for career advancement",
      features: [
        "Access to 20 courses",
        "Premium certification",
        "Expert mentor support",
        "Daily live sessions",
        "5 project submissions",
        "Career services",
        "Resume building"
      ],
      cta: "Try Free for 14 Days",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: "299", annual: "249" },
      description: "For teams and organizations",
      features: [
        "Unlimited course access",
        "Executive certification",
        "1:1 mentor sessions",
        "24/7 priority support",
        "Unlimited projects",
        "Career services",
        "Team management",
        "Custom learning paths",
        "Analytics dashboard"
      ],
      cta: "Contact Sales",
      popular: false
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
            Simple, Transparent <span className="text-teal-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for you and your team
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-8 relative overflow-hidden ${
                plan.popular
                  ? 'bg-white border-2 border-teal-500 shadow-xl transform md:-translate-y-4'
                  : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-sm font-bold px-6 py-1 transform origin-top-right rotate-45 translate-x-6 -translate-y-2">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingCycle === 'annual' ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">
                    /{billingCycle === 'annual' ? 'year' : 'month'}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.cta === "Contact Sales" ? (
                <Link to="/contact">
                  <motion.button
                    className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution for your organization?
          </p>
          <Link to="/contact">
            <motion.button
              className="text-teal-600 font-bold hover:text-teal-700 flex items-center justify-center mx-auto gap-2"
              whileHover={{ x: 5 }}
            >
              Contact our sales team
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSec;