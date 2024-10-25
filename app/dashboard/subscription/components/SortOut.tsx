// SortOut.tsx
import React from 'react';
import { Button } from "@/components/ui/button";

interface SortOutProps {
  onCategoryChange: (categoryId: number | null) => void;
  activeCategoryId: number | null;
  categories: Array<{ id: number; name: string; }>;
}

const SortOut: React.FC<SortOutProps> = ({ 
  onCategoryChange, 
  activeCategoryId, 
  categories 
}) => {
  return (
    <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 justify-center items-center overflow-auto">
      <Button
        key="all"
        variant={activeCategoryId === null ? "default" : "outline"}
        onClick={() => onCategoryChange(null)}
        className={`
          px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
          ${activeCategoryId === null
            ? 'bg-emerald-300 text-slate-700 hover:bg-emerald-300'
            : 'text-slate-400 bg-transparent hover:bg-slate-200 border-slate-300'
          }
          hover:border-transparent shadow-none
        `}
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategoryId === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
            ${activeCategoryId === category.id
              ? 'bg-emerald-300 text-slate-700 hover:bg-emerald-300'
              : 'text-slate-400 bg-transparent hover:bg-slate-200 border-slate-300'
            }
            hover:border-transparent shadow-none
          `}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default SortOut;
