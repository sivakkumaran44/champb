import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import OtpScreen from '@/components/Auth/OtpScreen';
import MobileInput from './MobileInput';

interface NumberVerificationScreenProps {
    isOpen: boolean;
    onClose: (updatedNumber?: string) => void;
    countryCode: string;
    mobileNumber: string;
}

export default function NumberVerificationScreen({ isOpen, onClose, countryCode, mobileNumber }: NumberVerificationScreenProps) {
    const [editedCountryCode, setEditedCountryCode] = useState(countryCode);
    const [editedMobileNumber, setEditedMobileNumber] = useState(mobileNumber);
    const [showOtpScreen, setShowOtpScreen] = useState(false);

    useEffect(() => {
        setEditedCountryCode(countryCode);
        setEditedMobileNumber(mobileNumber);
    }, [countryCode, mobileNumber]);

    const handleGetOtp = () => {
        console.log("OTP sent to:", editedMobileNumber);
        setShowOtpScreen(true);
    };

    const handleOtpScreenClose = () => {
        setShowOtpScreen(false);
        onClose(`${editedCountryCode}${editedMobileNumber}`);
    };

    const handleMobileInputChange = (newCountryCode: string, newMobileNumber: string) => {
        setEditedCountryCode(newCountryCode);
        setEditedMobileNumber(newMobileNumber);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <AlertDialog open={isOpen && !showOtpScreen}>
                <AlertDialogContent className="w-[80vw] max-w-[460px] p-4 sm:p-6 rounded-lg bg-neutral-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <Button
                        onClick={() => onClose()}
                        type="button"
                        id="close-number-verification"
                        name="close-number-verification"
                        variant="ghost"
                        className="absolute right-2 top-2 w-8 h-8 p-0"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                    <AlertDialogTitle className="text-center text-slate-700 text-xl font-bold mb-2">
                        OTP VERIFICATION
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-sm text-slate-500 mb-2">
                        We will send you a one-time password to your mobile number
                    </AlertDialogDescription>
                    <div className="mb-4">
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-slate-500 text-center mb-2">
                            Enter Mobile number
                        </label>
                        <MobileInput
                            initialCountryCode={editedCountryCode}
                            initialMobileNumber={editedMobileNumber}
                            onInputChange={handleMobileInputChange}
                            onSubmit={handleGetOtp}
                            buttonText="Get OTP"
                        />
                    </div>
                </AlertDialogContent>
            </AlertDialog>
            {showOtpScreen && (
                <OtpScreen
                    isOpen={showOtpScreen}
                    onClose={handleOtpScreenClose}
                    countryCode={editedCountryCode}
                    mobileNumber={editedMobileNumber}
                    onUpdateMobileNumber={setEditedMobileNumber}
                />
            )}
        </>
    );
}