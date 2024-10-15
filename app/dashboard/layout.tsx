import { headers } from 'next/headers';
import DashboardHeader from "@/components/layout/Dashboardlayout/DashboardComponents";
import { TestTypeProvider } from '@/app/dashboard/components/usecontext/TestTypeContext';
import DashboardClient from '@/components/layout/Dashboardlayout/Dashboardloadinglayout';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const hideHeaderAndSidebar = pathname === '/dashboard/process/report/viewsolutions';

  return (
    <TestTypeProvider>
      <DashboardClient hideHeaderAndSidebar={hideHeaderAndSidebar}>
        {hideHeaderAndSidebar ? (
          children
        ) : (
          <DashboardHeader>
            {children}
          </DashboardHeader>
        )}
      </DashboardClient>
    </TestTypeProvider>
  );
}