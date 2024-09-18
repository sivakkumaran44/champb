"use client"
import React, { useState } from 'react';
import TestTypeNavigation from '@/app/dashboard/components/TestTypeNavigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CircleChevronDown, Clock, HelpCircle, PenLine } from 'lucide-react';

const CustomTest: React.FC = () => {
  const [section, setSection] = useState('');
  const [isYearSelectionOpen, setIsYearSelectionOpen] = useState(false);
  const sections = ['2021', '2022', '2023', '2024'];

  const toggleYearSelection = () => {
    setIsYearSelectionOpen(!isYearSelectionOpen);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <TestTypeNavigation />  
      <div className="relative w-full max-w-5xl">
        <div
          className="pr-10 h-14 border-2 border-slate-200 bg-slate-100 text-slate-700 text-xl p-6 rounded-lg flex justify-between items-center cursor-pointer"
          onClick={toggleYearSelection}
        >
          <span>{section ? `Selected Year: ${section}` : "Select a Year"}</span>
          <CircleChevronDown
            className={`text-slate-400 transition-transform duration-300 ${isYearSelectionOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
   {isYearSelectionOpen && (
        <Card className="mb-4 w-full max-w-5xl bg-slate-100 border border-slate-300 rounded-lg relative">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-sm font-medium text-emerald-700 mb-4">Choose year</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-medium text-slate-700">
                <label className="block mb-1">Year</label>
                <Select onValueChange={(value) => { setSection(value); setIsYearSelectionOpen(false); }} value={section}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
        <Card className="mb-4 w-full max-w-4xl bg-slate-100 border border-slate-300 rounded-lg relative">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl text-slate-700 font-bold mb-2">SSC CGL TIER I 2023 SHIFT 1 MORNING</h2>
            <p className="text-slate-500 mb-4">
              Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence, 
              General Awareness, Quantitative Aptitude, and English Comprehension.
            </p>
            <div className="flex items-center text-slate-500 space-x-4 mb-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>60 Minutes</span>
              </div>
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                <span>100 Questions</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300">
              <PenLine className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">TAKE TEST</span>
            </button>
          </CardContent>
        </Card>
         </div>
  );
};
export default CustomTest;
