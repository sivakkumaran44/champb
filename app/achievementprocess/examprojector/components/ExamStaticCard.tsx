"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon } from "lucide-react";
import { useState } from "react";
import data from '../../data/data.json';

interface DashboardData {
  summary: {
    timeUntilExam: number;
    currentStandardProjection: number;
    currentActualProjection: number;
    standardProjectionChange: number;
    actualProjectionChange: number;
  }
}

const ExamStaticCard = () => {
  const [dashboardData] = useState<DashboardData>(data);
  const { summary } = dashboardData;

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Card className="flex-1 min-w-[200px] border border-[#d9d9d9] shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-normal text-gray-600">Time until Exam</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-[#008055]">{summary.timeUntilExam}</div>
          <p className="text-sm text-[#008055]">Weeks</p>
        </CardContent>
      </Card>
      <Card className="flex-1 min-w-[200px] border border-[#d9d9d9] shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-normal text-gray-600">Current Standard Projection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-[#008055]">{summary.currentStandardProjection}%</div>
          <p className="text-xs text-[#008055] flex items-center">
            <ArrowUpIcon className="mr-1 h-3 w-3" />
            {summary.standardProjectionChange}% Up from last test taken
          </p>
        </CardContent>
      </Card>
      <Card className="flex-1 min-w-[200px] border border-[#d9d9d9] shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-normal text-gray-600">Current Actual Projection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-[#008055]">{summary.currentActualProjection}%</div>
          <p className="text-xs text-[#008055] flex items-center">
            <ArrowUpIcon className="mr-1 h-3 w-3" />
            {summary.actualProjectionChange}% Up from last test taken
          </p>
        </CardContent>
      </Card>
      <Card className="flex-1 min-w-[200px] border border-[#d9d9d9] shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-normal text-gray-600">Feedback</CardTitle>
        </CardHeader>
        <CardContent>
     
        </CardContent>
      </Card>
    </div>
  );
};
export default ExamStaticCard;
