"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import examsData from '@/components/data/exam.json';

interface Exam {
  id: string;
  name: string;
  type: string;
}

const SearchBar: React.FC<{ isMobile?: boolean }> = ({ }) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const allExams: Exam[] = examsData.map(exam => ({
    ...exam,
    id: exam.id.toString(),
  }));

  const filteredExams = allExams.filter(exam => 
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
      <div className="relative ml-auto flex-1 md:grow-0">
        <div ref={searchRef} className="flex-grow relative">
          <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            name="exam"
            placeholder="Search your exam"
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
    
      {searchTerm && (
        <div className="absolute z-10 w-full lg:w-5/12 bg-white border border-slate-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
          {filteredExams.length > 0 ? (
            filteredExams.map(exam => (
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
