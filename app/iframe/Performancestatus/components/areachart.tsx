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

const statusColors: Record<Status, { bg: string; text: string }> = {
  Critical: { bg: "#FF8877", text: "#AA2727" },
  Improve: { bg: "#FED7AA", text: "#C2410C" },
  Focus: { bg: "#FEF08A", text: "#CA8A04" },
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
        <CardContent className="space-y-4">
          {improvementAreas.map((area, index) => (
            <div key={index} className="flex items-center h-6 sm:h-8">
              <div
                className="bg-blue-400 h-full rounded-full flex items-center pl-3"
                style={{ width: `${area.progress}%` }}
              >
                <span className="text-white text-xs sm:text-sm font-semibold">
                  {index + 1}.{area.name}
                </span>
              </div>
              <div className="ml-2">
                <span 
                  className="text-xs sm:text-xl font-semibold rounded-full px-2"
                  style={{ 
                    backgroundColor: statusColors[area.status].bg,
                    color: statusColors[area.status].text
                  }}
                >
                  {area.status}
                </span>
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