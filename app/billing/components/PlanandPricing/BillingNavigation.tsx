"use client";
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import PlansAndPricing from './PlansandPricing';

const BillingNavigation = () => {
  const [selectedItem, setSelectedItem] = useState("plans"); 

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
                Plans and Pricing
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-48 bg-white rounded-md shadow-lg p-1">
                  <NavigationMenuLink asChild>
                    <a 
                      href="/billing/plans" 
                      onClick={() => setSelectedItem("plans")} 
                      className={`block px-4 py-2 text-sm rounded-md ${
                        selectedItem === "plans" ? "bg-emerald-700 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Plans & Pricing
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a 
                      href="/billing/transactions" 
                      onClick={() => setSelectedItem("transactions")} 
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
      <PlansAndPricing/>
    </div>
  );
};

export default BillingNavigation;
