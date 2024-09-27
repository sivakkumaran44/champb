"use client";
import React from "react";
import questionsData from "@/components/data/questionpaper.json";
import SidebarLegend from "./SidebarLegend";

const QuestionPaper = () => {
  return (
    <div className="flex flex-row h-[calc(100vh-60px)] pt-[92px] p-8">
      <div className="w-3/4 pr-4 overflow-y-auto custom-scrollbar">
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
      </div>
      <div className="w-1/4 bg-white overflow-y-auto custom-scrollbar">
        <SidebarLegend />
      </div>
    </div>
  );
};

export default QuestionPaper;