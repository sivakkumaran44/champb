"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type TestType = 'Test Progress' | 'Syllabus Coverage' | 'Exam Selection Progress';

interface TestTypeContextType {
  activeTestType: TestType;
  setActiveTestType: (type: TestType) => void;
}

const TestTypeContext = createContext<TestTypeContextType | undefined>(undefined);

export const TestTypeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTestType, setActiveTestType] = useState<TestType>('Test Progress');

  return (
    <TestTypeContext.Provider value={{ activeTestType, setActiveTestType }}>
      {children}
    </TestTypeContext.Provider>
  );
};

export const useTestType = () => {
  const context = useContext(TestTypeContext);
  if (context === undefined) {
    throw new Error('useTestType must be used within a TestTypeProvider');
  }
  return context;
};