"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CircleChevronRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { BarComponent } from './Bar';

interface ChartData {
  name: string;
  value: number;
  color: string;
  inactiveColor: string;
}

interface DashboardCardProps {
  title: string;
  data: ChartData[];
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
}

const dataSets = {
  GeneralIntelligence: [
    { name: 'Uncovered', value: 33, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 59, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 8, color: '#E2E8F0', inactiveColor: '#94A3B8' },
  ],
  GeneralAwareness: [
    { name: 'Uncovered', value: 20, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 70, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 10, color: '#E2E8F0', inactiveColor: '#94A3B8' },
  ],
  QuantitativeAptitude: [
    { name: 'Uncovered', value: 15, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 75, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 10, color: '#E2E8F0', inactiveColor: '#94A3B8' },
  ],
  EnglishComprehension: [
    { name: 'Uncovered', value: 25, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 65, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 10, color: '#E2E8F0', inactiveColor: '#94A3B8' },
  ],
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, data, isOpen, isActive, onToggle }) => {
  return (
    <div className="mb-4">
      <Card className={`relative w-full bg-slate-100 max-w-4xl h-24 sm:h-28 md:h-40 border border-slate-200 mb-8`}>
        <CardContent className="flex flex-row items-center justify-between p-2 sm:p-3 md:p-4 h-full">
          <div className="w-1/4 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={isActive ? entry.color : entry.inactiveColor} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-3/4 pl-2 sm:pl-3 md:pl-4">
            <h2 className={`text-xs sm:text-sm md:text-base font-semibold text-slate-700 mb-1 sm:mb-2`}>{title}</h2>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 sm:mr-2"
                    style={{ backgroundColor: isActive ? item.color : item.inactiveColor }}
                  ></div>
                  <span className={`text-xs sm:text-sm font-semibold`}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <button 
          className={`absolute top-1 right-1 sm:top-2 sm:right-2 flex items-center ${isActive ? 'text-black hover:text-black' : 'text-slate-400 hover:text-slate-400'} text-xs sm:text-sm`}
          onClick={onToggle} 
        >
          <CircleChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
        </button>
      </Card>
      {isOpen && <BarComponent />} 
    </div>
  );
};

const GeneralIntelligence: React.FC = () => {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null); 

  const handleCardToggle = (index: number) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {Object.entries(dataSets).map(([key, data], index) => (
        <DashboardCard 
          key={key}
          title={key.split(/(?=[A-Z])/).join(" ")} 
          data={data} 
          isOpen={openCardIndex === index} 
          isActive={openCardIndex === null || openCardIndex === index}
          onToggle={() => handleCardToggle(index)} 
        />
      ))}
    </div>
  );
};

export default GeneralIntelligence;