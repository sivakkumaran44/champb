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
    <div>   
       <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-[500px] rounded-lg p-4 space-y-8">
   
    <div className="space-y-4 ml-8">
      <p className="text-xl text-muted-foreground mt-8 mb-2">Practice Makes a Person Perfect. Agree?</p>
      <p className="scroll-m-20 text-4xl tracking-tight">
      Our <span className="font-bold">Progressive Practice Test</span>
      </p>
      <p className="scroll-m-20 text-4xl tracking-tight">
helps you to <span className="font-bold">rank in the top 1%</span>.

      </p>
      <p className="text-sm text-muted-foreground">Trusted by Toppers to Practice, improve and succeed.</p>
    </div>

    <form className="space-y-2 ml-8">
      <div className="flex space-x-2">
        <div className="w-[120px] mr-2">
          <Select onValueChange={(value) => setCountryCode(value)} value={countryCode}>
            <SelectTrigger className="w-[100px]">
              <SelectValue>
                {CountryFlagInput.find(c => c.dial_code === countryCode)?.code && (
                  <span className="flex items-center">
                    <ReactCountryFlag
                      countryCode={CountryFlagInput.find(c => c.dial_code === countryCode)?.code || ""}
                      svg
                      className="mr-2 h-8 w-6"
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
                      className="mr-2 h-6 w-8"
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
          className="w-72"
        />       
      </div>
      <p className="text-sm text-muted-foreground ">We&apos;ll send an OTP for Verification</p>
   </form>
    <div className="space-y-0 ml-8">   
      <Button variant="green" size="lg" type="submit" className="mb-2 hover:bg-green-700">
        {isLoginMode ? "Continue To Achieve Goal" : "Join to Start Achieving Your Goal"}
      </Button>
       <p className="text-sm ml-6">
      {isLoginMode ? "Ready To Achieve Goal?" : "Already have a goal to achieve?"}{' '}
      <span onClick={() => setIsLoginMode(!isLoginMode)} className="text-primary cursor-pointer">
        {isLoginMode ? "Sign Up" : "Login"}
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
   <div className="mt-20"> 
   <PerformanceInsightsLayout/>
   </div>
   <div className="mt-20"> 
   <MasterYourSyllabus/>
   </div>
   
   <div className="mt-20"> 
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