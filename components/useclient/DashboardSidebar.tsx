type TestType = 'All' | 'Practice Test' | 'Previous Year Question Test' | 'Mock Test' | 'Custom Test';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  CircleChevronRight,
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
  Menu
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/public/assets/img/LOGO SVG.svg';
import LogoSmall from '@/public/assets/img/Logo.svg';
import { useTestType } from '@/app/usecontext/TestTypeContext';
interface MenuItem {
  icon: React.ElementType;
  label: string;
  subItems?: { icon: React.ElementType; label: string }[];
}

interface SidebarContentProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
}
const SidebarContent: React.FC<SidebarContentProps> = ({ isExpanded, toggleExpanded }) => {
  const [expandedSection, setExpandedSection] = useState<string>('Tests');
  const [isMobile, setIsMobile] = useState(false);
  const { activeTestType, setActiveTestType } = useTestType();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems: MenuItem[] = [
    {
      icon: BookOpen,
      label: 'Tests',
      subItems: [
        { icon: FileText, label: 'All' },
        { icon: PenTool, label: 'Practice Test' },
        { icon: Calendar, label: 'Previous Year Question Test' },
        { icon: AlignLeft, label: 'Mock Test' },
        { icon: Settings, label: 'Custom Test' },
      ]
    },
    {
      icon: TrendingUp,
      label: 'Progress',
      subItems: [
        { icon: BarChart2, label: 'Test Progress' },
        { icon: Clock, label: 'Syllabus Coverage' },
        { icon: Target, label: 'Exam Selection Progress' },
      ]
    },
    { icon: CreditCard, label: 'Subscription' },
  ];
  const handleItemClick = (label: string) => {
    if (!isExpanded) {
      toggleExpanded();
    }
    setExpandedSection(label);
  };

  const handleTabClick = (label: string) => {
    setActiveTestType(label as TestType);
  };

  const renderMenuItem = (item: MenuItem, index: number) => (
    <li key={index} className={`mb-1 ${!isExpanded && !isMobile ? 'flex justify-center' : ''}`}>
      <Button
        variant="lightgreen"
        className={`w-full ${isExpanded || isMobile ? 'justify-start px-4' : 'justify-center px-2'} py-2 rounded-lg ${
          expandedSection === item.label
            ? 'bg-emerald-300 text-emerald-800'
            : 'text-emerald-700 hover:bg-emerald-200'
        }`}
        onClick={() => handleItemClick(item.label)}
      >
        <item.icon size={20} />
        {(isExpanded || isMobile) && <span className="ml-3 font-medium">{item.label}</span>}
      </Button>
      {(isExpanded || isMobile) && item.subItems && expandedSection === item.label && (
        <ul className="mt-1 space-y-1">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Button
                variant="lightgreen"
                className={`w-full justify-start px-4 py-2 rounded-lg ${
                  activeTestType === subItem.label
                    ? 'bg-emerald-300 text-emerald-800'
                    : 'bg-emerald-200 text-emerald-800 hover:bg-emerald-100'
                }`}
                onClick={() => handleTabClick(subItem.label)}
              >
                <subItem.icon size={16} />
                <span className="ml-3">{subItem.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <>
      {isMobile && !isExpanded && (
        <Button
          variant="ghost"
          className="fixed top-4 left-4 z-50"
          onClick={toggleExpanded}
        >
          <Menu size={24} />
        </Button>
      )}
      <div 
        className={`${
          isMobile 
            ? `fixed inset-y-0 left-0 z-40 ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`
            : 'hidden sm:flex'
        } flex-col h-full bg-slate-200 ${
          isExpanded || isMobile ? 'w-64' : 'w-20'
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          {(!isMobile || !isExpanded) && (
            isExpanded || isMobile ? (
              <Image 
                src={Logo} 
                alt="bChamp Logo" 
                width={120} 
                height={20} 
                priority 
              />
            ) : (
              <Image 
                src={LogoSmall} 
                alt="bChamp Logo" 
                width={32} 
                height={32} 
                priority 
              />
            )
          )}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="p-0 bg-transparent hover:bg-transparent"
              onClick={toggleExpanded}
            >
              <CircleChevronRight 
                size={20} 
                className={`duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              />
            </Button>
          )}
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </ul>
        </nav>
      </div>
      {isMobile && isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleExpanded}
        />
      )}
    </>
  );
};

export default SidebarContent;