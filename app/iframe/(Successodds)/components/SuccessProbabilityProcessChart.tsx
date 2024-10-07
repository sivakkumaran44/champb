"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", probability: 72 },
  { day: "Tue", probability: 51 },
  { day: "Wed", probability: 62 },
  { day: "Thu", probability: 80 },
  { day: "Fri", probability: 70 },
  { day: "Sat", probability: 57 },
  { day: "Sun", probability: 73 },
];

export default function SuccessProbabilityProgressChart() {
  return (
    <Card className="w-[220px] h-[220px] mx-auto bg-slate-100 border border-customborder rounded-xl p-2 flex flex-col">
      <CardHeader className="p-1">
        <CardTitle className="text-[10px] font-semibold flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          <span>Success Probability Progress (Weekly)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 flex flex-col">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={150}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 8 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 8 }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
                ticks={[0, 50, 100]}
              />
              <Bar dataKey="probability" fill="url(#colorGradient)" radius={[2, 2, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#a3e635" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center text-[8px] text-muted-foreground mt-1">
          <span className="inline-block w-2 h-2 bg-gradient-to-b from-green-400 to-lime-400 rounded-full mr-1"></span>
          Exam Success Probability
        </div>
      </CardContent>
    </Card>
  );
}
