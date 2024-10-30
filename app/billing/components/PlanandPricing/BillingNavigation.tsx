"use client";
import React, { useState, useEffect } from 'react';
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
  const [selectedItem, setSelectedItem] = useState("plans");

  // Update selected item based on current URL path
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/billing/transaction')) {
      setSelectedItem('transactions');
    } else if (path.includes('/billing')) {
      setSelectedItem('plans');
    }
  }, []);
  const handleNavigation = (path: string, item: string) => {
    setSelectedItem(item);
    window.location.href = path;
  };  
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
                {selectedItem === "plans" ? "Plans and Pricing" : "Transactions & Invoices"}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-48 bg-white rounded-md shadow-lg p-1">
                  <NavigationMenuLink asChild>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('/billing', 'plans');
                      }}
                      className={`block px-4 py-2 text-sm rounded-md ${
                        selectedItem === "plans" ? "bg-emerald-700 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Plans & Pricing
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('/billing/transaction', 'transactions');
                      }}
                      className={`block px-4 py-2 text-sm rounded-md ${
                        selectedItem === "transactions" ? "bg-emerald-700 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Transactions & Invoices
                    </a>
                  </NavigationMenuLink>
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