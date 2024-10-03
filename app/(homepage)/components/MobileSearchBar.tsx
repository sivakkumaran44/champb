import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { examCategories } from './ExamCategories';

interface MobileSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredExams: any[];
  setIsDrawerOpen: (isOpen: boolean) => void;
  allExams: any[];
}

const MobileSearchBar: React.FC<MobileSearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  filteredExams,
  setIsDrawerOpen,
  allExams
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Search</h2>
      </div>
      <div className="w-full relative">
        <div className="flex items-center border-2 border-slate-700 rounded-full overflow-hidden shadow-[0_5px_0_0_#6EE7B7]">
          <div className="flex-grow relative">
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
      <div className="mt-4 flex-grow overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          {examCategories.map((category) => (
            <AccordionItem value={category.name} key={category.name}>
              <AccordionTrigger className="flex items-center font-semibold">
                {category.icon && <category.icon className="mr-2" size={20} />}
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                {category.subcategories.length > 0 ? (
                  category.subcategories.map((subcategory) => (
                    <Button
                      key={subcategory.name}
                      variant="ghost"
                      className="w-full justify-start text-left pl-8 py-2"
                      onClick={() => {
                        setSelectedCategory(subcategory.name);
                        setIsDrawerOpen(false);
                      }}
                    >
                      {subcategory.name}
                    </Button>
                  ))
                ) : (
                  allExams
                    .filter(exam => exam.category === category.name || category.name === "All")
                    .map(exam => (
                      <Button
                        key={exam.id}
                        variant="ghost"
                        className="w-full justify-start text-left pl-8 py-2"
                        onClick={() => {
                          setSelectedCategory(exam.name);
                          setIsDrawerOpen(false);
                        }}
                      >
                        {exam.name}
                      </Button>
                    ))
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default MobileSearchBar;