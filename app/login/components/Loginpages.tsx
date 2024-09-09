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
import { CountryFlagInput } from './CountryFlagInput';
import ExamSelectionComponent from './Examselection';
import FindMyLevelTest from './LevelTest';
import PerformanceInsightsLayout from './Performance';
import MasterYourSyllabus from './MasterYourSyllabus';
import SuccessOddsAnalyzer from './SuccessOdeer';
import Qrcode from './Qrcode';
import Footer from './Footer';

const Login: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
 
  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">   
      <div className="min-h-[500px] rounded-lg p-8 space-y-8 bg-slate-200">
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-slate-700 mt-8 mb-2">Practice Makes a Person Perfect. Agree?</p>
          <h1 className="text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our <span className="font-bold">Progressive Practice Test</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl tracking-tight">
            helps you to <span className="font-bold">rank in the top 1%</span>.
          </h2>
          <p className="text-sm text-slate-700">Trusted by Toppers to Practice, improve and succeed.</p>
        </div>

        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="w-full sm:w-[120px]">
              <Select onValueChange={(value) => setCountryCode(value)} value={countryCode}>
                <SelectTrigger className="w-full sm:w-[100px]">
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
              className="w-full sm:w-72"
            />       
          </div>
          <p className="text-sm text-slate-500">We'll send an OTP for Verification</p>
        </form>
        <div className="space-y-2">   
        <Button
  variant="green"
  type="submit"
  className="w-full sm:w-auto mb-2 px-4 py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
>
  {isLoginMode ? "Continue To Achieve Goal" : "Start Achieving Your Goal"}
</Button>

          <p className="text-sm text-slate-700 text-center sm:text-left">
            {isLoginMode ? "Ready To Achieve Goal?" : "Already have a goal to achieve?"}{' '}
            <span onClick={() => setIsLoginMode(!isLoginMode)} className="text-primary cursor-pointer">
              <b>{isLoginMode ? "Sign Up" : "Login"}</b>
            </span>
          </p>
        </div>
      </div>
      <div className="mt-20"> 
        <ExamSelectionComponent/>
      </div>
      <div className="mt-20"> 
        <FindMyLevelTest/>
      </div>
      <div className="mb-20"> 
        <PerformanceInsightsLayout/>
      </div>
      <div className="mb-20"> 
        <MasterYourSyllabus/>
      </div>
      <div className="mb-20"> 
        <SuccessOddsAnalyzer/>
      </div>
      <div className="mt-20"> 
        <Qrcode/>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;