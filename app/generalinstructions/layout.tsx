import React from 'react';
import Generalinstructions from "@/components/layout/GeneralinstructionsHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
        <Generalinstructions  title="SSC CGL Mock test I (2024)" />
      </div>
      <div className="flex-grow mt-36 overflow-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}