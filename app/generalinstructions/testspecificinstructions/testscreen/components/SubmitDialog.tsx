import React from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; 

interface SubmitDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  questionSummary: {
    answered: number;
    notAnswered: number;
    markedForReview: number;
    notVisited: number;
  };
  handleConfirmSubmit: () => void;
}

const SubmitDialog: React.FC<SubmitDialogProps> = ({
  isOpen,
  onOpenChange,
  questionSummary,
  handleConfirmSubmit,
}) => {
  const router = useRouter(); 
  
  const handleSubmit = () => {
    handleConfirmSubmit();
    router.push('/generalinstructions/testspecificinstructions/testscreen/results'); 
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange} rounded-2xl >
      <AlertDialogContent className="p-4 bg-slate-200 sm:p-6 md:p-8 lg:p-10  w-full 
     w-[300px] lg:w-[500px] xl:w-[600px] rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className='text-slate-700 text-lg md:text-xl'>
            Are you sure you want to submit the test?
          </AlertDialogTitle>
          <AlertDialogDescription className='text-slate-700'>
            No changes will be allowed after Submission
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="py-4">
          {/* Answered */}
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full mr-2" />
              Answered
            </span>
            <span>{questionSummary.answered}</span>
          </div>
          <hr className="border-t border-slate-700 my-2" />

          {/* Not Answered */}
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full mr-2" />
              Not Answered
            </span>
            <span>{questionSummary.notAnswered}</span>
          </div>
          <hr className="border-t border-slate-700 my-2" />

          {/* Marked for Review */}
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 clip-path-triangle mr-2" />
              Marked for Review
            </span>
            <span>{questionSummary.markedForReview}</span>
          </div>
          <hr className="border-t border-slate-700 my-2" />

          {/* Not Visited */}
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-slate-700 bg-gray-300 rounded mr-2" />
              Not Visited
            </span>
            <span>{questionSummary.notVisited}</span>
          </div>
        </div>

        {/* Footer with buttons */}
        <AlertDialogFooter className="flex flex-col md:flex-row justify-between">
          <Button
            onClick={handleSubmit}
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-purple-600 bg-white rounded-xl group hover:text-white transition-colors duration-200 ease-in-out delay-100 mb-2 md:mb-0"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-slate-700 rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#94A3B8] rounded-xl"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-slate-700 rounded-xl opacity-0 group-hover:opacity-100"></span>
            <span className="relative text-white">Submit Test</span>
          </Button>
          <AlertDialogCancel className='bg-slate-700 text-white hover:bg-slate-600'>
            Continue
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubmitDialog;
