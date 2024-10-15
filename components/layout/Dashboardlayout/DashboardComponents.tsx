import React from "react"
import Sidebar from "./DashboardHeaderDesktopComponents/DashboardSidebar"
import DashboardHeader from "./DashboardHeaderDesktopComponents/Dashboardheader"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen   overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader  />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}