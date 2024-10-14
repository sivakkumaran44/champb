"use client"

import React from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo1 from '@/public/assets/img/Frame 427321252.svg';

const PrivacyPolicyHeader = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="bg-slate-200 p-4 flex justify-between items-center">
    <div className="flex items-center ml-4">
          <Image 
            src={Logo1} 
            alt="bChamp Logo" 
            className="w-full h-auto object-contain"
            priority={true} 
          />
        </div>
      <button
        onClick={handleGoBack}
        className="text-slate-700 hover:text-slate-700 transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>
    </header>
  );
};

export default PrivacyPolicyHeader;