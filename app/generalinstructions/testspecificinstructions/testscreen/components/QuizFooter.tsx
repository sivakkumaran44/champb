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
    <>
      <footer className="hidden md:flex fixed bottom-0 left-0 right-0 bg-blue-50 p-4 flex items-center justify-between border-t border-slate-700 z-10">
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
          <Button
            onClick={handleSubmitTest}
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-purple-600 bg-white rounded-xl group hover:text-white transition-colors duration-200 ease-in-out delay-100"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-slate-700 rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#94A3B8] rounded-xl"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-slate-700 rounded-xl opacity-0 group-hover:opacity-100"></span>
            <span className="relative text-white">Submit Test</span>
          </Button>
        </div>
      </footer>
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-50 p-4 grid grid-cols-2 gap-4 border-t border-slate-700 z-10">
      <Button
            onClick={onPrevious}
            variant={'ghost'}
            className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
          >
            Previous
          </Button>
<Button
     onClick={handleMarkForReview}
    className="font-semibold bg-slate-700 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center"
  >
    Mark for review & Next
  </Button>

  <Button
    onClick={handleSubmitTest}
    className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-purple-600 bg-white rounded-xl group hover:text-white transition-colors duration-200 ease-in-out delay-100"
  >
    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-slate-700 rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
    <span className="absolute inset-0 w-full h-full bg-[#94A3B8] rounded-xl"></span>
    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-slate-700 rounded-xl opacity-0 group-hover:opacity-100"></span>
    <span className="relative text-white">Submit Test</span>
  </Button>
  <Button
    onClick={handleSaveNext}
    className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center"
  >
    Save & Next
  </Button>
</footer>
    </>
  );
};
export default QuizFooter;
