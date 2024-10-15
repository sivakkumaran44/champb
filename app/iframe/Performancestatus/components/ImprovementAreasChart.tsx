import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { View } from 'lucide-react';

import data from '@/components/data/ImprovementAreasChart.json';
type Status = "Critical" | "Improve" | "Focus";
const ImprovementAreasChart = () => {
  const { improvementAreas, statusColors } = data;
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
                    backgroundColor: statusColors[area.status as Status].bg,
                    color: statusColors[area.status as Status].text
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
