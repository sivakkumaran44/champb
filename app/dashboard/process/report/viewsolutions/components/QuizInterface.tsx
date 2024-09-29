/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import quizData from '@/components/data/questionpaper.json';
import QuizHeader from './QuizHeader';
import QuizSidebar from './QuizSidebar';
import ViewSolutionsFooter from './ViewSolutionsFooter';
import ViewSolutionsQuestion from './Viewsolutionsquestion';

interface QuizInterfaceProps {
  initialSubject: number;
  initialQuestion: number;
  selectedOption: string; 
  onOptionSelect: (value: string) => void;
  onPrevious: () => void;
  onSaveNext: () => void;
  onClearResponse: () => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({
  initialSubject,
  initialQuestion,
  onSaveNext,
}) => {
  const [fontSize, setFontSize] = useState(16);
  const [questionStatuses, setQuestionStatuses] = useState<string[][]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [marks] = useState({ correct: 2, incorrect: -0.5 });
  const [answers, setAnswers] = useState<string[][]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSubject, setCurrentSubject] = useState(initialSubject);
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [selectedOption, setSelectedOption] = useState('');
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSubject > 0) {
       const previousSubject = currentSubject - 1;
      const lastQuestionIndex = quizData[previousSubject].questions.length - 1;
      setCurrentSubject(previousSubject);
      setCurrentQuestion(lastQuestionIndex);
    }
  };
  
  const updateQuestionStatus = (subjectIndex: number, questionIndex: number, status: string) => {
    setQuestionStatuses(prevStatuses => {
      const newStatuses = [...prevStatuses];
      newStatuses[subjectIndex][questionIndex] = status;
      return newStatuses;
    });
  };
  
  
  const handleSaveNext = () => {
    if (selectedOption) {
      updateQuestionStatus(currentSubject, currentQuestion, 'answered');
      setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers];
        newAnswers[currentSubject][currentQuestion] = selectedOption;
        return newAnswers;
      });
    } else if (questionStatuses[currentSubject][currentQuestion] === 'not-visited') {
      updateQuestionStatus(currentSubject, currentQuestion, 'not-answered');
    }
    setSelectedOption('');
    onSaveNext();
    navigateToNextQuestion();
  };

  const navigateToNextQuestion = () => {
    if (currentQuestion < quizData[currentSubject].questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else if (currentSubject < quizData.length - 1) {
      setCurrentSubject(prevSubject => prevSubject + 1);
      setCurrentQuestion(0);
    }
  };

  const handleSubjectChange = (newSubjectIndex: number) => {
    setCurrentSubject(newSubjectIndex);
    setCurrentQuestion(0); 
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex w-full flex-grow p-4 pb-20">
        <div className={`${isSidebarOpen ? 'w-[80%]' : 'w-[100%]'} p-4 transition-all duration-300`}>
        <QuizHeader
            quizData={quizData}
            currentSubject={currentSubject}
            currentQuestion={currentQuestion}
            timeElapsed={timeElapsed}
            marks={marks}
            handleZoomIn={() => setFontSize(prev => Math.min(32, prev + 2))}
            handleZoomOut={() => setFontSize(prev => Math.max(12, prev - 2))}
            handleResetFontSize={() => setFontSize(16)}
            onSubjectChange={handleSubjectChange}
          />
          <ViewSolutionsQuestion
            question={quizData[currentSubject]?.questions[currentQuestion] || undefined}
            fontSize={fontSize}
            currentQuestionIndex={currentQuestion}
          />
        </div>
        <QuizSidebar
          isSidebarOpen={isSidebarOpen}
          currentSubject={currentSubject}
          currentQuestion={currentQuestion}
          questionStatuses={questionStatuses}
          quizData={quizData}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onNavigateToQuestion={(subjectIndex, questionIndex) => {
            setCurrentSubject(subjectIndex);
            setCurrentQuestion(questionIndex);
          }}
        />
      </div>
      <ViewSolutionsFooter
        handlePrevious={handlePrevious}
        handleSaveNext={handleSaveNext}
      />
    </div>
  );
};

export default QuizInterface;