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
      <Button
        className="font-medium text-white bg-[#94A3B8] border border-b[#334155] border-opacity-70 px-6 py-2 rounded-lg transition duration-300 flex items-center"
        onClick={handleSubmitTest}
      >
        Submit Test
      </Button>
    </div>
  </footer>
  )
}
export default QuizFooter