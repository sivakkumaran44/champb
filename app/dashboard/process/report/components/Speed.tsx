import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Speed = () => {
  const data = [
    {
      id: "Answers",
      data: [
        { x: "1-10", y: 3 },
        { x: "10-30", y: 2 },
        { x: "10-30", y: 6 },
        { x: "10-30", y: 3 },
        { x: "30-50", y: 4 },
        { x: "30-50", y: 7 },
        { x: "30-50", y: 9 },
        { x: "50-70", y: 7 },
        { x: "50-70", y: 10 },
        { x: "50-70", y: 8 },
        { x: "70-100", y: 9 },
        { x: "70-100", y: 11 },
        { x: "70-100", y: 8 },
      ]
    }
  ];

  return (
    <Card className="bg-slate-100 border border-custombroder max-w-md mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800">Speed vs Accuracy Trade Off</CardTitle>
        <CardDescription className="text-sm text-gray-600">Relationship between time taken and correctness of answers</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ height: '400px' }}>
          <ResponsiveScatterPlot
            data={data}
            margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 0, max: 12 }}
            blendMode="multiply"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Question Number',
              legendPosition: 'middle',
              legendOffset: 40
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Time Taken (seconds)',
              legendPosition: 'middle',
              legendOffset: -50,
              tickValues: [0, 4, 8, 12]
            }}
            colors="#3b82f6"
            pointSize={8}
            pointColor="#3b82f6"
            pointBorderWidth={1}
            pointBorderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
            useMesh={true}
            gridYValues={[0, 4, 8, 12]}
            theme={{
              background: "#f1f5f9",
              grid: {
                line: {
                  stroke: "#e2e8f0",
                  strokeWidth: 1
                }
              },
              axis: {
                legend: {
                  text: {
                    fontSize: 12,
                    fill: "#64748b"
                  }
                },
                ticks: {
                  text: {
                    fontSize: 11,
                    fill: "#64748b"
                  }
                }
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Speed;