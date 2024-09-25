import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { CircleAlert } from 'lucide-react';

const ReportQuestion = () => {
  const [selectedIssue, setSelectedIssue] = React.useState<string | null>(null); 
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); 
  const [isDropdownSelected, setIsDropdownSelected] = React.useState(false); 
  const handleSelectChange = (value: string) => {
    setSelectedIssue(value);
    setIsDropdownSelected(true); 
  };

  return (
    <div>
     <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-slate-700 flex items-center gap-2">
            <CircleAlert className="w-4 h-4" />
            Report
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px] bg-white text-slate-700">
          <DialogHeader>
            <DialogTitle>Report Question</DialogTitle>
            <DialogDescription>
              Please select the issue to continue.
            </DialogDescription>
          </DialogHeader>
    <div className="grid gap-4 py-4">
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an issue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wrong-question">Wrong Question</SelectItem>
                <SelectItem value="formatting-issues">Formatting Issues</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>

                {isDropdownSelected && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    id="issue-description"
                    placeholder={`Describe the ${selectedIssue}`}
                    className="col-span-4"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Submit Report</Button>
                </DialogFooter>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReportQuestion;
