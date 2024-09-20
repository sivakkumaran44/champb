"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface QuizOption {
  text?: string
  image?: string
}

interface QuizQuestionProps {
  question: string
  options: QuizOption[]
  userAnswer: string | null
  correctAnswer: string
  time: string
  score: number
}

export function QuizQuestionCard({ question, options, userAnswer, correctAnswer, time }: QuizQuestionProps) {
  const isCorrect = userAnswer === correctAnswer
  const isUnattempted = userAnswer === null

  const getScoreColor = () => {
    if (isUnattempted) return 'text-yellow-500'
    return isCorrect ? 'text-emerald-500' : 'text-red-500'
  }

  const getScoreText = () => {
    if (isUnattempted) return '0'
    return isCorrect ? '+1' : '-1'
  }

  return (
    <Card className="bg-slate-100 border border-slate-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-slate-700">{question}</h2>
          <div className={`flex items-center ${getScoreColor()}`}>
            <span className="font-bold text-lg">{getScoreText()}</span>
            <span className="ml-2 text-sm text-slate-500">{time}</span>
          </div>
        </div>
        <div className={`grid ${options[0].image ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-4`}>
          {options.map((option, index) => (
            <div key={index} className="flex flex-col">
              {option.image && (
                <div className="border border-slate-300 rounded-md overflow-hidden mb-2">
                  <Image src={option.image} alt={`Option ${String.fromCharCode(65 + index)}`} width={200} height={150} layout="responsive" />
                </div>
              )}
              <div className="text-slate-700">
                {String.fromCharCode(65 + index)}. {option.text || `Option ${String.fromCharCode(65 + index)}`}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1 mb-4">
          <div>
            Your Answer: <span className={isCorrect ? 'text-emerald-600' : 'text-blue-500'}>
              {userAnswer || 'Unattempted'}
            </span>
          </div>
          <div>
            Correct Answer: <span className="text-emerald-600">{correctAnswer}</span>
          </div>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          View Explanation
        </Button>
      </CardContent>
    </Card>
  )
}

export default function QuizPage() {
  const questionData: QuizQuestionProps[] = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      options: [
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" }
      ],
      userAnswer: "C",
      correctAnswer: "C",
      time: "00:03",
      score: 1
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit u?",
      options: [
        { image: "/api/placeholder/200/150" },
        { image: "/api/placeholder/200/150" },
        { image: "/api/placeholder/200/150" },
        { image: "/api/placeholder/200/150" }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      time: "00:12",
      score: 1
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      options: [
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" }
      ],
      userAnswer: "B",
      correctAnswer: "A",
      time: "00:05",
      score: -1
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      options: [
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" },
        { text: "Lorem ipsum dolor" }
      ],
      userAnswer: null,
      correctAnswer: "A",
      time: "00:06",
      score: 0
    }
  ]

  return (
    <div className="p-4 space-y-4">
      {questionData.map((data, index) => (
        <QuizQuestionCard key={index} {...data} />
      ))}
    </div>
  )
}