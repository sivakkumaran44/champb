import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { View } from 'lucide-react';

type Status = "Critical" | "Improve" | "Focus";

const improvementAreas = [
  { name: "Analogy", progress: 100, status: "Critical" as Status },
  { name: "Decimals", progress: 60, status: "Improve" as Status },
  { name: "Reasoning", progress: 50, status: "Improve" as Status },
  { name: "Percentage", progress: 40, status: "Focus" as Status },
  { name: "Current Affairs", progress: 30, status: "Focus" as Status },
];

const statusColors: Record<Status, string> = {
  Critical: "bg-red-200 text-red-700",
  Improve: "bg-orange-200 text-orange-700",
  Focus: "bg-yellow-200 text-yellow-700",
};

const ImprovementAreasChart = () => {
  return (
    <div className="px-4 py-6">
      <Card className="bg-slate-100 border border-custombroder mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg sm:text-xl font-bold text-slate-700">Improvement Areas</CardTitle>
          <p className="text-xs sm:text-sm text-slate-700">
            Suggestions for topics or skills that need more focus based on performance
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {improvementAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="flex-grow h-6 sm:h-8 overflow-hidden">
                <div
                  className="bg-blue-400 h-full rounded-full flex items-center"
                  style={{ width: `${area.progress}%` }}
                >
                  <span className="text-slate-100 text-xs sm:text-sm font-semibold pl-3">
                    {index + 1}.{area.name}
                  </span>
                </div>
              </div>
              <div className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${statusColors[area.status]}`}>
                {area.status}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white py-2 px-3 sm:px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300">
          <View className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm">TAKE TEST</span>
        </Button>
      </div>
    </div>
  );
};

export default ImprovementAreasChart;
