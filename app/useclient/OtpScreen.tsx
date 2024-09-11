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

interface OtpScreenProps {
  isOpen: boolean;
  onClose: () => void;
  countryCode: string;
  mobileNumber: string;
}

const OtpScreen: React.FC<OtpScreenProps> = ({ isOpen, onClose, countryCode, mobileNumber }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

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
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="w-[90vw] max-w-[400px] p-4 sm:p-6 rounded-lg">
        <AlertDialogHeader className="space-y-2">
          <AlertDialogTitle className="flex justify-between items-center text-slate-700 text-xl font-semibold">
            <span>Verify Phone Number</span>
            <Button
              onClick={onClose}
              variant="ghost"
              className="w-8 h-8 p-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </AlertDialogTitle>
          <AlertDialogDescription className='text-slate-500 text-sm'>
            Please enter the 6 digit code sent to <b>{countryCode} {mobileNumber}</b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-between my-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
             
              name={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-[14%] aspect-square text-center text-xl bg-slate-100 border-slate-300"
            />
          ))}
        </div>
        <Button 
          onClick={handleVerifyOtp} 
          id="verify-otp-button"
          name="verify-otp-button"
          className="w-full  bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-lg font-medium rounded-md"
        >
          Verify OTP
        </Button>
        <div className="mt-4 text-center space-y-2">
          <a href="#" className="text-sm text-slate-500 block">Resend OTP in 00:24</a>
          <div className="flex items-center justify-center text-sm text-slate-500">
            <span className="mr-1">Having trouble?</span>
            <a href="#" className="text-emerald-600 font-medium">Help Centre</a>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpScreen;