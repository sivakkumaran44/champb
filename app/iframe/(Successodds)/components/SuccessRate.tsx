"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Cup from "@/public/assets/img/Cup.svg";

export default function Component() {
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    setProgressValue(55);
  }, []);

  return (
    <div className='pt-4'>
      <Card className="w-[220px] mb-2 mx-auto bg-slate-100 border border-custombroder rounded-xl ">
        <CardContent className="pt-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="w-full mr-2 relative">
              <div className="h-4 w-32 bg-emerald-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#fbe68a] to-[#facc15] rounded-full"
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
              {progressValue > 0 && (
                <div className="absolute top-[-10%] left-[50%] transform -translate-x-1/2 -translate-y-full mb-1">
                  <div className="bg-gray-700 text-white px-1.5 py-0.5 text-xs rounded-md relative">
                    {progressValue}%
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-gray-700 rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              <Image src={Cup} alt="Cup" width={100} height={100} className="w-auto h-auto object-contain" />
            </div>
          </div>
          <p className="text-xs font-medium text-slate-700">
            You&apos;re showing promise with a 55% success rate. Let&apos;s work on boosting that number!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
