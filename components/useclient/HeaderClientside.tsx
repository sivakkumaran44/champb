"use client"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/img/LOGO SVG.svg";
import OtpVerification from '@/components/Auth/OtpVerification';
import { Search, ChevronDown, Briefcase, GraduationCap, FileText } from "lucide-react";
import examsData from '../data/exam.json';
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
  const searchRef = useRef<HTMLDivElement | null>(null);

  const allExams: Exam[] = useMemo(() => examsData, []); 
 
  const examCategories = [
    { name: "All", subcategories: [] },
    { 
      name: "SSC Exams", 
      icon: FileText, 
      subcategories: [
        { name: "CGL", description: "Combined Graduate Level Examination" },
        { name: "CHSL", description: "Combined Higher Secondary Level Examination" },
        { name: "MTS", description: "Multi Tasking Staff Examination" }
      ] 
    },
    { 
      name: "Banking Exams", 
      icon: Briefcase, 
      subcategories: [
        { name: "IBPS PO", description: "Institute of Banking Personnel Selection - Probationary Officer" },
        { name: "SBI PO", description: "State Bank of India - Probationary Officer" },
        { name: "RBI Grade B", description: "Reserve Bank of India - Grade B Officer" }
      ] 
    },
    { 
      name: "UG Entrance Exams", 
      icon: GraduationCap, 
      subcategories: [
        { name: "JEE Main", description: "Joint Entrance Examination - Main" },
        { name: "NEET", description: "National Eligibility cum Entrance Test" },
        { name: "CLAT", description: "Common Law Admission Test" }
      ] 
    }
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

        <div className="relative flex-grow max-w-md mx-8 mt-2 md:mt-0">
          <div className="flex items-center border-2 border-slate-700 rounded-full overflow-hidden shadow-[0_5px_0_0_#6EE7B7]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2 bg-white text-slate-700 hover:bg-slate-100 focus:ring-0 border-r border-emerald-500">
                  {selectedCategory}
                  <ChevronDown className="ml-2" size={20} />
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
          {category.icon && <category.icon className="mr-2" size={20} />}
          {category.name}
        </DropdownMenuItem>
      )}
    </React.Fragment>
  ))}
</DropdownMenuContent>
            </DropdownMenu>
            <div ref={searchRef} className="flex-grow relative">
              <input
                type="text"
                name="exam"
                placeholder="Search your exam"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white text-slate-700 focus:outline-none"
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