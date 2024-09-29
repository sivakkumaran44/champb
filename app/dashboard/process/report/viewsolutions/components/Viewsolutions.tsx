"use client";
import React, { useState } from 'react';
import QuizInterface from './QuizInterface';
import questionsData from '@/components/data/questionpaper.json';
import ViewsolutionsHeader from './ViewsolutionsHeader';
interface SelectedOptions {
  [key: string]: string;
}
const Viewsolutions: React.FC = () => {
  const testTitle = "SSC CGL Mock Test I (2024)";
  const [currentSubject, setCurrentSubject] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const handleOptionSelect = (value: string) => {
    const key = `${currentSubject}-${currentQuestion}`;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [key]: value, 
    }));
  };

  const handleSaveNext = () => {
    if (currentQuestion < questionsData[currentSubject].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSubject < questionsData.length - 1) {
      setCurrentSubject(currentSubject + 1);
      setCurrentQuestion(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSubject > 0) {
      const previousSubject = currentSubject - 1;
      const lastQuestionIndex = questionsData[previousSubject].questions.length - 1;
      setCurrentSubject(previousSubject);
      setCurrentQuestion(lastQuestionIndex);
    }
  };

  const handleClearResponse = () => {
    const key = `${currentSubject}-${currentQuestion}`;
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = { ...prevSelectedOptions };
      delete newSelectedOptions[key];
      return newSelectedOptions;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ViewsolutionsHeader testTitle={testTitle} />
      <QuizInterface
  initialSubject={currentSubject}
  initialQuestion={currentQuestion}
  selectedOption={selectedOptions[`${currentSubject}-${currentQuestion}`] || ''}
  onOptionSelect={handleOptionSelect}
  onPrevious={handlePrevious} 
  onSaveNext={handleSaveNext}
  onClearResponse={handleClearResponse}
/>

    </div>  
  );
};
export default Viewsolutions;
