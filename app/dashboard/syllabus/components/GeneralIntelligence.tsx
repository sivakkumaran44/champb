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
    <div className="flex items-center justify-between w-full">
      <div className="w-1/3 h-28">
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
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-2/3 text-center"> 
        <h2 className="text-md font-semibold text-slate-700">{title}</h2> 
        <div className="flex flex-wrap justify-center space-x-4 mt-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm font-semibold">{item.value}%</span>
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
        <AccordionItem key={key} value={`item-${index}`} className="border-none">
          <div className="flex justify-center"> 
            <Card className="w-10/12 bg-slate-100 mb-4 border-slate-900 h-40"> 
              <CardContent className="p-2"> 
                <AccordionTrigger className="hover:no-underline w-full flex justify-between items-center">
                  <DashboardCard 
                    title={key.split(/(?=[A-Z])/).join(" ")} 
                    data={data}
                  />
                </AccordionTrigger>
              </CardContent>
            </Card>
          </div>
          <AccordionContent className="pt-4">
            <BarComponent />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default GeneralIntelligence;
