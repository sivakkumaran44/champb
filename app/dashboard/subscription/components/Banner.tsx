import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SSCLogo from '@/public/assets/img/Banner.png'
const Banner: React.FC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center p-4 sm:p-6 rounded-lg bg-gradient-to-b from-yellow-200/70 to-yellow-400/70 space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-col space-y-2 sm:space-y-4 text-left w-full sm:w-auto">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700">Start Achieving your goal</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">SSC CGL</h2>
        <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1">
          <li>Full syllabus coverage for all SSC CGL Tiers (I, II, III, and IV)</li>
          <li>50+ full-length mock tests</li>
          <li>10,000+ practice questions</li>
        </ul>
       
        <Button className="w-full sm:w-40 bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center order-last sm:order-none">
          BUY NOW
          <ArrowRight className="ml-2 h-4 w-4"/> 
        </Button>
      </div>
      <div className="flex-shrink-0 mb-4 sm:mb-0">
        <Image 
          src={SSCLogo}
          alt="SSC Logo"
          width={352}
          height={240}
          className="w-64 h-auto lg:hidden" 
          priority={true} 
        />
        <Image 
          src={SSCLogo}
          alt="SSC Logo"
          width={480}
          height={240}
          className=" hidden lg:block" 
          priority={true} 
        />
      </div>
    </div>
  );
}
export default Banner