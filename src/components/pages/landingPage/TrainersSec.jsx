import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

const TrainersSec = () => {
  const trainers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Chief Fire Safety Instructor",
      experience: "20+ years",
      bio: "Former fire chief with extensive experience in industrial fire safety protocols.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Industrial Safety Specialist",
      experience: "15+ years",
      bio: "Certified safety professional with expertise in hazard assessment and risk management.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Emergency Response Expert",
      experience: "18+ years",
      bio: "Specializes in emergency preparedness and crisis management for industrial facilities.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Sneha Nair",
      role: "Occupational Health Specialist",
      experience: "12+ years",
      bio: "Expert in workplace health regulations and employee wellness programs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
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
            Meet Our <span className="text-blue-600">Expert Trainers</span>
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
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{trainer.role}</p>
                <p className="text-sm text-gray-500 mb-4">{trainer.experience} experience</p>
                <p className="text-gray-600 text-sm">{trainer.bio}</p>
                
                <div className="flex justify-center mt-6">
                  <div className="flex gap-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
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