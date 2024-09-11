import React from 'react';
import { Search } from 'lucide-react';
import GoalSectionClientside from '@/app/useclient/GoalSectionClientside';

const GoalSection = () => {
   return (
    <div className="container mx-auto p-6 flex justify-center items-center mb-6">
      <div className="mt-8">
        <h2 className="scroll-m-20 font-semibold mb-2 text-5xl text-slate-700">
          Select your exam to set goal
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mb-10 text-slate-700">
          Streamline Your Study Strategy
        </p>

        <div className="relative mb-6 w-full max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-700" />
          </div>
          <input
            type="text"
            name="exam"
            placeholder="Search your exam"
            className="pl-14 pr-4 py-3 w-full bg-white border border-slate-900 border-opacity-100 border-b-4 border-b-emerald-300 shadow-sm text-slate-700  rounded-t-lg "
          />
        </div>

       <GoalSectionClientside/>
        
      </div>
    </div>
  );
};

export default GoalSection;