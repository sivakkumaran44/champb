"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FindMyLevelTest = () => {
  return (
    <div className="container p-6">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Start with our Find My Level Test
      </h2>
      <p className="text-gray-600 mb-12">
        Take 3 tests to find out where you stand and how to advance with our our expert-level diagnostic exam
      </p>
      <div className="relative max-w-2xl mx-auto">
       
        <Card className="bg-blue-50 w-100 h-80 flex justify-center items-center pt-6">
            
          <CardContent className="w-full">
            <form className="space-y-4">
            <div className="absolute -top-4 left-0 bg-gray-700 text-white py-2 px-4 rounded-t-lg z-10">
          3 Free Mock Tests
        </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose Exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exam1">Exam 1</SelectItem>
                  <SelectItem value="exam2">Exam 2</SelectItem>
                  <SelectItem value="exam3">Exam 3</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-4">
                <Input placeholder="First Name" className="w-1/2" />
                <Input placeholder="Last Name" className="w-1/2" />
              </div>
              <div className="flex space-x-4">
                <Select defaultValue="+91">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="+91" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="100" className="flex-grow" />
              </div>
              <Button variant="green" size="lg" className="w-full hover:bg-green-700 text-white">
                Start Achieving Your Goal
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FindMyLevelTest