"use client"
import React from "react";
import { usePathname } from 'next/navigation';
import DashboardHeader from "@/components/layout/DashboardHeader";
import { TestTypeProvider } from '@/app/usecontext/TestTypeContext';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideHeaderAndSidebar = pathname === '/dashboard/process/report/viewsolutions';

  return (
    <TestTypeProvider>
      <div className="h-screen flex flex-col">
        {hideHeaderAndSidebar ? (
          <div className="h-full overflow-auto">
            {children}
          </div>
        ) : (
          <DashboardHeader>
            <div>
              {children}
            </div>
          </DashboardHeader>
        )}
      </div>
    </TestTypeProvider>
  );
};

export default DashboardLayout;