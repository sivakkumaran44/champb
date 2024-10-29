import React from 'react';
import ExamStaticCard from './components/ExamStaticCard';
import ExamProjectorChart from './components/ExamProjectorChart';

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16"> {/* Adjust padding as needed */}
        <ExamProjectorChart/>
        <ExamStaticCard/>
    </div>
  );
}

export default page;
