import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import ContactFormPopup from './ContactFormPopup';

const FloatingButton = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          onClick={toggleContactModal}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Contact Form Popup */}
      <ContactFormPopup
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get a Callback"
      />
    </>
  );
};

export default FloatingButton;