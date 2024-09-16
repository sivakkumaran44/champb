"use client"
import React, { useState } from 'react';
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
  Target
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/public/assets/img/LOGO SVG.svg';
import LogoSmall from '@/public/assets/img/Logo.svg';

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

  const menuItems: MenuItem[] = [
    {
      icon: BookOpen,
      label: 'Tests',
      subItems: [
        { icon: FileText, label: 'All Tests' },
        { icon: PenTool, label: 'Practice Test' },
        { icon: Calendar, label: 'Previous Year Test' },
        { icon: AlignLeft, label: 'Mock Tests' },
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

  const toggleSection = (label: string) => {
    setExpandedSection(prevSection => prevSection === label ? '' : label);
  };

  const renderMenuItem = (item: MenuItem, index: number) => (
    <li key={index} className={`mb-1 ${!isExpanded ? 'flex justify-center' : ''}`}>
      <Button
        variant="lightgreen"
        className={`w-full ${isExpanded ? 'justify-start px-4' : 'justify-center px-2'} py-2 rounded-lg ${
          expandedSection === item.label
            ? 'bg-emerald-300 text-emerald-800'
            : 'text-emerald-700 hover:bg-emerald-200'
        }`}
        onClick={() => toggleSection(item.label)}
      >
        <item.icon size={20} />
        {isExpanded && <span className="ml-3 font-medium">{item.label}</span>}
      </Button>
      {isExpanded && item.subItems && expandedSection === item.label && (
        <ul className="mt-1 space-y-1">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Button
                variant="lightgreen"
                className="w-full justify-start px-4 py-2 rounded-lg bg-emerald-200 text-emerald-800 hover:bg-emerald-100"
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
    <div className={`hidden sm:flex flex-col h-full bg-slate-200 ${isExpanded ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="relative p-4">
        {isExpanded ? (
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
        )}
        <div
          onClick={toggleExpanded}
          className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer shadow-md"
        >
          <CircleChevronRight 
            size={20} 
            className={`text-emerald-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-2">
        <ul className="space-y-1">
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarContent;