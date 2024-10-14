"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import chartData from "@/components/data/processtracking.json"; 

export default function CompactProgressTrackingChart() {
  return (
    <Card className="w-[220px] h-[240px] bg-slate-50 border border-slate-200">
      <CardContent className="p-2">
        <div className="mb-1">
          <h2 className="text-sm font-semibold text-slate-700">Progress Tracking</h2>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-600">Performance over tests</p>
            <span className="px-1 py-0.5 text-xs font-medium text-green-800 bg-green-100 rounded">Good</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={170}>
          <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="attempt" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 8 }}
              padding={{ left: 5, right: 5 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 8 }}
              domain={[0, 100]}
              ticks={[0, 50, 100]}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{ fontSize: '10px', padding: '2px 4px' }}
              itemStyle={{ padding: 0 }}
              labelStyle={{ fontWeight: 'bold', marginBottom: '2px' }}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#4ade80" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="text-center text-xs text-slate-600">Attempts</div>
      </CardContent>
    </Card>
  );
}
