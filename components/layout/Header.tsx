import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/img/Group 4.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white ">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="bChamp Logo"
          width={120}
          height={40}
          className="w-full h-auto object-contain"
        />
      </div>
      <Button className=" rounded-xl bg-emerald-700 hover:bg-emerald-700 font-semibold text-white px-6 py-2 text-sm">
        Sign in / Sign up
      </Button>
    </header>
  );
};

export default Header;