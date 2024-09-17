"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/img/LOGO SVG.svg";
import OtpVerification from '@/components/Auth/OtpVerification'; 

const Header = () => {
  const [showOtpVerification, setShowOtpVerification] = useState(false);

  const handleSignInClick = () => {
    setShowOtpVerification(true);
  };

  const handleOtpVerificationClose = () => {
    setShowOtpVerification(false);
  };

  return (
    <>
      <header className="flex justify-between items-center px-4 py-2 bg-white">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="bChamp Logo"   
            className="w-full h-auto object-contain"
          />
        </div>
        <Button size="sm"
          className="rounded-xl bg-emerald-700 hover:bg-emerald-700 text-base font-semibold text-white px-6 py-2 text-sm"
        
          onClick={handleSignInClick}
        >
          Sign in / Sign up
        </Button>
      </header>
      
      {showOtpVerification && (
        <OtpVerification 
          isOpen={showOtpVerification} 
          onClose={handleOtpVerificationClose} 
        />
      )}
    </>
  );
};

export default Header;
