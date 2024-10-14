import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import Image from 'next/image';
import logo from "@/public/assets/img/LOGO SVG.svg"

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ isOpen, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (contentRef.current) {
      try {
        const dataUrl = await toPng(contentRef.current, { quality: 0.95 });
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] w-full max-w-[95vw] bg-white overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle> </DialogTitle>
          <DialogDescription>
          
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div ref={contentRef} className="bg-white p-4 sm:p-8">
            <div className="flex justify-between items-center mb-8">
              <Image src={logo} alt="bChamp Logo" width={150} height={50} className="w-32 sm:w-auto" />
              <div className="invisible print:hidden">
                <Button onClick={handleDownload} variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 text-xs sm:text-sm px-2 sm:px-4">
                  <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Download Invoice
                </Button>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <div className="text-2xl sm:text-4xl text-gray-500">№ 123</div>
              <div className="text-2xl sm:text-4xl font-bold">Invoice</div>
            </div>
            <div className="flex justify-between mb-6 text-sm sm:text-base">
              <div>
                <div className="font-bold">Date</div>
                <div>30 Sept, 2024</div>
              </div>
              <div>
                <div className="font-bold">GSTIN</div>
                <div>ABCD EFGH 0000 0000 0000</div>
              </div>
            </div>
            <div className="flex justify-between mb-6 text-sm sm:text-base">
              <div>
                <div className="font-bold">From</div>
                <div>Lorem Ipsum</div>
                <div>Lorem Ipsum</div>
                <div>Lorem Ipsum</div>
              </div>
              <div>
                <div className="font-bold">To</div>
                <div>Lorem Ipsum</div>
                <div>Lorem Ipsum</div>
                <div>Lorem Ipsum</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full mb-6 text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2">Item</th>
                    <th className="text-right py-2">Cost</th>
                    <th className="text-right py-2">Qty</th>
                    <th className="text-right py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">SSC CGL TEST 2024<br /><span className="text-xs sm:text-sm text-gray-500">12 Months Access</span></td>
                    <td className="text-right py-2">₹1061</td>
                    <td className="text-right py-2">1</td>
                    <td className="text-right py-2">₹1061</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end">
              <div className="w-1/2">
                <div className="flex justify-between py-2 border-b border-gray-200 text-sm sm:text-base">
                  <div>Subtotal</div>
                  <div>₹1061</div>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 text-sm sm:text-base">
                  <div>Discount</div>
                  <div>₹62</div>
                </div>
                <div className="flex justify-between py-2 font-bold text-sm sm:text-base">
                  <div>Total</div>
                  <div>₹999</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-12 right-4 sm:top-12 sm:right-8">
            <Button onClick={handleDownload} variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 text-xs sm:text-sm px-2 sm:px-4">
              <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Download Invoice
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceModal;