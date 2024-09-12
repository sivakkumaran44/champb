import React from 'react';
import Image from 'next/image';
import performanceImage from '@/public/assets/img/Features 3.svg';

const PerformanceInsightsLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={performanceImage}
          alt="Performance Insights"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-8 ">
        <h3 className="scroll-m-20 text-2xl mb-6 text-emerald-500 font-semibold tracking-tight">
               Smart Performance Insights
        </h3>
        <p className="text-lg text-slate-700">
          Experience precise progress monitoring with bChamp&apos;s advanced tracking system. Our analyzes 
          your performance across various test types, providing detailed insights and tailored 
          recommendations to boost your exam readiness.
        </p>
      </div>
    </div>
  );
};

export default PerformanceInsightsLayout;