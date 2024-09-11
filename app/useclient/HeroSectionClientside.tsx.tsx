"use client";
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
import { CountryFlagInput } from '../login/components/CountryFlagInput';


const HeroSectionClientside: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
 
  return (
    <div>        
      <form className="space-y-4">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="w-full sm:w-[100px]">
                <Select onValueChange={(value) => setCountryCode(value)} value={countryCode}>
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
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full sm:w-[300px] bg-white"
              />       
            </div>
            <p className="text-xs text-slate-700">We&apos;ll send an OTP for Verification</p>
      </form>
          <div className="space-y-3 mt-6">
  <Button
    type="submit"
    className="w-full sm:w-[410px] py-2 bg-emerald-700 text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
  >
    {isLoginMode ? "Start Achieving Your Goal" : "Continue To Achieve Goal"}
  </Button>

  <p className="text-slate-700 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-3">

    {isLoginMode ? "Already have a goal to achieve?" : "Ready to achieve your goal?"}{' '}
    <span onClick={() => setIsLoginMode(!isLoginMode)} className="text-slate-900 cursor-pointer font-semibold">
      {isLoginMode ? "Login" : "Sign Up"}
    </span>
  </p>
</div>
</div>
  
  );
};

export default HeroSectionClientside;