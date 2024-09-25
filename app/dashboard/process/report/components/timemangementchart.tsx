"use client";

import * as React from "react";
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  ResponsiveContainer,
  RectangleProps,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { section: "English", totalQuestions: 5.5, unattendedQuestions: 2, timeSpent: 9.5 },
  { section: "G Factor", totalQuestions: 6.5, unattendedQuestions: 3, timeSpent: 8 },
  { section: "GK", totalQuestions: 7.5, unattendedQuestions: 1.5, timeSpent: 6 },
  { section: "Analogy", totalQuestions: 8, unattendedQuestions: 1.8, timeSpent: 8.5 },
  { section: "Classification", totalQuestions: 7, unattendedQuestions: 2.8, timeSpent: 9.3 },
  { section: "Interest", totalQuestions: 3.7, unattendedQuestions: 1.5, timeSpent: 7.2 },
];

const CustomBar: React.FC<RectangleProps> = (props) => {
  const { x = 0, y = 0, width = 0, height = 0, fill } = props;
  const radius = 8;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
      <line x1={x} x2={x + width} y1={y} y2={y} stroke={fill} strokeWidth={2} />
    </g>
  );
};


export function TimeManagementChart() {
  return (
    <Card className="bg-slate-100 border border-slate-200 rounded-xl w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Time Management</h2>
        <div className="w-full" style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              barGap={0}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="section"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                domain={[0, 10]}
                ticks={[0, 2, 4, 6, 8, 10]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                domain={[0, 10]}
                ticks={[0, 2, 4, 6, 8, 10]}
              />
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{ bottom: -10, left: 25, fontSize: "12px" }}
              />
              <Bar
                yAxisId="left"
                dataKey="totalQuestions"
                name="Total Questions"
                fill="#93c5fd"
                shape={<CustomBar />}
              />
              <Bar
                yAxisId="left"
                dataKey="unattendedQuestions"
                name="Unattended Questions"
                fill="#86efac"
                shape={<CustomBar />}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="timeSpent"
                name="Time Spent on Each Section"
                stroke="#fcd34d"
                strokeWidth={2}
                dot={{ r: 4, fill: "#fcd34d", stroke: "#fcd34d" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}