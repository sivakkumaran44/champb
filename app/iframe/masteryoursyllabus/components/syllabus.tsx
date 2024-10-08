"use client";
import React, { useState, useEffect } from "react";
import GeneralIntelligence from "./GeneralIntelligence";
const SyllabusCoverage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="relative w-[260px]  pt-6 px-4 ">
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-sm p-4 sm:p-6 rounded-lg flex justify-center items-center">
        Syllabus Coverage
      </div>
      <div className="flex flex-col items-center mb-2 text-[8px] justify-center space-y-1">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
          Correct Answers in Covered Syllabus
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
          Incorrect Answers in Covered Syllabus
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-1"></div>
          Uncovered Syllabus
        </div>
      </div>
        {isMounted && (
        <>
          <GeneralIntelligence />
        </>
      )}
    </div>
  );
};
export default SyllabusCoverage;