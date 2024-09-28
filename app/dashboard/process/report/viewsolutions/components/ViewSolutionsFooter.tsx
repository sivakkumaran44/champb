import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizFooterProps {
  handlePrevious: () => void;
  handleSaveNext: () => void;
}

const ViewSolutionsFooter: React.FC<QuizFooterProps> = ({
  handlePrevious,
  handleSaveNext,
}) => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-blue-50 p-4 border-t border-slate-700 z-10 flex justify-center items-center">
        <div className="flex gap-4">
          <Button
            onClick={handlePrevious}
            variant={'ghost'}
            className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
          >
            Previous
          </Button>
          <Button
            onClick={handleSaveNext}
            variant={'ghost'}
            className="font-medium text-slate-700 px-6 py-2 rounded-lg transition duration-300 flex items-center border border-[#334155] border-opacity-70"
           >
            Next
          </Button>
        </div>
      </footer>
    </>
  );
};

export default ViewSolutionsFooter;
