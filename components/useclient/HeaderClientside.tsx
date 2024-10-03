import React from 'react';
import Image from 'next/image';
import Logo from "@/public/assets/img/LOGO SVG.svg";
import SearchBar from '@/app/(homepage)/components/SearchBar';
import MobileSearch from '@/app/(homepage)/components/MobileSearch';
import SignInButton from '@/app/(homepage)/components/SignInButton';
import CategoryDropdown from '@/app/(homepage)/components/CategoryDropdown';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-white relative">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="bChamp Logo"  
          className="w-auto h-16"
        />
      </div>
      <div className="hidden md:block flex-grow mx-4">
        <SearchBar />
      </div>
      <div className="md:hidden">
        <MobileSearch />
      </div>
      <div className="flex items-center">
        <CategoryDropdown />
      </div>
      <div className="flex items-center">
        <SignInButton />
      </div>   
    </header>
  );
};

export default Header;