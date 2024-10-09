"use client"

import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  Menu,
  X,
} from 'lucide-react'
import { useTestType, TestType } from '@/app/usecontext/TestTypeContext'

interface MenuItem {
  label: string
  icon: React.ElementType
  href?: string
  subItems?: MenuItem[]
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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export default function Component() {
  const [expandedSection, setExpandedSection] = useState<string>('Tests')
  const [isOpen, setIsOpen] = useState(false)
  const { activeTestType, setActiveTestType } = useTestType()
  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useIsMobile()

  useEffect(() => {
    const currentPath = pathname.split('/').pop()
    const currentItem = menuItems.flatMap(item => item.subItems || []).find(subItem => subItem.href?.includes(currentPath || ''))
    if (currentItem) {
      setActiveTestType(currentItem.label as TestType)
      const parentItem = menuItems.find(item => item.subItems?.includes(currentItem))
      if (parentItem) {
        setExpandedSection(parentItem.label)
      }
    }
  }, [pathname, setActiveTestType])

  const handleItemClick = (label: string, href?: string) => {
    setExpandedSection(prev => prev === label ? '' : label)

    if (href) {
      setActiveTestType(label as TestType)
      router.push(href)
      setIsOpen(false)
    } else {
      console.warn(`No href defined for ${label}`);
    }
  }

  const handleSubItemClick = (label: TestType, href?: string) => {
    if (href) {
      setActiveTestType(label)
      router.push(href)
      setIsOpen(false)
    } else {
      console.warn(`No href defined for ${label}`);
    }
  }

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.label} className="mt-4 mb-1">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start",
          expandedSection === item.label && "bg-emerald-500 text-white"
        )}
        onClick={() => handleItemClick(item.label, item.href)}
      >
        <item.icon className="h-4 w-4 mr-2" />
        <span>{item.label}</span>
        {item.subItems && (
          <ChevronRight className={cn(
            "ml-auto h-4 w-4 transition-transform",
            expandedSection === item.label && "rotate-90"
          )} />
        )}
      </Button>
      {item.subItems && expandedSection === item.label && (
        <div className="mt-1 space-y-1">
          {item.subItems.map((subItem) => (
            <Button
              key={subItem.label}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                activeTestType === subItem.label && "bg-emerald-500 text-white"
              )}
              onClick={() => handleSubItemClick(subItem.label as TestType, subItem.href)}
            >
              <subItem.icon className="h-4 w-4 mr-2" />
              <span>{subItem.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  )

  const sidebarContent = (
    <div className="flex h-full flex-col bg-slate-100">
      {isMobile && (
        <div className="flex justify-end p-4">
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
      )}
      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="flex flex-col space-y-1">
          {menuItems.map(renderMenuItem)}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onSelect={() => setIsOpen(false)}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsOpen(false)}>
              <Sliders className="mr-2 h-4 w-4" />
              <span>Notifications Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsOpen(false)}>
              <BookmarkIcon className="mr-2 h-4 w-4" />
              <span>Saved Tests</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )

  return (
    <>
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-4 left-4 z-40 md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            {sidebarContent}
          </SheetContent>
        </Sheet>
      ) : (
        <aside className="hidden md:block w-[240px] h-screen overflow-y-auto bg-slate-100">
          {sidebarContent}
        </aside>
      )}
    </>
  )
}
