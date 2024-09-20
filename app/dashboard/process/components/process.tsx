"use client";
import React from 'react';
import { CheckCircle, XCircle, MinusCircle, PenSquare, View } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const iconMap = {
  CheckCircle,
  XCircle,
  MinusCircle,
  PenSquare,
  View
};

interface Stat {
  icon: keyof typeof iconMap; 
  value: number | string;
  label: string;
}

interface Action {
  icon: keyof typeof iconMap;
  label: string;
}

export interface TestData {  
  id: string; 
  title: string;
  score: number;
  description: string;
  stats: Stat[];
  action: Action;
}

interface TestProgressProps {
  data: TestData[];
}

const TestProgress: React.FC<TestProgressProps> = ({ data }) => { const router = useRouter();

  const handleViewReport = () => {
    router.push(`/dashboard/process/report`);
  };

  return (
    <div className="relative w-full max-w-5xl">
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-xl p-6 rounded-lg flex justify-between items-center cursor-pointer">
        Test Progress
      </div>
      {data.map((test, index) => (
        <Card key={index} className="mb-4 w-full max-w-4xl bg-slate-100 border border-custombroder rounded-lg relative">
          <CardContent className="p-4 sm:p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-slate-700">{test.title}</h2>
              <span className="text-3xl font-bold text-slate-700">{test.score} %</span>
            </div>
            <p className="text-slate-600 mb-4">{test.description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              {test.stats.map((stat, statIndex) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div key={statIndex} className="flex items-center">
                    <Icon className="w-5 h-5 text-slate-500 mr-2" />
                    <span className="text-slate-700">{stat.value} {stat.label}</span>
                  </div>
                );
              })}
            </div>
            <Button 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
              onClick={() => handleViewReport()} 
            >
              {React.createElement(iconMap[test.action.icon], { className: "w-4 h-4 mr-2" })}
              <span>{test.action.label}</span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestProgress;
