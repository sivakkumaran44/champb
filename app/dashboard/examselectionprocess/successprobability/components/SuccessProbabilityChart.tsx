import React from 'react'
import SuccessProbabilityTracker from './SuccessProbabilityTracker'
import SuccessProbabilityProcessChart from './SuccessProbabilityProcessChart'
import  TestInfoCard  from './TestInfoCard'
import { RelativeOpportunitiesCard } from './RelativeOpportunitiesCard'
import SuccessRate from './SuccessRate'
const SuccessProbabilityChart = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl text-slate-700  font-bold mb-6 text-center">Success Probability Charts</h2>
    <div>
      <SuccessRate/>
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
        <SuccessProbabilityProcessChart />    
        </div>
        <div className="w-full">
   <SuccessProbabilityTracker />
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
            <TestInfoCard />
      </div>
      <div className="w-full ">
        <RelativeOpportunitiesCard />
      </div>
   
      </div>
    </div>
  )
}

export default SuccessProbabilityChart
