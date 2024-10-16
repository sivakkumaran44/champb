import React from 'react';
import { Button } from "@/components/ui/button"
import { Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
const FilterDialog = () => {
  const router = useRouter();
  return (

    <Dialog >
      <DialogTrigger asChild>
        <Button className="bg-gray-800 text-white w-12 h-12 fixed left-0 z-10 relative">
          <Info size={24} className="text-slate-300"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[425px] bg-slate-200 rounded-2xl">
        <div className="space-y-1  ">
          <div className="flex justify-between items-center mt-4">
            <span>Correct Answer</span>
            <span className="text-green-500">+2 Marks</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Incorrect Answer</span>
            <span className="text-red-500">- 0.5 Marks</span>
          </div>
          <div className="space-y-4  ">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <span>Not Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded border border-slate-900 bg-gray-300"></div>
              <span>Not Visited</span>
            </div>
            <div className="flex items-center space-x-2">
               <svg className="w-6 h-6 md:w-6 md:h-6 mr-2" viewBox="0 0 24 24">
            <path d="M12 2 L22 22 L2 22 Z" fill="purple" stroke="purple" strokeWidth="2" />
   </svg>
              <span>Marked for review</span>
            </div>
            <div className="flex items-center space-x-2">
 <svg className="w-6 h-6 md:w-6 md:h-6 mr-2" viewBox="0 0 24 24">
            <path d="M12 2 L22 22 L2 22 Z" fill="purple" stroke="purple" strokeWidth="2" />
            <g transform="translate(12, 13)">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">   
                <g>
                  <circle cx="12" cy="12" r="10" fill="#4ade80" /> 
                  <text x="12" y="16" fontSize="16" textAnchor="middle" fill="white" fontWeight="bold">!</text>
                </g>
              </svg>
            </g>       
          </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                
              </div>
              <span>Answered and Marked for Review</span>
            </div>
            <span>(will be considered for evaluation)</span>
              </div>
          <Button
        variant="ghost"
        className="w-full hover:bg-slate-200"
        onClick={() => router.push('/generalinstructions/testspecificinstructions/testscreen/instructions')} 
        >
       
        View Instructions
      </Button>

      <Button
        variant="ghost"
        className="w-full hover:bg-slate-200"
        onClick={() => router.push('/generalinstructions/testspecificinstructions/testscreen/questionpaper')} 
        >
        View Question Paper
      </Button>
              </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;