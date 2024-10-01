"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter, usePathname } from 'next/navigation';
import Logo1 from '@/public/assets/img/Frame 427321252.svg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter(); 
  const pathname = usePathname();  

  const handleGoBack = () => {
    router.back();
  };

  const isOnQuestionPaperScreen = pathname === '/generalinstructions/testspecificinstructions/testscreen/questionpaper';

  return (
    <header className="flex items-center justify-between mb-4 p-4">
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
            {title} 
          </div>
        </div>
       
        <div className="mr-8">
          {isOnQuestionPaperScreen && (
            <Button 
              onClick={handleGoBack} 
              className="bg-slate-700 text-white px-4 py-2 rounded-lg hidden md:block" 
            >
              Back to Test
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
