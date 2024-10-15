'use client'

import React, { useState } from 'react'
import { Trophy, CircleChevronDown, User, BookmarkIcon, Bell, Settings, DiamondPlus, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Link from 'next/link'

const DashboardHeader= () => {
   const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const handleLogout = () => {
    }

  return (
    <header className="bg-slate-200 p-6 flex justify-between items-center">
      <div className="flex-1 flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2 p-0 bg-transparent hover:bg-transparent">
              <Trophy className="h-7 w-7 text-emerald-500" />
              <span className="font-medium text-emerald-500 text-lg md:text-xl">Goal</span>
              <span className="text-sm md:text-lg">SSC - CGL</span>
              <CircleChevronDown className="h-6 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 bg-white rounded-md shadow-lg p-1 border-2 border-slate-900">
            <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md">
              <Trophy className="h-5 w-5 text-slate-700 mr-3" />
              <div>
                <div className="text-sm md:text-base lg:text-lg text-slate-700">SSC GD - Constable,</div>
                <div className="text-xs md:text-sm lg:text-base text-slate-700">General Duty</div>
              </div>
            </DropdownMenuItem>
            <hr className="border-t border-customGray my-1" />
            <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md">
              <Trophy className="h-5 w-5 text-slate-700 mr-3" />
              <div>
                <div className="text-sm md:text-base lg:text-lg text-slate-700">SSC CHSL - Combined</div>
                <div className="text-xs md:text-sm lg:text-base text-slate-700">Higher Secondary Level</div>
              </div>
            </DropdownMenuItem>
            <hr className="border-t border-customGray my-1" />
            <DropdownMenuItem className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md">
              <DiamondPlus className="h-5 w-5 text-slate-700 mr-3"/>
              <span className="text-sm md:text-base lg:text-lg text-slate-700">Add New Goal</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 rounded-full flex items-center space-x-2 p-0 bg-transparent hover:bg-transparent">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CircleChevronDown className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-emerald-300 text-emerald-700 rounded-md shadow-lg p-1">
          <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
            <Link href="/dashboard/goals" className="flex items-center w-full">
              <User className="mr-3 h-5 w-5" />
              <span className="text-base md:text-lg lg:text-xl">Goals</span>
            </Link>
          </DropdownMenuItem>
          <div className="h-px bg-slate-700 my-2" />
          <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
            <Link href="/dashboard/profilesection" className="flex items-center w-full">
              <BookmarkIcon className="mr-3 h-5 w-5" />
              <span className="text-base md:text-lg lg:text-xl">Profile</span>
            </Link>
          </DropdownMenuItem>
          <div className="h-px bg-slate-700 my-2" />
          <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
            <Link href="/dashboard" className="flex items-center w-full">
              <Bell className="mr-3 h-5 w-5" />
              <span className="text-base md:text-lg lg:text-xl">Tests</span>
            </Link>
          </DropdownMenuItem>
          <div className="h-px bg-slate-700 my-2" />
          <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300">
            <Link href="/dashboard/process" className="flex items-center w-full">
              <Settings className="mr-3 h-5 w-5" />
              <span className="text-base md:text-lg lg:text-xl">Progress</span>
            </Link>
          </DropdownMenuItem>
          <div className="h-px bg-slate-700 my-2" />
          <DropdownMenuItem className="flex items-center px-4 py-3 hover:bg-emerald-300 focus:bg-emerald-300" onSelect={() => setShowLogoutDialog(true)}>
            <LogOut className="mr-3 h-5 w-5" />
            <span className="text-base md:text-lg lg:text-xl">Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-slate-700'> Are you sure you want to log out?</AlertDialogTitle>
            <AlertDialogDescription className='text-slate-700'>
              This action will end your current session.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} className='bg-emerald-700 hover:bg-emerald-700'>Log out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  )
}
export default DashboardHeader