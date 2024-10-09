import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import OtpScreen from '@/components/Auth/OtpScreen';

interface NumberVerificationScreenProps {
    isOpen: boolean;
    onClose: (updatedNumber?: string) => void;
    countryCode: string;
    mobileNumber: string;
}

export default function NumberVerificationScreen({ isOpen, onClose, countryCode, mobileNumber }: NumberVerificationScreenProps) {
    const [editedMobileNumber, setEditedMobileNumber] = useState(mobileNumber);
    const [showOtpScreen, setShowOtpScreen] = useState(false);

    useEffect(() => {
        setEditedMobileNumber(mobileNumber);
    }, [mobileNumber]);

    const handleGetOtp = () => {
        console.log("OTP sent to:", editedMobileNumber);
        setShowOtpScreen(true);
    };

    const handleOtpScreenClose = () => {
        setShowOtpScreen(false);
        onClose(editedMobileNumber);
    };

    const handleUpdateMobileNumber = (newNumber: string) => {
        setEditedMobileNumber(newNumber);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <AlertDialog open={isOpen && !showOtpScreen}>
                <AlertDialogContent className="w-[80vw] max-w-[300px] p-4 sm:p-6 rounded-lg bg-neutral-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
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
                        <div className="flex items-center border-b-2 border-emerald-700">
                            <span className="text-zinc-950 mr-2">{countryCode}</span>
                            <Input
                                id="mobileNumber"
                                name="mobileNumber"
                                value={editedMobileNumber}
                                onChange={(e) => setEditedMobileNumber(e.target.value)}
                                className="flex-1 border-none outline-none focus:ring-0 focus:outline-none hover:border-transparent active:border-transparent p-2 text-lg"
                                style={{
                                    boxShadow: 'none',
                                    '--tw-ring-color': 'transparent',
                                } as React.CSSProperties}
                            />
                        </div>
                    </div>
                    <Button
                        type="button"
                        id="get-otp-button"
                        name="get-otp-button"
                        className="w-full bg-emerald-700 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-3 text-lg font-medium"
                        onClick={handleGetOtp}
                    >
                        Get OTP
                    </Button>
                </AlertDialogContent>
            </AlertDialog>
            {showOtpScreen && (
                <OtpScreen
                    isOpen={showOtpScreen}
                    onClose={handleOtpScreenClose}
                    countryCode={countryCode}
                    mobileNumber={editedMobileNumber}
                    onUpdateMobileNumber={handleUpdateMobileNumber}
                />
            )}
        </>
    );
}