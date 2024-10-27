import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (term: string) => void;
  searchTerm?: string; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchTerm: externalSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(externalSearchTerm || '');
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (externalSearchTerm !== undefined) {
      setSearchTerm(externalSearchTerm);
    }
  }, [externalSearchTerm]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (!isFocused) {
        setSearchTerm('');
        onSearch('');
      }
    };
    if (!isFocused) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFocused, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          name="exam"
          placeholder="Search your exam"
          className="w-full rounded-lg bg-background pl-8 border-2"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
