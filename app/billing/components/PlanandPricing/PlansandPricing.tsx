"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MonthlyCard from './MonthlyCard';
import QuarterlyCard from './QuarterlyCard';
import YearlyCard from './YearlyCard';
import { originalPrices, savingsData } from '../../data/pricingData.json';
import coupons from '../../data/coupons.json';

const PlansAndPricing = () => {
  const [couponCode, setCouponCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [prices, setPrices] = useState(originalPrices);

  const handleApply = () => {

    const coupon = coupons.coupons.find(c => c.code.toLowerCase() === couponCode.toLowerCase());
    
    if (coupon) {
      setPrices({
        monthly: Math.max(0, originalPrices.monthly - coupon.discount),
        quarterly: Math.max(0, originalPrices.quarterly - coupon.discount),
        yearly: Math.max(0, originalPrices.yearly - coupon.discount)
      });
      setIsDiscountApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setPrices(originalPrices);
    setIsDiscountApplied(false);
  };

  return (
    <div>
      <div className="w-full max-w-3xl p-6">
        <h2 className="text-2xl font-medium text-[#707F8F] mb-2">
          Maximize Your Score Potential
        </h2>
        <div className="flex gap-4 items-start">
          <Input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 h-10 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            disabled={isDiscountApplied}
          />
          {!isDiscountApplied ? (
            <Button
              onClick={handleApply}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 h-10"
            >
              Apply
            </Button>
          ) : (
            <button
              onClick={handleRemoveCoupon}
              className="px-4 py-1 text-emerald-500 border-2 border-dashed border-emerald-500 rounded hover:bg-emerald-50 transition-colors"
            >
              Remove
            </button>
          )}
        </div>
        {isDiscountApplied && (
          <div className="flex items-center gap-2 text-emerald-500 mt-2">
            <span>Coupon {couponCode.toUpperCase()} applied successfully!</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MonthlyCard
          originalPrice={savingsData.monthly.originalPrice}
          discountedPrice={prices.monthly}
          validity={savingsData.monthly.validity}
          savings={savingsData.monthly.savings}
          percentage={savingsData.monthly.percentage}
        />
        <QuarterlyCard
          originalPrice={savingsData.quarterly.originalPrice}
          discountedPrice={prices.quarterly}
          validity={savingsData.quarterly.validity}
          savings={savingsData.quarterly.savings}
          percentage={savingsData.quarterly.percentage}
        />
        <YearlyCard
          originalPrice={savingsData.yearly.originalPrice}
          discountedPrice={prices.yearly}
          validity={savingsData.yearly.validity}
          savings={savingsData.yearly.savings}
          percentage={savingsData.yearly.percentage}
        />
      </div>
    </div>
  );
};

export default PlansAndPricing;
