import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut } from 'lucide-react';
import ReportQuestion from './ReportQuestion';
import FilterDialog from './FilterDialogComponents';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TestHeaderData from '@/components/data/testheader.json';

interface Subject {
  subject: string;
  testTitle: string;
}

interface QuizHeaderProps {
  quizData: Subject[];
  currentSubject: number;
  currentQuestion: number;
  timeElapsed: number;
  marks: { correct: number; incorrect: number };
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleResetFontSize: () => void;
  onSubjectChange: (subjectIndex: number) => void;
  setCurrentQuestion: (index: number) => void; 
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  quizData,
  currentSubject,
  currentQuestion,
  timeElapsed,
  marks,
  handleZoomIn,
  handleZoomOut,
  handleResetFontSize,
  setCurrentQuestion, // Destructure the new prop
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewAnalytics = () => {
    router.push('/dashboard/process/report');
  };

  const handleSubjectChange = (index: number) => {
    console.log(`Selected subject: ${quizData[index].subject}`);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getButtonColor = (questionIndex: number) => {
    if (questionIndex < 8) return 'bg-green-500';
    if (questionIndex < 16) return 'bg-red-500';
    return 'bg-slate-500 text-slate-950';
  };

  const getButtonShape = (questionIndex: number) => {
    if (questionIndex < 16) return 'rounded-full';
    return 'rounded-sm';
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestion(index); 
  };

  return (
    <div className="mb-2">
      {isMobile ? (
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex justify-between items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-1/2 bg-slate-700 text-white">
                  {quizData[currentSubject].subject}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-slate-700 text-white'>
                {quizData.map((subject, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleSubjectChange(index)}
                  >
                    {subject.subject}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              className="px-3 py-1 text-sm bg-slate-100 border border-gray-300 rounded-xl hover:bg-gray-50"
              onClick={handleViewAnalytics}
            >
              {TestHeaderData.buttons.viewAnalytics}
            </button>
          </div>
          <div className="w-full bg-slate-200 p-0 m-0 h-12 fixed left-0 z-8  relative flex items-center justify-between">
          <div className="w-full overflow-x-auto ml-2 flex items-center flex gap-2 items-center py-0 ">
            {Array.from({ length: 20 }, (_, index) => (
              <Button
                key={index}
                className={`${getButtonColor(index)} ${getButtonShape(index)} text-white`}
                onClick={() => handleQuestionClick(index)} 
              >
                {index + 1}
              </Button>
            ))}
          </div>
          <FilterDialog />
        </div>
    
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-slate-700">
              Question No. {currentQuestion + 1}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700 ml-1">Time: </span>
              <span className="text-sm font-medium text-slate-700">
                {formatTime(timeElapsed)}
              </span>
            </div>
            <ReportQuestion />
          </div>
        </div>
      ) : (
        <div className="hidden md:block overflow-y-auto custom-scrollbar mb-4">
          <div className="flex flex-nowrap gap-2 mb-1">
            {quizData.map((subject, index) => (
              <Button
                key={index}
                variant={index === currentSubject ? 'default' : 'ghost'}
                className={`text-xs bg-emerald-500 text-white hover:bg-emerald-500 sm:text-sm whitespace-nowrap flex items-center gap-2 ${
                  index === currentSubject
                    ? 'bg-gradient-to-r from-[#6EE7B7] via-[#A3E635] to-[#A3E635]'
                    : ''
                }`}
                onClick={() => handleSubjectChange(index)}
              >
                {subject.subject}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className={isMobile ? 'hidden' : 'bg-slate-100 p-2 rounded-lg flex items-center justify-between mb-8'}>
        <div className="text-sm font-semibold text-slate-700">
          Question No. {currentQuestion + 1}
        </div>
        <div className="flex items-center gap-8">
          <div className="text-sm text-slate-700">
            Time: {formatTime(timeElapsed)}
          </div>
          <div className="flex items-center text-slate-700 gap-1">
            Marks
            <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">+{marks.correct}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleZoomIn}>
              <ZoomIn className="w-6 h-6 text-slate-700" />
            </Button>
            <div className="text-slate-700 text-sm cursor-pointer underline" onClick={handleResetFontSize}>
              Reset
            </div>
            <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleZoomOut}>
              <ZoomOut className="w-6 h-6 text-slate-700" />
            </Button>
            <ReportQuestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
