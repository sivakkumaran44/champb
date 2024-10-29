"use client";
import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from 'recharts';
import data from '../../data/data.json';

// Define the data type for the weekly data
interface WeeklyData {
  week: string;
  goalProgress: number;
  standardProjection: number;
  actualProjection: number;
}

// Define the props for the custom tooltip
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{ payload: WeeklyData }>; // Adjusted to match your data structure
}

const ExamProjectorChart: React.FC = () => {
  const weeklyData: WeeklyData[] = data.weeklyData;

  // Custom tooltip component
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { week, goalProgress, standardProjection, actualProjection } = payload[0].payload;
      return (
        <div className="bg-white border border-gray-300 rounded-lg p-2">
          <h4 className="font-bold">Week {week}</h4>
          <p><strong>Goal Progress:</strong> {goalProgress}%</p>
          <p><strong>Standard Projection:</strong> {standardProjection}%</p>
          <p><strong>Actual Projection:</strong> {actualProjection}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full border border-[#d9d9d9] shadow-none">
      <h2 className="text-xl font-bold mb-6">bChamp Exam Projector</h2>
      <div className="h-[400px] sm:h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e0e0e0" />
            <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} label={{
              value: "Week",
              position: "insideBottom",
              offset: 10,
              style: { fill: '#6B7280', fontSize: 12 },
            }} />
            <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} tickCount={5} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              formatter={(value, name) => [value, name]}
            />
            <Bar dataKey="goalProgress" fill="#bef264" barSize={40} radius={[0, 0, 0, 0]} name="Goal Progress" />
            <Line type="monotone" dataKey="standardProjection" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} name="Standard Projection" />
            <Line type="monotone" dataKey="actualProjection" stroke="#22c55e" strokeWidth={2} dot={{ r: 4, fill: '#22c55e' }} activeDot={{ r: 6 }} name="Actual Progress Projection" />
            <Legend />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExamProjectorChart;
