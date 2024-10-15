"use client"
import React from 'react';
import Barchart from './barchart';
import { PieChartComponent } from './PieChartComponent';
import { AccuracyComponent } from './accuracycomponent';
import Speed from './Speed';
import ProgressTrackingChart from './ProgressTrackingChart';
import ImprovementAreasChart from './ImprovementAreasChart';
import { TimeManagementChart } from './TimeManagementChart';

const Report = () => {
  return (
    <div className="relative w-full max-w-5xl overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          <PieChartComponent />
        </div>
        <div className="pl-6">
          <Barchart />  
        </div>
      </div>
      <div className="mb-4 pl-6">
        <ProgressTrackingChart />
      </div>
      <div className="mb-4 pl-6">
        <TimeManagementChart/>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="pl-6">
          <AccuracyComponent />
        </div>
        <div className="pl-6">
          <Speed />  
        </div>
      </div>
      <div className="px-2 pb-4">
        <ImprovementAreasChart />
      </div>
    </div>
  );
};

export default Report;