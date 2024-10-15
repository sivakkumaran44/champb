"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import subjectsData from '@/components/data/subjectdata.json'
import  PieChartCard from './PieChartCard'
import ThreeColorBar from './Threecolorbar'

const SubjectDashboard: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {subjectsData.subjects.map((subject, subjectIndex) => (
        <AccordionItem key={subject.name} value={`subject-${subjectIndex}`} className="border-none mb-2">
          <Card className="w-[230px] bg-gray-100 border-none shadow-sm">
            <CardContent className="p-0">
              <AccordionTrigger className="hover:no-underline w-full px-2 py-1">
                <PieChartCard 
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
                          UncoveredAnswered: topic.UncoveredAnswered || 0,
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

export default SubjectDashboard