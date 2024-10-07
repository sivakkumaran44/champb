"use client"
import React from 'react';
import Barchart from './barchart';
import { PieChartComponent } from './piechart';
import { AccuracyComponent } from './accuracycomponent';
import Speed from './Speed';
import ProgressTrackingChart from './processtracking';
import ImprovementAreasChart from './areachart';
import { TimeManagementChart } from './timemangementchart';
const Report = () => {
  return (
    <div className="relative w-full max-w-5xl ">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="">
          <PieChartComponent />
        </div>
        <div className="p-4">
          <Barchart />  
        </div> 
      </div>
      <div className=" mb-4 p-4">
  <ProgressTrackingChart />
</div>
<div className=" mb-4 p-4">
 <TimeManagementChart/>
</div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" p-4">
          <AccuracyComponent />
        </div>
        <div className=" p-4">
          <Speed />  
        </div> 
      </div>
      <div className=" ">
      <ImprovementAreasChart />
    </div>
          </div>
  );
};

export default Report;