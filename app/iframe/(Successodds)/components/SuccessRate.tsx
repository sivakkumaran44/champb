"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Cup from "@/public/assets/img/Cup.svg";

export default function SuccessRate() {

  return (
    <div className="h-full w-full p-4 flex flex-col pt-6 justify-between">
      <Card className="flex-1 bg-slate-100 border border-customborder rounded-xl ">
        <CardContent className="h-full pt-2 pb-2">
        <div className="flex items-center justify-between mb-4">
            <div className="w-full mr-4 relative">
              <Progress 
                value={55} 
                className="h-6 bg-gradient-to-r from-[#fbe68a] to-[#facc15]"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white px-1 py-0.5 text-xs rounded-full">
                55%
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={Cup}
                alt="Cup"
                width={50}
                height={50} 
                className="w-auto h-auto object-contain"
              />
              <span className="text-xs font-semibold mt-1 text-emerald-500">SSC CGL</span>
            </div>
          </div>
          <p className="text-sm font-medium text-slate-700">
            You&apos;re showing promise with a 55% success rate. Let&apos;s work on boosting that number!
          </p>
      
            </CardContent>
      </Card>
     
    </div>
  );
}
 