import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange} rounded-xl >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-slate-700'>Are you sure you want to submit the test?</AlertDialogTitle>
          <AlertDialogDescription className='text-slate-700'>
            No changes will be allowed after Submission
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4">
  <div className="flex items-center justify-between mb-2">
    <span className="flex items-center">
      <div className="w-10 h-10 bg-green-500 rounded-full mr-2" />
      Answered
    </span>
    <span>{questionSummary.answered}</span>
  </div>
  <hr className="border-t border-slate-700 my-2" />

  <div className="flex items-center justify-between mb-2">
    <span className="flex items-center">
      <div className="w-10 h-10 bg-red-500 rounded-full mr-2" />
      Not Answered
    </span>
    <span>{questionSummary.notAnswered}</span>
  </div>
  <hr className="border-t border-slate-700 my-2" />

  <div className="flex items-center justify-between mb-2">
    <span className="flex items-center">
      <div className="w-10 h-10 bg-purple-500 clip-path-triangle mr-2" />
      Marked for Review
    </span>
    <span>{questionSummary.markedForReview}</span>
  </div>
  <hr className="border-t border-slate-700 my-2" />

  <div className="flex items-center justify-between mb-2">
    <span className="flex items-center">
      <div className="w-10 h-10 border border-slate-700 bg-gray-300 rounded mr-2" />
      Not Visited
    </span>
    <span>{questionSummary.notVisited}</span>
  </div>
</div>
        <AlertDialogFooter>
                 <AlertDialogAction className='bg-[#94A3B8]'onClick={handleConfirmSubmit}>Submit Test</AlertDialogAction>
         <AlertDialogCancel className='bg-slate-700 text-white hover:bg-slate-700 text-white'>Continue</AlertDialogCancel>
  
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubmitDialog;