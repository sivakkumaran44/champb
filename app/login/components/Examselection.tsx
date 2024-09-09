import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';

const ExamSelectionComponent = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const tabs = ['Upcoming', 'Popular', 'All'];

  const exams = [
    { id: 1, name: 'TRB', type: 'Polytechnic' },
    { id: 2, name: 'TRB', type: 'Polytechnic' },
    { id: 3, name: 'TRB', type: 'Polytechnic' },
  ];

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
    <Search className="h-6 w-6 text-gray-700" />
  </div>
  <Input
    type="text"
    placeholder="Search your exam"
    className="pl-14 pr-4 py-3 w-full text-slate-700 h-12 bg-white border-0 border-b-4 border-green-300 focus:ring-0 focus:border-green-300 shadow-sm text-slate-700 placeholder-gray-400 rounded-t-lg"
  />
</div>


        <div className="flex space-x-4 mb-6 justify-center items-center">
  {tabs.map((tab) => (
    <Button 
      key={tab}
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
    </div>
  );
};

export default ExamSelectionComponent;