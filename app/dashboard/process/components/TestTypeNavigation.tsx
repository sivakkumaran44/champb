import React from 'react';
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTestType, TestType } from '@/app/usecontext/TestTypeContext';

const TestTypeNavigation: React.FC = () => {
  const { activeTestType, setActiveTestType } = useTestType();
  const router = useRouter();

  const handleMenuItemClick = (item: TestType) => {
    setActiveTestType(item);
    switch (item) {
      case 'Test Progress':
        router.push('/dashboard/ process');
        break;
      case 'Syllabus Coverage':
        router.push('/dashboard/syllabus');
        break;
      case 'Exam Selection Progress':
        router.push('/dashboard/examselectionprocess');
        break;
      default:
        router.push('/dashboard');  
    }
  };
  const progressTypes: TestType[] = [
    "Test Progress", 
    "Syllabus Coverage", 
    "Exam Selection Progress",
    
  ];

  const isProgressPage = progressTypes.includes(activeTestType);

  const navigationItems = isProgressPage ? progressTypes : progressTypes; 

  return (
    <NavigationMenu className="w-full mb-6">
      <NavigationMenuList className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 items-center justify-center">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink
              className={cn(
                "inline-block text-sm sm:text-lg font-normal cursor-pointer", 
                activeTestType === item 
                  ? "text-slate-700 border-b-2 border-slate-700" 
                  : "text-slate-700 text-opacity-60 hover:text-slate-700",
                "focus:outline-none pb-1 sm:pb-2 w-[200px] text-center"
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
