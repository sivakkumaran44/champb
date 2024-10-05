"use client"
import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import { ChevronDown } from "lucide-react"

type MonthData = { month: string; probability: number }[];
type MonthlyData = {
  [key: string]: MonthData;
};

// Sample monthly data
const monthlyData: MonthlyData = {
  Today: [
    { month: "April", probability: 32 },
    { month: "May", probability: 45 },
    { month: "June", probability: 80 },
    { month: "July", probability: 65 },
    { month: "Aug", probability: 70 },
    { month: "Today", probability: 75 },
  ],
  Aug: [
    { month: "April", probability: 32 },
    { month: "May", probability: 45 },
    { month: "June", probability: 80 },
    { month: "July", probability: 50 },
    { month: "Aug", probability: 68 },
    { month: "Today", probability: 32 },
  ],
  July: [
    { month: "April", probability: 32 },
    { month: "May", probability: 45 },
    { month: "June", probability: 80 },
    { month: "July", probability: 82 },
    { month: "Aug", probability: 70 },
    { month: "Today", probability: 65 },
  ],
  June: [
    { month: "April", probability: 32 },
    { month: "May", probability: 45 },
    { month: "June", probability: 75 },
    { month: "July", probability: 73 },
    { month: "Aug", probability: 68 },
    { month: "Today", probability: 62 },
  ],
  May: [
    { month: "April", probability: 32 },
    { month: "May", probability: 70 },
    { month: "June", probability: 72 },
    { month: "July", probability: 69 },
    { month: "Aug", probability: 65 },
    { month: "Today", probability: 60 },
  ],
  April: [
    { month: "April", probability: 65 },
    { month: "May", probability: 68 },
    { month: "June", probability: 70 },
    { month: "July", probability: 67 },
    { month: "Aug", probability: 63 },
    { month: "Today", probability: 58 },
  ],
}

export default function SuccessProbabilityTracker() {
  const [selectedMonth, setSelectedMonth] = useState<keyof MonthlyData>("Aug")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedRange, setSelectedRange] = useState("Last 6 months")

  const rangeOptions = [
    "Last 3 months",
    "Last 6 months",
    "Last 12 months",
  ]

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleRangeSelect = (range: string) => {
    setSelectedRange(range)
    setIsDropdownOpen(false)
  }

  return (
    <Card className="w-full max-w-3xl mb-2 mx-auto bg-slate-100 border border-custombroder rounded-xl p-4 sm:p-6">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-4 sm:pb-6">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          <CardTitle className="text-lg sm:text-xl font-semibold text-slate-700">
            Overall Success Probability Tracker
          </CardTitle>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDropdownToggle}
            className="text-slate-700 rounded-2xl mt-2 sm:mt-0 flex items-center"
          >
            {selectedRange}
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
              {rangeOptions.map((range) => (
                <div
                  key={range}
                  onClick={() => handleRangeSelect(range)}
                  className={`cursor-pointer p-2 hover:bg-gray-100 ${
                    selectedRange === range
                      ? "bg-gray-100 text-slate-700"
                      : "text-gray-700"
                  }`}
                >
                  {range}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
  <div className="h-[200px] sm:h-[250px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={monthlyData[selectedMonth]}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient
            id="colorProbability"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#4ade80"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="#4ade80"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#e5e7eb"
        />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9ca3af", fontSize: 10, dy: 10 }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9ca3af", fontSize: 10 }}
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Area
          type="monotone"
          dataKey="probability"
          stroke="#4ade80"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorProbability)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>

  {/* Centering buttons on mobile */}
  <div className="flex flex-wrap justify-center sm:justify-between mt-4 gap-2">
    {(Object.keys(monthlyData) as Array<keyof MonthlyData>).map((month) => (
      <Button
        key={month}
        variant={selectedMonth === month ? "default" : "ghost"}
        size="sm"
        onClick={() => setSelectedMonth(month)}
        className={`${
          selectedMonth === month
            ? "bg-slate-700 text-white"
            : "text-emerald-700"
        } rounded-2xl text-xs sm:text-sm`}
      >
        {month}
      </Button>
    ))}
  </div>

  <div className="flex items-center justify-start mt-4 text-xs sm:text-sm text-slate-700">
    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
    Exam Success Probability
  </div>
</CardContent>

    </Card>
  )
}