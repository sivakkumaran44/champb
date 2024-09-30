"use client"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/img/LOGO SVG.svg";
import OtpVerification from '@/components/Auth/OtpVerification';
import { Search, ChevronDown, Briefcase, GraduationCap, FileText } from "lucide-react";
import examsData from '../data/exam.json';

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const allExams: Exam[] = useMemo(() => examsData, []); 

  const examCategories = [
    { name: "SSC Exams", icon: FileText },
    { name: "Banking Exams", icon: Briefcase },
    { name: "UG Entrance Exams", icon: GraduationCap }
  ];

  const memoizedFilteredExams = useMemo(() => {
    if (searchTerm) {
      return allExams.filter(exam =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return selectedCategory
      ? allExams.filter(exam => exam.category === selectedCategory)
      : allExams.filter(exam => exam.category === "SSC Exams");
  }, [searchTerm, selectedCategory, allExams]); 
  
  useEffect(() => {
    setFilteredExams(memoizedFilteredExams);
  }, [memoizedFilteredExams]); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
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

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
    if (!showDropdown) {
      setSelectedCategory("SSC Exams");
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
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
          <div className="flex items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between px-4 py-2 bg-slate-200 border-2 font-normal border-slate-900 text-slate-700 rounded-l-xl shadow-[0_5px_0_0_#6EE7B7] outline-none transition-all duration-200 ease-in-out"
              >
                All
                <ChevronDown className="ml-2" size={20} />
              </button>
              {showDropdown && (
                <div className="absolute z-20 mt-1 w-full md:w-[600px] bg-white border border-slate-200 rounded-lg shadow-lg p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 border-r border-slate-200 pr-4">
                      {examCategories.map((category, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center mb-4 cursor-pointer hover:bg-emerald-200 p-2 rounded ${selectedCategory === category.name ? 'bg-emerald-200' : ''}`}
                          onClick={() => handleCategoryClick(category.name)}
                        >
                          <category.icon className="mr-2" size={20} />
                          <span className="text-sm font-medium text-emerald-700">{category.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="md:w-2/3 pl-4">
                      <div className="grid grid-cols-3 gap-4">
                        {memoizedFilteredExams.map((exam) => (
                          <div
                            key={exam.id}
                            className="bg-emerald-200 p-2 rounded cursor-pointer hover:bg-green-200 transition-transform duration-200 ease-in-out transform hover:scale-105"
                          >
                            <span className="text-xs text-slate-700">{exam.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={searchRef} className="relative flex-grow">
              <input
                type="text"
                name="exam"
                placeholder="Search your exam"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-2 w-full bg-white border-2 border-l-0 border-slate-900 text-slate-700 rounded-r-xl shadow-[0_5px_0_0_#6EE7B7] outline-none transition-all duration-200 ease-in-out"
              />
              <Search className="absolute right-3 top-2.5 text-slate-500" />
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
          </div>
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