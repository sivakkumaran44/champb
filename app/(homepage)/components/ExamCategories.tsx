import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const examCategories = [
  { name: "All", subcategories: [] },
  { 
    name: "SSC Exams", 
    icon: FileText, 
    subcategories: [
      { name: "CGL", description: "Combined Graduate Level Examination" },
      { name: "CHSL", description: "Combined Higher Secondary Level Examination" },
      { name: "MTS", description: "Multi Tasking Staff Examination" }
    ] 
  },
  { 
    name: "Banking Exams", 
    icon: Briefcase, 
    subcategories: [
      { name: "IBPS PO", description: "Institute of Banking Personnel Selection - Probationary Officer" },
      { name: "SBI PO", description: "State Bank of India - Probationary Officer" },
      { name: "RBI Grade B", description: "Reserve Bank of India - Grade B Officer" }
    ] 
  },
  { 
    name: "UG Entrance Exams", 
    icon: GraduationCap, 
    subcategories: [
      { name: "JEE Main", description: "Joint Entrance Examination - Main" },
      { name: "NEET", description: "National Eligibility cum Entrance Test" },
      { name: "CLAT", description: "Common Law Admission Test" }
    ] 
  }
];

export interface ExamCategory {
  name: string;
  icon?: React.ElementType;
  subcategories: {
    name: string;
    description: string;
  }[];
}