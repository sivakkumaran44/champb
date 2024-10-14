import React from 'react';
const MasterYourSyllabus = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 mb-2 bg-white">
      <div className="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0">
        <h3 className="scroll-m-20 text-2xl mb-4 text-emerald-500 font-semibold tracking-tight">
          Master Your Syllabus
        </h3>
        <p className="text-lg font-normal text-slate-700 mb-4">
          Stay on top of your exam preparation with our comprehensive syllabus tracking feature. bChamp
          helps you monitor your progress through each topic and subject, ensuring you cover all aspects of the
          exam syllabus effectively.
        </p>
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-10">
       <div className="relative mx-auto h-[608px] w-[308px] rounded-[2.5rem] border-[4px] bg-gradient-to-r from-blue-200 to-purple-300 border-gray-500">
          <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.2rem] border-[6px] border-transparent bg-slate-950 p-1 shadow-xl">
            <div className="absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[1rem] bg-black"></div>
            <div className="absolute left-1/2 top-0 h-[10px] w-[10px] -translate-x-1/2 rounded-b-[1rem] bg-black"></div>
            <div className="absolute -left-[12px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gradient-to-b from-slate-300 to-slate-600 border border-gray-500"></div>
            <div className="absolute -left-[12px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gradient-to-b from-slate-300 to-slate-600 border border-gray-500"></div>
            <div className="absolute -right-[12px] top-[124px] h-[46px] w-[3px] rounded-r-lg bg-gradient-to-b from-slate-300 to-slate-600 border border-gray-500"></div>
            <div className="absolute -right-[12px] top-[178px] h-[46px] w-[3px] rounded-r-lg bg-gradient-to-b from-slate-300 to-slate-600 border border-gray-500"></div>
            <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white">
           <iframe
              src="http://localhost:3000/iframe/masteryoursyllabus"
              className="w-full h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              allow="fullscreen"
              sandbox="allow-same-origin allow-scripts"
              title="Mobile Phone Preview"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default MasterYourSyllabus;
