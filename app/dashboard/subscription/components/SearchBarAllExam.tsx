"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar: React.FC<{ isMobile?: boolean }> = ({ }) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <div ref={searchRef} className="flex-grow relative">
        <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          name="exam"
          placeholder="Search your exam"
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
