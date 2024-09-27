import React from 'react';
import { Button } from '@/components/ui/button';
import { Lock, ZoomIn, ZoomOut } from 'lucide-react';
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
}) => {
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div className="flex flex-nowrap overflow-y-auto custom-scrollbar  gap-2 mb-4">
        {quizData.map((subject, index) => (
          <Button
            key={index}
            variant={index === currentSubject ? "default" : "ghost"}
            className={`text-xs bg-emerald-500 text-white hover:bg-emerald-500 sm:text-sm whitespace-nowrap flex items-center gap-2 ${
              index === currentSubject 
              ? "bg-gradient-to-r from-[#6EE7B7] via-[#A3E635] to-[#A3E635]" 
              : ""
            
            }`}
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
            Time {formatTime(timeElapsed)}
          </div>
          <div className="flex items-center text-slate-700 gap-1">
            Marks
            <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">+{marks.correct}</span>
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">{marks.incorrect}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="w-6 h-6"  onClick={handleZoomIn}>
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
    </>
  );
};

export default QuizHeader;