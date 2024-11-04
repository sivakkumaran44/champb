"use client"
import React from 'react';
import ProfileFooter from "./ProfileFooter";
import NameCard from "./NameCard";
import MobileNumberCard from "./MobileNumberCard";
import NotificationCard from "./NotificationCard";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfileBanner=() =>{
  const [name, setName] = useState("Lorem Ipsum");
  
  const handleUpdateName = (newName: string) => {
    setName(newName);
  };

  return (
    <div className="min-h-screen flex flex-col">
       <main className="flex-grow w-full">
        <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-sm sm:text-base">
            <NameCard defaultName={name} onUpdate={handleUpdateName} />
          </div>
          
          <div className="text-sm sm:text-base">
            <MobileNumberCard />
          </div>
          
          <div className="text-sm sm:text-base">
            <NotificationCard />
          </div>
          
          <Card className="border border-[#F1F5F9] bg-[#F8FAFC]">
            <CardContent className="flex items-center justify-between py-4 sm:py-6">
              <div className="font-medium text-sm sm:text-base">Delete My Account</div>
              <Button 
                variant="outline" 
                className="text-emerald-600 border-emerald-600 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <hr/>
      <ProfileFooter />
    </div>
  )
}
export default ProfileBanner
