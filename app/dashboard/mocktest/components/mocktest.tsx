"use client"
import React from 'react';
import TestTypeNavigation from '@/app/dashboard/components/TestTypeNavigation';
import TestCard from "@/components/useclient/MockTestPageClient";
interface TestInfo {
  id: string;
  title: string;
  description: string;
  duration: number;
  questions: number;
  isFree: boolean;
}
const tests: TestInfo[] = [
  {
    id: "1",
    title: "SSC CGL Mock test I (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam...",
    duration: 60,
    questions: 100,
    isFree: true,
  },
  {
    id: "2",
    title: "SSC CGL Mock test II (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam...",
    duration: 60,
    questions: 100,
    isFree: true,
  },
  {
    id: "3",
    title: "SSC CGL Mock test III (2024)",
    description: "Test includes questions similar to those found in the actual SSC CGL exam...",
    duration: 60,
    questions: 100,
    isFree: true,
  },
];

const MockTestPage: React.FC = () => {
 
  return (
    <div className="container mx-auto p-4">
      <TestTypeNavigation />
      <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-6">
        {tests.map((test) => (
          <TestCard key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
};

export default MockTestPage;