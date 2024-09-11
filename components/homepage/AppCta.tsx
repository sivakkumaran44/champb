import React from 'react';
import Image from 'next/image';
import qrCodeImage from '@/public/assets/img/QR_code_for_mobile_English_Wikipedia 1.png'
import QImage  from '@/public/assets/img/App Store.png'
import QAImage from '@/public/assets/img/Google Play.png'
const AppCta = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Unlock success at your fingertips
      </h2>
      
 <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center">
      <Image
        src={qrCodeImage}
        alt="QR Code"
        width={250}
        height={250}
        className="w-full h-auto object-contain"
      />
      <p className="mt-2 text-sm text-gray-600">Scan QR to download</p>
    </div>
        <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center">
      <Image
        src={QImage}
        alt="QR Code"
        width={200}
        height={200}
        className="w-full h-auto object-contain"
      />
     
    </div>
    <div className="flex flex-col items-center">
      <Image
        src={QAImage}
        alt="QR Code"
        width={200}
        height={200}
        className="w-full h-auto object-contain"
      />
     
    </div>
          <button className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCta;