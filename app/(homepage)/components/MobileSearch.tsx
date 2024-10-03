import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from './SearchBar';
import MobileAccordion from './MobileAccordion';

interface Exam {
  id: string;
  name: string;
  category: string;
  type: string; 
}

interface MobileSearchProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  allExams: Exam[]; 
}

const MobileSearch: React.FC<MobileSearchProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  allExams,
}) => {
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
          allExams={allExams} 
        />
        <MobileAccordion
          setSelectedCategory={() => {}} 
          setIsDrawerOpen={setIsDrawerOpen}
          allExams={allExams}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSearch;
