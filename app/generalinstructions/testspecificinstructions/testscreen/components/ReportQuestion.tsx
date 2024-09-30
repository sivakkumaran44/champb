import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleAlert } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";

type IssueType = 'Wrong Question' | 'Formatting Issues' | 'Others';

const ReportQuestion = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleIssueSelect = (issue: IssueType) => {
    console.log(`Issue selected: ${issue}`); 
    setIsDialogOpen(true);
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-slate-700 flex items-center gap-2"
          >
            <CircleAlert className="w-5 h-5" />
            Report
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-slate-100 border-2 border-slate-950'>
          <DropdownMenuItem onClick={() => handleIssueSelect('Wrong Question')}>
            Wrong Question
          </DropdownMenuItem>
          <hr className="border-t border-slate-700 my-2" />
          <DropdownMenuItem onClick={() => handleIssueSelect('Formatting Issues')}>
            Formatting Issues
          </DropdownMenuItem>
          <hr className="border-t border-slate-700 my-2" />
          <DropdownMenuItem onClick={() => handleIssueSelect('Others')}>
            Others
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-[425px] bg-slate-200 text-slate-700 p-4">
          <DialogHeader>
            <DialogTitle className="text-lg text-center">Tell Us More</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <Textarea className="w-full" placeholder="Type your message here." />
            </div>
          </div>
          <DialogFooter>
            <Button className='bg-slate-700 w-full' type="submit">Submit Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReportQuestion;
