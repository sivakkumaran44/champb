import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import logo from "../img/bchamp.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <div className="  flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
        <div className="flex flex-col items-center">
      <Image
        src={logo}
        alt="QR Code"
        width={100}
        height={100}
      />
     </div>
            </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center text-gray-600">
            <Globe className="mr-2 h-4 w-4" />
            <h3 className="scroll-m-20 text-sm tracking-tight">
              <span><b>Site Language</b>: English</span>
            </h3>
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