import React from "react";
import DashboardClient from "@/components/layout/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardClient>
      {children}
    </DashboardClient>
  );
};

export default DashboardLayout;