"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ChartData {
  month: string
  desktop: number
  text: string
  color1: string
  color2: string
  color3: string
  split1: number
  split2: number
}

const chartData: ChartData[] = [
  { month: "January", desktop: 100, text: "Lorem Ipsum 1", color1: "#4ade80", color2: "", color3: "#E3E3E3", split1: 30, split2: 0 },
  { month: "February", desktop: 100, text: "Lorem Ipsum 2", color1: "#4ade80", color2: "#fda4af", color3: "#E3E3E3", split1: 40, split2: 30 },
  { month: "March", desktop: 100, text: "Lorem Ipsum 3", color1: "#4ade80", color2: "#fda4af", color3: "", split1: 50, split2: 50 },
  { month: "April", desktop: 100, text: "Lorem Ipsum 4", color1: "", color2: "", color3: "#E3E3E3", split1: 0, split2: 0 },
  { month: "May", desktop: 100, text: "Lorem Ipsum 5", color1: "", color2: "#fda4af", color3: "#E3E3E3", split1: 0, split2: 25 },
]

interface ThreeColorBarProps {
  data: ChartData
  isActive: boolean
  isMainBar: boolean
}

const ThreeColorBar: React.FC<ThreeColorBarProps> = ({ data, isActive, isMainBar }) => {
  const totalAnswers = data.split1 + data.split2
  const centerText = totalAnswers > 0 ? `${((data.split1 / totalAnswers) * 100).toFixed(1)}%` : '0%'

  const getColor = (color: string, type: 'color1' | 'color2' | 'color3') => {
    if (!isMainBar) return color
    if (isActive) return color
    if (type === 'color1') return "#475569"
    if (type === 'color2') return "#94A3B8"
    return color   
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${!isMainBar ? 'ml-12' : ''}`}>
      <div className="w-4/5 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[data]} layout="vertical">
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis dataKey="month" type="category" hide />
            {data.color1 && (
              <Bar dataKey="split1" stackId="a" fill={getColor(data.color1, 'color1')} radius={[5, 0, 0, 5]}>
                <Label value={centerText} position="center" fill="#000" fontSize={14} />
              </Bar>
            )}
            {data.color2 && (
              <Bar dataKey="split2" stackId="a" fill={getColor(data.color2, 'color2')} radius={0} />
            )}
            {data.color3 && (
              <Bar dataKey="desktop" stackId="a" fill={getColor(data.color3, 'color3')} radius={[0, 5, 5, 0]} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium text-gray-700">{data.text}</span>
      </div>
    </div>
  )
}

export  function BarComponent() {
  return (
    <Accordion type="single" collapsible className="w-9/12 mx-auto space-y-2">
      {chartData.map((data, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 bg-slate-100 rounded-lg overflow-hidden">
          <AccordionTrigger className="hover:no-underline ml-4">
            <div className="flex justify-center items-center w-full h-24 py-2 ">
              <ThreeColorBar 
                data={data} 
                isActive={true} 
                isMainBar={true} 
              />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-center items-center mb-1">
                  <ThreeColorBar 
                    data={{
                      ...data,
                      split1: Math.random() * 50,
                      split2: Math.random() * 50,
                    }}
                    isActive={true} 
                    isMainBar={false} 
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}