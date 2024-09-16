"use client";
import React, { useState } from "react";
import Dashboardheader from "@/components/useclient/Dashboardheader";
import SidebarContent from "@/components/useclient/DashboardSidebar";
const DashboardHeader = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="h-screen flex flex-col">
      <Dashboardheader toggleSidebar={handleSidebarToggle} />

      <div className="flex flex-1">
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } bg-white transition-all duration-300 overflow-hidden fixed top-0 left-0 h-full z-10`}
        >
          <SidebarContent isExpanded={isSidebarOpen} toggleExpanded={handleSidebarToggle} />
        </div>
        <main
          className={`flex-1 p-4 bg-white-100 overflow-auto ml-${
            isSidebarOpen ? "64" : "20"
          } flex justify-center items-center`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardHeader;
