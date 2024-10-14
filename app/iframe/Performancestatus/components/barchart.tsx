"use client"

import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis, LabelList, CartesianGrid, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import chartData from '@/components/data/barchart.json';

const Barchart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <Card className="w-[220px] h-[220px] bg-slate-50 border border-slate-200 shadow-sm">
      <CardHeader className="p-2">
        <CardTitle className="text-slate-700 text-sm font-semibold">Section-wise Scores</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <BarChart
          width={220}
          height={180}
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 25, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="subject"
            type="category"
            width={60}
            tick={{ fill: '#4a5568', fontSize: 9 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '10px' }}
            labelStyle={{ color: '#4a5568', fontWeight: 'bold' }}
          />
          <Bar dataKey="score" fill="#60a5fa" barSize={15} radius={[10,10,10,10]}>
            <LabelList 
              dataKey="score" 
              position="right" 
              fill="#4a5568"
              fontSize={9}
              offset={3}
            />
          </Bar>
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default Barchart;