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
import Image from 'next/image';
import illustrationImage from '../../img/Group 1198.svg'

const Login: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
 
  return (
    <div>   
      
      <div className="w-full max-w-10xl mx-auto  px-4 sm:px-6 lg:px-8">   
      <div className="min-h-[500px] rounded-lg p-6 sm:p-8 bg-slate-200 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 pr-0 md:pr-8">
          <div className="space-y-3 ">
            <p className="text-md sm:text-lg text-slate-700">Practice Makes a Person Perfect. Agree?</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-700 ">
              Our <span className="text-slate-900 font-semibold">Progressive Practice Test</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-700 ">
              help you to <span className="text-slate-900 font-semibold">rank in top 1%</span>
            </h2>
            <p className="text-sm text-slate-700">Trusted by Toppers to Practice, improve and succeed.</p>
          </div>
    
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
            <p className="text-xs text-slate-700">We'll send an OTP for Verification</p>
          </form>
          <div className="space-y-3">
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
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-[340px] sm:h-[440px]"> 
            <Image
              src={illustrationImage}
              alt="Progressive Practice Test Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      </div>
      <div className="mt-40"> 
        <ExamSelectionComponent/>
      </div>
      <div className="mt-40"> 
        <FindMyLevelTest/>
      </div>
      <div className="mb-40"> 
        <PerformanceInsightsLayout/>
      </div>
      <div className="mb-40"> 
        <MasterYourSyllabus/>
      </div>
      <div className="mb-40"> 
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