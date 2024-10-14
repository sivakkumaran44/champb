import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="fullName"
            defaultValue="Lorem ipsum"
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="address"
            defaultValue="Lorem ipsum"
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="mobileNumber"
            defaultValue="+91 98765 43210"
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="dateOfBirth"
            defaultValue="15/10/2000"
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="email">Email ID</Label>
          <Input
            className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
            id="email"
            defaultValue="loremipsum@gmail.com"
            disabled={!isEditing}
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select defaultValue="male">
            <SelectTrigger
              id="gender"
              className="border border-gray-300 rounded-md p-2 focus:border-black-500 focus:outline-none"
              disabled={!isEditing}
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
      <div className="flex justify-end space-x-2">
        <Button variant="outline" className="border border-emerald-700 text-emerald-700">Cancel</Button>
        <Button className="bg-emerald-700 hover:bg-emerald-700">Save Changes</Button>
      </div>
    </div>
  );
}