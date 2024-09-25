"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 
import questionsData from '@/components/data/questionpaper.json'; 
import SidebarLegend from './SidebarLegend'; 

const QuestionPaper = () => {
  const router = useRouter(); 

  return (
    <div className="flex flex-row min-h-screen p-4 mt-28">
      <div className="w-3/4 p-4 relative">
        <h1 className="text-2xl font-bold mb-4">Question Paper</h1>
        {questionsData.map((subject, subjectIndex) => (
          <div key={subjectIndex} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{subject.subject}</h2>
            <ol className="list-decimal pl-8">
              {subject.questions.map((question, questionIndex) => (
                <li key={questionIndex} className="mb-2">
                  {question.question}
                </li>
              ))}
            </ol>
          </div>
        ))}

        <button 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-900"
          onClick={() => router.back()} 
        >
          Back to Test
        </button>
      </div>

      <div className="w-1/4 p-4 bg-white">
        <SidebarLegend /> 
      </div>
    </div>
  );
};

export default QuestionPaper;
