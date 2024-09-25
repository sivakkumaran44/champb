import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface TestQuestionProps {
  question: {
    question: string;
    options: string[];
  };
  selectedOption: string;
  onOptionSelect: (value: string) => void;
  fontSize: number; 
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, selectedOption, onOptionSelect, fontSize }) => {
  return (
    <div className="mb-6 text-slate-700">
      <p className="font-medium  mb-8" style={{ fontSize: `${fontSize}px` }}>{question.question}</p>
       <RadioGroup defaultValue="comfortable" value={selectedOption} onValueChange={onOptionSelect}>
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-4">
            <RadioGroupItem  value={index.toString()} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`} style={{ fontSize: `${fontSize}px` }}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      
    </div>
  );
};

export default TestQuestion;
