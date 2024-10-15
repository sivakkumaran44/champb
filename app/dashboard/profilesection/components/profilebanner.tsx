"use client"

import React, { useState, ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Banner from "@/public/assets/img/BannerPorfile.png"
import SettingsContent from "./settingscontent"
import NotificationContent from "./notificationcontent"
import PrivacyContent from "./privacycontent"
const ProfileBanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Settings")
  const [isEditing, setIsEditing] = useState(false)

  const handleEditProfile = () => {
    setIsEditing(true)
    setActiveTab("Settings")
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <div className="w-full px-4 sm:px-0">
      <Card className="w-full border-2 overflow-hidden mb-4">
        <div className="h-40 sm:h-60 relative">
          <Image src={Banner} alt="Profile banner" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <CardContent className="relative pt-0 pb-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-start -mt-12 mb-4">
            <Avatar className="w-24 h-24 border-4 border-background">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User avatar" />
              <AvatarFallback>LI</AvatarFallback>
            </Avatar>
            <div className="mt-4 sm:mt-12 sm:ml-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-primary">Lorem Ipsum</h2>
              <p className="text-sm text-muted-foreground">SSC CGL Aspirant</p>
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              {!isEditing && (
                <Button variant="outline" onClick={handleEditProfile} className="border border-emerald-700 bg-white text-emerald-700 text-xs sm:text-sm">
                  Edit Profile
                </Button>
              )}
              {isEditing && (
                <div className="flex justify-end space-x-2 mt-4 mb-4 lg:hidden">
                  <Button variant="outline" onClick={handleCancelEdit} className="border border-emerald-700 text-emerald-700 text-xs sm:text-sm">
                    Cancel
                  </Button>
                  <Button onClick={handleSaveProfile} className="bg-emerald-700 hover:bg-emerald-800 text-xs sm:text-sm">
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        {!isEditing && (
          <div className="flex bg-background overflow-x-auto">
            <TabButton active={activeTab === "Settings"} onClick={() => setActiveTab("Settings")}>
              Settings
            </TabButton>
            <TabButton active={activeTab === "Notification"} onClick={() => setActiveTab("Notification")}>
              Notification
            </TabButton>
            <TabButton active={activeTab === "Privacy"} onClick={() => setActiveTab("Privacy")}>
              Privacy
            </TabButton>
          </div>
        )}
      </Card>
      <div className="mt-4">
        {activeTab === "Settings" && <SettingsContent isEditing={isEditing} />}
        {!isEditing && activeTab === "Notification" && <NotificationContent />}
        {!isEditing && activeTab === "Privacy" && <PrivacyContent />}
      </div>
      {isEditing && (
        <div className="hidden lg:block">
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={handleCancelEdit}
              className="border border-emerald-700 text-emerald-700 text-xs sm:text-sm"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveProfile}
              className="bg-emerald-700 hover:bg-emerald-800 text-xs sm:text-sm"
            >
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

interface TabButtonProps {
  children: ReactNode
  active?: boolean
  onClick: () => void
}


function TabButton({ children, active = false, onClick }: TabButtonProps) {
  return (
    <button
      className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-medium whitespace-nowrap ${
        active
          ? "text-primary border-b-2 border-primary"
          : "text-muted-foreground hover:text-primary"
      }`}
      onClick={onClick}
      aria-label={`${children} tab`}
    >
      {children}
    </button>
  );
}
export default ProfileBanner