"use client"
import React from "react"
import MyGoal from "./MyGoal"
const MyGoalHeader: React.FC = () => {
  return (
    <div>
      <div className="pr-10 h-14 mb-6 border border-custombroder bg-slate-100 text-slate-700 text-lg font-semibold sm:text-xl p-4 sm:p-6 rounded-lg flex justify-between items-center">
        <span className="text-center mx-auto">My Goal(s)</span>
         </div>
      <div className="w-full mb-6 max-w-3xl mx-auto px-2 md:px-2 lg:px-2">
           <MyGoal /> 
         </div>
    </div>
  )
}
export default MyGoalHeader