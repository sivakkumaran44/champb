"use client";
import React, { useState, useCallback, useMemo } from 'react';
import GoldCard from './GoldCard'; 
import SearchBar from './SearchBarAllExam';
import SortOut from './SortOut';
import categorizedSubscriptionData from '@/components/data/subscriptionData.json';

interface Subscription {
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface CategorizedSubscriptionData {
  upcoming: Subscription[];
  popular: Subscription[];
  all: Subscription[];
}

export default function SearchableSubscriptionCards() {
  const [activeCategory, setActiveCategory] = useState<keyof CategorizedSubscriptionData>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category as keyof CategorizedSubscriptionData);
    setSearchTerm(''); 
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const filteredSubscriptions = useMemo(() => {
    const categoryData = (categorizedSubscriptionData as CategorizedSubscriptionData)[activeCategory];
    if (!searchTerm) return categoryData;
    return categoryData.filter((subscription) =>
      subscription.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscription.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

  const cardCount = filteredSubscriptions.length;

  const displayText = useMemo(() => {
    const categoryName = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
    if (searchTerm) {
      return `Best Match: Showing ${cardCount} ${cardCount === 1 ? 'goal' : 'goals'} for "${searchTerm}" in "${categoryName}"`;
    } else {
      return `${categoryName}: Showing ${cardCount} ${cardCount === 1 ? 'goal' : 'goals'}`;
    }
  }, [activeCategory, searchTerm, cardCount]);

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      <div className="flex flex-col items-center mb-2">
        <SortOut onCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
      </div>
      <div className="max-w-6xl mx-auto">
      <div className="text-lg font-semibold text-slate-700 mb-4  text-center md:text-left">
  {displayText}
</div>
        <GoldCard subscriptions={filteredSubscriptions} />
      </div>
    </div>
  );
}