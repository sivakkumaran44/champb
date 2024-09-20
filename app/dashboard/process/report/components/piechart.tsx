"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
} from "@/components/ui/chart"

export const description = "An interactive pie chart"

const desktopData = [
  { month: "Correct", desktop: 186, fill: "var(--color-Correct)" },
  { month: "Wrong", desktop: 305, fill: "var(--color-Wrong)" },
  { month: "Skipped", desktop: 237, fill: "var(--color-Skipped)" },
 ]
 interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{ name: string; value: number; payload: { month: string; desktop: number } }>;
  }
  
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-slate-100 p-2 rounded shadow">
          <p className="text-slate-700">{`${data.payload.month}: ${data.payload.desktop}`}</p>
        </div>
      );
    }
    return null;
  };
const chartConfig = {
  
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  Correct: {
    label: "Correct",
    color: "#10B981",
  },
  Wrong: {
    label: "Wrong",
    color: "#60A5FA",
  },
  Skipped: {
    label: "Skipped",
    color: "#F87171",
  },
  
} satisfies ChartConfig
export function PieChartComponent() {
  const id = "pie-interactive"
  const [activeMonth] = React.useState(desktopData[0].month)
  const [hoverIndex, setHoverIndex] = React.useState<number | undefined>(undefined)
  
  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  const onPieEnter = (_: unknown, index: number) => {
    setHoverIndex(index)
  }
  const onPieLeave = () => {
    setHoverIndex(undefined)
  }

  const displayData = hoverIndex !== undefined ? desktopData[hoverIndex] : desktopData[activeIndex];

  const totalAnswers = desktopData.reduce((sum, item) => sum + item.desktop, 0)
  const CorrectPercentage = Math.round((desktopData[0].desktop / totalAnswers) * 100)

  return (
    <Card data-chart={id} className="bg-slate-100 border border-custombroder max-w-md mx-auto">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1 text-slate-700">
          <CardTitle>Overall Score</CardTitle>
          <CardDescription>Congratulations on your {CorrectPercentage}%! Use this as a stepping stone to build on and keep pushing towards your goal.</CardDescription>
        </div>
       
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
  <ChartTooltip 
    cursor={false}
    content={<CustomTooltip />}   
  />
  <Pie
    data={desktopData}
    dataKey="desktop"
    nameKey="month"
    innerRadius={60}
    outerRadius={100}  
    strokeWidth={5}
    cornerRadius={10}  
    activeIndex={hoverIndex !== undefined ? hoverIndex : activeIndex}
    onMouseEnter={onPieEnter}
    onMouseLeave={onPieLeave}
    activeShape={({
      outerRadius = 0,
      ...props
    }: PieSectorDataItem) => (
      <g>
        <Sector 
          {...props} 
          outerRadius={outerRadius + 10} 
          cornerRadius={10} 
        />
        <Sector
          {...props}
          outerRadius={outerRadius + 25}
          innerRadius={outerRadius + 12}
          cornerRadius={10} 
        />
      </g>
    )}
  >
    <Label
      content={({ viewBox }) => {
        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
          return (
            <text
              x={viewBox.cx}
              y={viewBox.cy}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <tspan
                x={viewBox.cx}
                y={viewBox.cy}
                className="fill-foreground text-3xl font-bold"
              >
                {displayData.desktop.toLocaleString()}
              </tspan>
              <tspan
                x={viewBox.cx}
                y={(viewBox.cy || 0) + 24}
                className="fill-muted-foreground"
              >
                {chartConfig[displayData.month as keyof typeof chartConfig]?.label}
              </tspan>
            </text>
          );
        }
      }}
    />
  </Pie>
</PieChart>

          
        </ChartContainer>
       
      </CardContent>
      <CardFooter/>
 <div className="grid grid-cols-3 gap-4 mb-6 ml-6">
 {desktopData.map((item) => (
   <div key={item.month} className="flex items-center">
     <span
       className="w-3 h-3 rounded-full mr-2"
       style={{ backgroundColor: item.fill }}
     ></span>
     <span className="text-sm capitalize">
       {`${item.month} - ${item.desktop}`}
     </span>
   </div>
 ))}
</div>

    </Card>
  )
}