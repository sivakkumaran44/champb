"use client"

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FindMyLevelTest = () => {
  return (
    <div className="container p-6">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Assess Your Exam Fitness
      </h2>
      <p className="text-gray-600 mb-12">
        Take 3 tests to find out where you stand and how to advance with our expert-level diagnostic exam
      </p>
     
      <div className="max-w-md mx-auto bg-slate-100 rounded-xl shadow-sm overflow-hidden">
        <div className="relative">
        <div className="relative inline-block">
      <button className="bg-slate-600 text-white p-2 pl-4 pr-16 relative overflow-hidden">
        <h2 className="text-lg font-semibold">3 Free Mock Tests</h2>
        <div 
          className="absolute top-0 right-0 h-full w-8 bg-slate-100"
          style={{
            transform: 'skew(-35deg) translateX(50%)'
          }}
        ></div>
      </button>
    </div>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <Select>
              <SelectTrigger className="w-full bg-white text-gray-400 border-none shadow-sm">
                <SelectValue placeholder="Choose Exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exam1">Exam 1</SelectItem>
                <SelectItem value="exam2">Exam 2</SelectItem>
                <SelectItem value="exam3">Exam 3</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-4">
              <Input placeholder="First Name" className="w-1/2 bg-white text-gray-400 border-none shadow-sm" />
              <Input placeholder="Last Name" className="w-1/2 bg-white text-gray-400 border-none shadow-sm" />
            </div>
            <div className="flex space-x-4">
              <Select defaultValue="+91">
                <SelectTrigger className="w-20 bg-white text-gray-400 border-none shadow-sm">
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