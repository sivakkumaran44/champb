import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
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

const InvoiceModal = ({ isOpen, onOpenChange }: InvoiceModalProps = {}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const calculateGST = (amount: number) => {
    const gstRate = 18
    return (amount * gstRate) / 100
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const handleDownload = async () => {
    const invoiceElement = document.getElementById("invoice-content")
    if (invoiceElement) {
      const canvas = await html2canvas(invoiceElement, { scale: 2 })
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

  const taxableValue = invoiceData.subtotal - invoiceData.discount
  const gstAmount = calculateGST(taxableValue)
  const finalTotal = taxableValue + gstAmount

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto p-0 bg-white">
        <DialogTitle className="sr-only">Invoice Details</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed invoice information including purchase details and payment summary
        </DialogDescription>
        <div className="px-4 py-3 flex items-center justify-between bg-white border-b">
          <Button onClick={handleDownload} className="bg-[#10B981] hover:bg-[#0D9668]">
            <Download className="mr-2 h-4 w-4" />
            Download Invoice
          </Button>
        </div>
        <div id="invoice-content" className="relative bg-white p-4 sm:p-6">
          <div className="flex justify-start mb-4">
            <Image src={bChampLogo} alt="bChamp Logo" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mb-8 text-sm sm:text-base">
            <div>
              <div className="text-2xl sm:text-4xl text-gray-400 mb-2">№ 123</div>
              <div className="text-gray-600">
                <div>Date</div>
                <div className="font-medium">{formatDate(invoiceData.date)}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold mb-2">Invoice</div>
              <div className="text-gray-600">
                <div>GSTIN</div>
                <div className="font-medium">ABCD EFGH 0000 0000 0000</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 text-xs sm:text-sm">
            <div>
              <div className="text-gray-600 mb-2">From</div>
              <div>
                {invoiceData.from.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-2">To</div>
              <div>Lorem Ipsum<br />Lorem Ipsum<br />Lorem Ipsum</div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden mb-8 text-xs sm:text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 sm:p-4">Item</th>
                  <th className="text-right p-3 sm:p-4">Cost</th>
                  <th className="text-right p-3 sm:p-4">Qty</th>
                  <th className="text-right p-3 sm:p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3 sm:p-4">
                      <div className="font-medium">{item.name}</div>
                      {item.validFrom && item.expiresOn && (
                        <>
                          <div className="text-xs text-gray-400 mt-1">
                            Valid from: {formatDate(item.validFrom)}
                          </div>
                          <div className="text-xs text-gray-400">
                            Expires on: {formatDate(item.expiresOn)}
                          </div>
                        </>
                      )}
                    </td>
                    <td className="text-right p-3 sm:p-4">₹{item.cost.toFixed(2)}</td>
                    <td className="text-right p-3 sm:p-4">{item.quantity}</td>
                    <td className="text-right p-3 sm:p-4">₹{item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>₹{invoiceData.subtotal.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              <div>Discount</div>
              <div>₹{invoiceData.discount.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              <div>Taxable Value</div>
              <div>₹{taxableValue.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              <div>GST @ 18%</div>
              <div>₹{gstAmount.toFixed(2)}</div>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <div>Total</div>
              <div>₹{finalTotal.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default InvoiceModal
