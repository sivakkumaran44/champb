"use client"
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleChevronDown, Clock, HelpCircle, View } from 'lucide-react';
import TestTypeNavigation from '@/app/dashboard/components/TestTypeNavigation';
export default function CustomTest() {
const [section, setSection] = useState('');
  const [chapter, setChapter] = useState('');
  const [topic, setTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const sections = ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English Comprehension'];
  const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
  const topics = ['Topic 1', 'Topic 2', 'Topic 3'];
  const subTopics = ['Sub-topic 1', 'Sub-topic 2', 'Sub-topic 3'];
  const toggleCustomization = () => {
    setIsCustomizationOpen(!isCustomizationOpen);
  };
  return (
    <div className="container mx-auto p-4 space-y-6">
        <TestTypeNavigation />
      <div className="relative w-full max-w-5xl">
  <div
     className="pr-10 h-14 border-2 border-slate-200 bg-slate-100  text-slate-700 text-xl p-6 rounded-lg flex justify-between items-center cursor-pointer"
     >
    Generate New Custom Test
  </div>
  <CircleChevronDown
    className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer transition-transform duration-300 ${isCustomizationOpen ? 'rotate-180' : ''}`} 
    onClick={toggleCustomization}
  />
</div>
      {isCustomizationOpen && (
        <Card className="mb-4 w-full max-w-5xl bg-slate-100 border border-slate-300 rounded-lg relative">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-sm font-medium text-emerald-700 mb-4">Customize your test</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className='font-medium text-slate-700'>
                <label className="block mb-1">Section</label>
                <Select onValueChange={setSection} value={section}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='font-medium text-slate-700'>
                <label className="block mb-1">Chapter</label>
                <Select onValueChange={setChapter} value={chapter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select chapter" />
                  </SelectTrigger>
                  <SelectContent>
                    {chapters.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='font-medium text-slate-700'>
                <label className="block mb-1">No. of Questions</label>
                <Select onValueChange={setTopic} value={topic}>
                  <SelectTrigger>
                    <SelectValue placeholder="No. of Questions" />
                  </SelectTrigger>
                  <SelectContent>
                    {topics.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='font-medium text-slate-700'>
                <label className="block mb-1">Difficulty Level</label>
                <Select onValueChange={setSubTopic} value={subTopic}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {subTopics.map((st) => (
                      <SelectItem key={st} value={st}>{st}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

<div className="relative w-full max-w-5xl">
  <div
    className="pr-10 h-14 border-2 border-slate-200 bg-slate-100  text-slate-700 text-xl p-6 rounded-lg flex justify-between items-center cursor-pointer"
    >
    Recently Generated Custom Test(s)
  </div>
  <CircleChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
</div>
      <Card className="mb-4 w-full max-w-4xl bg-slate-100 border border-slate-300 rounded-lg relative">
        <CardContent className="p-4 sm:p-6">
          <h2 className="text-xl text-slate-700 font-semibold mb-2">CUSTOM TEST 08/09/2024</h2>
          <p className="text-slate-500 mb-4">
            Test includes questions similar to those found in the actual SSC CGL exam, covering
            various sections such as General Intelligence and Reasoning, General Awareness, Quantitative
            Aptitude, and English Comprehension.
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
          <Button className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300">
            <View className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">TAKE TEST</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};


