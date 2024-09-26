import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizFooterProps {
  onPrevious: () => void;
  onClearResponse: () => void;
  handleMarkForReview: () => void;
  handleSaveNext: () => void;
  handleSubmitTest: () => void;
}

const QuizFooter: React.FC<QuizFooterProps> = ({
  onPrevious,
  onClearResponse,
  handleMarkForReview,
  handleSaveNext,
  handleSubmitTest,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-blue-50 p-4 flex items-center justify-between border-t border-slate-700">
    <div className="flex gap-2">
      <Button
        onClick={onPrevious}
        variant={'ghost'}
        className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
      >
        Previous
      </Button>
      <Button
        onClick={onClearResponse}
        variant={'ghost'}
        className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
      >
        Clear Response
      </Button>
    </div>
    <div className="flex gap-2">
      <Button
        onClick={handleMarkForReview}
        className="font-medium bg-slate-700 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155]"
      >
        Mark for Review & Next
      </Button>
      <Button
        onClick={handleSaveNext}
        className="font-semibold bg-[linear-gradient(305.13deg,_#FACC15_21.87%,_#FDE68A_81.26%)] text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center"
      >
        Save & Next
      </Button>
    </div>
    <div className="flex">
    <button
      onClick={handleSubmitTest}
      className="relative inline-block text-lg group"
    >
      <span className="relative z-10 block px-6 py-2 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-[#94A3B8] border-2 border-[#334155] rounded-full ">
        <span className="absolute inset-0 w-full h-full px-6 py-2 rounded-lg bg-[#94A3B8]"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900"></span>
        <span className="relative">Submit Test</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full"></span>
    </button>
      
    </div>
  </footer>
  )
}
export default QuizFooter