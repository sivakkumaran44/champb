import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuizOption {
  text?: string;
  image?: string;
}

interface QuizQuestionProps {
  question: string;
  options: QuizOption[];
  userAnswer: string | null;
  correctAnswer: string;
  time: string;
  score: number;
}

const QuizQuestionCard: React.FC<QuizQuestionProps> = ({ question, options, userAnswer, correctAnswer, time }) => {
  const isCorrect = userAnswer === correctAnswer;
  const isUnattempted = userAnswer === null;
  const isImageQuestion = options[0].image !== undefined;

  const getScoreColor = () => {
    if (isUnattempted) return 'text-yellow-500';
    return isCorrect ? 'text-emerald-500' : 'text-red-500';
  };

  const getScoreText = () => {
    if (isUnattempted) return '0';
    return isCorrect ? '+1' : '-1';
  };

  const getAnswerColor = (option: string) => {
    if (option === correctAnswer) return 'text-emerald-600';
    if (option === userAnswer && !isCorrect) return 'text-blue-500';
    return 'text-slate-700';
  };

  return (
    <Card className="bg-slate-100 border border-slate-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-slate-700">{question}</h2>
          <div className={`flex flex-col items-end ${getScoreColor()}`}>
            <span className="font-bold text-lg">{getScoreText()}</span>
            <span className="text-sm text-slate-500">{time}</span>
          </div>
        </div>
        <div className={`${isImageQuestion ? 'grid grid-cols-1 gap-4' : 'space-y-2'} mb-4`}>
          {options.map((option, index) => (
            <div key={index} className={`flex items-center ${getAnswerColor(String.fromCharCode(65 + index))}`}>
              <span className="mr-2">{String.fromCharCode(65 + index)}.</span>
              {option.image ? (
                <div className="border border-slate-300 rounded-md overflow-hidden h-60 w-60">
                  <Image 
                    src={option.image} 
                    alt={`Option ${String.fromCharCode(65 + index)}`} 
                    width={200} 
                    height={100} 
                    layout="responsive"
                  />
                </div>
              ) : (
                <span>{option.text}</span>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center">
            <span className="mr-2">Your Answer:</span>
            <span className={getAnswerColor(userAnswer || '')}>
              {userAnswer || 'Unattempted'}
            </span>
            {isImageQuestion && userAnswer && (
              <div className="ml-2 border border-slate-300 rounded-md overflow-hidden w-60 h-60">
                <Image 
                  src={options[userAnswer.charCodeAt(0) - 65].image || ''}
                  alt={`Your Answer`} 
                  width={80} 
                  height={40} 
                  layout="responsive"
                />
              </div>
            )}
          </div>
          <div className="flex items-center">
            <span className="mr-2">Correct Answer:</span>
            <span className="text-emerald-600">{correctAnswer}</span>
            {isImageQuestion && (
              <div className="ml-2 border border-slate-300 rounded-md overflow-hidden w-60 h-60">
                <Image 
                  src={options[correctAnswer.charCodeAt(0) - 65].image || ''}
                  alt={`Correct Answer`} 
                  width={80} 
                  height={40} 
                  layout="responsive"
                />
              </div>
            )}
          </div>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs py-1 px-3 h-auto">
          View Explanation
        </Button>
      </CardContent>
    </Card>
  );
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
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit u?",
      options: [
        { image: "/api/placeholder/200/100" },
        { image: "/api/placeholder/200/100" },
        { image: "/api/placeholder/200/100" },
        { image: "/api/placeholder/200/100" }
      ],
      userAnswer: "B",
      correctAnswer: "B",
      time: "00:12",
      score: 1
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {questionData.map((data, index) => (
        <QuizQuestionCard key={index} {...data} />
      ))}
    </div>
  );
}
