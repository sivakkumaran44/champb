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
      <div className="flex flex-col items-center mb-2">
        <SortOut onCategoryChange={handleCategoryChange} />
      </div>
      <div className="flex justify-start items-center ">
            
      <p className="text-lg text-slate-700">
  Best Match: Showing {cardCount} {cardCount === 1 } goals for &quot;{activeCategory}&quot;
</p>

          </div>
      <GoldCard subscriptions={filteredSubscriptions} />
    </div>
  );
}
