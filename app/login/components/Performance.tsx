import React from 'react';

const PerformanceInsightsLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 ">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
      
      </div>
      
      <div className="w-full md:w-1/2 md:pl-8 mt-40">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Smart Real-time Performance Insights
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Experience precise progress monitoring with bChamp&apos;s advanced tracking system. Our analyzes
          your performance across various test types, providing detailed insights and tailored
          recommendations to boost your exam readiness.
        </p>
       
      </div>
    </div>
  );
};

export default PerformanceInsightsLayout;