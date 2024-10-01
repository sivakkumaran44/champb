import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-grouptest';
import { Label } from '@/components/ui/label';

interface TestQuestionProps {
  question?: {
    question: string;
    options: string[];
  };
  selectedOption: string;
  onOptionSelect: (value: string) => void;
  fontSize: number;
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, selectedOption, onOptionSelect, fontSize }) => {
  if (!question) {
    return <div>No question available</div>;
  }

  return (
    <div className="mb-6 text-slate-700">
      <div
        className="overflow-y-auto custom-scrollbar p-2 border-none rounded-md"
        style={{
          maxHeight: '400px',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch', 
        }}
      >
        <p className="font-medium mb-8" style={{ fontSize: `${fontSize}px` }}>
          {question.question}
        </p>
        <RadioGroup value={selectedOption} onValueChange={onOptionSelect}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label
                htmlFor={`option-${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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

export default TestQuestion;
