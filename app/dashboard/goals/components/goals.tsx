"use client"
import React, { useState, useEffect } from "react"
import { Filter, X, Check } from "lucide-react"
import Currentgoal from "./currentgoal"
import Futuregoal from "./futuregoal"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const goals = [
  { type: 'current', purchaseDate: new Date('2025-09-30'), renewalDate: new Date('2026-09-30') },
  { type: 'future', purchaseDate: new Date('2024-09-30'), renewalDate: new Date('2025-09-30') },
]

export default function SubscriptionPlan() {
  const [filter, setFilter] = useState("all")
  const [isMobile, setIsMobile] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) 
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    setIsSheetOpen(false)
  }

  const sortedGoals = [...goals].sort((a, b) => {
    switch (filter) {
      case "recent":
        return b.purchaseDate.getTime() - a.purchaseDate.getTime()
      case "renewalNearest":
        return a.renewalDate.getTime() - b.renewalDate.getTime()
      case "renewalFurthest":
        return b.renewalDate.getTime() - a.renewalDate.getTime()
      case "last3Months":
        const threeMonthsAgo = new Date()
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
        return b.purchaseDate.getTime() - a.purchaseDate.getTime()
      case "2024":
        return b.purchaseDate.getFullYear() === 2024 ? -1 : 1
      default:
        return 0
    }
  })

  const filteredGoals = sortedGoals.filter(goal => {
    if (filter === "last3Months") {
      const threeMonthsAgo = new Date()
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
      return goal.purchaseDate >= threeMonthsAgo
    }
    if (filter === "2024") {
      return goal.purchaseDate.getFullYear() === 2024
    }
    return true
  })
  const FilterContent = ({ onSelect, currentFilter }: { onSelect: (filter: string) => void, currentFilter: string }) => (
    <div className="space-y-2">
      {[
        { key: "recent", label: "Recently Purchased" },
        { key: "renewalNearest", label: "Renewal Date (Nearest to furthest)" },
        { key: "renewalFurthest", label: "Renewal Date (Furthest to nearest)" },
        { key: "last3Months", label: "Purchased in the last 3 months" },
        { key: "2024", label: "Purchased in 2024" },
      ].map(({ key, label }) => (
        <Button
          key={key}
          variant="ghost"
          onClick={() => onSelect(key)}
          className={`w-full justify-between ${currentFilter === key ? 'bg-green-100 text-green-800' : ''}`}
        >
          {label}
          {currentFilter === key && <Check className="h-4 w-4" />}
        </Button>
      ))}
      <Button
        variant="outline"
        onClick={() => onSelect("all")}
        className={`w-full mt-4 ${currentFilter === "all" ? 'bg-green-100 text-green-800' : ''}`}
      >
        Reset
        {currentFilter === "all" && <Check className="h-4 w-4 ml-2" />}
      </Button>
    </div>
  )

  return (
    <div>
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-lg font-semibold sm:text-xl p-4 sm:p-6 rounded-lg flex justify-between items-center">
        <span className="text-center mx-auto">My Goal(s)</span>
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 ml-auto">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className=" bg-white">
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-0"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
              <SheetHeader className="relative">
                <SheetTitle>Filter Goals</SheetTitle>
              </SheetHeader>
              <FilterContent onSelect={handleFilterChange} currentFilter={filter} />
            </SheetContent>
          </Sheet>
        ) : (
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 p-4">
            <FilterContent onSelect={handleFilterChange} currentFilter={filter} />
          </DropdownMenuContent>
        </DropdownMenu>
        )}
      </div>
      <div className="w-full max-w-3xl mx-auto px-2 md:px-2 lg:px-2">
        {filteredGoals.map((goal, index) => (
          goal.type === 'current' ? <Currentgoal key={index} /> : <Futuregoal key={index} />
        ))}
      </div>
    </div>
  )
}