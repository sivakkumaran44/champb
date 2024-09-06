import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          b
        </div>
        <span className="ml-2 text-2xl font-bold text-gray-800">Champ</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center text-gray-600">
            <Globe className="mr-2 h-4 w-4" />
            <span>Site Language : English</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>Tamil</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;