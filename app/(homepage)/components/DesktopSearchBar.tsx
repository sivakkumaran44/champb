import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"

import { examCategories } from './ExamCategories';

interface DesktopSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredExams: any[];
  searchRef: React.RefObject<HTMLDivElement>;
}

const DesktopSearchBar: React.FC<DesktopSearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  filteredExams,
  searchRef
}) => {
  return (
    <div className="relative flex-grow md:w-[600px] w-full max-w-3xl mx-8 mt-2 md:mt-0">
      <div className="flex items-center border-2 border-slate-700 rounded-full overflow-hidden shadow-[0_5px_0_0_#6EE7B7]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-6 py-3 bg-white text-slate-700 hover:bg-slate-100 focus:ring-0 border-r border-emerald-500 text-lg">
              {selectedCategory}
              <ChevronDown className="ml-2" size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {examCategories.map((category) => (
              <React.Fragment key={category.name}>
                {category.subcategories.length > 0 ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {category.icon && <category.icon className="mr-2" size={20} />}
                      {category.name}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="w-64">
                        {category.subcategories.map((subcategory) => (
                          <DropdownMenuItem
                            key={subcategory.name}
                            onSelect={() => setSelectedCategory(subcategory.name)}
                          >
                            <div>
                              <div>{subcategory.name}</div>
                              <p className="text-xs text-muted-foreground">{subcategory.description}</p>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem onSelect={() => setSelectedCategory(category.name)}>
                    {category.icon && <category.icon className="mr-2" size={20} mb-4 />}
                    {category.name}
                  </DropdownMenuItem>
                )}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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

export default DesktopSearchBar;