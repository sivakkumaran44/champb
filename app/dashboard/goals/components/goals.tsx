"use client"
import React, { useState, useEffect } from "react"
import Currentgoal from "./currentgoal"
import Futuregoal from "./futuregoal"
import FilterDropdown from "./filterdropdown"
import FilterSheet from "./filtersheet"
const goals = [
  { type: 'current', purchaseDate: new Date('2025-09-30'), renewalDate: new Date('2026-09-30') },
  { type: 'future', purchaseDate: new Date('2024-09-30'), renewalDate: new Date('2025-09-30') },
]

export default function Goal() {
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

  return (
    <div>
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-lg font-semibold sm:text-xl p-4 sm:p-6 rounded-lg flex justify-between items-center">
        <span className="text-center mx-auto">My Goal(s)</span>
        {isMobile ? (
          <FilterSheet
            filter={filter}
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
            handleFilterChange={handleFilterChange}
          />
        ) : (
          <FilterDropdown filter={filter} handleFilterChange={handleFilterChange} />
        )}
      </div>
      <div className="w-full mb-6 max-w-3xl mx-auto px-2 md:px-2 lg:px-2">
        {filteredGoals.map((goal, index) => (
          goal.type === 'current' ? <Currentgoal key={index} /> : <Futuregoal key={index} />
        ))}
      </div>
    </div>
  )
}
