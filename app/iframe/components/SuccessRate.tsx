"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Cup from "@/public/assets/img/Cup.svg";
import EditYearDialog from './EditYearDialog';
import DisclaimerDialog from './DisclaimerDialog';

export default function Component() {
  const [year, setYear] = useState("2024");

  return (
    <div>
      <Card className="w-full max-w-7xl mb-2 mx-auto bg-slate-100 border border-custombroder rounded-xl p-4 sm:p-6">
        <CardContent className="pt-2 pb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="w-full mr-4 relative">
              <Progress 
                value={55} 
                className="h-8 bg-gradient-to-r from-[#fbe68a] to-[#facc15]"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 text-xs rounded-full">
                55%
              </span>
            </div>
            <div className="flex flex-col items-center">
            <Image
  src={Cup}
  alt="Cup"
  width={150}
  height={150}
  className="w-auto h-auto object-contain"
/>
              <span className="text-sm font-semibold mt-1 text-emerald-500">SSC CGL</span>
            </div>
          </div>
          <p className="text-lg font-medium text-slate-700">
            You&apos;re showing promise with a 55% success rate. Let&apos;s work on boosting that number!
          </p>
        </CardContent>
      </Card>
      <div className="flex justify-end space-x-2 mb-2">
        <EditYearDialog year={year} setYear={setYear} />
        <DisclaimerDialog />
      </div>
    </div>
  );
}
