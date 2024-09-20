"use client";
import React, { useState, useEffect } from "react";
import Dashboardheader from "@/components/useclient/Dashboardheader";
import SidebarContent from "@/components/useclient/DashboardSidebar";

const DashboardHeader = ({ children }: { children: React.ReactNode }) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="h-screen flex flex-col">
      <Dashboardheader toggleSidebar={handleSidebarToggle} />
            <div className="flex flex-1 overflow-hidden">
        <div
          className={`
            ${isMobile ? 'fixed inset-y-0 left-0 z-50' : ''}
            ${isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}
            ${!isMobile ? (isSidebarOpen ? "w-64" : "w-20") : "w-64"}
            bg-white transition-all duration-300 overflow-y-auto h-full
            ${!isMobile ? 'fixed top-0 left-0 z-10' : ''}
          `}
        >
          <SidebarContent isExpanded={isSidebarOpen} toggleExpanded={handleSidebarToggle} />
        </div>
  {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleSidebarToggle}
          />
        )}
        <main
          className={`
            flex-1 p-4 bg-white overflow-y-auto
            ${!isMobile ? (isSidebarOpen ? "ml-64" : "ml-20") : "ml-0"}
            transition-all duration-300
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
export default DashboardHeader;