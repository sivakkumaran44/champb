import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  ChevronsRight ,Wand } from "lucide-react"

const opportunities = [
  "SSC CHSL (Combined Higher Secondary Level)",
  "SSC JE (Junior Engineer)",
  "SSC CPO (Central Police Organization)",
  "SSC Stenographer",
  "SSC GD (General Duty)",
  "SSC MTS (Multi Tasking Staff)",
]

export default function RelativeOpportunitiesCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-slate-100 border border-customborder rounded-xl">
    <CardHeader className="pb-2 border-b border-[#D9D9D9]">
      <CardTitle className="text-lg text-slate-700 font-semibold flex items-center space-x-2">
      <Wand/>
        <span>Relative Opportunities</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      {opportunities.map((opportunity, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-3 border-b border-[#D9D9D9]`}
        >
          <span className="text-sm text-slate-700">{opportunity}</span>
          < ChevronsRight  className="w-5 h-5 text-slate-700" />
        </div>
      ))}
    </CardContent>
  </Card>
  
  )
}