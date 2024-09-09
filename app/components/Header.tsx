import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from "@/app/img/Group 4.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <div className="flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
          <Image
            src={Logo}
            alt="QR Code"
            layout="responsive"
            width={250}
            height={250}
            className="w-auto h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        </div>
      </div>
      <Button variant="green" className="flex items-center text-white">
        <h3 className="scroll-m-20 text-sm tracking-tight">
          <span>Login / signup</span>
        </h3>
      </Button>
    </header>
  );
};

export default Header;
