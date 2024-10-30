"use client";
import React from 'react';
import {  usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const BillingNavigation = () => {
    const pathname = usePathname();
  
  const isTransactions = pathname?.includes('/billing/transaction');
  const currentPage = isTransactions ? "Transactions & Invoices" : "Plans and Pricing";

  const menuItems = [
    { 
      title: "Plans & Pricing", 
      href: "/billing",
      active: !isTransactions
    },
    { 
      title: "Transactions & Invoices", 
      href: "/billing/transaction",
      active: isTransactions
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Billing</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm bg-transparent hover:bg-gray-50">
                {currentPage}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-48 bg-white rounded-md shadow-lg p-1">
                  {menuItems.map((item) => (
                    <NavigationMenuLink asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          item.active 
                            ? "bg-emerald-700 text-white" 
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default BillingNavigation;