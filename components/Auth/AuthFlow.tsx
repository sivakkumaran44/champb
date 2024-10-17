import React, { useState } from 'react';
import MobileInput from './MobileLoginForm/MobileLoginForm';
import OtpScreen from './OtpScreen/OtpScreen';
import NumberVerificationScreen from './NumberVerificationScreen/NumberVerificationScreen';
import DetailsFormDialog from './DetailsFormDialog/DetailsFormDialog';

interface AuthFlowProps {
  isLoginMode: boolean;
}

const AuthFlow: React.FC<AuthFlowProps> = ({ isLoginMode }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOtpScreenOpen, setIsOtpScreenOpen] = useState(false);
  const [isNumberVerificationOpen, setIsNumberVerificationOpen] = useState(false);
  const [isDetailsFormOpen, setIsDetailsFormOpen] = useState(false);

  const handleMobileSubmit = (newCountryCode: string, newMobileNumber: string) => {
    setCountryCode(newCountryCode);
    setMobileNumber(newMobileNumber);
    setIsOtpScreenOpen(true);
  };

  const handleOtpEdit = () => {
    setIsOtpScreenOpen(false);
    setIsNumberVerificationOpen(true);
  };

  const handleNumberVerificationClose = (updatedNumber?: string) => {
    setIsNumberVerificationOpen(false);
    if (updatedNumber) {
      const newCountryCode = updatedNumber.substring(0, updatedNumber.length - 10);
      const newMobileNumber = updatedNumber.slice(-10);
      setCountryCode(newCountryCode);
      setMobileNumber(newMobileNumber);
      setIsOtpScreenOpen(true);
    }
     };

  const handleOtpClose = () => {
    setIsOtpScreenOpen(false);
  };

  const handleOtpVerified = () => {
    setIsOtpScreenOpen(false);
    setIsDetailsFormOpen(true);
  };

  return (
    <div>
      <MobileInput
        initialCountryCode={countryCode}
        initialMobileNumber={mobileNumber}
        onSubmit={handleMobileSubmit}
        buttonText={isLoginMode ? "Already have a goal to achieve?" : "Ready to achieve your goal?"}
      />
      
      <OtpScreen
        isOpen={isOtpScreenOpen}
        onClose={handleOtpClose}
        countryCode={countryCode}
        mobileNumber={mobileNumber}
        onEdit={handleOtpEdit}
        onVerified={handleOtpVerified}
      />
      
      <NumberVerificationScreen
        isOpen={isNumberVerificationOpen}
        onClose={handleNumberVerificationClose}
        countryCode={countryCode}
        mobileNumber={mobileNumber}
        isEditing={true}
      />
      
      {isDetailsFormOpen && (
        <DetailsFormDialog
          isOpen={isDetailsFormOpen}
          onClose={() => setIsDetailsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default AuthFlow;