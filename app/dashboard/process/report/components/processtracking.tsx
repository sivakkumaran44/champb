"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const chartData = [
  { attempt: 1, score: 35 },
  { attempt: 2, score: 40 },
  { attempt: 3, score: 30 },
  { attempt: 4, score: 45 },
  { attempt: 5, score: 25 },
  { attempt: 6, score: 50 },
  { attempt: 7, score: 35 },
  { attempt: 8, score: 55 },
  { attempt: 9, score: 40 },
  { attempt: 10, score: 60 },
  { attempt: 11, score: 50 },
  { attempt: 12, score: 85 },
  { attempt: 13, score: 75 },
  { attempt: 14, score: 70 },
  { attempt: 15, score: 65 },
  { attempt: 16, score: 45 },
  { attempt: 17, score: 50 },
  { attempt: 18, score: 40 },
  { attempt: 19, score: 70 },
  { attempt: 20, score: 75 },
  { attempt: 21, score: 80 },
  { attempt: 22, score: 85 },
  { attempt: 23, score: 90 },
  { attempt: 24, score: 95 },
  { attempt: 25, score: 90 },
]

export function ProgressTrackingChart() {
  return (
    <Card className="bg-slate-100 border border-custombroder ">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Progress Tracking</h2>
            <p className="text-sm text-gray-500">Improvement or decline in performance over multiple tests</p>
          </div>
          <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Good Job</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 25 }}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="attempt" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75]}
              label={{ value: "Scores", angle: -90, position: "insideLeft", offset: 10, fill: "#6b7280" }}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#4ade80" 
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 text-sm text-gray-600">Attempts</div>
      </CardContent>
    </Card>
  )
}