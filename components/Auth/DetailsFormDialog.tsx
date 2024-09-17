"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

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
  <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
  <div className="space-y-1 sm:space-y-2">
    <label htmlFor="firstName" className="text-xs sm:text-sm text-gray-600">*First name</label>
    <Input
      id="firstName"
      name="firstName"
      placeholder="First name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="w-full bg-gray-100 border-slate-300 rounded-md shadow-none text-sm sm:text-base"
      required
    />
  </div>
  <div className="space-y-1 sm:space-y-2">
    <label htmlFor="lastName" className="text-xs sm:text-sm text-gray-600">*Last name</label>
    <Input
      id="lastName"
      name="lastName"
      placeholder="Last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className="w-full bg-gray-100 border-slate-300 rounded-md shadow-none text-sm sm:text-base"
      required
    />
  </div>
  <div className="space-y-1 sm:space-y-2">
    <label htmlFor="exam" className="text-xs sm:text-sm text-gray-600">*Select your exam</label>
    <Select value={exam} onValueChange={setExam} required>
      <SelectTrigger id="exam" name="exam" className="w-full bg-gray-100 border-slate-300 rounded-md shadow-none text-sm sm:text-base">
        <SelectValue placeholder="Select your exam" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="exam1">Exam 1</SelectItem>
        <SelectItem value="exam2">Exam 2</SelectItem>
        <SelectItem value="exam3">Exam 3</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <div>
    <Button 
      type="submit"
      id="submit-button"
      name="submit-button"
      className="w-full bg-emerald-700 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-base sm:text-lg font-medium rounded-md"
    >
      Continue
    </Button>
  </div>
</form>
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