"use client"
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactCountryFlag from "react-country-flag";
import { CountryFlagInput } from '@/app/(homepage)/components/CountryFlagInput';
import OtpScreen from '../Auth/OtpScreen';

const HeroSectionClientside: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.trim() !== "") {
      setIsOtpDialogOpen(true);
    } else {
      alert("Please enter a mobile number");
    }
  };

  const handleContinueClick = () => {
    if (mobileNumber.trim() !== "") {
      setIsOtpDialogOpen(true);
    } else {
      alert("Please enter a mobile number");
    }
  };

  return (
    <div>        
      <form  onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="w-full mb-2 sm:w-[100px]">
            <Select name="country-code-select"onValueChange={(value) => setCountryCode(value)} value={countryCode}>
              <SelectTrigger className="w-full sm:w-[100px] bg-white">
                <SelectValue>
                  {CountryFlagInput.find(c => c.dial_code === countryCode)?.code && (
                    <span className="flex items-center">
                      <ReactCountryFlag
                        countryCode={CountryFlagInput.find(c => c.dial_code === countryCode)?.code || ""}
                        svg
                        className="mr-2 h-4 w-6"
                      />
                      {countryCode}
                    </span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {CountryFlagInput.map((country) => (
                  <SelectItem key={country.code} value={country.dial_code}>
                    <span className="flex items-center">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        className="mr-2 h-4 w-6"
                      />
                      {country.name} ({country.dial_code})
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Input
  name="mobileNumber"
  placeholder="Enter mobile number"
  value={mobileNumber}
  onChange={(e) => setMobileNumber(e.target.value)}
  className="w-full sm:w-[300px] bg-white outline-none"
/>
        </div>
        <p className="text-xs text-slate-700 mb-4 ">We&apos;ll send an OTP for Verification</p>
        <div className="space-y-3 mt-6 ">
          <Button size="lg"
            type="button"
            onClick={handleContinueClick}
            className="w-full sm:w-[410px] rounded-lg font-semibold py-2 bg-emerald-700 text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            {isLoginMode ? "Start Achieving Your Goal" : "Continue To Achieve Goal"}
          </Button>
          <p className="text-md text-slate-700 mx-4 sm:mx-8 md:mx-12 lg:mx-20 ">
            {isLoginMode ? "Already have a goal to achieve?" : "Ready to achieve your goal?"}{' '}
            <span onClick={() => setIsLoginMode(!isLoginMode)} className="text-slate-950 cursor-pointer font-medium">
              {isLoginMode ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </form>

      {isOtpDialogOpen && (
        <OtpScreen
          isOpen={isOtpDialogOpen}
          onClose={() => setIsOtpDialogOpen(false)}
          countryCode={countryCode}
          mobileNumber={mobileNumber}
        />
      )}
    </div>
  );
};

export default HeroSectionClientside;