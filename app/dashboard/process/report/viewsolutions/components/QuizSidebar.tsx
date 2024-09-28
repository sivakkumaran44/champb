import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Filter } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface QuizQuestion {
  question: string;
  options: string[];
}

interface QuizData {
  subject: string;
  questions: QuizQuestion[];
}

interface QuizSidebarProps {
  isSidebarOpen: boolean;
  currentSubject: number;
  currentQuestion: number;
  questionStatuses: string[][]; 
  quizData: QuizData[];
  toggleSidebar: () => void;
  onNavigateToQuestion: (subjectIndex: number, questionIndex: number) => void;
}

const QuizSidebar: React.FC<QuizSidebarProps> = ({
  isSidebarOpen,
  currentSubject,
  currentQuestion,
  quizData,
  toggleSidebar,
  onNavigateToQuestion,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const filterOptions = ['All', 'Correct', 'Incorrect', 'Not Visited'];

  const getQuestionStatus = (questionIndex: number) => {
    if (questionIndex < 8) return 'crctanswered';
    if (questionIndex < 16) return 'wrong-answered';
    return 'not-visited';
  };

  const getButtonColor = (status: string) => {
    switch (status) {
      case 'crctanswered':
        return 'bg-green-500';
      case 'wrong-answered':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getButtonShape = (status: string) => {
    switch (status) {
      case 'crctanswered':
        return 'rounded-full';
      case 'wrong-answered':
        return 'rounded-md';
      default:
        return 'rounded-sm';
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFilterChange = (option: string) => {
    setFilter(option);
    setIsOpen(false);
  };
  const filterQuestions = (questionIndex: number) => {
    const status = getQuestionStatus(questionIndex);
    switch (filter) {
      case 'Correct':
        return status === 'crctanswered';
      case 'Incorrect':
        return status === 'wrong-answered';
      case 'Not Visited':
        return status === 'not-visited';
      default:
        return true;
    }
  };
  

  return (
    <>
      <div className={`hidden lg:block ${isSidebarOpen ? 'lg:w-[20%]' : 'lg:hidden'} bg-[#F1F5F9] border border-[#D9D9D9] rounded-xl mb-2 p-4 h-full transition-all duration-300 relative`}>
        <div className="flex items-center gap-6 mb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-center text-slate-700">Student Name</span>
          <div className="relative flex justify-end"> 
            <button onClick={toggleDropdown} className="flex items-end">
              <Filter className="h-5 w-5 text-slate-700" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                {filterOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleFilterChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="border-b border-[#64748B] w-full mb-2"></div>
        <div className="bg-slate-100 p-2 rounded-lg flex flex-col items-start mb-8">
          <div className="flex flex-col items-start w-full gap-2 mb-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full" />
                <span className="text-slate-700 text-sm">Correct Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-md" />
                <span className="text-slate-700 text-sm">Wrong Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-sm" />
                <span className="text-slate-700 text-sm">Not visited</span>
              </div>
            </div>
          </div>
          <div className="w-full mb-4">
              <div className="text-sm font-semibold bg-slate-700 text-center text-slate-200 p-2 rounded">
                {quizData[currentSubject]?.subject}
              </div>
              
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {quizData[currentSubject]?.questions.map((question, questionIndex) => {
                const status = getQuestionStatus(questionIndex);
                if (!filterQuestions(questionIndex)) return null;
                return (
                  <div 
                  key={questionIndex} 
                  className={`w-8 h-8 flex items-center justify-center transition-all cursor-pointer
                    ${questionIndex === currentQuestion ? 'ring-2 ring-slate-700' : ''} 
                    ${getButtonShape(status)}`}
                  onClick={() => onNavigateToQuestion(currentSubject, questionIndex)}
                >
                  <span
                    className={`w-full h-full flex items-center justify-center ${getButtonShape(status)} ${getButtonColor(status)}`}
                  >
                    {questionIndex + 1}
                  </span>
                </div>
                
                );
              })}
            </div>
          </div>
        </div>
    
      {!isSidebarOpen ? (
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="fixed right-2 top-1/2 transform -translate-y-1/2 bg-[#64748B] hover:bg-[#64748B] rounded-full shadow-md"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </Button>
      ) : (
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="fixed right-[20%] top-1/2 transform -translate-y-1/2 bg-[#64748B] hover:bg-[#64748B] rounded-full shadow-md"
        >
          <ChevronLeft className="w-4 h-4 text-white rotate-180" />
        </Button>
      )}
    </>
  );
};

export default QuizSidebar;