"use client";
import React, { useState } from 'react';
import GoldCard from './GoldCard';
import SearchBar from './SearchBar';
import SortOut from './SortOut';
import allgoalsData from '../data/allgoal.json';
import categoryData from '../data/goalCategory.json';

interface Subscription {
  title: string;
  description: string;
  image: {
    src: string;
    fallback: string;
  };
  features: string[];
  category: number[];
}
const formattedSubscriptions: Subscription[] = allgoalsData.allgoals.map(subscription => ({
  ...subscription,
  category: subscription.category.map(cat => parseInt(cat, 10))
}));

const SearchableSubscriptionCards: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
    setSearchTerm('');
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const getCategoryNameById = (id: number): string => {
    return categoryData.goalCategory.find(cat => cat.id === id)?.name || 'Unknown';
  };

  const filteredSubscriptions = React.useMemo(() => {
    let filtered = formattedSubscriptions;
    
    if (selectedCategoryId !== null) {
      filtered = filtered.filter(subscription => 
        subscription.category.includes(selectedCategoryId)
      );
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(subscription =>
        subscription.title.toLowerCase().includes(searchLower) ||
        subscription.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [selectedCategoryId, searchTerm]);

  const count = filteredSubscriptions.length;
  const categoryText = selectedCategoryId !== null 
    ? getCategoryNameById(selectedCategoryId) 
    : 'All';
  const displayText = searchTerm
    ? `Best Match: Showing ${count} ${count === 1 ? 'goal' : 'goals'} for "${searchTerm}" in "${categoryText}"`
    : `${categoryText}: Showing ${count} ${count === 1 ? 'goal' : 'goals'}`;

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      <div className="flex flex-col items-center mb-2">
        <SortOut 
          onCategoryChange={handleCategoryChange} 
          activeCategoryId={selectedCategoryId} 
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
};

export default SearchableSubscriptionCards;