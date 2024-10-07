import React from 'react';
const MasterYourSyllabus = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 mb-2 bg-white">
      <div className="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0">
        <h3 className="scroll-m-20 text-2xl mb-6 text-emerald-500 font-semibold tracking-tight">
          Master Your Syllabus
        </h3>
        <p className="text-lg font-normal text-slate-700 mb-6">
          Stay on top of your exam preparation with our comprehensive syllabus tracking feature. bChamp
          helps you monitor your progress through each topic and subject, ensuring you cover all aspects of the
          exam syllabus effectively.
        </p>
      </div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 mb-6 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
         <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <iframe
              src="https://champb.vercel.app/iframe/masteryoursyllabus"
              className="w-full h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              allow="fullscreen"
              sandbox="allow-same-origin allow-scripts"
              title="Mobile Phone Preview"
            ></iframe>
          </div>
        </div>
      </div>
    
  );
};

export default MasterYourSyllabus;
