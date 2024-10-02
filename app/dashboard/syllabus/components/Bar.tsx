"use client"

import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, LabelList, Cell } from "recharts"
import { CircleArrowDown } from "lucide-react"

interface ChartData {
  month: string
  desktop: number
  text: string
}

const chartData: ChartData[] = [
  { month: "January", desktop: 60, text: "Lorem Ipsum 1" },
  { month: "February", desktop: 80, text: "Lorem Ipsum 2" },
  { month: "March", desktop: 40, text: "Lorem Ipsum 3" },
  { month: "April", desktop: 70, text: "Lorem Ipsum 4" },
  { month: "May", desktop: 90, text: "Lorem Ipsum 5" },
]

const SubChart: React.FC<{ data: ChartData; index: number; subIndex: number }> = ({ data, index, subIndex }) => {
  const getColors = (index: number) => {
    switch (index) {
      case 0: return ['#fda4af', '#E3E3E3']
      case 1: return ['#4ade80', '#fda4af', '#E3E3E3']
      case 2: return ['#4ade80', '#fda4af']
      case 3: return ['#E3E3E3']
      case 4: return ['#fda4af', '#E3E3E3']
      default: return ['#E3E3E3']
    }
  }

  const colors = getColors(index)

  return (
    <div className="flex justify-center items-center mt-2 ml-14"> 
      <BarChart width={650} height={60} data={[data]} layout="vertical">
        <XAxis type="number" dataKey="desktop" hide />
        <YAxis dataKey="month" type="category" hide />
        <Bar dataKey="desktop" radius={8}>
          {colors.map((color, i) => (
            <Cell key={`cell-${i}`} fill={color} />
          ))}
          <LabelList
            dataKey="text"
            position="inside"
            style={{ fill: '#047857', fontWeight: 'bold', fontSize: '12px' }}
          />
        </Bar>
      </BarChart>
    </div>
  )
}

export default function BarComponent() {
  const [expandedBarIndex, setExpandedBarIndex] = useState<number | null>(null)

  const toggleBar = (index: number) => {
    setExpandedBarIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const getColors = (index: number) => {
    switch (index) {
      case 0: return ['#fda4af', '#E3E3E3']
      case 1: return ['#4ade80', '#fda4af', '#E3E3E3']
      case 2: return ['#4ade80', '#fda4af']
      case 3: return ['#E3E3E3']
      case 4: return ['#fda4af', '#E3E3E3']
      default: return ['#E3E3E3']
    }
  }

  return (
    <div className="space-y-4">
      {chartData.map((data, index) => (
        <div
          key={index}
          className={`relative border w-10/12 border-custombroder bg-slate-100 text-slate-700 text-lg sm:text-xl p-4 sm:p-6 rounded-lg ${
            expandedBarIndex === index ? 'h-auto' : 'h-24'
          } transition-all duration-300 ease-in-out overflow-hidden mx-auto`} 
        >
          <CircleArrowDown
            className={`absolute top-2 right-2 h-5 w-5 text-slate-700 cursor-pointer transition-transform duration-300 ${
              expandedBarIndex === index ? 'rotate-180' : ''
            }`}
            onClick={() => toggleBar(index)}
          />
          <div className="flex justify-center items-center">
            <BarChart width={650} height={60} data={[data]} layout="vertical">
              <XAxis type="number" dataKey="desktop" hide />
              <YAxis dataKey="month" type="category" hide />
              <Bar dataKey="desktop" radius={5}>
                {getColors(index).map((color, i) => (
                  <Cell key={`cell-${i}`} fill={color} />
                ))}
                <LabelList
                  dataKey="text"
                  position="inside"
                  style={{ fill: '#047857', fontWeight: 'bold' }} 
                />
              </Bar>
            </BarChart>
          </div>
          <div className={`mt-4 space-y-2 ${expandedBarIndex === index ? 'block' : 'hidden'}`}>
            {[0, 1, 2, 3].map((subIndex) => (
              <SubChart key={subIndex} data={data} index={index} subIndex={subIndex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}