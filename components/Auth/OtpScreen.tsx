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
import DetailsFormDialog from './DetailsFormDialog';
import ReactCountryFlag from "react-country-flag";
import NumberVerificationScreen from './NumberVerificationScreen'; 

interface OtpScreenProps {
  isOpen: boolean;
  onClose: () => void;
  countryCode: string;
  mobileNumber: string;
  onUpdateMobileNumber: (newNumber: string) => void;
}

export default function OtpScreen({ isOpen, onClose, countryCode, mobileNumber, onUpdateMobileNumber }: OtpScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [showNumberVerification, setShowNumberVerification] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [otpMessage, setOtpMessage] = useState("We’ve sent an OTP to your registered mobile number");
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
    if (!isOpen) {
      resetOtpScreen();
    }
  }, [isOpen]);

  const resetOtpScreen = () => {
    setOtp(['', '', '', '', '', '']);
    setShowDetailsForm(false);
    setShowNumberVerification(false);
    setTimer(30);
    setCanResend(false);
    setResendCount(0);
    setOtpMessage("We’ve sent an OTP to your registered mobile number"); 
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
    console.log('Verifying OTP:', otp.join(''));
    setShowDetailsForm(true);
  };

  const handleDetailsFormClose = () => {
    setShowDetailsForm(false);
    onClose(); 
  };

  const handleEditClick = () => {
    setShowNumberVerification(true); 
  };

  const handleNumberVerificationClose = (updatedNumber?: string) => {
    setShowNumberVerification(false);
    if (updatedNumber) {
      onUpdateMobileNumber(updatedNumber);
    }
  };

  const handleResendOtp = () => {
    if (canResend && resendCount < 3) { 
      console.log('Resending OTP');
      setTimer(30);
      setCanResend(false);
      setResendCount((prevCount) => prevCount + 1);
      setOtpMessage("We resent an OTP to your registered mobile number");
    } else if (resendCount >= 3) {
      setOtpMessage("You have reached the maximum number of resends.");
    }
  };

  const getResendText = () => {
    if (resendCount === 0) {
      return "Didn’t receive the OTP? Resend it";
    } else if (resendCount === 1) {
      return "Still didn't receive the OTP?";
    } else if (resendCount < 3) {
      return "Try again";
    } else {
      return "Maximum resends reached"; 
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <AlertDialog open={isOpen && !showDetailsForm && !showNumberVerification}>
        <AlertDialogContent className="w-[90vw] max-w-[400px] p-4 sm:p-6 rounded-lg">
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
          <div className="mt-4 p-3 bg-slate-100 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <ReactCountryFlag
                countryCode={countryCode.slice(1) === '91' ? 'IN' : 'US'}
                svg
                className="mr-2 h-4 w-6"
              />
              <span className="font-semibold">{countryCode}</span>
              <span className="ml-2">{mobileNumber}</span>
            </div>
            <Button
              variant="ghost"
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={handleEditClick} 
            >
              Edit
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
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
              className="w-5/6 sm:w-4/6 lg:w-3/6 bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-lg font-medium rounded-md"
            >
              Verify OTP
            </Button>
          </div>
          <div className="flex flex-col items-center mt-4">
            <button
              onClick={handleResendOtp}
              disabled={resendCount >= 3}
              className={`text-blue-600 hover:text-blue-800 text-sm ${resendCount >= 3 ? 'cursor-not-allowed' : ''}`}
            >
              {getResendText()} {resendCount < 3 && <span>({timer}s)</span>}
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <DetailsFormDialog 
        isOpen={showDetailsForm} 
        onClose={handleDetailsFormClose} 
      />
      <NumberVerificationScreen 
        isOpen={showNumberVerification} 
        onClose={handleNumberVerificationClose} 
        countryCode={countryCode} 
        mobileNumber={mobileNumber} 
      />
    </>
  );
}
