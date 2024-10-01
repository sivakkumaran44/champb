"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircleChevronRight } from 'lucide-react';
import instructionsData from '@/components/data/generalinstructions.json';
import { useRouter } from "next/navigation";

interface Instruction {
  title: string;
  items: string[];
}

interface QuestionStatus {
  shape: 'square' | 'circle' | 'triangle' | 'empty-triangle';
  color: string;
  text: string;
}

interface TestInstructionsData {
  title: string;
  generalInstructions: string;
  sections: Instruction[];
  questionStatus: QuestionStatus[];
}

const GeneralInstructions: React.FC = () => {
  const [instructions, setInstructions] = useState<TestInstructionsData | null>(null);
  const router = useRouter();
  
  const handleNext = () => {
    router.push(`/generalinstructions/testspecificinstructions`);
  };

  useEffect(() => {
    setInstructions({
      ...instructionsData,
      questionStatus: [
        { shape: 'square', color: 'gray', text: "You have not visited the question yet." },
        { shape: 'circle', color: 'red', text: "You have not answered the question." },
        { shape: 'circle', color: 'green', text: "You have answered the question." },
        { shape: 'empty-triangle', color: 'purple', text: "You have NOT answered the question, but have marked the question for review." },
        { shape: 'triangle', color: 'purple', text: "The question(s) \"Answered and Marked for Review\" will be considered for evaluation." }
      ]
    });
  }, []);

  if (!instructions) return <div>Loading...</div>;

  const getColorClass = (color: string) => {
    switch (color) {
      case 'gray': return 'bg-slate-300';
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'purple': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const renderShape = (shape: string, color: string, withSymbol: boolean = false) => {
    const colorClass = getColorClass(color);
    switch (shape) {
      case 'square':
        return <div className={`w-6 h-6 ${colorClass} mr-2 border-2 border-black`} />;
      case 'circle':
        return <div className={`w-6 h-6 rounded-full ${colorClass} mr-2`} />;
      case 'triangle':
        return (
          <svg className="w-12 h-12 md:w-6 md:h-6 mr-2" viewBox="0 0 24 24">
            <path d="M12 2 L22 22 L2 22 Z" fill="purple" stroke="purple" strokeWidth="2" />
            <g transform="translate(12, 13)">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">   
                <g>
                  <circle cx="12" cy="12" r="10" fill="#4ade80" /> 
                  <text x="12" y="16" fontSize="16" textAnchor="middle" fill="white" fontWeight="bold">!</text>
                </g>
              </svg>
            </g>       
          </svg>
        );
      case 'empty-triangle':
        return (
          <svg className="w-12 h-12 md:w-6 md:h-6 mr-2" viewBox="0 0 24 24">
            <path d="M12 2 L22 22 L2 22 Z" fill={color} />
            {withSymbol && (
              <text x="12" y="19" fontSize="16" fill="none" stroke={color} textAnchor="middle">!</text>
            )}
          </svg>
        );
      default:
        return null;
    }
  };

  const renderQuestionStatus = (status: QuestionStatus) => {
    return (
      <div key={status.text} className="flex items-center mb-2">
        {renderShape(status.shape, status.color)}
        <span className="text-slate-600">{status.text}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white sticky top-0 z-10">
        <h1 className="text-xl text-center text-slate-700 font-bold p-4">
          {instructions.title}
        </h1>
        <div className="p-4 bg-white">
          <h2 className="text-lg text-slate-700">{instructions.generalInstructions}</h2>
        </div>
      </header>
      <main className="flex-grow mb-20 p-8 overflow-y-auto">
        {instructions.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold text-slate-800">
              {index + 1}) {section.title}
            </h3>
            <ul className="list-disc pl-5 mt-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-slate-600 mb-1">
                  {item}
                </li>
              ))}
            </ul>
            {section.title === "Navigation:" && (
              <div className="mt-4 p-4 rounded-lg">
                {instructions.questionStatus.map(renderQuestionStatus)}
              </div>
            )}
          </div>
        ))}
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-blue-50 p-4 flex justify-end">
        <Button
          className="bg-[#B9E8DC] hover:bg-[#B9E8DC] font-semibold text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155]"
          onClick={handleNext}
        >
          Next
          <CircleChevronRight className="ml-2 text-lg" />
        </Button>
      </footer>
    </div>
  );
};

export default GeneralInstructions;
