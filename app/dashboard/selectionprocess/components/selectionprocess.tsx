"use client"
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CirclePower } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";  
import { Checkbox } from "@/components/ui/checkbox";

const ExamApplicationForm: React.FC = () => {
  const [applied, setApplied] = useState<boolean>(false);
  const [admitCard, setAdmitCard] = useState<boolean>(false);
  const [examDate, setExamDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ applied, admitCard, examDate });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="mb-4 w-full max-w-4xl bg-slate-100 border border-custombroder rounded-lg relative">
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg text-slate-700">Have you applied for the exam</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <Checkbox 
                      checked={applied} 
                      onCheckedChange={setApplied} 
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-lg text-slate-700">Do you have your admit card</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <Checkbox 
                      checked={admitCard} 
                      onCheckedChange={setAdmitCard} 
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-lg text-slate-700">I&apos;m going to appear for the exam on</label>
                <Select onValueChange={setExamDate} value={examDate}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-05-01">May 1, 2024</SelectItem>
                    <SelectItem value="2024-05-15">May 15, 2024</SelectItem>
                    <SelectItem value="2024-06-01">June 1, 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition duration-300 flex items-center"
          >
            <CirclePower className="w-5 h-5 mr-2" />
            Check Success Probability
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExamApplicationForm;
