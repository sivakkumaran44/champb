import React, { useState, useEffect, useCallback } from 'react';
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
  questionStatuses,
  quizData,
  toggleSidebar,
  onNavigateToQuestion,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const filterOptions = ['All', 'Correct', 'Incorrect', 'Not Visited'];
  const [filteredQuestions, setFilteredQuestions] = useState<number[]>([]);
  const [localCurrentQuestion, setLocalCurrentQuestion] = useState(currentQuestion);

  const updateFilteredQuestions = useCallback(() => {
    const totalQuestions = questionStatuses[currentSubject]?.length || 0;
    let newFilteredQuestions: number[] = [];

    switch (filter) {
      case 'Correct':
        newFilteredQuestions = Array.from({ length: 8 }, (_, i) => i);
        break;
      case 'Incorrect':
        newFilteredQuestions = Array.from({ length: 8 }, (_, i) => i + 8);
        break;
      case 'Not Visited':
        newFilteredQuestions = Array.from({ length: Math.max(0, totalQuestions - 16) }, (_, i) => i + 16);
        break;
      default: 
        newFilteredQuestions = Array.from({ length: totalQuestions }, (_, i) => i);
    }
    
    setFilteredQuestions(newFilteredQuestions);
  }, [filter, questionStatuses, currentSubject]);

  useEffect(() => {
    updateFilteredQuestions();
  }, [updateFilteredQuestions]);

  useEffect(() => {
    setLocalCurrentQuestion(currentQuestion);
  }, [currentQuestion]);

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const firstValidQuestion = filteredQuestions.includes(localCurrentQuestion) 
        ? localCurrentQuestion 
        : filteredQuestions[0];
      if (firstValidQuestion !== localCurrentQuestion) {
        setLocalCurrentQuestion(firstValidQuestion);
        onNavigateToQuestion(currentSubject, firstValidQuestion);
      }
    }
  }, [filter, currentSubject, filteredQuestions, onNavigateToQuestion, localCurrentQuestion]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFilterChange = (option: string) => {
    setFilter(option);
    setIsOpen(false);
  };

  const getButtonColor = (questionIndex: number) => {
    if (questionIndex < 8) return 'bg-green-500';
    if (questionIndex < 16) return 'bg-red-500';
    return 'bg-gray-300';
  };

  const getButtonShape = (questionIndex: number) => {
    if (questionIndex < 16) return 'rounded-full';
    return 'rounded-sm';
  };

  const handleQuestionClick = (questionIndex: number) => {
    if (filteredQuestions.includes(questionIndex) && questionIndex !== localCurrentQuestion) {
      setLocalCurrentQuestion(questionIndex);
      onNavigateToQuestion(currentSubject, questionIndex);
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
            {filteredQuestions.map((questionIndex) => (
              <div 
                key={questionIndex} 
                className={`w-8 h-8 flex items-center justify-center transition-all cursor-pointer
                  ${questionIndex === localCurrentQuestion ? 'ring-2 ring-slate-700' : ''} 
                  ${getButtonShape(questionIndex)}`}
                onClick={() => handleQuestionClick(questionIndex)}
              >
                <span
                  className={`w-full h-full flex items-center justify-center ${getButtonShape(questionIndex)} ${getButtonColor(questionIndex)}`}
                >
                  {questionIndex + 1}
                </span>
              </div>
            ))}
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
          className="fixed right-[19%] top-1/2 transform -translate-y-1/2 bg-[#64748B] hover:bg-[#64748B] rounded-full shadow-md"
        >
          <ChevronLeft className="w-4 h-4 text-white rotate-180" />
        </Button>
      )}
    </>
  );
};

export default QuizSidebar;
