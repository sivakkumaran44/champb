"use client"
import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { Card, CardContent } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartStyle, ChartTooltip } from "@/components/ui/chart"
import desktopData from "@/components/data/accuracycomponent.json"
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { month: string; desktop: number } }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-slate-100 p-1 rounded shadow text-[6px]">
        <p className="text-slate-700">{`${data.payload.month}: ${data.payload.desktop}`}</p>
      </div>
    );
  }
  return null;
};

const chartConfig = {
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
  AttemptedQuestions: { label: "Attempted", color: "#10B981" },
  CorrectAnswers: { label: "Correct", color: "#60A5FA" },
} satisfies ChartConfig

export function AccuracyComponent() {
  const id = "pie-interactive"
  const [activeMonth] = React.useState(desktopData[0].month)
  const [hoverIndex, setHoverIndex] = React.useState<number | undefined>(undefined)
  
  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  
  const onPieEnter = (_: unknown, index: number) => setHoverIndex(index)
  const onPieLeave = () => setHoverIndex(undefined)
  
  const totalAnswers = desktopData.reduce((sum, item) => sum + item.desktop, 0)
  const CorrectPercentage = Math.round((desktopData[1].desktop / totalAnswers) * 100)

  return (
    <Card data-chart={id} className="bg-slate-100 border border-custombroder w-[220px] h-[260px]">
      <ChartStyle id={id} config={chartConfig} />
      <CardContent className="p-2">
        <h2 className="text-xs font-bold text-slate-700 mb-1">Accuracy Rate</h2>
        <ChartContainer id={id} config={chartConfig} className="mx-auto aspect-square w-full h-[170px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={30}
              outerRadius={50}
              strokeWidth={2}
              cornerRadius={5}
              activeIndex={hoverIndex !== undefined ? hoverIndex : activeIndex}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              activeShape={(props: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={props.outerRadius! + 5} cornerRadius={5} />
                  <Sector {...props} outerRadius={props.outerRadius! + 10} innerRadius={props.outerRadius! + 6} cornerRadius={5} />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-bold">
                            {`${desktopData[1].desktop}/${desktopData[0].desktop}`}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 15} className="fill-muted-foreground text-[8px]">
                            {`${CorrectPercentage}% Accuracy`}
                          </tspan>
                        </text>
                      </g>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-1 mt-1">
          {desktopData.map((item) => (
            <div key={item.month} className="flex items-center">
              <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.fill }}></span>
              <span className="text-[6px] capitalize">{`${item.month} - ${item.desktop}`}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
