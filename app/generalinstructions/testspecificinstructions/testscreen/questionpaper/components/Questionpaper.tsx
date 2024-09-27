"use client"
import React from "react";
import { useRouter } from "next/navigation";
import questionsData from "@/components/data/questionpaper.json";
import SidebarLegend from "./SidebarLegend";
import { Button } from "@/components/ui/button";
import FilterDialog from "./FilterDialog"; 

const QuestionPaper = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/generalinstructions/testspecificinstructions/testscreen");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] pt-[92px] p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg md:text-2xl font-bold flex-grow text-center md:text-left">
          Question Paper
        </h1>
        <div className="flex items-center">
          <Button
            onClick={handleGoBack}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg mr-2 md:hidden"
          >
            Back to Test
          </Button>
          <FilterDialog /> 
        </div>
      </div>
      <div className="flex flex-row h-full">
        <div className="w-full md:w-3/4 pr-4 overflow-y-auto custom-scrollbar">
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
        </div>
        <div className="hidden md:block w-1/4 bg-white overflow-y-auto custom-scrollbar">
          <SidebarLegend />
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;
