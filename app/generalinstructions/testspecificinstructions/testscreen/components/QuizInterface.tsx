import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import quizData from '@/components/data/questionpaper.json';
import { Lock, ZoomIn, ZoomOut } from 'lucide-react';
import TestQuestion from './TestQuestion';
import ReportQuestion from './ReportQuestion';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

interface QuizInterfaceProps {
  currentSubject: number;
  currentQuestion: number;
  selectedOption: string;
  onOptionSelect: (value: string) => void;
  onPrevious: () => void;
  onSaveNext: () => void;
  onClearResponse: () => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({
  currentSubject,
  currentQuestion,
  selectedOption,
  onOptionSelect,
  onPrevious,
  onSaveNext,
  onClearResponse,
}) => {
  const [fontSize, setFontSize] = useState(16);
  const currentSubjectData = quizData[currentSubject];
  const currentQuestionData = currentSubjectData?.questions[currentQuestion];
  const [timeRemaining] = useState(67);
  const [marks] = useState({ correct: 2, incorrect: -0.5 });

  const [questionStatuses, setQuestionStatuses] = useState<string[]>(
    new Array(currentSubjectData?.questions.length).fill('not-visited')
  );

  const handleZoomIn = () => setFontSize((prev) => prev + 2);
  const handleZoomOut = () => setFontSize((prev) => Math.max(12, prev - 2));
  const handleResetFontSize = () => setFontSize(16);

  const getButtonColor = (status: string) => {
    switch (status) {
      case 'answered':
        return 'bg-green-500';
      case 'not-answered':
        return 'bg-red-500';
      case 'marked-for-review':
        return 'bg-purple-500';
      case 'answered-and-marked':
        return 'bg-purple-500';
      default:
        return 'bg-gray-300';
    }
  };

  const updateQuestionStatus = (index: number, status: string) => {
    const newStatuses = [...questionStatuses];
    newStatuses[index] = status;
    setQuestionStatuses(newStatuses);
  };

  const handleSaveNext = () => {
    if (selectedOption) {
      updateQuestionStatus(currentQuestion, 'answered');
    } else {
      updateQuestionStatus(currentQuestion, 'not-answered');
    }
    onSaveNext();
  };

  const handleMarkForReview = () => {
    if (selectedOption) {
      updateQuestionStatus(currentQuestion, 'answered-and-marked');
    } else {
      updateQuestionStatus(currentQuestion, 'marked-for-review');
    }
    onSaveNext();
  };

  return (
    <div className="flex flex-col h-screen">
    <div className="flex w-full flex-grow p-4  pb-20"> 
      <div className="w-[80%] p-4 overflow-y-auto">
         <div className="flex flex-nowrap overflow-x-auto gap-2 mb-4">
            {quizData.map((subject, index) => (
              <Button
                key={index}
                variant={index === currentSubject ? "default" : "ghost"}
                className="text-xs bg-emerald-500 text-white hover:bg-emerald-500 sm:text-sm whitespace-nowrap flex items-center gap-2"
                onClick={() => console.log(`Selected subject: ${subject.subject}`)} 
              >
                {subject.subject}
                {index > currentSubject && <Lock className="w-4 h-4 text-white" />}
              </Button>
            ))}
          </div>
          <div className="bg-slate-100 p-2 rounded-lg flex items-center justify-between mb-8">
            <div className="text-sm font-semibold text-slate-700">
              Question No.{currentQuestion + 1}
            </div>
            <div className="flex items-center gap-8">
              <div className="text-sm text-slate-700">
                Time {Math.floor(timeRemaining / 60)}:{timeRemaining % 60 < 10 ? '0' : ''}{timeRemaining % 60}
              </div>
              <div className="flex items-center gap-1">
                Marks:
                <span className="bg-green-500 text-slate-700 text-xs px-1.5 py-0.5 rounded">+{marks.correct}</span>
                <span className="bg-red-500 text-slate-700 text-xs px-1.5 py-0.5 rounded">{marks.incorrect}</span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleZoomIn}>
                  <ZoomIn className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleZoomOut}>
                  <ZoomOut className="w-3 h-3" />
                </Button>
                <div className="text-slate-700 cursor-pointer" onClick={handleResetFontSize}>
                  Reset
                </div>
                <ReportQuestion />
              </div>
            </div>
          </div>
          <TestQuestion 
            question={currentQuestionData}
            selectedOption={selectedOption}
            onOptionSelect={onOptionSelect}
            fontSize={fontSize}
          />
        </div>
        <div className="w-[20%] bg-[#F1F5F9] border border-[#D9D9D9] rounded-xl mt-2 mb-2 p-4 h-full">
  <div className="flex items-center gap-6 mb-4">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <span className="text-center text-slate-700">Student Name</span>
  </div>
  <div className="border-b border-[#64748B] w-full mb-2"></div>          
          <div className="bg-slate-100 p-2 rounded-lg flex flex-col items-start mb-8 overflow-hidden">
    <div className="flex flex-col items-start w-full gap-2 mb-2">
    <div className="flex flex-col w-full gap-2 mb-2">
  <div className="grid grid-cols-2 gap-2">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-green-500 rounded-full" />
      <span className="text-slate-700 text-sm">Answered</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-red-500 rounded-full" />
      <span className="text-slate-700 text-sm">Not answered</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-gray-300" />
      <span className="text-slate-700 text-sm">Not visited</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-6 
          border-l-[18px] border-l-transparent
          border-b-[20px] border-b-purple-500
          border-r-[10px] border-r-transparent" />
      <span className="text-slate-700 text-sm">Marked for review</span>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <div className="relative w-6 h-6">
      <div className="w-0 h-0 
          border-l-[18px] border-l-transparent 
          border-b-[20px] border-b-purple-500 
          border-r-[10px] border-r-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-xs ml-2">!</span>
      </div>
    </div>
    <span className="text-slate-700 text-sm">Answered and Marked for Review</span>
  </div>
</div>
</div>
</div>
<div className="text-sm font-semibold bg-slate-700 text-slate-200 mb-2 p-2 rounded">
            {quizData[currentSubject]?.subject || "N/A"}
          </div>
<div className="flex flex-wrap gap-2 flex items-center justify-center mt-4">
            {quizData[currentSubject]?.questions.map((question, index) => (
              <div 
                key={index} 
                className={`w-8 h-8 flex items-center justify-center rounded-md shadow-sm
                  ${index === currentQuestion ? 'ring-2 ring-blue-500' : ''}
                  ${getButtonColor(questionStatuses[index])}
                `}
              >
                <span className="text-xs">{index + 1}</span>
                {questionStatuses[index].includes('marked') && (
                  <div className="absolute top-0 right-0 w-0 h-0 
                    border-t-[8px] border-t-purple-500 
                    border-l-[8px] border-l-transparent">
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-blue-50 p-4 flex items-center justify-between border-t border-slate-700">
        <div className="flex gap-2">
          <Button
            onClick={onPrevious}
            variant={'ghost'}
            className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
          >
            Previous
          </Button>
          <Button
            onClick={onClearResponse}
            variant={'ghost'}
            className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
          >
            Clear Response
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleMarkForReview}
            className="font-medium bg-slate-700 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155]"
          >
            Mark for Review & Next
          </Button>
          <Button
            onClick={handleSaveNext}
            className="font-medium bg-[linear-gradient(305.13deg,_#FACC15_21.87%,_#FDE68A_81.26%)] text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center"
          >
            Save & Next
          </Button>
        </div>
        <div className="flex">
          <Button
            className="font-medium text-white bg-[#94A3B8] border border-[#334155] border-opacity-70 px-6 py-2 rounded-lg transition duration-300 flex items-center"
          >
            Submit Test
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default QuizInterface;
