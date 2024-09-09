import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/app/img/Group 4.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white ">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="bChamp Logo"
          width={120}
          height={40}
          className="w-auto h-12"
        />
      </div>
      <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 text-sm">
        Login / Signup
      </Button>
    </header>
  );
};

export default Header;