"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const FilterDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center bg-slate-700 rounded-xl justify-center px-2 py-1 text-sm md:hidden">
          <FilterIcon className="w-4 h-4 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-100">
        <DialogHeader>
          <DialogTitle>Filter Questions</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="answered" />
            <label
              htmlFor="answered"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Answered
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="not-answered" />
            <label
              htmlFor="not-answered"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Not Answered
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marked-for-review" />
            <label
              htmlFor="marked-for-review"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Marked for Review
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="not-visited" />
            <label
              htmlFor="not-visited"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Not Visited
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <Button className="bg-slate-700 text-white px-4 py-2 rounded-lg">
            Clear
          </Button>
          <Button className="bg-emerald-700 text-white px-4 py-2 rounded-lg">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
