"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
interface EditYearDialogProps {
  year: string; 
  setYear: (year: string) => void; 
}

const EditYearDialog: React.FC<EditYearDialogProps> = ({ year, setYear }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-slate-400 border border-slate-300 rounded-2xl">
          Edit target year
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-emerald-300 text-slate-700">
        <DialogHeader>
          <DialogTitle>I’m going to appear for exam on</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-full border border-slate-700">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button className="text-slate-100 bg-slate-700 hover:bg-slate-700 rounded-2xl">
            Cancel
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-500 text-white rounded-2xl">
            Select
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditYearDialog;
