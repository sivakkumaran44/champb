"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type TestType = 'All' | 'Practice Test' | 'Previous Year Question Test' | 'Mock Test' | 'Custom Test';

interface TestTypeContextType {
  activeTestType: TestType;
  setActiveTestType: (type: TestType) => void;
}

const TestTypeContext = createContext<TestTypeContextType | undefined>(undefined);

export const TestTypeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTestType, setActiveTestType] = useState<TestType>('All');

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
