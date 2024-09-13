import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import OtpScreen from './OtpScreen'; 
import { X } from "lucide-react";

interface OtpVerificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOtpScreenOpen, setIsOtpScreenOpen] = useState(false);

  const handleGetOtp = () => {
    console.log('Sending OTP to:', mobileNumber);
    setIsOtpScreenOpen(true);
  };

  const handleOtpScreenClose = () => {
    setIsOtpScreenOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <AlertDialog open={!isOtpScreenOpen}>
        <AlertDialogContent className="w-[80vw] max-w-[300px] p-4 sm:p-6 rounded-lg bg-neutral-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute right-2 top-2 w-8 h-8 p-0"
          >
            <X className="h-5 w-5" />
          </Button>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-slate-700 text-xl font-bold mb-2">
              OTP VERIFICATION
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="text-center text-sm text-slate-500 mb-2">
            We will send you one-time password<br />to your mobile number
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-500 text-center mb-2">Enter Mobile number</label>
            <div className="flex items-center border-b-2 border-emerald-700">
              <span className="text-zinc-950 mr-2">+91</span>
              <Input
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="flex-1 border-none outline-none focus:ring-0 focus:outline-none hover:border-transparent active:border-transparent p-2 text-lg"
                style={{
                  boxShadow: 'none',
                  '--tw-ring-color': 'transparent',
                } as React.CSSProperties}
              />
            </div>
          </div>  
          <Button
            onClick={handleGetOtp}
            className="w-full bg-emerald-700 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-3 text-lg font-medium"
          >
            Get OTP
          </Button>
        </AlertDialogContent>
      </AlertDialog>

      {isOtpScreenOpen && (
        <OtpScreen
          isOpen={isOtpScreenOpen}
          onClose={handleOtpScreenClose}
          countryCode="+91"
          mobileNumber={mobileNumber}
        />
      )}
    </>
  );
};

export default OtpVerification;