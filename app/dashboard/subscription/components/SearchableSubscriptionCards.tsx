"use client"
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
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const filteredSubscriptions = useMemo(() => {
    return (categorizedSubscriptionData as CategorizedSubscriptionData)[activeCategory].filter(
      (subscription) =>
        subscription.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subscription.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

  const cardCount = filteredSubscriptions.length;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col items-center mb-6">
        <SortOut onCategoryChange={handleCategoryChange} />
        <div className="flex justify-start items-center">
  <p className="mt-4 text-sm text-slate-700">
    Showing {cardCount} {cardCount === 1 ? 'card' : 'cards'} for "{activeCategory}"
  </p>
</div>
      </div>
    
      <GoldCard subscriptions={filteredSubscriptions} />
    </div>
  );
}
