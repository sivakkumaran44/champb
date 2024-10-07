import React from 'react';

const PerformanceInsightsLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8  bg-white">
       <div className="relative mx-auto border-gray-800 mb-6 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
         <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <iframe
              src="https://champb.vercel.app/iframe/Performancestatus"
              className="w-full h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              allow="fullscreen"
              sandbox="allow-same-origin allow-scripts"
              title="Mobile Phone Preview"
            ></iframe>
          </div>
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