import React from 'react';
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTestType, TestType } from '@/app/dashboard/components/usecontext/TestTypeContext';
const TestTypeNavigation: React.FC = () => {
  const { activeTestType, setActiveTestType } = useTestType();
  const router = useRouter();
  const handleMenuItemClick = (item: TestType) => {
    setActiveTestType(item);
    switch (item) {
      case 'All':
        router.push('/dashboard');
        break;
      case 'Practice Test':
        router.push('/dashboard/practicetest');
        break;
      case 'Previous Year Question Test':
        router.push('/dashboard/previousyear');
        break;
      case 'Mock Test':
        router.push('/dashboard/mocktest');
        break;
      case 'Custom Test':
        router.push('/dashboard/customtest');
        break;
    }
  };
  const testTypes: TestType[] = ["All", "Practice Test", "Previous Year Question Test", "Mock Test", "Custom Test"];
  return (
    <NavigationMenu className="w-full mb-6">
      <NavigationMenuList className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 items-center justify-center">
        {testTypes.map((item) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink
              className={cn(
                "inline-block text-sm sm:text-lg font-normal cursor-pointer", 
                activeTestType === item 
                  ? "text-slate-700 border-b-2 border-slate-700" 
                  : "text-slate-700 text-opacity-60 hover:text-slate-700",
                "focus:outline-none pb-1 sm:pb-2 w-[140px] text-center"
              )}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default TestTypeNavigation;