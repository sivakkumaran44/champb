import React from 'react';
import SuccessProbabilityTracker from './SuccessProbabilityTracker';
import SuccessProbabilityProcessChart from './SuccessProbabilityProcessChart';
import TestInfoCard from './TestInfoCard';
import { RelativeOpportunitiesCard } from './RelativeOpportunitiesCard';
import SuccessRate from './SuccessRate';

const SuccessProbabilityChart = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full">
          <div className="h-[600px] w-[300px] overflow-hidden">
            <SuccessRate />
      </div>
</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <div className="h-[600px] w-[300px] overflow-hidden">
            <SuccessProbabilityProcessChart />
          </div>
        </div>
        <div className="w-full">
          <div className="h-[600px] w-[300px] overflow-hidden">
            <SuccessProbabilityTracker />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <div className="h-[600px] w-[300px] overflow-hidden">
            <TestInfoCard />
          </div>
        </div>
        <div className="w-full">
          <div className="h-[600px] w-[300px] overflow-hidden">
            <RelativeOpportunitiesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessProbabilityChart;
