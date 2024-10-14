import React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterContentProps {
  onSelect: (filter: string) => void
  currentFilter: string
}

const FilterContent: React.FC<FilterContentProps> = ({ onSelect, currentFilter }) => (
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

export default FilterContent
