"use client"

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/public/assets/img/LOGO SVG.svg";
import OtpVerification from '@/components/Auth/OtpVerification';
import { Search, ChevronDown, Briefcase, GraduationCap, FileText } from "lucide-react";
import examsData from '../data/exam.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Exam {
  id: number;
  name: string;
  type: string;
  category: string;
}

const Header: React.FC = () => {
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExams, setFilteredExams] = useState<Exam[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const allExams: Exam[] = useMemo(() => examsData, []); 
 
  const examCategories = [
    { name: "All", icon: FileText },
    { name: "SSC Exams", icon: FileText },
    { name: "Banking Exams", icon: Briefcase },
    { name: "UG Entrance Exams", icon: GraduationCap },
  ];

  const memoizedFilteredExams = useMemo(() => {
    if (searchTerm) {
      return allExams.filter(exam =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return selectedCategory !== "All"
      ? allExams.filter(exam => exam.category === selectedCategory)
      : allExams;
  }, [searchTerm, selectedCategory, allExams]);
  
  useEffect(() => {
    setFilteredExams(memoizedFilteredExams);
  }, [memoizedFilteredExams]);

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

  const handleSignInClick = () => {
    setShowOtpVerification(true);
  };

  const handleOtpVerificationClose = () => {
    setShowOtpVerification(false);
  };

  const SearchBar = ({ isMobile = false }) => (
    <div className={`relative flex-grow ${isMobile ? 'w-full' : 'max-w-md mx-8 mt-2 md:mt-0'}`}>
      <div className="flex items-center border-2 border-slate-700 rounded-full overflow-hidden shadow-[0_5px_0_0_#6EE7B7]">
        {!isMobile && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-4 py-2 bg-white text-slate-700 hover:bg-slate-100 focus:ring-0 border-r border-emerald-500">
                {selectedCategory}
                <ChevronDown className="ml-2" size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {examCategories.map((category) => (
                <DropdownMenuItem key={category.name} onSelect={() => setSelectedCategory(category.name)}>
                  <category.icon className="mr-2" size={20} />
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
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
        <div className="absolute z-10 w-full w-bg-white border border-slate-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
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

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-white relative">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="bChamp Logo"   
            className="w-auto h-16" 
          />
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <div className="md:hidden">
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
              <SearchBar isMobile={true} />
              <Tabs defaultValue="categories" className="mt-4">
                <TabsList className="grid w-full grid-cols-1">
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                </TabsList>
                <TabsContent value="categories" className="mt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {examCategories.map((category) => (
                      <DropdownMenu key={category.name}>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            <span className="flex items-center">
                              <category.icon className="mr-2" size={20} />
                              {category.name}
                            </span>
                            <ChevronDown size={20} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          {allExams
                            .filter(exam => exam.category === category.name || category.name === "All")
                            .map(exam => (
                              <DropdownMenuItem key={exam.id}>
                                {exam.name}
                              </DropdownMenuItem>
                            ))
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </SheetContent>
          </Sheet>
        </div>

        <div className="relative flex flex-grow justify-end mt-2 md:mt-0">
          <Button 
            size="sm"
            className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-base font-semibold text-white px-6 py-2 text-sm"
            onClick={handleSignInClick}
          >
            Sign in / Sign up
          </Button>
        </div>
      </header>
      
      {showOtpVerification && (
        <OtpVerification 
          isOpen={showOtpVerification} 
          onClose={handleOtpVerificationClose} 
        />
      )}
    </>
  );
};

export default Header;