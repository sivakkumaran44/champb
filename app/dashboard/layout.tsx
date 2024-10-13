"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import DashboardHeader from "@/components/layout/Dashboardlayout/DashboardHeader";
import { TestTypeProvider } from '@/app/usecontext/TestTypeContext';
import Loading from './loading';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideHeaderAndSidebar = pathname === '/dashboard/process/report/viewsolutions';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; 
   }

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