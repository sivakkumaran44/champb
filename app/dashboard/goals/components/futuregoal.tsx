"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crosshair } from "lucide-react";
import planData from "@/components/data/goals.json";
import InvoiceModal from "./InvoiceModal";
const Futuregoal: React.FC = () => {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const openInvoiceModal = () => setIsInvoiceModalOpen(true);
  const closeInvoiceModal = () => setIsInvoiceModalOpen(false);
  return (
      <Card className="bg-[#10B9811A] border border-slate-200 mt-4">
         <CardHeader className="bg-white min-h-[8rem] m-2 rounded-xl p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col">
        <CardTitle className="text-xl font-bold text-gray-800">
          {planData.title}
        </CardTitle>
        <span className="text-sm text-gray-600 mt-1">
          {planData.accessPeriod}
        </span>
      </div>
      <Button 
        variant="secondary" 
        className="bg-transparent border border-emerald-700 text-emerald-700 whitespace-nowrap flex-shrink-0"
      >
        <Crosshair className="mr-2 h-4 w-4" />
        Set as my Current Goal
      </Button>
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
export default Futuregoal