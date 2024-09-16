"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, HelpCircle,PenLine } from 'lucide-react';
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
}

const tests: TestInfo[] = [
  {
    id: "1",
    title: "SSC CGL Mock test I (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.",
    duration: 60,
    questions: 100,
  },
  {
    id: "2",
    title: "SSC CGL Mock test II (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.",
    duration: 60,
    questions: 100,
  },
  {
    id: "3",
    title: "SSC CGL Mock test III (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.",
    duration: 60,
    questions: 100,
  },
];

const TestCard: React.FC<TestInfo> = ({ title, description, duration, questions }) => (
  <Card className="mb-4 w-full max-w-3xl mx-auto bg-white border border-slate-300 rounded-lg">
  <CardContent className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
        <span className="bg-slate-700 text-white text-xs font-semibold px-2 py-1 rounded">FREE</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        <span>{duration} Minutes</span>
        <HelpCircle className="w-4 h-4 ml-4 mr-2" />
        <span>{questions} Questions</span>
      </div>
      <Button className="bg-emerald-700 hover:bg-emerald-700 text-slate-100 font-semibold py-2 px-4 rounded flex items-center space-x-2">
  <PenLine className="w-4 h-4" /> 
  <span>TAKE TEST</span>
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
      <NavigationMenu>
  <NavigationMenuList className="flex gap-x-8 mb-8 items-center justify-center">
    {["All", "Practice Test", "Previous Year Question Test", "Mock Test", "Custom Test"].map((item) => (
      <NavigationMenuItem key={item}>
        <NavigationMenuLink
          className={cn(
            "text-lg font-normal cursor-pointer", 
            activeMenuItem === item ? "text-slate-700 border-b-2 border-slate-700" : "text-slate-700 text-opacity-60 hover:text-slate-700",
            "focus:outline-none pb-2"
          )}
          onClick={() => handleMenuItemClick(item)}
        >
          {item}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>

 
      <div className="mt-8 space-y-6">
        {tests.map((test) => (
          <TestCard key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
};

export default MockTestPage;