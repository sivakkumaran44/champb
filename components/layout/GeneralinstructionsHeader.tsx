import React from 'react';
import Image from 'next/image';
import Logo1 from '@/public/assets/img/Frame 427321252.svg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({  }) => {
  return (
    <header className="flex items-center justify-between p-8 ">
      <div className="bg-blue-50 h-14 flex items-center justify-between w-full rounded-xl">
        <div className="flex items-center ml-8">
          <Image 
            src={Logo1} 
            alt="bChamp Logo" 
            className="w-full h-auto object-contain"
            priority={true} 
          />
        </div>
      
        <div className="flex-grow flex justify-center">
          <div className="text-sm font-medium text-slate-700 bg-green-100 px-3 py-1 rounded-full">
            SSC CGL Mock test I (2024)
          </div>
        </div>
       
        <div className="mr-8" />
      </div>
    </header>
  );
};

export default Header;