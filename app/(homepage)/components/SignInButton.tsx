'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NumberVerificationScreen from '@/components/Auth/NumberVerificationScreen/NumberVerificationScreen';
import OtpScreen from '@/components/Auth/OtpScreen/OtpScreen';
import DetailsFormDialog from '@/components/Auth/DetailsFormDialog/DetailsFormDialog';

interface AuthState {
  countryCode: string;
  mobileNumber: string;
  showNumberVerification: boolean;
  showOtpScreen: boolean;
  showDetailsForm: boolean;
  isEditing: boolean;
}

const initialState: AuthState = {
  countryCode: '+91',
  mobileNumber: '',
  showNumberVerification: false,
  showOtpScreen: false,
  showDetailsForm: false,
  isEditing: false,
};

export default function SignInButton() {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  const resetState = () => {
    setAuthState(initialState);
  };

  const handleSignInClick = () => {
    setAuthState({
      ...initialState,
      showNumberVerification: true,
    });
  };

  const handleNumberVerificationClose = (updatedNumber?: string) => {
    if (updatedNumber) {
      const [newCountryCode, newMobileNumber] = updatedNumber.split(/(?=\d{10}$)/);
      setAuthState({
        ...authState,
        countryCode: newCountryCode,
        mobileNumber: newMobileNumber,
        showNumberVerification: false,
        showOtpScreen: true,
        isEditing: false,
      });
    } else {
    resetState();
    }
  };

  const handleOtpClose = () => {
    resetState();
  };

  const handleOtpEdit = () => {
    setAuthState({
      ...authState,
      showOtpScreen: false,
      showNumberVerification: true,
      isEditing: true,
    });
  };

  const handleOtpVerified = () => {
    setAuthState({
      ...authState,
      showOtpScreen: false,
      showDetailsForm: true,
    });
  };

  const handleDetailsFormClose = () => {
    resetState();
  };

  return (
    <>
      <div className="relative flex flex-grow justify-end mt-2 md:mt-0">
        <Button
          size="sm"
          className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-base font-semibold text-white px-6 py-2"
          onClick={handleSignInClick}
        >
          Sign in / Sign up
        </Button>
      </div>

      {typeof window !== 'undefined' && (
        <>
          <NumberVerificationScreen
            isOpen={authState.showNumberVerification}
            onClose={handleNumberVerificationClose}
            countryCode={authState.countryCode}
            mobileNumber={authState.mobileNumber}
            isEditing={authState.isEditing}
          />
          <OtpScreen
            isOpen={authState.showOtpScreen}
            onClose={handleOtpClose}
            countryCode={authState.countryCode}
            mobileNumber={authState.mobileNumber}
            onEdit={handleOtpEdit}
            onVerified={handleOtpVerified}
          />
          <DetailsFormDialog
            isOpen={authState.showDetailsForm}
            onClose={handleDetailsFormClose}
          />
        </>
      )}
    </>
  );
}