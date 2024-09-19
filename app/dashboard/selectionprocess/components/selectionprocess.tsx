"use client"
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const ExamApplicationForm: React.FC = () => {
  const [applied, setApplied] = useState<string>('');
  const [admitCard, setAdmitCard] = useState<string>('');
  const [examDate, setExamDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ applied, admitCard, examDate });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-lg text-gray-700">Have you applied for the exam</label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-emerald-600"
                  name="applied"
                  value="yes"
                  checked={applied === 'yes'}
                  onChange={(e) => setApplied(e.target.value)}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-emerald-600"
                  name="applied"
                  value="no"
                  checked={applied === 'no'}
                  onChange={(e) => setApplied(e.target.value)}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="text-lg text-gray-700">Do you have your admit card</label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-emerald-600"
                  name="admitCard"
                  value="yes"
                  checked={admitCard === 'yes'}
                  onChange={(e) => setAdmitCard(e.target.value)}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-emerald-600"
                  name="admitCard"
                  value="no"
                  checked={admitCard === 'no'}
                  onChange={(e) => setAdmitCard(e.target.value)}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="text-lg text-gray-700">I&apos;m going to appear for exam on</label>
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

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition duration-300 flex items-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Check Success Probability
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExamApplicationForm;