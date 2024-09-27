import React, { useState, useEffect } from 'react';
import quizData from '@/components/data/questionpaper.json';
import TestQuestion from './TestQuestion';
import QuizHeader from './QuizHeader';
import QuizSidebar from './QuizSidebar';
import QuizFooter from './QuizFooter';
import SubmitDialog from './SubmitDialog';

interface QuizInterfaceProps {
  currentSubject: number;
  currentQuestion: number;
  selectedOption: string;
  onOptionSelect: (value: string) => void;
  onPrevious: () => void;
  onSaveNext: () => void;
  onClearResponse: () => void;
  id?: number;
  text?: string;
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
  const [questionStatuses, setQuestionStatuses] = useState<string[][]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [marks] = useState({ correct: 2, incorrect: -0.5 });
  const [answers, setAnswers] = useState<string[][]>([]);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [questionSummary, setQuestionSummary] = useState({
    answered: 0,
    notAnswered: 0,
    markedForReview: 0,
    notVisited: 0,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentQuestionState, setCurrentQuestionState] = useState(currentQuestion);
  const [currentSubjectState, setCurrentSubjectState] = useState(currentSubject);

  useEffect(() => {
    const initialStatuses = quizData.map(subject =>
      new Array(subject.questions.length).fill('not-visited')
    );
    setQuestionStatuses(initialStatuses);
    const initialAnswers = quizData.map(subject =>
      new Array(subject.questions.length).fill('')
    );
    setAnswers(initialAnswers);
  }, []);

  const handleZoomIn = () => setFontSize(prev => Math.min(32, prev + 2));
  const handleZoomOut = () => setFontSize(prev => Math.max(12, prev - 2));
  const handleResetFontSize = () => setFontSize(16);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateQuestionStatus = (subjectIndex: number, questionIndex: number, status: string) => {
    const newStatuses = [...questionStatuses];
    newStatuses[subjectIndex][questionIndex] = status;
    setQuestionStatuses(newStatuses);
  };

  const handleSaveNext = () => {
    if (selectedOption) {
      updateQuestionStatus(currentSubject, currentQuestion, 'answered');
      const newAnswers = [...answers];
      newAnswers[currentSubject][currentQuestion] = selectedOption;
      setAnswers(newAnswers);
    } else {
      updateQuestionStatus(currentSubject, currentQuestion, 'not-answered');
    }
    onSaveNext();
  };

  const handleMarkForReview = () => {
    if (selectedOption) {
      updateQuestionStatus(currentSubject, currentQuestion, 'answered-and-marked');
      const newAnswers = [...answers];
      newAnswers[currentSubject][currentQuestion] = selectedOption;
      setAnswers(newAnswers);
    } else {
      updateQuestionStatus(currentSubject, currentQuestion, 'marked-for-review');
    }
    onSaveNext();
  };

  const calculateQuestionSummary = () => {
    const summary = {
      answered: 0,
      notAnswered: 0,
      markedForReview: 0,
      notVisited: 0,
    };

    questionStatuses.forEach(subject => {
      subject.forEach(status => {
        switch (status) {
          case 'answered':
            summary.answered++;
            break;
          case 'not-answered':
            summary.notAnswered++;
            break;
          case 'marked-for-review':
          case 'answered-and-marked':
            summary.markedForReview++;
            break;
          case 'not-visited':
            summary.notVisited++;
            break;
        }
      });
    });

    setQuestionSummary(summary);
  };

  const handleSubmitTest = () => {
    calculateQuestionSummary();
    setIsSubmitDialogOpen(true);
  };

  const handleConfirmSubmit = () => {
    console.log('Test submitted');
    setIsSubmitDialogOpen(false);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleNavigateToQuestion = (subjectIndex: number, questionIndex: number) => {
    setCurrentSubjectState(subjectIndex);
    setCurrentQuestionState(questionIndex);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex w-full flex-grow p-4 pb-20">
        <div className={`${isSidebarOpen ? 'w-[80%]' : 'w-[100%]'} p-4 transition-all duration-300`}>
          <QuizHeader
            quizData={quizData}
            currentSubject={currentSubjectState}
            currentQuestion={currentQuestionState}
            timeElapsed={timeElapsed}
            marks={marks}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            handleResetFontSize={handleResetFontSize}
          />
          <TestQuestion
            question={quizData[currentSubjectState]?.questions[currentQuestionState]}
            selectedOption={selectedOption}
            onOptionSelect={onOptionSelect}
            fontSize={fontSize}
          />
        </div>
        <QuizSidebar
          isSidebarOpen={isSidebarOpen}
          currentSubject={currentSubjectState}
          currentQuestion={currentQuestionState}
          questionStatuses={questionStatuses}
          quizData={quizData}
          toggleSidebar={toggleSidebar}
          onNavigateToQuestion={handleNavigateToQuestion}
        />
      </div>
      <QuizFooter
        onPrevious={onPrevious}
        onClearResponse={onClearResponse}
        handleMarkForReview={handleMarkForReview}
        handleSaveNext={handleSaveNext}
        handleSubmitTest={handleSubmitTest}
      />
      <SubmitDialog
        isOpen={isSubmitDialogOpen}
        onOpenChange={setIsSubmitDialogOpen}
        questionSummary={questionSummary}
        handleConfirmSubmit={handleConfirmSubmit}
      />
    </div>
  );
};

export default QuizInterface;