"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Briefcase, GraduationCap, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import examCategoriesData from '@/components/data/examCategories.json';

const iconMap = {
  FileText,
  Briefcase,
  GraduationCap
};

const CategoryDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-6 py-3 bg-white text-slate-700 hover:bg-slate-100 focus:ring-0 border-r border-emerald-500 text-lg">
          {selectedCategory}
          <ChevronDown className="ml-2" size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {examCategoriesData.examCategories.map((category) => (
          <React.Fragment key={category.name}>
            {category.subcategories.length > 0 ? (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  {category.icon && iconMap[category.icon as keyof typeof iconMap] && 
                    React.createElement(iconMap[category.icon as keyof typeof iconMap], { className: "mr-2", size: 20 })}
                  {category.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="w-64">
                    {category.subcategories.map((subcategory) => (
                      <DropdownMenuItem
                        key={subcategory.name}
                        onSelect={() => setSelectedCategory(subcategory.name)}
                      >
                        <div>
                          <div>{subcategory.name}</div>
                          <p className="text-xs text-muted-foreground">{subcategory.description}</p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem onSelect={() => setSelectedCategory(category.name)}>
                {category.icon && iconMap[category.icon as keyof typeof iconMap] && 
                  React.createElement(iconMap[category.icon as keyof typeof iconMap], { className: "mr-2", size: 20 })}
                {category.name}
              </DropdownMenuItem>
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;