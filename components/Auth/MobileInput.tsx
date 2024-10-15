'use client'

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactCountryFlag from "react-country-flag";
import { CountryFlagInput } from '@/app/(homepage)/components/CountryFlagInput';

interface MobileInputProps {
  initialCountryCode?: string;
  initialMobileNumber?: string;
  onInputChange: (countryCode: string, mobileNumber: string) => void;
  onSubmit?: () => void;
  buttonText?: string;
}

const MobileInput: React.FC<MobileInputProps> = ({
  initialCountryCode = "+91",
  initialMobileNumber = "",
  onInputChange,
  onSubmit,
  buttonText
}) => {
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [mobileNumber, setMobileNumber] = useState(initialMobileNumber);

  useEffect(() => {
    onInputChange(countryCode, mobileNumber);
  }, [countryCode, mobileNumber, onInputChange]);

  const handleCountryCodeChange = (value: string) => {
    setCountryCode(value);
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
        <div className="w-full mb-2 sm:w-[100px]">
          <Select name="country-code-select" onValueChange={handleCountryCodeChange} value={countryCode}>
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
          onChange={handleMobileNumberChange}
          className="w-full sm:w-[300px] bg-white outline-none"
        />
      </div>
      {buttonText && (
      <Button 
        type="submit"
        className="w-full sm:w-[410px] rounded-lg font-semibold py-2 bg-emerald-700 text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
      >
        {buttonText}
      </Button>
      )}
    </form>
  );
};

export default MobileInput;