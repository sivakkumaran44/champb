import React from 'react';
import successOddsImage from '@/app/img/Group_1197.webp'; 
import Image from 'next/image';

const SuccessOddsAnalyzer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
        <Image
          src={successOddsImage}
          alt="Success Odds Analysis"
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-8 p-20 ">
        <h3 className="scroll-m-20 text-2xl mb-6 text-emerald-500 font-semibold tracking-tight">
          Success Odds Analyzer
        </h3>
        <p className="text-lg text-gray-700">

          Gain valuable insights into your exam readiness with bChamp&apos;s predictive analytics. Our system assesses
          your performance data to estimate your selection probability, helping you focus your efforts where they
          matter most.
        </p>
      </div>
    </div>
  );
};

export default SuccessOddsAnalyzer;
