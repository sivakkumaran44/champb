"use client"
import React, { useState, useRef, useEffect } from 'react';
import CircularProgress from './CircularProgress';
import FlowChart from './FlowChart';
import SubFlowChart from './SubFlowChart';
const SyllabusCoverage = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedSubsection, setSelectedSubsection] = useState<number | null>(null);
  const [lineStart, setLineStart] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sections = [
    { name: 'General Intelligence and Reasoning', value: 36 },
    { name: 'General Awareness', value: 54 },
    { name: 'Quantitative Aptitude', value: 28 },
    { name: 'English Comprehension', value: 74 },
  ];
useEffect(() => {
    if (selectedSection !== null && sectionRefs.current[selectedSection]) {
      const rect = sectionRefs.current[selectedSection]?.getBoundingClientRect();
      const parentRect = sectionRefs.current[selectedSection]?.parentElement?.getBoundingClientRect();
      if (rect && parentRect) {
        setLineStart(rect.top - parentRect.top + rect.height / 2);
      }
    }
  }, [selectedSection]);
  const handleSectionClick = (index: number) => {
    setSelectedSection(selectedSection === index ? null : index);
    setSelectedSubsection(null);
  };
  return (
    <div className="relative w-full max-w-5xl px-4 sm:px-0">
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-lg sm:text-xl p-4 sm:p-6 rounded-lg flex justify-center items-center">
        Syllabus Coverage
      </div>
      <div className="flex items-center mb-4 text-xs sm:text-sm justify-center">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mr-2"></div>
          Uncovered Syllabus
        </div>
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-2"></div>
          Correct Answers in Covered Syllabus
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full mr-2"></div>
          Incorrect Answers in Covered Syllabus
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className={`transition-all duration-300 ${selectedSection === null ? 'w-full' : 'w-1/4'} space-y-8 flex flex-col items-center`}>
          {sections.map((section, index) => (
            <div 
              key={index} 
              ref={(el) => { sectionRefs.current[index] = el; }}
              className={`bg-slate-100 border-custombroder p-4 rounded-lg transition-all duration-300 w-48 h-48 flex flex-col justify-center items-center ${
                selectedSection === index ? 'scale-105' : ''
              } ${selectedSection !== null && selectedSection !== index ? 'opacity-50' : ''}`}
            >
              <CircularProgress
                percentage={section.value}
                onClick={() => handleSectionClick(index)}
                isSelected={selectedSection === index}
                isDisabled={selectedSection !== null && selectedSection !== index}
              />
              <div className="text-center mt-2 text-sm">{section.name}</div>
            </div>
          ))}
        </div>
        <div className={`transition-all duration-300 ${selectedSection === null ? 'w-0' : 'lg:w-3/4'} pl-8 relative flex flex-col lg:flex-row`}>
          {selectedSection !== null && (
            <>
              <svg className="absolute right-8 top-0 w-full h-full pointer-events-none">
                <line
                  x1="0"
                  y1={lineStart}
                  x2="15%"
                  y2={lineStart}
                  stroke="#CBD5E0"
                  strokeWidth="2"
                />
              </svg>
              <div className={`transition-all duration-300 ${selectedSubsection === null ? 'w-full' : 'lg:w-2/3'} mb-4 lg:mb-0`}>
              <FlowChart
  selectedSection={selectedSection}
  selectedSubsection={selectedSubsection}
  setSelectedSubsection={setSelectedSubsection}
  lineStart={lineStart}
/>

              </div>
              <div className={`transition-all duration-300 ${selectedSubsection === null ? 'w-0' : 'lg:w-1/3'} lg:pl-4`}>
                <SubFlowChart selectedSubsection={selectedSubsection !== null ? selectedSubsection.toString() : null} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default SyllabusCoverage;