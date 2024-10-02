import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";
import { CircleArrowDown } from "lucide-react";

interface ChartData {
  month: string;
  desktop: number;
  text: string;
}

const chartData: ChartData[] = [
  { month: "January", desktop: 60, text: "Lorem Ipsum 1" },
  { month: "February", desktop: 80, text: "Lorem Ipsum 2" },
  { month: "March", desktop: 40, text: "Lorem Ipsum 3" },
  { month: "April", desktop: 70, text: "Lorem Ipsum 4" },
  { month: "May", desktop: 90, text: "Lorem Ipsum 5" },
];

const SubChart: React.FC<{ data: ChartData; index: number; subIndex: number }> = ({ data, index, subIndex }) => {
  return (
    <div className="flex justify-center items-center">
      <BarChart width={650} height={40} data={[data]} layout="vertical">
        <defs>
          <linearGradient id={`subColorGradient${index}-${subIndex}`} x1="0" y1="0" x2="1" y2="0">
            {index === 0 && (
              <>
                <stop offset="60%" stopColor="#F87171" />
                <stop offset="60%" stopColor="#E3E3E3" />
              </>
            )}
            {index === 1 && (
              <>
                <stop offset="40%" stopColor="#4ade80" />
                <stop offset="70%" stopColor="#F87171" />
                <stop offset="70%" stopColor="#E3E3E3" />
              </>
            )}
            {index === 2 && (
              <>
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="50%" stopColor="#F87171" />
              </>
            )}
            {index === 3 && (
              <>
                <stop offset="100%" stopColor="#E3E3E3" />
              </>
            )}
            {index === 4 && (
              <>
                <stop offset="50%" stopColor="#F87171" />
                <stop offset="50%" stopColor="#E3E3E3" />
              </>
            )}
          </linearGradient>
        </defs>
        <XAxis type="number" dataKey="desktop" hide />
        <YAxis dataKey="month" type="category" hide />
        <Bar dataKey="desktop" fill={`url(#subColorGradient${index}-${subIndex})`} radius={25}>
          <LabelList
            dataKey="text"
            position="inside"
            style={{ fill: '#fff', fontWeight: 'bold', fontSize: '12px' }}
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export function BarComponent() {
  const [expandedBarIndex, setExpandedBarIndex] = useState<number | null>(null);

  const toggleBar = (index: number) => {
    setExpandedBarIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {chartData.map((data, index) => (
        <div
          key={index}
          className={`relative border border-custombroder bg-slate-100 text-slate-700 text-lg sm:text-xl p-4 sm:p-6 rounded-lg ${
            expandedBarIndex === index ? 'h-auto' : 'h-24'
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <CircleArrowDown
            className={`absolute top-2 right-2 h-5 w-5 text-slate-700 cursor-pointer transition-transform duration-300 ${
              expandedBarIndex === index ? 'rotate-180' : ''
            }`}
            onClick={() => toggleBar(index)}
          />
          <div className="flex justify-center items-center">
            <BarChart width={650} height={60} data={[data]} layout="vertical">
              <defs>
                <linearGradient id={`colorGradient${index}`} x1="0" y1="0" x2="1" y2="0">
                  {index === 0 && (
                    <>
                      <stop offset="60%" stopColor="#F87171" />
                      <stop offset="60%" stopColor="#E3E3E3" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <stop offset="40%" stopColor="#4ade80" />
                      <stop offset="70%" stopColor="#F87171" />
                      <stop offset="70%" stopColor="#E3E3E3" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <stop offset="50%" stopColor="#4ade80" />
                      <stop offset="50%" stopColor="#F87171" />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <stop offset="100%" stopColor="#E3E3E3" />
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <stop offset="50%" stopColor="#F87171" />
                      <stop offset="50%" stopColor="#E3E3E3" />
                    </>
                  )}
                </linearGradient>
              </defs>
              <XAxis type="number" dataKey="desktop" hide />
              <YAxis dataKey="month" type="category" hide />
              <Bar dataKey="desktop" fill={`url(#colorGradient${index})`} radius={5}>
                <LabelList
                  dataKey="text"
                  position="inside"
                  style={{ fill: '#fff', fontWeight: 'bold' }}
                />
              </Bar>
            </BarChart>
          </div>
          <div className={`mt-4 space-y-2 ${expandedBarIndex === index ? 'block' : 'hidden'}`}>
            {[0, 1, 2, 3].map((subIndex) => (
              <SubChart key={subIndex} data={data} index={index} subIndex={subIndex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
