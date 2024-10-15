"use client"
import React, { useState, useEffect } from 'react';
import OtpScreen from '../Auth/OtpScreen';
import NumberVerificationScreen from '../Auth/NumberVerificationScreen';
import MobileInput from '@/components/Auth/MobileInput';

const HeroSectionClientside: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isNumberVerificationOpen, setIsNumberVerificationOpen] = useState(false);
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isNumberVerificationOpen) {
      timer = setTimeout(() => {
        setIsNumberVerificationOpen(false);
        setIsOtpDialogOpen(true);
      }, 300); 
    }
    return () => clearTimeout(timer);
  }, [isNumberVerificationOpen]);

  const handleMobileInputChange = (newCountryCode: string, newMobileNumber: string) => {
    setCountryCode(newCountryCode);
    setMobileNumber(newMobileNumber);
  };

  const handleContinueClick = () => {
    if (mobileNumber.trim() !== "") {
      setIsNumberVerificationOpen(true);
    } else {
      alert("Please enter a mobile number");
    }
  };

  const handleNumberVerificationClose = (updatedNumber?: string) => {
    if (updatedNumber) {
      const newCountryCode = updatedNumber.slice(0, updatedNumber.length - 10);
      const newMobileNumber = updatedNumber.slice(-10);
      setCountryCode(newCountryCode);
      setMobileNumber(newMobileNumber);
    }
    setIsNumberVerificationOpen(false);
    setIsOtpDialogOpen(true);
  };

  return (
    <div>        
      <MobileInput
        initialCountryCode={countryCode}
        initialMobileNumber={mobileNumber}
        onInputChange={handleMobileInputChange}
        onSubmit={handleContinueClick}
        buttonText={isLoginMode ? "Start Achieving Your Goal" : "Continue To Achieve Goal"}
      />
      <p className="text-xs text-slate-700 mb-4 sm:mb-4 md:mb-4 lg:mb-4">We&apos;ll send an OTP for Verification</p>
      <p className="text-md text-slate-700 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        {isLoginMode ? "Already have a goal to achieve?" : "Ready to achieve your goal?"}{' '}
        <span onClick={() => setIsLoginMode(!isLoginMode)} className="text-slate-950 cursor-pointer font-medium">
          {isLoginMode ? "Login" : "Sign Up"}
        </span>
      </p>

      <NumberVerificationScreen
        isOpen={isNumberVerificationOpen}
        onClose={handleNumberVerificationClose}
        countryCode={countryCode}
        mobileNumber={mobileNumber}
      />

      <OtpScreen
        isOpen={isOtpDialogOpen}
        onClose={() => setIsOtpDialogOpen(false)}
        countryCode={countryCode}
        mobileNumber={mobileNumber}
        onUpdateMobileNumber={(newNumber) => {
          const newCountryCode = newNumber.slice(0, newNumber.length - 10);
          const newMobileNumber = newNumber.slice(-10);
          setCountryCode(newCountryCode);
          setMobileNumber(newMobileNumber);
        }}
      />
    </div>
  );
};

export default HeroSectionClientside;