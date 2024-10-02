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
  generalIntelligence: [
    { name: 'Uncovered', value: 33, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 59, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 8, color: '#cbd5e1', inactiveColor: '#94A3B8' },
  ],
  generalAwareness: [
    { name: 'Uncovered', value: 20, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 70, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 10, color: '#cbd5e1', inactiveColor: '#94A3B8' },
  ],
  quantitativeAptitude: [
    { name: 'Uncovered', value: 15, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 75, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 10, color: '#cbd5e1', inactiveColor: '#94A3B8' },
  ],
  englishComprehension: [
    { name: 'Uncovered', value: 25, color: '#10B981', inactiveColor: '#94A3B8' },
    { name: 'Correct', value: 65, color: '#F87171', inactiveColor: '#94A3B8' },
    { name: 'Incorrect', value: 10, color: '#cbd5e1', inactiveColor: '#94A3B8' },
  ],
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, data, isOpen, isActive, onToggle }) => {
  return (
    <div>
      <Card className={`relative w-full bg-slate-100 max-w-4xl border border-slate-200 mb-4 ${!isActive ? 'opacity-70' : ''}`}>
        <CardContent className="flex flex-row items-center justify-between p-4">
          <div className="w-1/4 lg:w-1/3 h-24 lg:h-40">
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
          <div className="w-3/4 lg:w-2/3 pl-4">
            <h2 className={`text-xs lg:text-lg font-semibold mb-1 lg:mb-2 ${!isActive ? 'text-slate-400' : ''}`}>{title}</h2>
            <div className="flex flex-wrap gap-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-2 h-2 lg:w-3 lg:h-3 rounded-full mr-1 lg:mr-2"
                    style={{ backgroundColor: isActive ? item.color : item.inactiveColor }}
                  ></div>
                  <span className={`text-xs lg:text-sm font-semibold ${!isActive ? 'text-slate-400' : ''}`}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <button 
          className={`absolute top-1 right-1 lg:top-2 lg:right-2 flex items-center ${isActive ? 'text-black hover:text-black' : 'text-slate-400 hover:text-slate-400'} text-xs lg:text-sm`}
          onClick={onToggle} 
        >
          <CircleChevronRight className="ml-1 w-4 h-4 lg:w-6 lg:h-6" />
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
    <div>
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