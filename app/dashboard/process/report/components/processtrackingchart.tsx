"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const chartData = [
  { attempt: "01", score: 30 },
  { attempt: "", score: 45 },
  { attempt: "", score: 25 },
  { attempt: "", score: 50 },
  { attempt: "", score: 35 },
  { attempt: "", score: 55 },
  { attempt: "", score: 40 },
  { attempt: "02", score: 60 },
  { attempt: "", score: 80 },
  { attempt: "", score: 70 },
  { attempt: "", score: 75 },
  { attempt: "", score: 65 },
  { attempt: "", score: 45 },
  { attempt: "", score: 50 },
  { attempt: "", score: 40 },
  { attempt: "03", score: 70 },
  { attempt: "", score: 75 },
  { attempt: "", score: 80 },
  { attempt: "", score: 85 },
  { attempt: "", score: 90 },
  { attempt: "05", score: 95 },
]

const ProgressTrackingChart: React.FC = () => {

  return (
    <Card className="bg-slate-100 border border-custombroder rounded-xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-700">Progress Tracking</h2>
            <p className="text-sm text-slate-700">Improvement or decline in performance over multiple tests</p>
          </div>
          <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Good Job</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(value) => `${value}`}
              label={{ value: 'Score', angle: -90, position: 'insideLeft', fill: '#334155', fontSize: 12 }}
   
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#4ade80" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 text-sm text-slate-700">Attempts</div>
      </CardContent>
    </Card>
  )
}
export default ProgressTrackingChart