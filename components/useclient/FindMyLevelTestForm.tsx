"use client";
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OtpVerification from '@/components/Auth/OtpScreen';

const FindMyLevelTestForm = () => {
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowOtpVerification(true);
  };

  const handleOtpVerificationClose = () => {
    setShowOtpVerification(false);
  };

  const handleUpdateMobileNumber = (newMobileNumber: string) => {
    setMobileNumber(newMobileNumber);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 h-[calc(100%-6rem)] sm:h-[calc(100%-7rem)] md:h-[calc(100%-9rem)] lg:h-[calc(100%-11rem)]">
          <div className="w-84 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm space-y-4 sm:space-y-6 md:space-y-8">
            <Select name="exam-select">
              <SelectTrigger className="w-full bg-white text-slate-400 border-none rounded-md shadow-sm h-12 sm:h-14">
                <SelectValue placeholder="Choose Exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exam1">Exam 1</SelectItem>
                <SelectItem value="exam2">Exam 2</SelectItem>
                <SelectItem value="exam3">Exam 3</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex space-x-3 w-full">
              <Input
                type="text"
                name="name"
                placeholder="First Name"
                className="w-1/2 bg-white text-slate-400 border-none rounded-md shadow-sm h-12 sm:h-14"
                autoComplete="given-name"
              />
              <Input
                type="text"
                name="last"
                placeholder="Last Name"
                className="w-1/2 bg-white text-slate-400 border-none rounded-md shadow-sm h-12 sm:h-14"
                autoComplete="family-name"
              />
            </div>
            
            <div className="flex space-x-3 w-full">
              <Select 
                name="country-code-select" 
                defaultValue="+91"
                onValueChange={(value) => setCountryCode(value)}
              >
                <SelectTrigger className="w-1/4 sm:w-1/5 md:w-1/6 bg-white text-slate-900 border-none rounded-md shadow-sm h-12 sm:h-14">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
              <Input
                name="phone-number"
                placeholder="98765-12345"
                className="flex-grow bg-white text-slate-400 border-none rounded-md shadow-sm h-12 sm:h-14"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit"
              id="submit-button"
              name="submit-button"
              variant="default" 
              size="lg" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-lg h-12 sm:h-14 text-lg"
            >
              Start Achieving Your Goal
            </Button>
          </div>
        </div>
      </form>

      {showOtpVerification && (
        <OtpVerification 
          isOpen={showOtpVerification} 
          onClose={handleOtpVerificationClose}
          countryCode={countryCode}
          mobileNumber={mobileNumber}
          onUpdateMobileNumber={handleUpdateMobileNumber}
        />
      )}
    </>
  );
};

export default FindMyLevelTestForm;