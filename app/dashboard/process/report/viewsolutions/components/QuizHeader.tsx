import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, Clock } from 'lucide-react';
import ReportQuestion from './ReportQuestion';

interface Subject {
  subject: string;
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
  onSubjectChange,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  const handleSubjectClick = (index: number) => {
    onSubjectChange(index);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="mb-2">
      {isMobile ? (
        <div className="flex justify-between items-center gap-1 mb-4">
          <select
            onChange={(e) => onSubjectChange(Number(e.target.value))}
            className="text-xs sm:text-sm bg-slate-100 p-2 rounded-lg w-1/2"
            value={currentSubject}
          >
            {quizData.map((subject, index) => (
              <option key={index} value={index}>
                {subject.subject}
              </option>
            ))}
          </select>
          <div className="flex items-center space-x-2 bg-slate-200 px-3 py-1 rounded-md justify-end">
            <Clock size={16} className="text-slate-700" />
            <span className="text-sm font-medium text-slate-700">
              Time Left: {formatTime(timeElapsed)}
            </span>
          </div>
        </div>
      ) : (
        <div className="hidden md:block overflow-y-auto custom-scrollbar mb-4">
          <div className="flex flex-nowrap gap-2 mb-1">
            {quizData.map((subject, index) => (
              <Button
                key={index}
                variant={index === currentSubject ? 'default' : 'ghost'}
                className={`text-xs bg-emerald-500 text-white hover:bg-emerald-500 sm:text-sm whitespace-nowrap flex items-center gap-2 ${index === currentSubject ? 'bg-gradient-to-r from-[#6EE7B7] via-[#A3E635] to-[#A3E635]' : ''}`}
                onClick={() => handleSubjectClick(index)}
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