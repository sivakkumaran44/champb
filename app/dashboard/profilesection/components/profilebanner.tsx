"use client"
import React, { useState,ReactNode } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Banner from "@/public/assets/img/BannerPorfile.png";
import SettingsContent from "./settings";
import NotificationContent from "./notification";
import PrivacyContent from "./privacy";

export default function ProfileComponent() {
  const [activeTab, setActiveTab] = useState("Settings");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full">
      <Card className="w-full border-2 overflow-hidden mb-4">
        <div className="h-60 relative">
          <Image src={Banner} alt="Profile banner" layout="fill" objectFit="cover" priority={true} />
        </div>
        <CardContent className="relative pt-0 pb-0">
          <div className="flex items-start -mt-12 mb-4">
            <Avatar className="w-24 h-24 border-4 border-background">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User avatar" />
              <AvatarFallback>LI</AvatarFallback>
            </Avatar>
            <div className="ml-4 mt-12">
              <h2 className="text-2xl font-bold text-primary">Lorem Ipsum</h2>
              <p className="text-sm text-muted-foreground">SSC CGL Aspirant</p>
            </div>
          </div>
          <div className="absolute top-14 right-4">
            {isEditing ? (
              <Button variant="outline" onClick={handleSaveProfile} className="border border-emerald-700 bg-emerald-700 text-white">
                Save Profile
              </Button>
            ) : (
              <Button variant="outline" onClick={handleEditProfile} className="border border-emerald-700 bg-white text-emerald-700">
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
        <div className="flex bg-background">
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
      </Card>
      <div className="mt-4">
        {activeTab === "Settings" && <SettingsContent isEditing={isEditing} />}
        {activeTab === "Notification" && <NotificationContent />}
        {activeTab === "Privacy" && <PrivacyContent />}
      </div>
    </div>
  );
}

interface TabButtonProps {
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
}

function TabButton({ children, active = false, onClick }: TabButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-base font-medium ${
        active
          ? "text-primary border-b-2 border-primary"
          : "text-muted-foreground hover:text-primary"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}