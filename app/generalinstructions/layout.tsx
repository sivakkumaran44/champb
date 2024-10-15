import React from 'react';
import Generalinstructions from "@/components/layout/Generalinstructionslayout/GeneralinstructionsHeader";
import HeaderToggle from '@/components/layout/Generalinstructionslayout/HeaderToggle';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <HeaderToggle>
        <Generalinstructions title="SSC CGL Mock test I (2024)" />
      </HeaderToggle>

      <main className="flex-grow overflow-auto">
        {children}
      </main>
    </div>
  );
}
