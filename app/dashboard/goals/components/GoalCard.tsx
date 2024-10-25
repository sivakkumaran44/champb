import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Crosshair } from "lucide-react";
interface GoalCardProps {
  goalName: string;
  purchasedOn?: string;
  renewAt?: string;
  isCurrent?: boolean;
}
const GoalCard: React.FC<GoalCardProps> = ({
  goalName,
  purchasedOn,
  renewAt,
  isCurrent,

}) => {
  return (
    <Card className="bg-[#10B9811A] border border-slate-200 mt-4">
      <CardHeader className="bg-white min-h-[8rem] m-2 rounded-xl p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <CardTitle className="text-xl font-bold text-gray-800">{goalName}</CardTitle>
          <span className="text-sm text-gray-600 mt-1">Access Period</span>
        </div>
        {isCurrent ? (
          <Button
            variant="secondary"
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 text-sm font-medium whitespace-nowrap px-4 py-2 h-auto w-full sm:w-auto rounded-xl"
          >
            <Trophy className="mr-2 h-4 w-4" />
            Your Current Goal
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="bg-transparent border border-emerald-700 text-emerald-700 whitespace-nowrap flex-shrink-0"
          
          >
            <Crosshair className="mr-2 h-4 w-4" />
            Set as my Current Goal
          </Button>
        )}
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4 text-slate-700">Plan Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-transparent border border-slate-700">
            <p className="text-sm text-slate-600">Purchased on</p>
            <div className="flex justify-between items-end mt-2">
              <p className="text-xl font-semibold text-slate-700 ml-auto">{purchasedOn || "N/A"}</p>
            </div>
          </Card>
          <Card className="p-4 bg-transparent border border-slate-700">
            <p className="text-sm text-slate-600">Renew at</p>
            <div className="flex items-end mt-2">
              <p className="text-xl font-semibold text-slate-700 ml-auto">{renewAt || "N/A"}</p>
            </div>
          </Card>
        </div>
        <div className="flex flex-row justify-end gap-4 w-full">
          {isCurrent ? (
            <Button className="bg-slate-700 hover:bg-slate-600 text-white flex-1 sm:flex-initial">
              Mark As Completed
            </Button>
          ) : (
            <>
             
              <Button className="bg-slate-700 hover:bg-slate-600 text-white flex-1 sm:flex-initial">
                Renew Now
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default GoalCard;
