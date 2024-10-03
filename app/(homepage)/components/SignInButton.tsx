"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import OtpVerification from '@/components/Auth/OtpVerification';

const SignInButton: React.FC = () => {
  const [showOtpVerification, setShowOtpVerification] = useState(false);

  const handleSignInClick = () => {
    setShowOtpVerification(true);
  };

  const handleOtpVerificationClose = () => {
    setShowOtpVerification(false);
  };

  return (
    <>
      <div className="relative flex flex-grow justify-end mt-2 md:mt-0">
          <Button
            size="sm"
            className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-base font-semibold text-white px-6 py-2 text-sm"
            onClick={handleSignInClick}
          >
            Sign in / Sign up
          </Button>
        </div>
      {typeof window !== 'undefined' && (
        <OtpVerification isOpen={showOtpVerification} onClose={handleOtpVerificationClose} />
      )}
    </>
  );
};

export default SignInButton;