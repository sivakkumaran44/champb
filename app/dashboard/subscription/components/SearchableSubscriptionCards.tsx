"use client";
import React, { useState, useCallback, useMemo } from 'react';
import GoldCard from './GoldCard';
import SearchBar from './SearchBar';
import SortOut from './SortOut';
import allgoalsData from '../data/allgoal.json';
import categoryData from '../data/goalCategory.json';
const SearchableSubscriptionCards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category === 'All' ? '' : category);
    setSearchTerm('');
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const filteredSubscriptions = useMemo(() => {
    let filtered = allgoalsData.allgoals;
    if (selectedCategory) {
      filtered = filtered.filter(subscription => 
        subscription.category.includes(selectedCategory)
      );
    }
    if (searchTerm) {
      filtered = filtered.filter(subscription =>
        subscription.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subscription.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const displayText = useMemo(() => {
    const count = filteredSubscriptions?.length || 0;
    const categoryText = selectedCategory || 'All';
    if (searchTerm) {
      return `Best Match: Showing ${count} ${count === 1 ? 'goal' : 'goals'} for "${searchTerm}" in "${categoryText}"`;
    }
    return `${categoryText}: Showing ${count} ${count === 1 ? 'goal' : 'goals'}`;
  }, [filteredSubscriptions, selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      <div className="flex flex-col items-center mb-2">
        <SortOut 
          onCategoryChange={handleCategoryChange} 
          activeCategory={selectedCategory} 
          categories={categoryData.goalCategory}
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-lg font-semibold text-slate-700 mb-4 text-center md:text-left">
          {displayText}
        </div>
        <GoldCard subscriptions={filteredSubscriptions} />
      </div>
    </div>
  );
}

export default SearchableSubscriptionCards;