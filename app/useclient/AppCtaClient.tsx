"use client"
import React from 'react';

const AppCtaClient = () => {
  const handleGetStarted = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    
          <button 
            className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
            onClick={handleGetStarted}
          >
            GET STARTED
          </button>
       
  );
};

export default AppCtaClient;