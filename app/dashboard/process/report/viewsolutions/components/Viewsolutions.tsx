import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface TestQuestionProps {
  question?: {
    question: string;
    options: string[];
    correctAnswer?: string;
    wrongAnswer?: string;
    solution?: string;
    explanation?: string;
  };
  fontSize: number;
  currentQuestionIndex: number;
}

const ViewSolutionsQuestion: React.FC<TestQuestionProps> = ({ 
  question, 
  fontSize, 
  currentQuestionIndex 
}) => {
  if (!question) {
    return <div>No question available</div>;
  }

  return (
    <div className="mb-6 text-slate-700">
      <div className="overflow-y-auto custom-scrollbar max-h-[400px] p-2 border-none rounded-md">
        <p className="font-medium mb-8" style={{ fontSize: `${fontSize}px` }}>
          Question {currentQuestionIndex + 1}: {question.question}
        </p>
        <RadioGroup value={question.correctAnswer}>
          {question.options.map((option, index) => {
            const isCorrect = question.correctAnswer ? option === question.correctAnswer : false;
            const isWrong = question.wrongAnswer ? option === question.wrongAnswer : false;

            return (
              <div
                key={index}
                className={`flex items-center space-x-2 mb-4 p-2 rounded-md ${
                  isCorrect ? "bg-emerald-500" : isWrong ? "bg-[#EF4444]" : ""
                }`}
              >
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  disabled
                  className={isCorrect || isWrong ? "text-white" : ""}
                />
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
        {question.solution && (
          <div className="mt-4">
            <p className="font-medium text-lg">Solution:</p>
            <p className="text-base">{question.solution}</p>
          </div>
        )}
        {question.explanation && (
          <div className="mt-4">
            <p className="font-medium text-lg">Explanation:</p>
            <p className="text-base">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSolutionsQuestion;