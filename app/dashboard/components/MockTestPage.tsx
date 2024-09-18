"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, HelpCircle, PenLine } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface TestInfo {
  id: string;
  title: string;
  description: string;
  duration: number;
  questions: number;
  isFree: boolean; 
}

const tests: TestInfo[] = [
  {
    id: "1",
    title: "SSC CGL Mock test I (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.",
    duration: 60,
    questions: 100,
    isFree: true,
  },
  {
    id: "2",
    title: "SSC CGL Mock test II (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.",
    duration: 60,
    questions: 100,
    isFree: true,
  },
  {
    id: "3",
    title: "SSC CGL Mock test III (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.",
    duration: 60,
    questions: 100,
    isFree: true,
  },
];

const TestCard: React.FC<TestInfo> = ({ title, description, duration, questions, isFree }) => (
  <Card className="mb-4 w-full max-w-4xl  bg-slate-100 border border-slate-300 rounded-lg relative">
    <CardContent className="p-4 sm:p-6">
      {isFree && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-slate-700 border-none text-white text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-xl">
            FREE
          </span>
        </div>
      )}
      <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-2 pr-16">{title}</h2>
      <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">{description}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span>{duration} Minutes</span>
        </div>
        <div className="flex items-center sm:ml-4">
          <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span>{questions} Questions</span>
        </div>
      </div>
      <Button className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white  py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300">
        <PenLine className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm">TAKE TEST</span>
      </Button>
    </CardContent>
  </Card>
);

const MockTestPage: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("All");

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  return (
    <div className="container mx-auto p-4 ">
    <NavigationMenu className="w-full">
  <NavigationMenuList className="flex flex-wrap  gap-x-6 gap-y-4 sm:gap-x-10  items-center justify-center">
    {["All", "Practice Test", "Previous Year Question Test", "Mock Test", "Custom Test"].map((item) => (
      <NavigationMenuItem key={item}>
        <NavigationMenuLink
          className={cn(
            "inline-block text-sm sm:text-lg font-normal cursor-pointer", 
            activeMenuItem === item 
              ? "text-slate-700 border-b-2 border-slate-700" 
              : "text-slate-700 text-opacity-60 hover:text-slate-700",
            "focus:outline-none pb-1 sm:pb-2 w-[140px] text-center"
          )}
          onClick={() => handleMenuItemClick(item)}
        >
          {item}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>

      <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-6">
        {tests.map((test) => (
          <TestCard key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
};

export default MockTestPage;