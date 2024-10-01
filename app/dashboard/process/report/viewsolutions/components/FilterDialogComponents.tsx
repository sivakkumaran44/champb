import React from 'react';
import { Button } from "@/components/ui/button"
import { Filter } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const FilterDropdown = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gray-800 text-white w-12 h-12 fixed left-0 z-10 relative">
          <Filter size={24} className="text-slate-300"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-200 rounded-2xl w-48">
        <DropdownMenuItem>
          <span className="text-green-500">Correct Answer</span>
        </DropdownMenuItem>
        <DropdownMenuItem >
          <span className="text-red-500">Wrong Answer</span>
        </DropdownMenuItem>
        <DropdownMenuItem >
          <span className="text-gray-500">Unvisited</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
