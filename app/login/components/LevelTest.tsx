"use client"

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FindMyLevelTest = () => {
  return (
 <div className="container px-4 sm:px-6 py-8 max-w-7xl mx-auto">
      <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl text-slate-700 font-semibold tracking-tight first:mt-0">
        Assess Your Exam Fitness
      </h2>
      <p className="text-sm sm:text-base text-slate-600 mb-8 sm:mb-12">
        Take 3 tests to find out where you stand and how to advance with our expert-level diagnostic exam
      </p>
     
      <div className="w-full max-w-xl mx-auto bg-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="relative">
          <div className="relative inline-block w-full">
          <div className="bg-slate-600 text-white p-2 pl-4 pr-24 sm:pr-32 relative overflow-hidden">
      <h2 className="text-base sm:text-lg font-semibold">3 Free Mock Tests</h2>
      <div
        className="absolute top-0 right-0 h-full w-8/12 sm:w-11/12 bg-slate-200"
        style={{
          transform: 'skew(-20deg) translateX(40%)'
        }}
      ></div>
    </div>
          </div>
        </div>
                <div className="p-4 sm:p-6  flex items-center justify-center">
          <form className="space-y-4 w-full max-w-sm">
            <Select>
              <SelectTrigger className="w-full bg-white text-slate-400 border-none shadow-sm">
                <SelectValue placeholder="Choose Exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exam1">Exam 1</SelectItem>
                <SelectItem value="exam2">Exam 2</SelectItem>
                <SelectItem value="exam3">Exam 3</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Input placeholder="First Name" className="w-full sm:w-1/2 bg-white text-slate-100 border-none shadow-sm" />
              <Input placeholder="Last Name" className="w-full sm:w-1/2 bg-white text-slate-400 border-none shadow-sm" />
            </div>
            <div className="flex space-x-4">
              <Select defaultValue="+91">
                <SelectTrigger className="w-20 bg-white text-slate-900 border-none shadow-sm">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="98765-12345" className="flex-grow bg-white text-gray-400 border-none shadow-sm" />
            </div>
            <Button variant="default" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Achieving Your Goal
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FindMyLevelTest