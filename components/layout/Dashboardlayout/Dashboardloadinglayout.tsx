'use client'

import React, { useEffect, useState } from "react";
import Loading from '@/app/dashboard/loading';

interface DashboardClientProps {
  children: React.ReactNode;
  hideHeaderAndSidebar: boolean;
}

export default function DashboardClient({ children, hideHeaderAndSidebar }: DashboardClientProps) {
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
    <div className="h-screen flex flex-col">
      {hideHeaderAndSidebar ? (
        <div className="h-full overflow-auto">
          {children}
        </div>
      ) : (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}