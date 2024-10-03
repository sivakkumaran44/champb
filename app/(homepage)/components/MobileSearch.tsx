import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from './SearchBar';
import MobileAccordion from './MobileAccordion';

interface MobileSearchProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  allExams: any[];
}

const MobileSearch: React.FC<MobileSearchProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  allExams,
}) => {
  const [filteredExams, setFilteredExams] = useState<any[]>([]);
  useEffect(() => {
    if (searchTerm) {
      const filtered = allExams.filter((exam) =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredExams(filtered);
    } else {
      setFilteredExams(allExams);
    }
  }, [searchTerm, allExams]);

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full h-[80vh] bg-slate-100 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Search</h2>
        </div>
        <SearchBar
          isMobile={true}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredExams={filteredExams} 
        />
        <MobileAccordion
          setSelectedCategory={setSelectedCategory}
          setIsDrawerOpen={setIsDrawerOpen}
          allExams={allExams}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSearch;
