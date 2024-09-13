"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';

interface Exam {
  id: number;
  name: string;
  type: string;
}

const allExams: Exam[] = [
  { id: 1, name: 'SSC CGL', type: 'Combined Graduate Level' },
  { id: 2, name: 'SSC GD', type: 'Constable, General Duty' },
  { id: 3, name: 'SSC CHSL', type: 'Combined Higher Secondary Level' },
  { id: 4, name: 'SSC MTS', type: 'Multitasking Staff' },
  { id: 5, name: 'UPSC CSE', type: 'Civil Services Examination' },
  { id: 6, name: 'IBPS PO', type: 'Probationary Officer' },
];

const GoalSectionClientside: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const tabs = ['Upcoming', 'Popular', 'All'];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExams, setFilteredExams] = useState<Exam[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllExams, setShowAllExams] = useState(false);

  const memoizedFilteredExams = useMemo(() => {
    if (searchTerm) {
      return allExams.filter(exam =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return [];
  }, [searchTerm]);

  useEffect(() => {
    setFilteredExams(memoizedFilteredExams);
  }, [memoizedFilteredExams]);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileView = window.innerWidth < 640;
      setIsMobile(isMobileView);
      setShowAllExams(!isMobileView);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const visibleExams = (isMobile && !showAllExams) ? allExams.slice(0, 3) : allExams;

  return (
    <div>
      <div className="relative mb-6 w-full max-w-xl mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-slate-700" />
        </div>
        <input
          type="text"
          name="exam"
          placeholder="Search your exam"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-14 pr-4 py-3 w-full bg-white border-2 border-slate-900 text-slate-700 rounded-lg shadow-[0_6px_0_0_#10b981] outline-none transition-all duration-200 ease-in-out"
        />
        {searchTerm && (
          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <div key={exam.id} className="p-3 hover:bg-gray-100 cursor-pointer">
                  <h3 className="text-emerald-500 font-bold">{exam.name}</h3>
                  <p className="text-slate-700 text-sm">{exam.type}</p>
                </div>
              ))
            ) : (
              <div className="p-3 text-slate-700">No exam found</div>
            )}
          </div>
        )}
      </div>
      
      <div className="flex space-x-4 mb-6 justify-center items-center">
        {tabs.map((tab) => (
          <Button 
            key={tab}
            id={`tab-${tab.toLowerCase()}`}
            name={`tab-${tab.toLowerCase()}`}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-lg transition-all duration-300
              ${activeTab === tab 
                ? 'bg-green-400 text-white hover:bg-green-500 border-transparent' 
                : 'text-slate-400 bg-transparent hover:bg-slate-200 focus:outline-none border-slate-300'
              }
              hover:border-transparent shadow-none
            `}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleExams.map((exam) => (
          <Card
            key={exam.id}
            className="bg-gray-100 p-4 rounded-md hover:bg-green-100 transition-colors flex flex-col justify-center duration-300 h-32 w-full"
          >
            <h3 className="text-emerald-500 font-extrabold">{exam.name}</h3>
            <p className="text-slate-700 font-medium">{exam.type}</p>
          </Card>
        ))}
      </div>

      {isMobile && !showAllExams && allExams.length > 3 && (
        <div className="mt-4 text-center">
          <Button
            onClick={() => setShowAllExams(true)}
            className="bg-emerald-700 text-white hover:bg-emerald-700"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default GoalSectionClientside;