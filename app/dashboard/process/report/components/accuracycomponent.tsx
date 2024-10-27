"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector, ResponsiveContainer } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartStyle, ChartTooltip } from "@/components/ui/chart"

const desktopData = [
  { month: "Attempted Questions", desktop: 75, fill: "var(--color-AttemptedQuestions)" },
  { month: "Correct Answers", desktop: 50, fill: "var(--color-CorrectAnswers)" },
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
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
  AttemptedQuestions: {
    label: "Attempted Questions",
    color: "#10B981",
  },
  CorrectAnswers: {
    label: "Correct Answers",
    color: "#60A5FA",
  },
} satisfies ChartConfig

const AccuracyRateChart: React.FC = () => {
  const id = "pie-interactive"
  const [activeMonth] = React.useState(desktopData[0].month)
  const [hoverIndex, setHoverIndex] = React.useState<number | undefined>(undefined)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  
  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )

  React.useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      setDimensions({
        width: width,
        height: Math.min(width * 0.6, 400) 
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const onPieEnter = (_: unknown, index: number) => setHoverIndex(index)
  const onPieLeave = () => setHoverIndex(undefined)

  const totalAnswers = desktopData[0].desktop
  const correctAnswers = desktopData[1].desktop
  const accuracyPercentage = Math.round((correctAnswers / totalAnswers) * 100)

  const baseSize = Math.min(dimensions.width, dimensions.height)
  const outerRadius = Math.max(baseSize * 0.2, 60)
  const innerRadius = Math.max(baseSize * 0.12, 40)

  return (
    <Card className="w-full max-w-4xl mx-auto bg-slate-100 border border-custombroder">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="space-y-2 p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl text-slate-700">Accuracy Rate</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Great job! You&apos;ve achieved {accuracyPercentage}% accuracy. Keep improving!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="w-full aspect-square max-w-[500px] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Pie
                data={desktopData}
                dataKey="desktop"
                nameKey="month"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                strokeWidth={3}
                cornerRadius={8}
                activeIndex={hoverIndex !== undefined ? hoverIndex : activeIndex}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                activeShape={({ outerRadius: activeOuterRadius = 0, ...props }: PieSectorDataItem) => (
                  <g>
                    <Sector {...props} outerRadius={activeOuterRadius + 8} cornerRadius={8} />
                    <Sector
                      {...props}
                      outerRadius={activeOuterRadius + 16}
                      innerRadius={activeOuterRadius + 10}
                      cornerRadius={8}
                    />
                  </g>
                )}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      const fontSize = Math.max(dimensions.width * 0.04, 14)
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
                            className="fill-foreground font-bold"
                            style={{ fontSize: fontSize * 1.5 }}
                          >
                            {`${correctAnswers}/${totalAnswers}`}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + fontSize + 4}
                            className="fill-muted-foreground"
                            style={{ fontSize }}
                          >
                            {`${accuracyPercentage}% Accuracy`}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {desktopData.map((item) => (
            <div key={item.month} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: item.fill }}
              ></span>
              <span className="text-sm sm:text-base">
                {`${item.month} - ${item.desktop}`}
              </span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default AccuracyRateChart