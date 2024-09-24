import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, TooltipProps } from "recharts";
import { Card, CardContent } from "@/components/ui/card"

interface SubFlowChartProps {
  selectedSubsection: string | null; 
}

interface SubProgressData {
  name: string;
  correct: number;
  incorrect: number;
  uncovered: number;
}

interface CustomLabelProps {
  x?: string | number;
  y?: string | number;
  width?: string | number;
  height?: string | number;
  value?: string | number;
}

const SubFlowChart: React.FC<SubFlowChartProps> = ({ selectedSubsection }) => {
  if (selectedSubsection === null) return null;

  const subProgressData: SubProgressData[] = [
    { name: 'Subtopic 1', correct: 70, incorrect: 20, uncovered: 10 },
    { name: 'Subtopic 2', correct: 60, incorrect: 25, uncovered: 15 },
    { name: 'Subtopic 3', correct: 80, incorrect: 15, uncovered: 5 },
    { name: 'Subtopic 4', correct: 50, incorrect: 30, uncovered: 20 },
    { name: 'Subtopic 5', correct: 75, incorrect: 20, uncovered: 5 },
  ];

  const CustomLabel: React.FC<CustomLabelProps> = (props) => {
    const { x, y, width, height, value } = props;
    const xPos = typeof x === 'string' ? parseFloat(x) : x ?? 0;
    const yPos = typeof y === 'string' ? parseFloat(y) : y ?? 0;
    const widthNum = typeof width === 'string' ? parseFloat(width) : width ?? 0;
    const heightNum = typeof height === 'string' ? parseFloat(height) : height ?? 0;
  
    if (widthNum > 20) {
      return (
        <text x={xPos + widthNum / 2} y={yPos + heightNum / 2} fill="#047857" textAnchor="middle" dominantBaseline="middle">
          {value}
        </text>
      );
    }
    return null;
  };

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as SubProgressData;
      return (
        <div className="bg-white p-2 border rounded shadow-md">
          <p className="font-bold">{data.name}</p>
          <p className="text-green-500">Correct: {data.correct}%</p>
          <p className="text-rose-400">Incorrect: {data.incorrect}%</p>
          <p className="text-gray-500">Uncovered: {data.uncovered}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardContent>
        <BarChart
          layout="vertical"
          width={300}
          height={200}
          data={subProgressData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" hide />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar dataKey="correct" stackId="a" fill="#a7f3d0" radius={[10, 0, 0, 10]}>
            <LabelList
              dataKey="name"
              content={CustomLabel}
            />
          </Bar>
          <Bar dataKey="incorrect" stackId="a" fill="#FECACA" radius={[0, 0, 0, 0]} />
          <Bar dataKey="uncovered" stackId="a" fill="#E2E8F0" radius={[0, 10, 10, 0]} />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default SubFlowChart;