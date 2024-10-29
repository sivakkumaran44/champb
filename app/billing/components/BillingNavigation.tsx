import React from 'react';
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
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Billing</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm bg-transparent hover:bg-gray-50">
                  Plans and Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 bg-white rounded-md shadow-lg p-1">
                    <NavigationMenuLink asChild>
                      <a 
                        href="/billing/plans" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Plans & Pricing
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a 
                        href="/billing/transactions" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Transactions & Invoices
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default BillingNavigation;