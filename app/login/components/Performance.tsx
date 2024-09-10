import React from 'react';
import Image from 'next/image';
import performanceImage from '../../img/Group_1197.webp';

const PerformanceInsightsLayout = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-between bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <Image
          src={performanceImage}
          alt="Performance Insights"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-0">
        <h3 className="text-3xl font-bold text-emerald-500 mb-4">
          Smart Performance Insights
        </h3>
        <p className="text-lg text-gray-700">
          Experience precise progress monitoring with bChamp's advanced tracking system. Our analyzes 
          your performance across various test types, providing detailed insights and tailored 
          recommendations to boost your exam readiness.
        </p>
      </div>
    </div>
  );
};

export default PerformanceInsightsLayout;