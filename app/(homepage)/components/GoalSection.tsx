import React from 'react';
import GoalSectionClientside from '@/components/useclient/GoalSectionClientside';

const GoalSection = () => {
   return (
    <div className="container mx-auto p-6 flex justify-center items-center mb-6">
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="scroll-m-20 font-semibold mb-2 text-5xl text-slate-700">
          Select your exam to set goal
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mb-10 text-slate-700">
          Streamline Your Study Strategy
        </p>
       <GoalSectionClientside />
      </div>
    </div>
  );
};
export default GoalSection;