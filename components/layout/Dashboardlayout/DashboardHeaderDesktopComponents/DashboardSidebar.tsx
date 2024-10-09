"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import DashboardSidebarMobile from '@/components/layout/Dashboardlayout/DashboardHeaderDesktopComponents/DashboardSidebarMobile/DashboardSdiebarMobile'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  BookOpen,
  FileText,
  PenTool,
  Calendar,
  AlignLeft,
  Settings,
  TrendingUp,
  CreditCard,
  BarChart2,
  Clock,
  Target,
  ChevronRight,
  User,
  Sliders,
  BookmarkIcon,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react'
import { useTestType, TestType } from '@/app/usecontext/TestTypeContext'

import Logo from '@/public/assets/img/LOGO SVG.svg'
import LogoSmall from '@/public/assets/img/Logo.svg'

interface MenuItem {
  icon: React.ElementType
  label: string
  href?: string
  subItems?: { icon: React.ElementType; label: string; href: string }[]
}

const menuItems: MenuItem[] = [
  {
    icon: BookOpen,
    label: 'Tests',
    subItems: [
      { icon: FileText, label: 'All', href: '/dashboard' },
      { icon: PenTool, label: 'Practice Test', href: '/dashboard/practicetest' },
      { icon: Calendar, label: 'Previous Year Question Test', href: '/dashboard/previousyear' },
      { icon: AlignLeft, label: 'Mock Test', href: '/dashboard/mocktest' },
      { icon: Settings, label: 'Custom Test', href: '/dashboard/customtest' },
    ]
  },
  {
    icon: TrendingUp,
    label: 'Progress',
    subItems: [
      { icon: BarChart2, label: 'Test Progress', href: '/dashboard/process' },
      { icon: Clock, label: 'Syllabus Coverage', href: '/dashboard/syllabus' },
      { icon: Target, label: 'Exam Selection Progress', href: '/dashboard/examselectionprocess'},
    ]
  },
  { icon: CreditCard, label: 'Subscription', href: '/dashboard/subscription' },
]

function CustomTooltip({ children, content }: { children: React.ReactNode; content: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-white text-black rounded-2xl shadow-lg py-2 px-3 flex items-center space-x-2 relative">
          <svg
            className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0C5 0 9 4 9 8C9 12 5 16 0 16V0Z" fill="white" />
          </svg>
          <span className="font-semibold text-gray-800">{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string>('Tests');
  const [isMobile, setIsMobile] = useState(false);
  const { activeTestType, setActiveTestType } = useTestType();
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
     
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (label: string, href?: string) => {
    if (!isExpanded && !isMobile) {
      setIsExpanded(true);
    }
    setExpandedSection(prev => prev === label ? '' : label);

    if (href) {
      setActiveTestType(label as TestType);
      router.push(href);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubItemClick = (label: TestType, href: string) => {
    setActiveTestType(label);
    router.push(href);
  };

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.label} className="mb-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start transition-all duration-300 ease-in-out bg-transparent hover:bg-transparent",
                isExpanded ? "px-4" : "px-2 flex items-center justify-center",
                expandedSection === item.label && "bg-emerald-500 text-white rounded-2xl"
              )}
              onClick={() => handleItemClick(item.label, item.href)}
            >
              <item.icon className="h-4 w-4" />
              <span className={cn(
                "ml-3 transition-all duration-300",
                isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0 overflow-hidden"
              )}>{item.label}</span>
              {isExpanded && item.subItems && (
                <ChevronRight className={cn(
                  "ml-auto h-4 w-4 transition-transform duration-300",
                  expandedSection === item.label && "rotate-90"
                )} />
              )}
            </Button>
          </TooltipTrigger>
          {!isExpanded && <TooltipContent side="right" className="bg-emerald-500 text-white border-emerald-500">{item.label}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
      {item.subItems && (
        <div className={cn(
          "mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded && expandedSection === item.label ? "max-h-96" : "max-h-0"
        )}>
          {item.subItems.map((subItem) => (
            <Button
              key={subItem.label}
              variant="ghost"
              className={cn(
                "w-full justify-start transition-all duration-300 ease-in-out bg-transparent  hover:bg-transparent",
                activeTestType === subItem.label && "bg-emerald-500 text-white hover:bg-emerald-500"
              )}
              onClick={() => handleSubItemClick(subItem.label as TestType, subItem.href)}
            >
              <subItem.icon className="h-4 w-4" />
              <span className="ml-3">{subItem.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );

  const sidebarContent = (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center justify-between p-4">
        <div className="flex-shrink-0 transition-all duration-300 ease-in-out">
          <Image 
            src={isExpanded ? Logo : LogoSmall} 
            alt="bChamp Logo" 
            width={isExpanded ? 120 : 40} 
            height={isExpanded ? 20 : 40} 
            priority 
            className="transition-all duration-300 ease-in-out"
          />
        </div>
        {!isMobile && isExpanded && (
  <CustomTooltip content="Close Sidebar">
    <Button
      variant="ghost"
      size="icon"
      className="p-0 bg-transparent hover:bg-transparent"
      onClick={toggleExpanded} 
    >
      <PanelLeftClose size={20} className='text-emerald-700' />
    </Button>
  </CustomTooltip>
)}
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="flex flex-col space-y-1">
          {menuItems.map(renderMenuItem)}
        </nav>
      </ScrollArea>
      {!isMobile && !isExpanded && (
        <div className='flex items-center justify-center'>
  <CustomTooltip content="Open Sidebar">
    <Button
      variant="ghost"
      size="icon"
      className="p-0 bg-transparent  hover:bg-transparent "  
      onClick={toggleExpanded}
    >
      <PanelLeftOpen size={20} className="text-emerald-700 " />
    </Button>
  </CustomTooltip>
  </div>
)}
    
      <div className="p-4 border-t ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomTooltip content="Settings">
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start transition-all duration-300 ease-in-out bg-transparent  hover:bg-transparent",
                  isExpanded ? "px-4 py-2" : "px-2 py-2 flex items-center justify-center"
                )}
              >
                <Settings className="h-5 w-5 transition-all duration-300 ease-in-out" />
                <span className={cn(
                  " transition-all duration-300 ease-in-out",
                  isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0 overflow-hidden"
                )}>
                  Settings
                </span>
              </Button>
            </CustomTooltip>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Sliders className="mr-2 h-4 w-4" />
              <span>Notifications Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookmarkIcon className="mr-2 h-4 w-4" />
              <span>Saved Tests</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <>
    <div className='md:hidden'>
      <DashboardSidebarMobile />
      </div>
      <aside
        className={cn(
          "hidden h-screen flex-col border-r bg-slate-200 md:flex transition-all duration-300 ease-in-out",
          isExpanded ? "w-64" : "w-[80px]"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
        
     