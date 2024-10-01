import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Subject {
  subject: string;
}

interface SubjectDropdownProps {
  quizData: Subject[];
  currentSubject: number;
  handleSubjectChange: (index: number) => void;
}

const SubjectDropdown: React.FC<SubjectDropdownProps> = ({
  quizData,
  currentSubject,
  handleSubjectChange
}) => {
  const currentSubjectName = quizData[currentSubject]?.subject || "Select Subject";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-1/2 bg-slate-700 text-white">
          {currentSubjectName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-slate-700 text-white'>
        {quizData.map((subject, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleSubjectChange(index)}
          >
            {subject.subject}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SubjectDropdown;