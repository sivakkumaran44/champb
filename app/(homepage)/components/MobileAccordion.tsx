import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import examCategoriesData from '@/components/data/examCategories.json';

const iconMap = {
  FileText,
  Briefcase,
  GraduationCap
};

interface MobileAccordionProps {
  setSelectedCategory: (category: string) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
  allExams: any[];
}

const MobileAccordion: React.FC<MobileAccordionProps> = ({ 
  setSelectedCategory, 
  setIsDrawerOpen, 
  allExams 
}) => (
  <Accordion type="single" collapsible className="w-full mt-4">
    {examCategoriesData.examCategories.map((category) => (
      <AccordionItem value={category.name} key={category.name}>
        <AccordionTrigger className="flex items-center font-semibold">
          {category.icon && iconMap[category.icon as keyof typeof iconMap] && 
            React.createElement(iconMap[category.icon as keyof typeof iconMap], { className: "mr-2", size: 20 })}
          {category.name}
        </AccordionTrigger>
        <AccordionContent>
          {category.subcategories.length > 0 ? (
            category.subcategories.map((subcategory) => (
              <Button
                key={subcategory.name}
                variant="ghost"
                className="w-full justify-start text-left pl-8 py-2"
                onClick={() => {
                  setSelectedCategory(subcategory.name);
                  setIsDrawerOpen(false);
                }}
              >
                {subcategory.name}
              </Button>
            ))
          ) : (
            allExams
              .filter(exam => exam.category === category.name || category.name === "All")
              .map(exam => (
                <Button
                  key={exam.id}
                  variant="ghost"
                  className="w-full justify-start text-left pl-8 py-2"
                  onClick={() => {
                    setSelectedCategory(exam.name);
                    setIsDrawerOpen(false);
                  }}
                >
                  {exam.name}
                </Button>
              ))
          )}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default MobileAccordion;