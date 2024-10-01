import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
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

  return (
    <>
        <div className={`hidden lg:block ${isSidebarOpen ? 'lg:w-[20%]' : 'lg:hidden'} bg-[#F1F5F9] border border-[#D9D9D9] rounded-xl mb-2 p-4 h-full transition-all duration-300 relative`}>
  <div className="flex items-center gap-6 mb-4">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <span className="text-center text-slate-700">Student Name</span>
  </div>
  <div className="border-b border-[#64748B] w-full mb-2"></div>
  <div className="bg-slate-100 p-2 rounded-lg flex flex-col items-start mb-8">
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
                  <div className="w-6 h-6 bg-gray-300 border border-slate-700" />
                  <span className="text-slate-700 text-sm">Not visited</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                    <path d="M12 2 L22 22 L2 22 Z" fill="purple" />
                  </svg>
                  <span className="text-slate-700 text-sm">Marked for review</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                  <path d="M12 2 L22 22 L2 22 Z" fill="purple" stroke="purple" strokeWidth="2" />
                  <g transform="translate(12, 13)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10" 
                      viewBox="0 0 24 24"
                    >   
                      <g>
                        <circle cx="12" cy="12" r="10" fill="#4ade80" /> 
                        <text 
                          x="12" 
                          y="16" 
                          fontSize="16"
                          textAnchor="middle" 
                          fill="white" 
                          fontWeight="bold"
                        >
                          !
                        </text>
                      </g>
                    </svg>
                  </g>       
                </svg>
                <span className="text-slate-700 text-sm">Answered and Marked for Review</span>
              </div>
            </div>
          </div>
          <div className="text-sm font-semibold bg-slate-700 text-slate-200 mb-2 p-2 w-full rounded block">
          {quizData[currentSubject]?.subject || "N/A"}
        </div>
          <div className="flex flex-wrap gap-4 flex items-center justify-center">
          {quizData[currentSubject]?.questions.map((question: QuizQuestion, index: number) => {
            const status = questionStatuses[currentSubject]?.[index];
            const isCurrent = index === currentQuestion;
            return (
              <div 
                key={index} 
                className={`w-8 h-8 flex items-center justify-center transition-all cursor-pointer
                  ${isCurrent ? 'ring-1 ring-slate-700' : ''} 
                  ${status === 'not-visited' ? 'none' : 'rounded-full'}`}
                onClick={() => onNavigateToQuestion(currentSubject, index)}
              >
                {status === 'marked-for-review' || status === 'answered-and-marked' ? (
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <polygon points="12,2 22,22 2,22" fill="purple" />
                    {status === 'answered-and-marked' && (
                      <g transform="translate(12, 13)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10" 
                          viewBox="0 0 24 24"
                        >   
                          <g>
                            <circle cx="12" cy="12" r="10" fill="#4ade80" /> 
                            <text 
                              x="12" 
                              y="16" 
                              fontSize="16"
                              textAnchor="middle" 
                              fill="white" 
                              fontWeight="bold"
                            >
                              !
                            </text>
                          </g>
                        </svg>
                      </g>   
                    )}
                    <text 
                      x="50%" 
                      y="70%" 
                      textAnchor="middle" 
                      fill="white" 
                      fontSize="10px" 
                      fontWeight="normal"
                    >
                      {index + 1}
                    </text>
                  </svg>
                ) : (
                  <span
                    className={`w-full h-full flex items-center justify-center
                      ${status === 'not-visited' ? '' : 'rounded-full'}
                      ${getButtonColor(status)}`}
                  >
                    {index + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>   
      </div>  
      {!isSidebarOpen && (
  <Button
    onClick={toggleSidebar}
    variant="ghost"
    size="icon"
    className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#64748B] hover:bg-[#64748B] rounded-full shadow-md hidden lg:block"
  >
    <ChevronLeft className="w-6 h-6 text-white mr-4" /> 
  </Button>
)}
{isSidebarOpen && (
  <Button
    onClick={toggleSidebar}
    variant="ghost"
    size="icon"
    className="fixed right-[19%] top-1/2 transform -translate-y-1/2 bg-[#64748B] hover:bg-[#64748B] rounded-full shadow-md hidden lg:block"
  >
    <ChevronLeft className="w-6 h-6 text-white" /> 
  </Button>
)}

    </>
  );
};
export default QuizSidebar;
