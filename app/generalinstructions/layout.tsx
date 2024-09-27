import React from 'react';
import Generalinstructions from "@/components/layout/GeneralinstructionsHeader";
import HeaderToggle from '@/components/layout/HeaderToggle';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <HeaderToggle>
        <div className="fixed top-0 left-0 right-0 z-10 bg-white h-[60px]">
          <Generalinstructions title="SSC CGL Mock test I (2024)" />
        </div>
      </HeaderToggle>

      <main className="flex-grow overflow-">
        {children}
      </main>
    </div>
  );
}