"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function ExamPrepTool() {
  const [studyHours, setStudyHours] = useState(1);
  const router = useRouter(); 
  const handleGenerateProjection = () => {
    router.push("/achievementprocess/examprojector"); 
  };

  return (
    <Card className="w-full max-w-md mx-auto border border-[#CBD5E1] bg-[#F1F5F9] items-center justify-center">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="exam-year" className="text-sm font-medium text-gray-700">
              Exam year
            </label>
            <Select>
              <SelectTrigger id="exam-year" className="w-full">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="study-hours" className="text-sm font-medium text-gray-700">
              Study Hours per Day: {studyHours}
            </label>
            <Slider
              id="study-hours"
              min={1}
              max={12}
              step={1}
              value={[studyHours]}
              onValueChange={(value) => setStudyHours(value[0])}
              className="w-full"
            />
            <p className="text-xs text-gray-500">
              Recommended: 4-6 hours per day for effective learning
            </p>
          </div>

          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={handleGenerateProjection} 
          >
            Generate Projection Timeline
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
