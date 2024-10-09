"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import disclaimerData from "@/components/data/disclaimer.json";

const DisclaimerDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-slate-400 border border-slate-300 rounded-2xl">
          View Disclaimer
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md max-h-[80vh] overflow-y-auto"> 
        <AlertDialogHeader>
          <AlertDialogTitle>{disclaimerData.title}</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="space-y-4 text-slate-700 text-base mb-12">
              {disclaimerData.content.map((item, index) => (
                <p key={index}>
                  {index + 1}. <strong>{item.title}:</strong> {item.description}
                </p>
              ))}
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
