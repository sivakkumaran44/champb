"use client";
import React, { useState, useEffect } from "react";
import GeneralIntelligence from "./GeneralIntelligence";

const SyllabusCoverage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full max-w-5xl px-4 sm:px-0">
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-lg sm:text-xl p-4 sm:p-6 rounded-lg flex justify-center items-center">
        Syllabus Coverage
      </div>
      <div className="flex flex-col sm:hidden items-center mb-4 text-xs sm:text-sm justify-center space-y-4">
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-2"></div>
          Correct Answers in Covered Syllabus
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full mr-2"></div>
          Incorrect Answers in Covered Syllabus
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mr-2"></div>
          Uncovered Syllabus
        </div>
      </div>
      <div className="hidden sm:flex items-center mb-4 text-xs sm:text-sm justify-center">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-2"></div>
          Correct Answers in Covered Syllabus
        </div>
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full mr-2"></div>
          Incorrect Answers in Covered Syllabus
        </div>
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mr-2"></div>
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