import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

const TrainersSec = () => {
  const trainers = [
    {
      id: 1,
      name: "Dr. Robert Johnson",
      role: "Chief Fire Safety Instructor",
      experience: "20+ years",
      bio: "Former fire chief with extensive experience in industrial fire safety protocols.",
      image: "trainer-1"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Industrial Safety Specialist",
      experience: "15+ years",
      bio: "Certified safety professional with expertise in hazard assessment and risk management.",
      image: "trainer-2"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Emergency Response Expert",
      experience: "18+ years",
      bio: "Specializes in emergency preparedness and crisis management for industrial facilities.",
      image: "trainer-3"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Occupational Health Specialist",
      experience: "12+ years",
      bio: "Expert in workplace health regulations and employee wellness programs.",
      image: "trainer-4"
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
            Meet Our <span className="text-purple-600">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry veterans with decades of real-world experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-64 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold">{trainer.image.replace('-', ' ')}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{trainer.role}</p>
                <p className="text-sm text-gray-500 mb-4">{trainer.experience} experience</p>
                <p className="text-gray-600 text-sm">{trainer.bio}</p>
                
                <div className="flex justify-center mt-6">
                  <div className="flex gap-2">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSec;