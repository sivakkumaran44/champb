"use client"

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/img/LOGO SVG.svg";
import OtpVerification from '@/components/Auth/OtpVerification';
import examsData from '../data/exam.json';
import SearchBar from '@/app/(homepage)/components/SearchBar';
import MobileSearch from '@/app/(homepage)/components/MobileSearch';

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

  const allExams: Exam[] = useMemo(() => examsData, []); 
 
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
        <div className="hidden md:block">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            filteredExams={filteredExams}
          />
        </div>
        <div className="md:hidden">
          <MobileSearch 
            isDrawerOpen={isDrawerOpen} 
            setIsDrawerOpen={setIsDrawerOpen}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            allExams={allExams}
          />
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
      
      {typeof window !== 'undefined' && showOtpVerification && (
        <OtpVerification 
          isOpen={showOtpVerification} 
          onClose={handleOtpVerificationClose} 
        />
      )}
    </>
  );
};

export default Header;