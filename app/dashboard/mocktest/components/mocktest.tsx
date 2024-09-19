"use client"
import React from 'react';
import TestTypeNavigation from '@/app/dashboard/components/TestTypeNavigation';
import TestCard from "@/components/useclient/MockTestPageClient";
import { FileLock } from 'lucide-react';

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
  {
    id: "4",
    title: "SSC CGL Mock test IV (2024)",
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
          <div
            key={test.id}
            className="relative"
          >
            <div className={test.id === "4" ? "blur-[2px]" : ""}>
              <TestCard {...test} />
            </div>
            {test.id === "4" && (
              <div className="absolute inset-0 flex items-center justify-center mr-60 z-10">
                <FileLock size={92} className="text-slate-700 text-opacity-70 " />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTestPage;