// components/FilterSheet.tsx
import React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { X, Filter } from "lucide-react"
import FilterContent from "./filtercontent"

interface FilterSheetProps {
  filter: string
  isSheetOpen: boolean
  setIsSheetOpen: (open: boolean) => void
  handleFilterChange: (newFilter: string) => void
}

const FilterSheet: React.FC<FilterSheetProps> = ({ filter, isSheetOpen, setIsSheetOpen, handleFilterChange }) => (
  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    <SheetTrigger asChild>
      <Button variant="ghost" size="sm" className="flex items-center gap-2 ml-auto">
        <Filter className="h-4 w-4" />
        <span>Filter</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom" className="bg-white">
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
)

export default FilterSheet
