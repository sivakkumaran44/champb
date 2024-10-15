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
const SuccessProbabilityProgressChart: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-slate-100 border border-custombroder rounded-xl p-4 sm:p-6">
    <CardHeader>
        <CardTitle className="text-sm md:text-base lg:text-lg font-semibold flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          <span>Success Probability Progress (Weekly)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
              />
              <Bar dataKey="probability" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#a3e635" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-4">
          <span className="inline-block w-3 h-3 bg-gradient-to-b from-green-400 to-lime-400 rounded-full mr-2"></span>
          Exam Success Probability
        </div>
      </CardContent>
    </Card>
  );
}
export default SuccessProbabilityProgressChart