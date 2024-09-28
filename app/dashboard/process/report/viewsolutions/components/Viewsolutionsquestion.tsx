import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface TestQuestionProps {
  question?: {
    question: string;
    options: string[];
    correctAnswer: string;
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
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 mb-4 p-2 rounded-md ${
                option === question.correctAnswer ? "bg-emerald-800" : ""
              }`}
            >
              <RadioGroupItem
                value={option}
                id={`option-${index}`}
                disabled
                className={option === question.correctAnswer ? "text-white" : ""}
              />
              <Label
                htmlFor={`option-${index}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  option === question.correctAnswer ? "text-white font-bold" : ""
                }`}
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default ViewSolutionsQuestion;