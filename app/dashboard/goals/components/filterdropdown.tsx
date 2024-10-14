// components/FilterDropdown.tsx
import React from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"
import FilterContent from "./filtercontent"

interface FilterDropdownProps {
  filter: string
  handleFilterChange: (newFilter: string) => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ filter, handleFilterChange }) => (
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
)

export default FilterDropdown
