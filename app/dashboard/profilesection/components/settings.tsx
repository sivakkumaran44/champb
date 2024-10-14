import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SettingsContentProps {
  isEditing: boolean;
}

export default function SettingsContent({ isEditing }: SettingsContentProps) {
  return (
    <div className="space-y-4 pl-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="fullName"
            name="fullName"
            defaultValue="Lorem ipsum"
            disabled={!isEditing}
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="address"
            name="address"
            defaultValue="Lorem ipsum"
            disabled={!isEditing}
            autoComplete="street-address"
          />
        </div>
        <div>
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="mobileNumber"
            name="mobileNumber"
            defaultValue="+91 98765 43210"
            disabled={!isEditing}
            autoComplete="tel"
          />
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="dateOfBirth"
            name="dateOfBirth"
            defaultValue="15/10/2000"
            disabled={!isEditing}
            autoComplete="bday"
          />
        </div>
        <div>
          <Label htmlFor="email">Email ID</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="email"
            name="email"
            defaultValue="loremipsum@gmail.com"
            disabled={!isEditing}
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select defaultValue="male" disabled={!isEditing}>
            <SelectTrigger
              id="gender"
              name="gender"
              className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            >
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="hidden md:block">
        <p>Last sign in: today at 18:54, Android Device</p>
      </div>
    </div>
  );
}