"use client";
import React, { useEffect, useState } from 'react';
import { Check, Circle, Triangle, Square } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface QuestionSummary {
  answered: number;
  'not-answered': number;
  'marked-for-review': number;
  'not-visited': number;
}

interface SummaryItemProps {
  Icon: React.ElementType;
  color: string;
  label: string;
  value: number;
  iconFill?: string;
}

const Results: React.FC = () => {
  const router = useRouter();
  const [questionSummary, setQuestionSummary] = useState<QuestionSummary>({
    answered: 0,
    'not-answered': 0,
    'marked-for-review': 0,
    'not-visited': 0
  });

  useEffect(() => {
    const storedSummary = localStorage.getItem('questionSummary');
    if (storedSummary) {
      setQuestionSummary(JSON.parse(storedSummary));
    }
  }, []);

  const SummaryItem: React.FC<SummaryItemProps> = ({ Icon, color, label, value, iconFill }) => (
    <div className="flex items-center space-x-2">
      <Icon className={`${color} ${iconFill}`} /> {/* Applying fill color */}
      <span className="flex-1">{label}</span>
      <span>{value}</span>
    </div>
  );

  const handleViewFeedback = () => {
    router.push('/dashboard/process/report');
  };

  return (
    <div className='bg-[#10B981] min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16'>
      <Card className="w-full max-w-md bg-white rounded-3xl shadow-lg">
        <CardHeader className="text-center">
          <Check className="w-12 h-12 mx-auto text-green-500" />
          <CardTitle className="text-xl font-medium mt-4">
            Your test has been submitted successfully
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <SummaryItem
              Icon={Circle}
              color="text-green-500"
              label="Answered"
              value={questionSummary.answered}
              iconFill="fill-green-500"
            />
            <hr className="border-t border-slate-700 my-2" />
            <SummaryItem
              Icon={Circle}
              color="text-red-500"
              label="Not Answered"
              value={questionSummary['not-answered']}
              iconFill="fill-red-500"
            />
            <hr className="border-t border-slate-700 my-2" />
            <SummaryItem
              Icon={Triangle}
              color="text-purple-500"
              label="Marked for Review"
              value={questionSummary['marked-for-review']}
              iconFill="fill-purple-500"
            />
            <hr className="border-t border-slate-700 my-2" />
            <SummaryItem
              Icon={Square}
              color="text-gray-400"
              label="Not Visited"
              value={questionSummary['not-visited']}
              iconFill="fill-gray-400"
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleViewFeedback}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-purple-600 bg-white rounded-xl group hover:text-white transition-colors duration-200 ease-in-out delay-100"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-slate-700 rounded-xl group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#94A3B8] rounded-xl"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-slate-700 rounded-xl opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-white">View Test Feedback</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;
