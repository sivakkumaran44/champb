"use client";
import React, { useState } from "react";
import goalData from "../data/mygoal.json";
import GoalCard from "./GoalCard"; 
export interface GoalData {
  currentGoal: number;
  myGoals: Array<{
    goalName: string;
    goalId: number;
    purchasedOn?: string;
    renewAt?: string;    
  }>;
}
const MyGoal: React.FC = () => {
  const [currentGoalId, setCurrentGoalId] = useState<number>(goalData.currentGoal);
  const data: GoalData = goalData;

  const currentGoal = data.myGoals.find((goal) => goal.goalId === currentGoalId) || 
         (data.myGoals.length > 0 ? data.myGoals[0] : null);
  
  const otherGoals = currentGoal 
    ? data.myGoals.filter((goal) => goal.goalId !== currentGoal.goalId)
    : [];

  const handleSetCurrentGoal = (goalId: number) => {
    setCurrentGoalId(goalId);
  };
 
  return (
    <div>
      {currentGoal && (
        <GoalCard
          goalName={currentGoal.goalName}
          purchasedOn={currentGoal.purchasedOn}
          renewAt={currentGoal.renewAt}
          isCurrent={true}
          goalId={currentGoal.goalId}
          onSetCurrentGoal={handleSetCurrentGoal}
        />
      )}
      {otherGoals.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Other Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherGoals.map((goal) => (
              <GoalCard
                key={goal.goalId}
                goalName={goal.goalName}
                purchasedOn={goal.purchasedOn}
                renewAt={goal.renewAt}
                isCurrent={false}
                goalId={goal.goalId}
                onSetCurrentGoal={handleSetCurrentGoal}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGoal;
