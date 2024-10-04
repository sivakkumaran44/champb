
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

type Tab = 'Upcoming' | 'Popular' | 'All';

interface SortOutProps {
  onCategoryChange: (category: string) => void;
}

const SortOut: React.FC<SortOutProps> = ({ onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const tabs: Tab[] = ['Upcoming', 'Popular', 'All'];

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    onCategoryChange(tab.toLowerCase());
  };

  return (
    <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 justify-center items-center overflow-auto">
      {tabs.map((tab) => (
        <Button
          key={tab}
          id={`tab-${tab.toLowerCase()}`}
          name={`tab-${tab.toLowerCase()}`}
          variant={activeTab === tab ? "default" : "outline"}
          onClick={() => handleTabClick(tab)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
            ${activeTab === tab 
              ? 'bg-emerald-300 text-slate-700 hover:bg-emerald-300 ' 
              : 'text-slate-400 bg-transparent hover:bg-slate-200  border-slate-300'
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

export default SortOut;