import React, { useState, useRef, useEffect } from 'react';
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
import Mobileandcountrycode from '../MobileLoginForm/MobileLoginFormComponents/Mobileandcountrycode';

interface OtpScreenProps {
  isOpen: boolean;
  onClose: () => void;
  countryCode: string;
  mobileNumber: string;
  onEdit: () => void;
  onVerified: () => void;
}
export default function OtpScreen({ isOpen, onClose, countryCode, mobileNumber, onEdit, onVerified }: OtpScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(6);
  const [canResend, setCanResend] = useState(false);
  const [otpMessage, setOtpMessage] = useState("We've sent an OTP to your registered mobile number");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  useEffect(() => {
    if (isOpen) {
      resetOtpScreen();
    }
  }, [isOpen]);

  const resetOtpScreen = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(6);
    setCanResend(false);
    setOtpMessage("We've sent an OTP to your registered mobile number");
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    console.log('OTP:', otp.join(''));
    console.log('Mobile Number:', `${countryCode}${mobileNumber}`);
    onVerified();
  };
  
  const handleResendOtp = () => {
    if (canResend) {
    
      onEdit();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="w-[90vw] max-w-[520px] p-4 sm:p-6 rounded-lg">
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
        <AlertDialogHeader className="flex flex-col items-center space-y-2">
          <AlertDialogTitle className="text-slate-700 text-xl font-semibold text-center">
            Enter OTP
          </AlertDialogTitle>
          <AlertDialogDescription className='text-slate-500 text-sm text-center'>
            {otpMessage}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-4 mb-4">
          <Mobileandcountrycode
            countryCode={countryCode}
            mobileNumber={mobileNumber}
            onCountryCodeChange={() => {}}
            onMobileNumberChange={() => {}}
          />
          <Button
            onClick={onEdit}
            type="button"
            id="edit-number"
            name="edit-number"
            variant="outline"
            className="mt-2 w-full"
          >
            Edit
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              id={`otp-${index}`}
              name={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl bg-slate-200 border-none"
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button 
            onClick={handleVerifyOtp} 
            type="button"
            id="verify-otp-button"
            name="verify-otp-button"
            className="w-5/6 sm:w-5/6 lg:w-4/6 bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-lg font-medium rounded-md"
          >
            Verify OTP
          </Button>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleResendOtp}
            disabled={!canResend}
            className={`text-blue-600 hover:text-blue-800 text-sm ${!canResend ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {`Didn't receive the OTP?`} {timer > 0 && <span>({timer}s)</span>}
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}