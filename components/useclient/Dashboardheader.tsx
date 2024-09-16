"use client";
import React from 'react';
import { Trophy, CircleChevronDown, Menu, User, BookmarkIcon, Bell, Settings, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  const Dashboardheader: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => (
  <header className="bg-slate-200 p-4 flex justify-between items-center">
    <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
      <Menu className="h-6 w-6" />
    </Button>
    <div className="flex-1 flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="flex items-center space-x-2 p-0 bg-transparent hover:bg-transparent">
            <Trophy className="h-7 w-7 text-emerald-500" />
            <span className="font-medium text-emerald-500 text-lg md:text-xl">Goal</span>
            <span className="text-sm md:text-lg">SSC - CGL</span>
            <CircleChevronDown className="h-6 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 bg-white rounded-md shadow-lg p-1">
          <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md">
            <Trophy className="h-5 w-5 text-slate-950 mr-3" />
            <div>
              <div className="text-sm md:text-base lg:text-lg">SSC GD - Constable,</div>
              <div className="text-xs md:text-sm lg:text-base text-slate-800">General Duty</div>
            </div>
          </DropdownMenuItem>
          <hr className="border-t border-gray-200 my-1" />
          <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md">
            <Trophy className="h-5 w-5 text-slate-950 mr-3" />
            <div>
              <div className="text-sm md:text-base lg:text-lg">SSC CHSL - Combined</div>
              <div className="text-xs md:text-sm lg:text-base text-slate-800">Higher Secondary Level</div>
            </div>
          </DropdownMenuItem>
          <hr className="border-t border-gray-200 my-1" />
          <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md">
            <span className="text-sm md:text-base lg:text-lg text-slate-800">Add New Goal</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 rounded-full flex items-center space-x-2 p-0 bg-transparent hover:bg-transparent">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CircleChevronDown className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-emerald-300 rounded-md shadow-lg p-1">
        <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
          <User className="mr-3 h-5 w-5" />
          <span className="text-base md:text-lg lg:text-xl">Profile</span>
        </DropdownMenuItem>
        <div className="h-px bg-slate-950 my-2" />
        <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
          <BookmarkIcon className="mr-3 h-5 w-5" />
          <span className="text-base md:text-lg lg:text-xl">Saved Tests</span>
        </DropdownMenuItem>
        <div className="h-px bg-slate-950 my-2" />
        <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
          <Bell className="mr-3 h-5 w-5" />
          <span className="text-base md:text-lg lg:text-xl">Notifications Preferences</span>
        </DropdownMenuItem>
        <div className="h-px bg-slate-950 my-2" />
        <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
          <Settings className="mr-3 h-5 w-5" />
          <span className="text-base md:text-lg lg:text-xl">Settings</span>
        </DropdownMenuItem>
        <div className="h-px bg-slate-950 my-2" />
        <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
          <LogOut className="mr-3 h-5 w-5" />
          <span className="text-base md:text-lg lg:text-xl">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
);

export default Dashboardheader;
