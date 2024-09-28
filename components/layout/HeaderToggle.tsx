"use client"; 

import React from 'react';
import { usePathname } from 'next/navigation';  

const HeaderToggle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();  
  const shouldShowHeader = pathname !== '/generalinstructions/testspecificinstructions/testscreen'
 && pathname !== '/generalinstructions/testspecificinstructions/testscreen/results' ;
 
  if (!shouldShowHeader) {
    return null;
  }

  return <>{children}</>;
};

export default HeaderToggle;
