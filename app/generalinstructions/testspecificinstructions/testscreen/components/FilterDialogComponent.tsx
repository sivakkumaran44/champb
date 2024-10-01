import React from 'react';
import { Button } from "@/components/ui/button"
import { Filter } from 'lucide-react';
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
        <Button className="bg-gray-800 text-white w-12 h-20 fixed left-0 z-10 relative">
          <Filter size={24} className="text-slate-300"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[425px] bg-slate-200 rounded-2xl">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Correct Answer</span>
            <span className="text-green-500">+2 Marks</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Incorrect Answer</span>
            <span className="text-red-500">- 0.5 Marks</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <span>Not Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded border border-slate-900 bg-slate-200"></div>
              <span>Not Visited</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
              <span>Marked for review</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 relative" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <span>Answered and Marked for Review</span>
            </div>
            <div className="text-xs text-gray-500 ml-6">(will be considered for evaluation)</div>
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