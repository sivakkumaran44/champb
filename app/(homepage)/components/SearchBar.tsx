"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import examsData from '@/components/data/exam.json';  

interface Exam {
  id: string;
  name: string;
  type: string;
}

const SearchBar: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const allExams: Exam[] = examsData.map(exam => ({
    ...exam,
    id: exam.id.toString(),
  }));
  const filteredExams = allExams.filter((exam) => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative flex-grow ${isMobile ? 'w-full' : 'md:w-[600px] w-full max-w-3xl mx-8 mt-2 md:mt-0'}`}>
      <div className="flex items-center border-2 border-slate-700 rounded-full overflow-hidden shadow-[0_5px_0_0_0_#6EE7B7]">
        <div ref={searchRef} className="flex-grow relative">
          <Input
            type="text"
            name="exam"
            placeholder="Search your exam"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-white text-slate-700 focus:outline-none border-none"
          />
          <Search className="text-slate-500 absolute right-3 top-1/2 transform -translate-y-1/2" size={20} />
        </div>
      </div>
      {searchTerm && (
        <div className="absolute z-10 w-full bg-white border border-slate-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <div key={exam.id} className="p-3 hover:bg-slate-100 cursor-pointer last:border-b-0">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>{exam.name}</span>
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
  );
};

export default SearchBar;
