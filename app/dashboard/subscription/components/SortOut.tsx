
import React from 'react';
import { Button } from "@/components/ui/button";

interface SortOutProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
  categories: Array<{ id: number; name: string; }>;
}

const SortOut: React.FC<SortOutProps> = ({ onCategoryChange, activeCategory, categories }) => {
  return (
    <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 justify-center items-center overflow-auto">
      <Button
        key="all"
        variant={!activeCategory ? "default" : "outline"}
        onClick={() => onCategoryChange('All')}
        className={`
          px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
          ${!activeCategory 
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
          variant={activeCategory === category.name ? "default" : "outline"}
          onClick={() => onCategoryChange(category.name)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
            ${activeCategory === category.name 
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