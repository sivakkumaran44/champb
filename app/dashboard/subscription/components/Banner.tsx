import React from 'react';
import { Button } from "@/components/ui/button";
import SSCLogo from '@/public/assets/img/Banner.png'; 
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-6 rounded-lg bg-gradient-to-b from-yellow-200/70 to-yellow-400/70 space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <p className="text-sm md:text-lg text-slate-700">Start Achieving your goal</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700">SSC CGL</h2>
        <Button className="w-full md:w-40 bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center">
      BUY NOW
      <ArrowRight className="ml-2"/> 
    </Button>
        <ul className="list-disc list-inside text-xs md:text-sm text-slate-700 space-y-1">
          <li>Full syllabus coverage for all SSC CGL Tiers (I, II, III, and IV)</li>
          <li>50+ full-length mock tests</li>
          <li>10,000+ practice questions</li>
        </ul>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto">
        <Image 
          src={SSCLogo} 
          alt="SSC Logo" 
          className="w-full h-auto md:w-88 md:h-60"
        />
      </div>
    </div>
  );
};

export default Banner;
