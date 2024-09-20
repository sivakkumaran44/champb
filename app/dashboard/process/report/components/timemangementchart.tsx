"use client"

import * as React from "react"
import { Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ComposedChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
  { section: "English", totalQuestions: 5.5, unattendedQuestions: 2, timeSpent: 9.5 },
  { section: "G Factor", totalQuestions: 6.5, unattendedQuestions: 3, timeSpent: 8 },
  { section: "GK", totalQuestions: 7.5, unattendedQuestions: 1.5, timeSpent: 6 },
  { section: "Analogy", totalQuestions: 8, unattendedQuestions: 1.8, timeSpent: 8.5 },
  { section: "Classification", totalQuestions: 7, unattendedQuestions: 2.8, timeSpent: 9.3 },
  { section: "Interest", totalQuestions: 3.7, unattendedQuestions: 1.5, timeSpent: 7.2 },
]

export function TimeManagementChart() {
  return (
    <Card  className="bg-slate-100 border border-custombroder ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Time Management</CardTitle>
      </CardHeader>
      <CardContent>
        <ComposedChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="section" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="totalQuestions" name="Total Questions" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="unattendedQuestions" name="Unattended Questions" fill="#82ca9d" />
          <Line yAxisId="right" type="monotone" dataKey="timeSpent" name="Time Spent on Each Section" stroke="#ffc658" />
        </ComposedChart>
      </CardContent>
    </Card>
  )
}