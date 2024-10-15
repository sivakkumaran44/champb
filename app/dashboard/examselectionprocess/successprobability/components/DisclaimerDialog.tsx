"use client";
import React, { useState } from 'react'; 
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { X } from 'lucide-react'; 
import disclaimerData from "@/components/data/disclaimer.json";
const DisclaimerDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}> 
      <AlertDialogTrigger asChild>
        <Button 
          variant="outline" 
          className="text-slate-400 border border-slate-300 rounded-2xl"
          onClick={() => setIsOpen(true)} 
        >
          View Disclaimer
        </Button>
      </AlertDialogTrigger>
      
      <AlertDialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
      <Button
            onClick={onClose} 
            type="button"
            id="close-button"
            name="close"
            variant="ghost"
            className="absolute right-2 top-2 w-8 h-8 p-0"
          >
            <X className="h-5 w-5" />
          </Button>
        <AlertDialogHeader className="relative "> 
          <AlertDialogTitle>{disclaimerData.title}</AlertDialogTitle>
         
        </AlertDialogHeader>
        <AlertDialogDescription>
          <div className="space-y-4 text-slate-700 text-base mb-12 ">
            {disclaimerData.content.map((item, index) => (
              <p key={index}>
                {index + 1}. <strong>{item.title}:</strong> {item.description}
              </p>
            ))}
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DisclaimerDialog
