"use client"

import { Search, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SupportTicket() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Support Ticket Zone
        </h1>
        <p className="text-gray-500">
          Submit your questions and get prompt assistance from our team!
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              className="pl-9 bg-white"
              type="search"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Select>
              <SelectTrigger className="w-[160px] bg-white">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">Open</SelectItem>
                <SelectItem value="medium"> On-going</SelectItem>
                <SelectItem value="low">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
              <PenLine className="h-4 w-4" />
              New Doubt
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Click on New Doubt to ask your question
        </p>
      </div>
    </div>
  )
}