"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BarChart, Bar, Cell, XAxis, YAxis } from 'recharts'
import Cup from "@/public/assets/img/Cup.svg"
import EditYearDialog from './EditYearDialog'
import DisclaimerDialog from './DisclaimerDialog'

const SuccessRate: React.FC = () => {
  const [year, setYear] = useState("2024")
  const successRate = 55
  const failureRate = 100 - successRate

  const data = [
    { 
      name: 'Progress',
      success: successRate,
      failure: failureRate
    }
  ]

  return (
    <div>
      <Card className="w-full max-w-7xl mb-2 mx-auto bg-slate-100 border border-custombroder rounded-xl p-4 sm:p-6">
        <CardContent className="pt-2 pb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="w-full mr-4 relative">
              <div className="h-8 w-full bg-emerald-200 rounded-full overflow-hidden">
                <BarChart
                  width={100}
                  height={32}
                  data={data}
                  layout="vertical"
                  stackOffset="expand"
                  barSize={32}
                >
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" hide />
                  <Bar dataKey="success" fill="url(#successGradient)" stackId="stack">
                    <Cell />
                  </Bar>
                  <Bar dataKey="failure" fill="#e5e7eb" stackId="stack">
                    <Cell />
                  </Bar>
                  <defs>
                    <linearGradient id="successGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#fbe68a" />
                      <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </div>
              <div 
                className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-full mb-1"
              >
                <div className="bg-gray-700 text-white px-3 py-1 text-sm rounded-md relative">
                  {successRate}%
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-700 rotate-45"></div>
                </div>
              </div>
              <p className="text-xl font-medium text-center text-slate-700 mt-4">
                You&apos;re showing promise with a {successRate}% success rate. Let&apos;s work on boosting that number!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={Cup}
                alt="Cup"
                width={150}
                height={150}
                className="w-auto h-auto object-contain"
              />
              <span className="text-sm font-semibold mt-1 text-emerald-500">SSC CGL</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end space-x-2 mb-2">
        <EditYearDialog year={year} setYear={setYear} />
        <DisclaimerDialog />
      </div>
    </div>
  )
}

export default SuccessRate