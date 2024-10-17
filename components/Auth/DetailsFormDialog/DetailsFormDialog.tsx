"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import DetailsForm from './DetailsFormDialogComponents/DetailsForm';

interface DetailsFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DetailsFormDialog: React.FC<DetailsFormDialogProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [exam, setExam] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting details:', { firstName, lastName, exam });
    onClose();
    await new Promise(resolve => setTimeout(resolve, 300));
    router.push('/dashboard');
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="w-[95vw] max-w-[500px] p-4 sm:p-6 rounded-lg">
        <Button
          onClick={onClose}
          type="button"
          variant="ghost"
          className="absolute right-2 top-2 w-8 h-8 p-0"
        >
          <X className="h-5 w-5" />
        </Button>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-slate-700 text-lg sm:text-xl font-semibold">
            Enter your Details
          </AlertDialogTitle>
          <AlertDialogDescription className="text-slate-500 text-sm">
            Please provide your information to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <DetailsForm
          firstName={firstName}
          lastName={lastName}
          exam={exam}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setExam={setExam}
          handleSubmit={handleSubmit}
        />

        <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-4">
          By continuing, you agree to our Terms & conditions and Privacy Policy.
        </p>
        <div>
          <a href="#" className="text-[10px] sm:text-xs text-slate-500">Having trouble? <span className="text-emerald-600 font-medium">Help Centre</span></a>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DetailsFormDialog;
