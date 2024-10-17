import React, { useState, useEffect } from 'react';
import CloseButton from './NumberVerificationComponets/CloseButton';
import Header from './NumberVerificationComponets/Header';
import MobileInput from '@/components/Auth/MobileLoginForm/MobileLoginForm';

interface NumberVerificationScreenProps {
  isOpen: boolean;
  onClose: (updatedNumber?: string) => void;
  countryCode: string;
  mobileNumber: string;
  isEditing: boolean;
}

const NumberVerificationScreen: React.FC<NumberVerificationScreenProps> = ({
  isOpen,
  onClose,
  countryCode,
  mobileNumber,
  isEditing,
}) => {
  const [editedCountryCode, setEditedCountryCode] = useState(countryCode);
  const [editedMobileNumber, setEditedMobileNumber] = useState(mobileNumber);

  useEffect(() => {
    if (isOpen) {
      setEditedCountryCode(countryCode);
      setEditedMobileNumber(mobileNumber);
    }
  }, [isOpen, countryCode, mobileNumber]);

  const handleGetOtp = (newCountryCode: string, newMobileNumber: string) => {
    console.log('OTP sent to:', `${newCountryCode}${newMobileNumber}`);
    onClose(`${newCountryCode}${newMobileNumber}`);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[460px] relative">
        <CloseButton onClick={handleClose} />
        <Header isEditing={isEditing} />
        <MobileInput
          initialCountryCode={editedCountryCode}
          initialMobileNumber={editedMobileNumber}
          onSubmit={handleGetOtp}
          buttonText="Get OTP"
        />
      </div>
    </div>
  );
};

export default NumberVerificationScreen;
