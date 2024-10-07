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
    

      {isMounted && (
        <>
          <GeneralIntelligence />
        </>
      )}
    </div>
  );
};

export default SyllabusCoverage;