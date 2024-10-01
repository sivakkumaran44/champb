import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown,X,Check,Circle } from 'lucide-react';

interface TestQuestionProps {
  question?: {
    question: string;
    options: string[];
    correctAnswer: string;
    wrongAnswer?: string;  
    solution: string;
    explanation: string;
  };
  fontSize: number;
  currentQuestionIndex: number;
}

const ViewSolutionsQuestion: React.FC<TestQuestionProps> = ({ 
  question, 
  fontSize,  
}) => {
  if (!question) {
    return <div>No question available</div>;
  }

  return (
    <div className="mb-6 text-slate-700">
      <div className="overflow-y-auto custom-scrollbar max-h-[400px] p-2 border-none rounded-md">
        <p className="font-medium mb-8" style={{ fontSize: `${fontSize}px` }}>
         {question.question}
        </p>
        <RadioGroup value={question.correctAnswer}>
          {question.options.map((option, index) => {
            const isCorrect = option === question.correctAnswer;
            const isWrong = question.wrongAnswer ? option === question.wrongAnswer : false;

            return (
              <div
                key={index}
                className={`flex items-center space-x-2 mb-4 p-2 rounded-md ${
                  isCorrect ? "bg-emerald-500" : isWrong ? "bg-[#EF4444]" : ""
                }`}
              >
                 <div className="flex items-center justify-center w-4 h-4 mr-3">
                  {isCorrect && (
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                  )}
                  {isWrong && (
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <X className="w-4 h-4 text-[#EF4444]" />
                    </div>
                  )}
                  {!isCorrect && !isWrong && <Circle className="w-6 h-6 text-gray-400 fill-white" />}
                </div>
                <Label
                  htmlFor={`option-${index}`}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    isCorrect ? "text-white font-bold" : isWrong ? "text-white font-bold" : ""
                  }`}
                >
                  {option}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
        <div className="mt-4">
          <p className="font-semibold text-slate-700">Solution:</p>
          <p className="text-slate-700 ">{question.solution}</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-slate-700 ">Explanation:</p>
          <p className="text-slate-700 ">{question.explanation}</p>
        </div>
        <div className="flex items-center space-x-4 mt-6">
  <p className="text-sm text-slate-700 text-opacity-60">Was the solution helpful?</p>
  <Button variant="outline" className='text-slate-700  text-opacity-60 border-slate-700 border-opacity-60'>
    <ThumbsUp className="mr-2 h-4 w-4 " />
    <span>Yes</span>
  </Button>
  <Button variant="outline" className='text-slate-700 text-opacity-60 border-slate-700 border-opacity-60'>
    <ThumbsDown className="mr-2 h-4 w-4 " />
    <span>No</span>
  </Button>
</div>
      </div>
    </div>
  );
};

export default ViewSolutionsQuestion;
