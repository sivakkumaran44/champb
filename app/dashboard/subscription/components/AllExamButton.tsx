"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const AllExamButton: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const tabs = ['Upcoming', 'Popular', 'All'];

  return (
    <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 justify-center items-center overflow-auto">
      {tabs.map((tab) => (
        <Button
          key={tab}
          id={`tab-${tab.toLowerCase()}`}
          name={`tab-${tab.toLowerCase()}`}
          variant={activeTab === tab ? "default" : "outline"}
          onClick={() => setActiveTab(tab)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
            ${activeTab === tab 
              ? 'bg-emerald-300 text-slate-700 hover:bg-emerald-300 focus:outline-none border-transparent' 
              : 'text-slate-400 bg-transparent hover:bg-slate-200 focus:outline-none border-transparent border-slate-300'
            }
            hover:border-transparent shadow-none
          `}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default AllExamButton;
