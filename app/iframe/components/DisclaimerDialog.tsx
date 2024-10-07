"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const DisclaimerDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-slate-400 border border-slate-300 rounded-2xl">
          View Disclaimer
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Exam Selection Probability Disclaimer</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="space-y-4 text-slate-700 text-base mb-12">
              <p>1. <strong>Integrity:</strong> We expect users to approach these mock tests with honesty and integrity. Your genuine progress is the most valuable outcome of this feature.</p>
              <p>2. <strong>Fair Practice:</strong> Any form of malpractice or cheating is strongly discouraged. Such actions will skew your Exam Selection Probability and hinder your actual preparation and growth.</p>
              <p>3. <strong>Learning from Mistakes:</strong> Errors in your mock tests should be viewed as learning opportunities. We encourage you to analyze these mistakes to enhance your understanding and improve your performance.</p>
              <p>4. <strong>Continuous Improvement:</strong> Each mock test you take contributes to refining your Exam Selection Probability. Consistent effort and persistence are key to seeing improvement in this metric.</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='bg-emerald-500 hover:bg-emerald-500'>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DisclaimerDialog;
