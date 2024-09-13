
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import DetailsFormDialog from './DetailsFormDialog';

interface OtpScreenProps {
  isOpen: boolean;
  onClose: () => void;
  countryCode: string;
  mobileNumber: string;
}

const OtpScreen: React.FC<OtpScreenProps> = ({ isOpen, onClose, countryCode, mobileNumber }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = () => {
    console.log('Verifying OTP:', otp.join(''));
    setShowDetailsForm(true);
  };

  const handleDetailsFormClose = () => {
    setShowDetailsForm(false);
    onClose(); 
  };

  return (
    <>
      <AlertDialog open={isOpen && !showDetailsForm} onOpenChange={onClose}>
        <AlertDialogContent className="w-[90vw] max-w-[400px] p-4 sm:p-6 rounded-lg">
        <Button
          onClick={onClose}
          variant="ghost"
          className="absolute right-2 top-2 w-8 h-8 p-0 "
        >
          <X className="h-5 w-5" />
        </Button>
          <AlertDialogHeader className="flex flex-col items-center space-y-2">
            <AlertDialogTitle className="text-slate-700 text-xl font-semibold text-center">
              Verify Phone Number
            </AlertDialogTitle>
            <AlertDialogDescription className='text-slate-500 text-sm text-center'>
              Please enter the 6 digit code sent to <br/>
              <b className='text-gray-900'>{countryCode} {mobileNumber}</b>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                name={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl bg-slate-200 border-none"
              />
            ))}
          </div>
          <div className="flex justify-center ">
            <Button 
              onClick={handleVerifyOtp} 
              type="submit"
              id="verify-otp-button"
              name="verify-otp-button"
              className="w-5/6 sm:w-4/6 lg:w-3/6 bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-lg font-medium rounded-md"
            >
              Verify OTP
            </Button>
          </div>
          <div className=" space-y-2 ">
            <a href="#" className="text-sm text-slate-500 block">Resend OTP in 00:24</a>
            <div className="text-sm text-slate-500">
              <span className="mr-1">Having trouble?</span>
              <a href="#" className="text-emerald-600 font-medium">Help Centre</a>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      
      {showDetailsForm && (
        <DetailsFormDialog isOpen={showDetailsForm} onClose={handleDetailsFormClose} />
      )}
    </>
  );
};

export default OtpScreen;
