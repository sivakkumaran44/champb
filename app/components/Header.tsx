import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from "@/app/img/Group 4.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <div className="flex items-center justify-center overflow-hidden">
          <Image
            src={Logo}
            alt="Logo"
            layout="responsive"
            width={250}
            height={250}
            className="w-auto h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
          />
        </div>
      </div>
      <Button variant="green" className="flex items-center text-white px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <h3 className="scroll-m-20 tracking-tight">
          <span>Login / Signup</span>
        </h3>
      </Button>
    </header>
  );
};

export default Header;
