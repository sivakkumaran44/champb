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
    <div className="mt-8 ">
    <h2 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
     Select your exam to set goal</h2>
     <p className="leading-7 [&:not(:first-child)]:mb-10">
     Streamline Your Study Strategy</p>

      <div className="relative mb-6 w-full max-w-xl  mx-auto">
          <div className="absolute  inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search your exam"
            className="pl-10 pr-4 py-3 w-full h-100 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-md"
          />
             </div>
      <div className="flex space-x-4 mb-6 mb-6 flex justify-center items-center ">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "lightgreen" : "secondary"}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2  ${
              activeTab === tab ? 'bg-green-400 text-white' : 'bg-gray-100 text-gray-600'
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
      className="bg-gray-100 p-4 rounded-md hover:bg-green-100 transition-colors  flex flex-col  justify-center duration-300 h-32 w-48"
    >
      <h3 className="text-green-500 font-semibold">{exam.name}</h3>
      <p className="text-gray-700">{exam.type}</p>
    </Card>
  ))}
</div>


  
      </div>
      
    </div>
  
    );
};

export default ExamSelectionComponent;