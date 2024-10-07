"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
const DashboardCard: React.FC<DashboardCardProps> = ({ title, data }) => {
  return (
    <div className="flex items-center w-[220px] h-[60px]">
      <div className="w-12 h-12 mr-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={15}
              outerRadius={24}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-slate-700 mb-1">{title}</h2>
        <div className="flex space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GeneralIntelligence: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(dataSets).map(([key, data], index) => (
        <AccordionItem key={key} value={`item-${index}`} className="border-none mb-2">
          <Card className="w-[230px] bg-gray-100 border-none shadow-sm">
            <CardContent className="p-0">
              <AccordionTrigger className="hover:no-underline w-full px-2 py-1">
                <DashboardCard 
                  title={key.split(/(?=[A-Z])/).join(" ")} 
                  data={data}
                />
              </AccordionTrigger>
            </CardContent>
          </Card>
          <AccordionContent className="pt-2">
            <BarComponent />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default GeneralIntelligence;