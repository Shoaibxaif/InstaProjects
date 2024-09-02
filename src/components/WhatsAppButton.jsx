// components/WhatsAppButton.js

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton = () => {
  return (
    <>
      <a
        href="https://wa.me/+917505910225" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105 z-50 flex items-center justify-center"
        title="Contact Us on WhatsApp for instant support"
      >
        <span className="flex items-center space-x-2">
          <FaWhatsapp className="text-2xl" />
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
