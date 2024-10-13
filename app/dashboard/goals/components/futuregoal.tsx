"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crosshair } from "lucide-react";
import planData from "@/components/data/goals.json";
import InvoiceModal from "./InvoiceModal";
export default function Futuregoal() {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const openInvoiceModal = () => setIsInvoiceModalOpen(true);
  const closeInvoiceModal = () => setIsInvoiceModalOpen(false);
  return (
      <Card className="bg-[#10B9811A] border border-slate-200 mt-4">
          <CardHeader className="bg-white mt-2 mx-2 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-grow">
          <CardTitle className="text-xl sm:text-2xl font-semibold text-slate-700">
            {planData.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{planData.accessPeriod}</p>
        </div>
        <div className="w-full sm:w-auto flex justify-end">
          <Button 
            variant="secondary" 
            className="bg-transparent border border-emerald-700 text-emerald-700 whitespace-nowrap"
          >
            <Crosshair className="mr-2 h-4 w-4" />
            Set as my Current Goal
          </Button>
        </div>
      </div>
    </CardHeader>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Plan Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> 
              <Card className="p-4  bg-transparent border border-slate-700 ">
              <p className="text-sm text-muted-foreground text-slate-600">Purchased on</p>
              <div className="flex justify-between items-end mt-2">
                <p className="text-xl font-semibold text-slate-700 ml-auto">Sept 30 2024</p>
                </div>
            </Card>
            <Card className="p-4 bg-transparent border border-slate-700">
  <p className="text-sm text-muted-foreground text-slate-600">Renew at</p>
  <div className="flex items-end mt-2">
    <p className="text-xl font-semibold text-slate-700 ml-auto">Sept 30 2025</p>
  </div>
</Card>
          </div>
          <div className="flex flex-row justify-end gap-4 w-full">
      <Button 
        variant="outline" 
        className="border-emerald-700 bg-white text-emerald-700 hover:bg-emerald-50 flex-1 sm:flex-initial"
        onClick={openInvoiceModal}
      >
        View Invoice
      </Button>
      <Button 
        className="bg-slate-700 hover:bg-slate-600 text-white flex-1 sm:flex-initial"
      >
        Renew Now
      </Button>
    </div>
    <InvoiceModal 
        isOpen={isInvoiceModalOpen} 
        onClose={closeInvoiceModal}
      />
        </CardContent>
      </Card>
   
  );
}
