import React from 'react';
import syllabusImage from '@/app/img/Group_155.webp'; 
import Image from 'next/image';
const MasterYourSyllabus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-20 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-8">
        <h3 className="scroll-m-20 text-2xl mb-6 text-emerald-500 font-semibold tracking-tight">
          Master Your Syllabus
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Stay on top of your exam preparation with our comprehensive syllabus tracking feature. bChamp
          helps you monitor your progress through each topic and subject, ensuring you cover all aspects of the
          exam syllabus effectively.
        </p>
      </div>
      
      <div className="w-full md:w-1/2 relative">
        <Image
          src={syllabusImage}
          alt="Master Your Syllabus"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default MasterYourSyllabus;
