import React from 'react';
import { Button } from "@/components/ui/button";
import SSCLogo from '@/public/assets/img/Banner.png'; 
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
  return (
    <div className="flex flex-row justify-between items-center p-6 rounded-lg bg-gradient-to-b from-yellow-200/70 to-yellow-400/70 space-x-4">
      <div className="flex flex-col space-y-4 text-left">
        <p className="text-lg text-slate-700">Start Achieving your goal</p>
        <h2 className="text-5xl font-bold text-slate-700">SSC CGL</h2>
        <Button className="w-40 bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center">
          BUY NOW
          <ArrowRight className="ml-2"/> 
        </Button>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          <li>Full syllabus coverage for all SSC CGL Tiers (I, II, III, and IV)</li>
          <li>50+ full-length mock tests</li>
          <li>10,000+ practice questions</li>
        </ul>
      </div>
      <div className="flex-shrink-0">
        <Image 
          src={SSCLogo} 
          alt="SSC Logo" 
          width={352}
          height={240}
          className=" h-auto md:w-88 md:h-60"
        />
      </div>
    </div>
  );
}