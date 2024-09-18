
import React from "react";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { TestTypeProvider } from '@/app/usecontext/TestTypeContext';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TestTypeProvider>
      <div className="h-screen flex flex-col">
        <DashboardHeader>
          <div>
            {children}
          </div>
        </DashboardHeader>
      </div>
    </TestTypeProvider>
  );
};

export default DashboardLayout;