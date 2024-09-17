"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import image from'@/public/assets/img/Vector.svg';
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
        <div className="w-full px-4 sm:px-0">
      <div className="relative mb-6 w-full max-w-xl mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Image
            src={image}
            alt="QR Code"
            className="w-full h-auto object-contain"
          />
        </div>
        <input
          type="text"
          name="exam"
          placeholder="Search your exam"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-14 pr-4 py-3 w-full sm:w-10/12 bg-white border-2 border-slate-900 text-slate-700 rounded-xl shadow-[0_5px_0_0_#6EE7B7] 
          outline-none transition-all duration-200 ease-in-out"
        />
        {searchTerm && (
          <div className="absolute z-10 w-full sm:w-10/12 bg-white border border-slate-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <div key={exam.id} className="p-3 hover:bg-slate-100 cursor-pointer last:border-b-0">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <span>{exam.name}</span>
                    <span>-</span>
                    <span>{exam.type}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-3 text-slate-700">No exam found</div>
            )}
          </div>
          
        )}
      </div>
       
      </div>
      <div className="flex flex-wrap gap-10 sm:gap-12 lg:gap-20 mb-6 sm:mb-8 lg:mb-12 mr-0 sm:mr-8 lg:mr-28 justify-center items-center">
    {tabs.map((tab) => (
          <Button size='xl'
            key={tab}
            id={`tab-${tab.toLowerCase()}`}
            name={`tab-${tab.toLowerCase()}`}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-lg transition-all duration-300
              ${activeTab === tab 
                ? 'bg-emerald-300 text-slate-700 hover:bg-emerald-300 border-transparent' 
                : 'text-slate-950 bg-transparent hover:bg-slate-200 focus:outline-none border-slate-300'
              }
              hover:border-transparent shadow-none
            `}
          >
            {tab}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
  {visibleExams.map((exam) => (
    <Card
      key={exam.id}
      className="bg-gray-200 p-4 rounded-md hover:bg-green-100 transition-colors flex flex-col justify-center duration-300 h-28 w-full sm:w-11/12 md:w-10/12 lg:w-9/12"
    >
      <h3 className="text-emerald-500 font-extrabold text-sm sm:text-base">{exam.name}</h3>
      <p className="text-slate-700 font-medium text-xs sm:text-sm">{exam.type}</p>
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
