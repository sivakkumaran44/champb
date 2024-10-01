"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {  CircleArrowLeft  } from 'lucide-react';
const Testspecific = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleBackToTest = () => {
    router.push('/generalinstructions/testspecificinstructions/testscreen'); 
  };

  return (
    <div className="flex flex-col min-h-screen p-8 ">
      <h2 className="text-2xl text-slate-800 font-bold mb-6">Other Important Instructions</h2>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Exam Structure and Duration:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Total Duration: 60 minutes</li>
          <li>Number of Questions: 100</li>
          <li>
            Sections:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>General Intelligence & Reasoning (25 questions)</li>
              <li>General Awareness (25 questions)</li>
              <li>Quantitative Aptitude (25 questions)</li>
              <li>English Comprehension (25 questions)</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Marking Scheme:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Correct Answer: +2 marks</li>
          <li>Incorrect Answer: -0.5 marks (Negative marking)</li>
          <li>Unattempted Question: 0 marks</li>
        </ol>
      </div>
<div  className="flex space-x-16">
<Button 
          variant="outline" 
          className="bg-cyan-100 text-slate-700 hover:bg-cyan-200 border border-slate-800 mb-4 md:mb-0"
          onClick={handleGoBack}
        >
          < CircleArrowLeft  size={14} className="mr-1" /> 
          Previous
        </Button>

        <Button 
          variant="outline" 
          className="bg-slate-700 text-white hover:bg-slate-800 border border-slate-600"
          onClick={handleBackToTest}
        >
          Back to Test
        </Button>
      </div>
    </div>
  );
};

export default Testspecific;