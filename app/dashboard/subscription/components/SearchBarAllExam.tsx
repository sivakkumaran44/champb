
import React, { useRef, useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchTerm('');
        onSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <div ref={searchRef} className="relative w-full max-w-md"> 
        <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          name="exam"
          placeholder="Search your exam"
          className="w-full rounded-lg bg-background pl-8 border-2"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;