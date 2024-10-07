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
  active?: boolean
  payload?: Array<{ name: string; value: number; payload: { month: string; desktop: number } }>
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    return (
      <div className="bg-slate-100 p-2 rounded shadow">
        <p className="text-slate-700">{`${data.payload.month}: ${data.payload.desktop}`}</p>
      </div>
    )
  }
  return null
}
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

  const displayData = hoverIndex !== undefined ? desktopData[hoverIndex] : desktopData[activeIndex]

  const totalAnswers = desktopData.reduce((sum, item) => sum + item.desktop, 0)
  const CorrectPercentage = Math.round((desktopData[0].desktop / totalAnswers) * 100)

  return (
    <div className=" pl-6">
         <Card data-chart={id} className="bg-slate-100 border mt-6  w-[220px] h-[320px] border-custombroder">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1 text-slate-700">
          <CardTitle className="text-xs">Overall Score</CardTitle>
          <CardDescription className="text-[10px] leading-tight">
            Congratulations on your {CorrectPercentage}%! Use this as a stepping stone to build on and keep pushing towards your goal.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[180px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={40}
              outerRadius={70}
              strokeWidth={5}
              cornerRadius={8}
              activeIndex={hoverIndex !== undefined ? hoverIndex : activeIndex}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 8} cornerRadius={8} />
                  <Sector {...props} outerRadius={outerRadius + 15} innerRadius={outerRadius + 8} cornerRadius={8} />
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
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-bold">
                          {displayData.desktop.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 20} className="fill-muted-foreground text-[8px]">
                          {chartConfig[displayData.month as keyof typeof chartConfig]?.label}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter />
      <div className="grid grid-cols-3 gap-2 mb-2 ml-2 text-xs">
        {desktopData.map((item) => (
          <div key={item.month} className="flex items-center">
            <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.fill }}></span>
            <span>{`${item.month} - ${item.desktop}`}</span>
          </div>
        ))}
      </div>
    </Card>
    </div>
 
  )
}
