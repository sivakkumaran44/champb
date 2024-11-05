"use client";
import React,{useState} from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import InvoiceModal from './invoice-modal'
const TransactionsPage = () => {
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false)
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 max-w-4xl ">
      <h1 className="text-xl sm:text-2xl text-[#707F8F] mb-4 sm:mb-6 ">
        Upgrade Your Score Potential
      </h1>
     
      <Card className="overflow-hidden w-full">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 text-center">
         
            <div className="bg-emerald-100 p-4 sm:p-6 md:p-8">
              <div className="max-w-sm mx-auto md:max-w-none">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-black">
                  93 Days Access
                </h2>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-black">
                    Rs. 89
                  </span>
                </div>
                <p className="text-black/90 mb-6 text-sm sm:text-base">
                  Valid for 93 Days
                </p>
                
                <Button 
                  className="w-full bg-[#10B981] hover:bg-white/90 text-white transition-colors"
                >
                  Upgrade
                </Button>
              </div>
            </div>
            <div className="bg-[#ECFDF5] p-4 sm:p-6 md:p-8">
              <div className="max-w-sm mx-auto md:max-w-none">
                <h3 className="text-base sm:text-lg font-medium mb-4 text-gray-800">
                  Overview of your current plan
                </h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#6EDDB2] flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Date of Purchase</span>
                    </div>
                    <span className="text-gray-900 text-sm sm:text-base ml-7 sm:ml-0">20 Sep 2024</span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#6EDDB2] flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Date of Renew</span>
                    </div>
                    <span className="text-gray-900 text-sm sm:text-base ml-7 sm:ml-0">15 Nov 2024</span>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Button
  variant="outline"
  className="w-full sm:w-auto border-[#6EDDB2] text-[#6EDDB2] bg-white hover:bg-white transition-colors text-sm sm:text-base"
  onClick={() => setIsInvoiceOpen(true)}
>
  View Invoice
</Button>
                  <Button
                    className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 transition-colors text-sm sm:text-base"
                  >
                    Renew Now
                  </Button>
                  
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <InvoiceModal 
  isOpen={isInvoiceOpen}
  onOpenChange={setIsInvoiceOpen}
/>
    </div>
  );
};

export default TransactionsPage;