import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CategoryDropdown from './CategoryDropdown';

interface Exam {
  id: string;
  name: string;
  type: string;
}

interface SearchBarProps {
  isMobile?: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredExams: Exam[];
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  isMobile = false, 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  filteredExams 
}) => {
  const searchRef = useRef<HTMLDivElement | null>(null);

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
  }, [setSearchTerm]);

  return (
    <div className={`relative flex-grow ${isMobile ? 'w-full' : 'md:w-[600px] w-full max-w-3xl mx-8 mt-2 md:mt-0'}`}>
      <div className="flex items-center border-2 border-slate-700 rounded-full overflow-hidden shadow-[0_5px_0_0_#6EE7B7]">
        {!isMobile && <CategoryDropdown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
        <div ref={searchRef} className="flex-grow relative">
          <Input
            type="text"
            name="exam"
            placeholder="Search your exam"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-white text-slate-700 focus:outline-none border-none"
          />
          <Button variant="ghost" className="absolute right-0 top-0 h-full p-2 bg-white hover:bg-slate-100 focus:ring-0">
            <Search className="text-slate-500" size={20} />
          </Button>
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
