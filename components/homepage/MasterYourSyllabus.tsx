import React from 'react';
import syllabusImage from '@/public/assets/img/Feature 1.svg'; 
import Image from 'next/image';

const MasterYourSyllabus = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-white">
      
      <div className="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0">
        <h3 className="scroll-m-20 text-2xl mb-6 text-emerald-500 font-semibold tracking-tight">
          Master Your Syllabus
        </h3>
        <p className="text-lg font-normal text-gray-900 mb-6">
          Stay on top of your exam preparation with our comprehensive syllabus tracking feature. bChamp
          helps you monitor your progress through each topic and subject, ensuring you cover all aspects of the
          exam syllabus effectively.
        </p>
      </div>
      
    
      <div className="w-full md:w-1/2 mb-8 md:mb-4">
        <Image
          src={syllabusImage}
          alt="Master Your Syllabus"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
      
    </div>
  );
};

export default MasterYourSyllabus;
