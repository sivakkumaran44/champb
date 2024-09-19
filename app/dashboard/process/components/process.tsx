import React from 'react';
import { CheckCircle, XCircle, MinusCircle, PenSquare, Eye } from 'lucide-react';

const TestProgress = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-6 bg-white p-4 rounded-lg shadow">
        Test Progress
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">SSC CGL Tier I Mock Test (2024)</h2>
          <span className="text-3xl font-bold text-gray-700">55 %</span>
        </div>
        
        <p className="text-gray-600 mb-4">
          Test includes questions similar to those found in the actual SSC CGL exam, covering various sections such as
          General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-gray-700">55 Correct</span>
          </div>
          <div className="flex items-center">
            <XCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-gray-700">22 Wrong</span>
          </div>
          <div className="flex items-center">
            <MinusCircle className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700">23 Skipped</span>
          </div>
          <div className="flex items-center">
            <PenSquare className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-gray-700">Attempt (2)</span>
          </div>
        </div>
        
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-emerald-700 transition duration-300">
          <Eye className="w-5 h-5 mr-2" />
          View Detailed Report
        </button>
      </div>
    </div>
  );
};

export default TestProgress;