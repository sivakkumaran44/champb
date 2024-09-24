import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, Cell, TooltipProps, LabelProps } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

interface FlowChartProps {
  selectedSection: number | null;
  selectedSubsection: number | null;
  setSelectedSubsection: React.Dispatch<React.SetStateAction<number | null>>;
}

interface ProgressData {
  name: string;
  correct: number;
  incorrect: number;
  uncovered: number;
}

const FlowChart: React.FC<FlowChartProps> = ({ selectedSection, setSelectedSubsection }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  if (selectedSection === null) return null;

  const progressData: ProgressData[] = [
    { name: 'Topic 1', correct: 60, incorrect: 20, uncovered: 20 },
    { name: 'Topic 2', correct: 50, incorrect: 20, uncovered: 30 },
    { name: 'Topic 3', correct: 75, incorrect: 15, uncovered: 10 },
    { name: 'Topic 4', correct: 40, incorrect: 20, uncovered: 40 },
    { name: 'Topic 5', correct: 70, incorrect: 15, uncovered: 15 },
    { name: 'Topic 6', correct: 55, incorrect: 20, uncovered: 25 },
    { name: 'Topic 7', correct: 80, incorrect: 15, uncovered: 5 },
    { name: 'Topic 8', correct: 45, incorrect: 20, uncovered: 35 },
    { name: 'Topic 9', correct: 65, incorrect: 15, uncovered: 20 },
    { name: 'Topic 10', correct: 50, incorrect: 20, uncovered: 30 },
  ];

  const CustomLabel: React.FC<LabelProps> = (props) => {
    const { x, y, width, height, value } = props;
    const xPos = typeof x === 'number' ? x : 0;
    const yPos = typeof y === 'number' ? y : 0;
    const widthNum = typeof width === 'number' ? width : 0;
    const heightNum = typeof height === 'number' ? height : 0;

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
      const data = payload[0].payload as ProgressData;
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

  const handleClick = (data: { activePayload?: { payload: ProgressData }[] }) => {
    if (data.activePayload && data.activePayload.length > 0) {
      const clickedIndex = progressData.findIndex(item => item.name === data.activePayload![0].payload.name);
      setSelectedItem(prevSelected => prevSelected === clickedIndex ? null : clickedIndex);
      setSelectedSubsection(prevSelected => prevSelected === clickedIndex ? null : clickedIndex);
    }
  };

  const getBarColor = (dataKey: keyof ProgressData, itemIndex: number) => {
    if (dataKey === 'uncovered') {
      return '#E2E8F0'; 
    }
    if (selectedItem !== null && selectedItem !== itemIndex) {
      return '#D1D5DB'; 
    }
    switch (dataKey) {
      case 'correct':
        return '#a7f3d0';
      case 'incorrect':
        return '#FECACA';
      default:
        return '#D1D5DB';
    }
  };

  return (
    <Card>
      <CardContent>
        <BarChart
          layout="vertical"
          width={300}
          height={400}
          data={progressData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          onClick={handleClick}
        >
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" hide />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          {(['correct', 'incorrect', 'uncovered'] as const).map((dataKey, index) => (
            <Bar 
              key={dataKey}
              dataKey={dataKey} 
              stackId="a" 
              radius={index === 0 ? [10, 0, 0, 10] : index === 2 ? [0, 10, 10, 0] : [0, 0, 0, 0]}
              stroke="none" 
              strokeWidth={0}
            >
              {index === 0 && (
                <LabelList
                  dataKey="name"
                  content={CustomLabel}
                />
              )}
              {progressData.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={getBarColor(dataKey, i)} />
              ))}
            </Bar>
          ))}
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default FlowChart;