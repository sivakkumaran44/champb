"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Label } from 'recharts'
import subjectsData from '@/components/data/subjectdata.json'

interface ChartData {
  name: string
  value: number
  color: string
  
}

interface DashboardCardProps {
  title: string
  data: ChartData[]
}

interface ThreeColorBarData {
  correctanswered: number
  Incorrectanswered: number
  UncoveredAnswered: number
  color1: string
  color2: string
  color3: string
  text: string
  name?: string 
}

interface ThreeColorBarProps {
  data: ThreeColorBarData
  isActive: boolean
  isMainBar: boolean
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, data }) => {
  return (
    <div className="flex items-center w-[220px] h-[60px]">
      <div className="w-12 h-12 mr-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={15}
              outerRadius={24}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-slate-700 mb-1">{title}</h2>
        <div className="flex space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ThreeColorBar: React.FC<ThreeColorBarProps> = ({ data, isActive, isMainBar }) => {
  const totalAnswers = data.correctanswered + data.Incorrectanswered + data.UncoveredAnswered
  const centerText = totalAnswers > 0 ? `${((data.correctanswered / totalAnswers) * 100).toFixed(1)}%` : '0%'

  const getColor = (color: string, type: 'color1' | 'color2' | 'color3') => {
    if (!isMainBar) return color
    if (isActive) return color
    if (type === 'color1') return "#475569"
    if (type === 'color2') return "#94A3B8"
    return color   
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${!isMainBar ? 'ml-4' : ''}`}>
      <div className="w-full h-8 max-w-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[data]} layout="vertical">
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis dataKey="name" type="category" hide />
            {data.color1 && (
              <Bar dataKey="correctanswered" stackId="a" fill={getColor(data.color1, 'color1')} radius={[4, 0, 0, 4]}>
                <Label value={centerText} position="center" fill="#000" fontSize={10} />
              </Bar>
            )}
            {data.color2 && (
              <Bar dataKey="Incorrectanswered" stackId="a" fill={getColor(data.color2, 'color2')} radius={0} />
            )}
            {data.color3 && (
              <Bar dataKey="UncoveredAnswered" stackId="a" fill={getColor(data.color3, 'color3')} radius={[0, 4, 4, 0]} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium text-gray-700">{data.text}</span>
      </div>
    </div>
  );
};

const SubjectDashboard: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {subjectsData.subjects.map((subject, subjectIndex) => (
        <AccordionItem key={subject.name} value={`subject-${subjectIndex}`} className="border-none mb-2">
          <Card className="w-[230px] bg-gray-100 border-none shadow-sm">
            <CardContent className="p-0">
              <AccordionTrigger className="hover:no-underline w-full px-2 py-1">
                <DashboardCard 
                  title={subject.name} 
                  data={[
                    {
                      name: "Correct",
                      value: subject.correctanswered,
                      color: subject.color1,
                    },
                    {
                      name: "Incorrect",
                      value: subject.Incorrectanswered,
                      color: subject.color2,
                    },
                    {
                      name: "Uncovered",
                      value: subject.UncoveredAnswered,
                      color: subject.color3,
                    }
                  ]}
                />
              </AccordionTrigger>
            </CardContent>
          </Card>
          <AccordionContent className="pt-2">
            <Accordion type="single" collapsible className="w-full max-w-[220px] mx-auto space-y-1">
              {subject.chapter.map((topic, topicIndex) => (
                <AccordionItem key={topic.name} value={`topic-${subjectIndex}-${topicIndex}`} className="border border-gray-200 bg-gray-100 rounded-md">
                  <AccordionTrigger className="hover:no-underline px-2 py-1">
                    <div className="flex justify-center items-center w-full h-12">
                      <ThreeColorBar 
                        data={{
                          correctanswered: topic.correctanswered,
                          Incorrectanswered: topic.Incorrectanswered,
                          UncoveredAnswered: topic.UncoveredAnswered || 0, // Use 0 as default if undefined
                          color1: topic.color1,
                          color2: topic.color2,
                          color3: topic.color3,
                          text: topic.name
                        }}
                        isActive={true} 
                        isMainBar={true} 
                      />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1 py-2">
                      {topic.topics.map((chapter, chapterIndex) => (
                        <div key={chapterIndex} className="flex justify-center items-center">
                          <ThreeColorBar 
                            data={{
                              correctanswered: chapter.correctanswered,
                              Incorrectanswered: chapter.Incorrectanswered,
                              UncoveredAnswered: chapter.UncoveredAnswered,
                              color1: topic.color1,
                              color2: topic.color2,
                              color3: topic.color3,
                              text: chapter.name
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
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SubjectDashboard;
