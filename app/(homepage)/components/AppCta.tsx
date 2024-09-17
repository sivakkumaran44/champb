import React from 'react';
import Image from 'next/image';
import qrCodeImage from '@/public/assets/img/QR_code_for_mobile_English_Wikipedia 1.svg'
import QImage  from '@/public/assets/img/App Store.svg'
import QAImage from '@/public/assets/img/Google Play.svg'
import AppCtaClient from '@/components/useclient/AppCtaClient';

const AppCta = () => {


  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-normal text-neutral-950 text-center mb-12">
        Unlock success at your fingertips
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center hidden md:flex">
      <div className="border-2 border-slate-950 p-1 rounded-lg">
        <Image
          src={qrCodeImage}
          alt="QR Code"
          width={150}
          height={150}
          className="w-full h-auto object-contain"
        />
      </div>
      <p className="mt-2 text-sm text-center text-gray-600">Scan QR to download</p>
    </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center">
            <Image
              src={QImage}
              alt="App Store"
              width={150}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={QAImage}
              alt="Google Play"
              width={150}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>
        <AppCtaClient/>
        </div>
      </div>
    </div>
  );
};

export default AppCta;