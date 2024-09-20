import React from 'react';
import { Bar, BarChart, XAxis, YAxis, LabelList, CartesianGrid } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip, 
} from "@/components/ui/chart"

const chartData = [
  { subject: "English", score: 186 },
  { subject: "G Factor", score: 305 },
  { subject: "General Knowledge", score: 237 },
  { subject: "Quantitative Aptitude", score: 73 },
];

const chartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-100 p-2 rounded shadow">
        <p className="text-slate-700">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Barchart: React.FC = () => {
  return (
    <Card className="bg-slate-100 border border-custombroder max-w-md h-[450px]">
    <CardHeader>
        <CardTitle className="text-slate-700 text-lg">Section-wise scores</CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-2rem)]">
        <ChartContainer config={chartConfig}>
          <BarChart
            width={300}
            height={300}
            data={chartData}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid 
  horizontal={true} 
  vertical={true} 
  strokeDasharray="3 3" 
  stroke="#e0e0e0"
/>
            <XAxis type="number" hide />
            <YAxis 
              dataKey="subject"
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              width={100}
              tick={{ fontSize: 12, fill: 'rgba(51, 65, 85, 0.7)' }}
            />
            <ChartTooltip 
              cursor={false}
              content={<CustomTooltip />}   
            />
            <Bar 
              dataKey="score"
              fill="#60A5FA"
              radius={[22, 22, 22, 22]}
            >
              <LabelList
                dataKey="score"
                position="right"
                offset={5}
                fill="#333"
                fontSize={10}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
       
      </CardContent>
    </Card>
  );
};

export default Barchart;