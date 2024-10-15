"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector, ResponsiveContainer, Tooltip } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import chartData from '@/components/data/piechart.json'

const pieChartData = chartData.desktopData

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

export default function PieChartComponent() {
  const [hoverIndex, setHoverIndex] = React.useState<number | undefined>(undefined)

  const onPieEnter = (_: unknown, index: number) => {
    setHoverIndex(index)
  }

  const onPieLeave = () => {
    setHoverIndex(undefined)
  }

  const displayData = hoverIndex !== undefined ? pieChartData[hoverIndex] : pieChartData[0]
  const totalAnswers = pieChartData.reduce((sum, item) => sum + item.desktop, 0)
  const correctPercentage = Math.round((pieChartData[0].desktop / totalAnswers) * 100)

  return (
    <div className="pl-6">
      <div className="bg-slate-100 border mt-6 w-[220px] h-[320px] border-custombroder rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-xs font-semibold text-slate-700">Overall Score</h3>
          <p className="text-[10px] leading-tight text-slate-600 mt-1">
            Congratulations on your {correctPercentage}%! Use this as a stepping stone to build on and keep pushing towards your goal.
          </p>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="desktop"
                nameKey="month"
                innerRadius={40}
                outerRadius={70}
                strokeWidth={5}
                cornerRadius={8}
                activeIndex={hoverIndex}
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
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-slate-700 text-xl font-bold">
                            {displayData.desktop.toLocaleString()}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 20} className="fill-slate-500 text-[8px]">
                            {displayData.month}
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2 ml-2 text-xs">
          {pieChartData.map((item) => (
            <div key={item.month} className="flex items-center">
              <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.fill }}></span>
              <span>{`${item.month} - ${item.desktop}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}