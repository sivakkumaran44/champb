"use client";
import React, { useState } from 'react';

// Define types for CircularProgress props
interface CircularProgressProps {
  percentage: number;
  onClick: () => void;
  isSelected: boolean;
  isDisabled: boolean;
}

const SyllabusCoverage = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedSubsection, setSelectedSubsection] = useState<number | null>(null);

  const sections = [
    { name: 'General Intelligence and Reasoning', value: 36 },
    { name: 'General Awareness', value: 54 },
    { name: 'Quantitative Aptitude', value: 28 },
    { name: 'English Comprehension', value: 74 },
  ];

  // Add the props interface to CircularProgress
  const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, onClick, isSelected, isDisabled }) => {
    const radius = 50;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div
        className={`relative w-32 h-32 mx-auto cursor-pointer transition-all duration-300 ${
          isSelected ? 'ring-2 ring-blue-500' : ''
        } ${isDisabled ? 'opacity-50' : ''}`}
        onClick={onClick}
      >
        <svg height="100%" width="100%" viewBox="0 0 100 100">
          <circle
            stroke="#E0E0E0"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="50"
            cy="50"
          />
          <circle
            stroke="#00C49F"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            r={normalizedRadius}
            cx="50"
            cy="50"
          />
          <circle
            stroke="#FF8042"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={(circumference * 0.1) + ' ' + circumference}
            style={{ strokeDashoffset: circumference - (percentage / 100) * circumference * 0.9, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            r={normalizedRadius}
            cx="50"
            cy="50"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          {percentage}%
        </div>
      </div>
    );
  };

  const renderFlowChart = () => {
    if (selectedSection === null) return null;

    return (
      <div className="space-y-2">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-px bg-gray-300"></div>
            <div
              className={`flex-grow p-2 rounded-md ${
                selectedSubsection === index ? 'bg-blue-100 h-12' : 'bg-green-100 h-10'
              } cursor-pointer transition-all duration-300 ${
                selectedSubsection !== null && selectedSubsection !== index ? 'opacity-50' : ''
              }`}
              onClick={() => setSelectedSubsection(selectedSubsection === index ? null : index)}
            >
              Lorem ipsum dolor
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSubFlowChart = () => {
    if (selectedSubsection === null) return null;

    return (
      <div className="space-y-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-px bg-gray-300"></div>
            <div className="flex-grow p-2 rounded-md bg-green-100 h-10">
              Lorem ipsum dolor
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-5xl">
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-xl p-6 rounded-lg flex justify-center items-center cursor-pointer">
        Syllabus Coverage
      </div>
      <div className="flex items-center mb-4 text-sm justify-center">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
          Uncovered Syllabus
        </div>
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          Correct Answers in Covered Syllabus
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
          Incorrect Answers in Covered Syllabus
        </div>
      </div>
      <div className="flex">
        <div className={`transition-all duration-300 ${selectedSection === null ? 'w-full' : 'w-1/4'} space-y-8`}>
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 p-4 rounded-lg transition-all duration-300 ${
                selectedSection === index ? 'ring-2 ring-blue-500' : ''
              } ${selectedSection !== null && selectedSection !== index ? 'opacity-50 scale-95' : ''}`}
            >
              <CircularProgress
                percentage={section.value}
                onClick={() => {
                  setSelectedSection(selectedSection === index ? null : index);
                  setSelectedSubsection(null);
                }}
                isSelected={selectedSection === index}
                isDisabled={selectedSection !== null && selectedSection !== index}
              />
              <div className="text-center mt-2 text-sm">{section.name}</div>
            </div>
          ))}
        </div>
        <div className={`transition-all duration-300 ${selectedSection === null ? 'w-0' : selectedSubsection === null ? 'w-3/4' : 'w-1/2'} pl-8`}>
          {selectedSection !== null && (
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
              {renderFlowChart()}
            </div>
          )}
        </div>
        <div className={`transition-all duration-300 ${selectedSubsection === null ? 'w-0' : 'w-1/4'} pl-8`}>
          {renderSubFlowChart()}
        </div>
      </div>
    </div>
  );
};

export default SyllabusCoverage;
