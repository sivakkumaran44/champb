import React from 'react';
import GoalSectionClientside from '@/components/useclient/GoalSectionClientside';

const GoalSection = () => {
   return (
    <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-center items-center mb-2 sm:mb-6">
      <div className="mt-4 sm:mt-8 w-full max-w-3xl">
        <h2 className="scroll-m-20 text-center font-semibold text-3xl  sm:mr-0 sm:ml-0 md:mr-[112px] sm:text-4xl text-slate-700 ">
          Select your exam to set goal
        </h2>
        <p className="leading-7 text-center mx-auto sm:mr-0 sm:ml-0 md:mr-[285px] text-sm sm:text-base mb-4 sm:mb-8 text-slate-700 max-w-[90%] sm:max-w-full">
          Start Progressing your goal and achieve it
        </p>

       <GoalSectionClientside />
      </div>
    </div>
  );
};
export default GoalSection;