"use client"
import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import Image from "next/image"

import invoiceData from "../../../data/invoicesdata.json" 
import bChampLogo from "@/public/assets/img/LOGO SVG.svg" 

interface InvoiceModalProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function Component({ isOpen, onOpenChange }: InvoiceModalProps = {}) {
  const invoiceRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleDownload = async () => {
    if (invoiceRef.current) {
      const canvas = await html2canvas(invoiceRef.current, { scale: 2 })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 10
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('invoice.pdf')
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto p-0 bg-white">
        <div className="px-6 py-4 flex items-center justify-between bg-white border-b">
          <Button onClick={handleDownload} className="bg-[#10B981] hover:bg-[#0D9668]">
            <Download className="mr-2 h-4 w-4" />
            Download Invoice
          </Button>
        </div>

        <div ref={invoiceRef} className="relative bg-white p-4 sm:p-6">
          <div className="flex justify-start mb-4">
            <Image src={bChampLogo} alt="bChamp Logo" className="w-28 h-28 object-contain rounded-full" />
          </div>

          <div className="flex justify-between mb-8">
            <div>
              <div className="text-4xl text-gray-400 mb-2">№ {invoiceData.invoiceNumber}</div>
              <div className="text-sm text-gray-600">
                <div>Date</div>
                <div className="font-medium">{invoiceData.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-2">Invoice</div>
              <div className="text-sm text-gray-600">
                <div>GSTIN</div>
                <div className="font-medium">{invoiceData.gstin}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-gray-600 mb-2">From</div>
              <div className="text-sm">
                {invoiceData.from.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2">To</div>
              <div className="text-sm">
                {invoiceData.to.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4">Item</th>
                  <th className="text-right p-4">Cost</th>
                  <th className="text-right p-4">Qty</th>
                  <th className="text-right p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4">
                      <div>{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </td>
                    <td className="text-right p-4">₹{item.cost}</td>
                    <td className="text-right p-4">{item.quantity}</td>
                    <td className="text-right p-4">₹{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>₹{invoiceData.subtotal}</div>
            </div>
            <div className="flex justify-between">
              <div>Discount</div>
              <div>₹{invoiceData.discount}</div>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <div>Total</div>
              <div>₹{invoiceData.total}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
