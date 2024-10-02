import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock, ZoomIn, ZoomOut, Hourglass } from 'lucide-react';
import ReportQuestion from './ReportQuestion';
import SubjectDropdown from './SubjectDropDown';
import QuestionButton from './QuestionButton';
import FilterDialog from './FilterDialogComponent';
interface QuizHeaderProps {
  quizData: Subject[];
  currentSubject: number;
  currentQuestion: number;
  timeElapsed: number;
  marks: { correct: number; incorrect: number };
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleResetFontSize: () => void;
  onNavigateToQuestion: (subjectIndex: number, questionIndex: number) => void;
  questionStatuses: string[][];
  unlockedSubjects: number[];
}
interface QuizQuestion {
  id: number;
  questionText: string;
  
}
interface Subject {
  subject: string;
  currentSubject: number;
  questions: QuizQuestion[]; 
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
  onNavigateToQuestion,
  questionStatuses,
  unlockedSubjects,
}) => {
  const totalTime = 3600; 
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(totalTime);

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
        return 'bg-slate-400';
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileOrTablet(window.innerWidth < 1024);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubjectChange = (index: number) => {
    if (unlockedSubjects.includes(index)) {
      onNavigateToQuestion(index, 0);
    } else {
      console.log("This subject is locked. Complete the current subject to unlock it.");
    }
  };

  const handleQuestionNavigation = (questionIndex: number) => {
    onNavigateToQuestion(currentSubject, questionIndex);
  };


  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="mt-0 mb-4">
      {isMobileOrTablet ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-1">
            <SubjectDropdown
              quizData={quizData}
              currentSubject={currentSubject}
              handleSubjectChange={handleSubjectChange}
              
            />
            <div className="flex-grow text-center">
              <Hourglass size={16} className="inline-block text-slate-700 mr-1" />
              <span className="text-sm font-medium text-slate-700 ml-1">Time Left:</span>
              <span className="text-sm font-medium text-slate-700">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-200 p-0 m-0 h-12 fixed left-0 right-0 z-8  relative flex items-center justify-between mt-4">
              <div className="w-full overflow-x-auto ml-2 flex items-center flex gap-2 items-center py-0 ">
                {quizData[currentSubject]?.questions.map((question, index) => (
                  <QuestionButton
                    key={index}
                    index={index}
                    status={questionStatuses[currentSubject]?.[index] || 'not-visited'}
                    isCurrent={index === currentQuestion}
                    onNavigateToQuestion={handleQuestionNavigation}
                    getButtonColor={getButtonColor}
                  />
                ))}
              </div>
              <FilterDialog/>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-slate-700">
              Question No. {currentQuestion + 1}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700 ml-1">Time:</span>
              <span className="text-sm font-medium text-slate-700">
                {formatTime(timeElapsed)}
              </span>
            </div>
            <ReportQuestion />
          </div>

        </div>
      ) : (
        <div className="hidden lg:block mb-4">
          <div className="flex flex-nowrap gap-2 mb-1">
            {quizData.map((subject, index) => (
              <Button
                key={index}
                variant={index === currentSubject ? 'default' : 'ghost'}
                className={`text-xs bg-emerald-500 text-white hover:bg-emerald-500 sm:text-sm whitespace-nowrap flex items-center gap-2 ${
                  index === currentSubject ? 'bg-gradient-to-r from-[#6EE7B7] via-[#A3E635] to-[#A3E635]' : ''
                } ${!unlockedSubjects.includes(index) ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleSubjectChange(index)}
                disabled={!unlockedSubjects.includes(index)}
              >
                {subject.subject}
                {!unlockedSubjects.includes(index) && <Lock className="w-4 h-4 text-white" />}
              </Button>
            ))}
          </div>
          <div className="bg-slate-100 p-2 rounded-lg flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="text-sm font-semibold text-slate-700">
              Question No. {currentQuestion + 1}
            </div>
            <div className="flex items-center gap-8">
              <div className="text-sm text-slate-700">Time: {formatTime(timeElapsed)}</div>
              <div className="flex items-center text-slate-700 gap-1">
                Marks
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
                  +{marks.correct}
                </span>
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                  {marks.incorrect}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleZoomIn}>
                  <ZoomIn className="w-6 h-6 text-slate-700" />
                </Button>
                <div
                  className="text-slate-700 text-sm cursor-pointer underline"
                  onClick={handleResetFontSize}
                >
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
      )}
    </div>
  );
};

export default QuizHeader;
