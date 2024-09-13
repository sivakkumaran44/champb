import React, { useState } from 'react';
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
} from "@/components/ui/alert-dialog";

interface DetailsFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DetailsFormDialog: React.FC<DetailsFormDialogProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [exam, setExam] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting details:', { firstName, lastName, exam });
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="w-[100vw] max-w-[500px] p-6 rounded-lg">
      <Button
          onClick={onClose}
          variant="ghost"
          className="absolute right-2 top-2 w-8 h-8 p-0 "
        >
          <X className="h-5 w-5" />
        </Button>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-slate-700 text-xl font-semibold">
            Enter your Details
          </AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm text-gray-600">*First name</label>
            
            <Input
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-gray-100 border-slate-300  rounded-md shadow-none "
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm text-gray-600">*Last name</label>
            <Input
  id="lastName"
  placeholder="Last name"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  className="w-full bg-gray-100 border-slate-300  rounded-md shadow-none"
  required
/>
          </div>
          <div className="space-y-2">
            <label htmlFor="exam" className="text-sm text-gray-600">*Select your exam</label>
            <Select value={exam} onValueChange={setExam} required>
              <SelectTrigger id="exam" className="w-full bg-gray-100 border-slate-300  rounded-md shadow-none ">
                <SelectValue placeholder="Select your exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exam1">Exam 1</SelectItem>
                <SelectItem value="exam2">Exam 2</SelectItem>
                <SelectItem value="exam3">Exam 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='mt-6'>
          <Button 
            type="submit"
            className="w-full bg-emerald-700  text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-lg font-medium rounded-md mt-6"
          >
            Continue
          </Button>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500 mb-2">
          By continuing, you agree to our Terms & conditions and Privacy Policy.
        </p>
        <div>
            <a href="#" className="text-xs text-slate-500">Having trouble? <span className="text-emerald-600 font-medium">Help Centre</span></a>
          </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DetailsFormDialog;
          
   