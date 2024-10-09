"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NumberVerificationScreen from '@/components/Auth/NumberVerificationScreen';

const SignInButton: React.FC = () => {
  const [showNumberVerification, setShowNumberVerification] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignInClick = () => {
    setShowNumberVerification(true);
  };

  const handleNumberVerificationClose = (updatedNumber?: string) => {
    setShowNumberVerification(false);
    if (updatedNumber) {
      setMobileNumber(updatedNumber);
      console.log("Updated mobile number:", updatedNumber);
    }
  };

  return (
    <>
      <div className="relative flex flex-grow justify-end mt-2 md:mt-0">
        <Button
          size="sm"
          className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-base font-semibold text-white px-6 py-2 "
          onClick={handleSignInClick}
        >
          Sign in / Sign up
        </Button>
      </div>
      {typeof window !== 'undefined' && (
        <NumberVerificationScreen
          isOpen={showNumberVerification}
          onClose={handleNumberVerificationClose}
          countryCode="+91"
          mobileNumber={mobileNumber}
        />
      )}
    </>
  );
};

export default SignInButton;