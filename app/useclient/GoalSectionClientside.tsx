"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';

const GoalSectionClientside = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const tabs = ['Upcoming', 'Popular', 'All'];

  const exams = [
    { id: 1, name: 'TRB', type: 'Polytechnic' },
    { id: 2, name: 'TRB', type: 'Polytechnic' },
    { id: 3, name: 'TRB', type: 'Polytechnic' },
  ];

  return (
    <div>        
      <div className="flex space-x-4 mb-6 justify-center items-center">
        {tabs.map((tab) => (
          <Button 
            key={tab}
            id={`tab-${tab.toLowerCase()}`}
            name={`tab-${tab.toLowerCase()}`}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeTab === tab 
                ? 'bg-green-400 text-white hover:bg-green-500 shadow-none' 
                : 'text-slate-400 bg-transparent hover:bg-slate-200' 
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            className="bg-gray-100 p-4 rounded-md hover:bg-green-100 transition-colors flex flex-col justify-center duration-300 h-32 w8"
          >
            <h3 className="text-emerald-500 font-semibold">{exam.name}</h3>
            <p className="text-slate-700">{exam.type}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoalSectionClientside;