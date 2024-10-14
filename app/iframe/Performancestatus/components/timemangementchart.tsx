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
import chartData from "@/components/data/timemangementdata.json"; 

const CustomBar: React.FC<RectangleProps> = (props) => {
  const { x = 0, y = 0, width = 0, height = 0, fill } = props;
  const radius = 2;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
      <line x1={x} x2={x + width} y1={y} y2={y} stroke={fill} strokeWidth={1} />
    </g>
  );
};

export function TimeManagementChart() {
  return (
    <Card className="bg-slate-100 border border-slate-200 rounded-xl w-[220px] h-[260px]">
      <CardContent className="p-1">
        <h2 className="text-xs font-bold text-slate-700 mb-1">Time Management</h2>
        <div className="w-[240px] h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData} 
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
              barGap={0}
              barCategoryGap="10%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="section"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 6 }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 6 }}
                domain={[0, 10]}
                ticks={[0, 5, 10]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 6 }}
                domain={[0, 10]}
                ticks={[0, 5, 10]}
              />
              <Tooltip contentStyle={{ fontSize: '8px' }} />
              <Legend
                verticalAlign="bottom"
                height={20}
                wrapperStyle={{ bottom: -5, left: 10, fontSize: "6px" }}
              />
              <Bar
                yAxisId="left"
                dataKey="totalQuestions"
                name="Total"
                fill="#93c5fd"
                shape={<CustomBar />}
              />
              <Bar
                yAxisId="left"
                dataKey="unattendedQuestions"
                name="Unattended"
                fill="#86efac"
                shape={<CustomBar />}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="timeSpent"
                name="Time"
                stroke="#fcd34d"
                strokeWidth={1}
                dot={{ r: 2, fill: "#fcd34d", stroke: "#fcd34d" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
