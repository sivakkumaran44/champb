import React from 'react';
import ExamStaticCard from './components/ExamStaticCard';
import ExamProjectorChart from './components/ExamProjectorChart';
import ExamPercentageBar from './components/ExamPercentageBar';

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-8"> 
    <ExamPercentageBar/>
        <ExamProjectorChart/>
        <ExamStaticCard/>
    </div>
  );
}

export default page;
