"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MinusCircle, PenSquare, XCircle } from 'lucide-react'; 
import Barchart from './barchart';
import { PieChartComponent } from './piechart';
import { AccuracyComponent } from './accuracycomponent';
import Speed from './Speed';
import {ProgressTrackingChart}from './processtracking'
import QuizPage from './QuizPage';
import ImprovementAreasChart from './areachart';
import { TimeManagementChart } from './timemangementchart';
const Report = () => {
  return (
    <div className="relative w-full max-w-5xl p-4">
      <Card className="mb-4 w-full max-w-4xl bg-slate-100 border border-custombroder rounded-lg relative mt-12">
        <CardContent className="p-4 sm:p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold text-slate-700">SSC CGL Tier I Mock Test (2024)</h2>
            <span className="text-3xl font-bold text-slate-700">55 %</span>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-slate-500 mr-2" />
              <span className="text-slate-500">55 Correct</span>
            </div>
            <div className="flex items-center">
              <XCircle className="w-5 h-5 text-slate-500 mr-2" />
              <span className="text-slate-500">22 Wrong</span>
            </div>
            <div className="flex items-center">
              <MinusCircle className="w-5 h-5 text-slate-500 mr-2" />
              <span className="text-slate-500">23 Skipped</span>
            </div>
            <div className="flex items-center">
              <PenSquare className="w-5 h-5 text-slate-500 mr-2" />
              <span className="text-slate-500">Attempt (2)</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="w-full md:w-1/2">
          <PieChartComponent />
        </div>
        <div className="w-full md:w-1/2">
          <Barchart />  
        </div> 
      </div>
      <div className="w-full mb-4">
  <ProgressTrackingChart />
</div>
<div className="w-full mb-4">
 <TimeManagementChart/>
</div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <AccuracyComponent />
        </div>
        <div className="w-full md:w-1/2">
          <Speed />  
        </div> 
      </div>
      <div className="p-4">
      <ImprovementAreasChart />
    </div>
      <div >
          <QuizPage />  
        </div> 
       
    </div>
  );
};

export default Report;