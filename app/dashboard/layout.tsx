"use client"
import React from "react";
import DashboardHeader from "@/components/layout/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader>
        <div>
          {children}
        </div>
      </DashboardHeader>
    </div>
  );
};

export default DashboardLayout;