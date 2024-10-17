import React, { useState, useEffect } from 'react';
import Mobileandcountrycode from './MobileLoginFormComponents/Mobileandcountrycode';
import ButtonCTA from './MobileLoginFormComponents/ButtonCTA';
import countryData from '@/components/data/countrydata.json';
interface MobileInputProps {
  initialCountryCode: string;
  initialMobileNumber: string;
  onSubmit: (countryCode: string, mobileNumber: string) => void;
  buttonText: string;
}
const MobileLoginForm: React.FC<MobileInputProps> = ({
  initialCountryCode,
  initialMobileNumber,
  onSubmit,
  buttonText,
}) => {
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [mobileNumber, setMobileNumber] = useState(initialMobileNumber);
  const [error, setError] = useState('');
 useEffect(() => {
    setCountryCode(initialCountryCode);
    setMobileNumber(initialMobileNumber);
  }, [initialCountryCode, initialMobileNumber]);

  const selectedCountry = countryData.find((c) => c.dial_code === countryCode);
  const validateMobileNumber = (number: string): boolean => {
    if (selectedCountry) {
      const { min, max } = selectedCountry;
      return number.length >= min && number.length <= max;
    }
    return false;
  };
  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (selectedCountry && value.length <= selectedCountry.max) {
      setMobileNumber(value); 
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Country Code: ${countryCode}, Mobile Number: ${mobileNumber}`);
    if (selectedCountry && validateMobileNumber(mobileNumber)) {
      onSubmit(countryCode, mobileNumber);
    } else {
      setError(
        `Mobile number must be between ${selectedCountry?.min} and ${selectedCountry?.max} digits for ${selectedCountry?.name}`
      );
      console.error(`Invalid mobile number for ${selectedCountry?.name}: ${mobileNumber}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Mobileandcountrycode
        countryCode={countryCode}
        mobileNumber={mobileNumber}
        onCountryCodeChange={setCountryCode}
        onMobileNumberChange={handleMobileNumberChange}
      />
      {error && <p className="text-red-700 text-sm mt-2">{error}</p>}
      <p className="text-xs text-slate-700 mb-4">We&apos;ll send an OTP for verification</p>
      <ButtonCTA buttonText={buttonText} />
    </form>
  );
};

export default MobileLoginForm;
