import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';

interface YearlyCardProps {
  originalPrice: number;
  discountedPrice: number;
  validity: string;
  savings: string;
  percentage: string;
}

const YearlyCard: React.FC<YearlyCardProps> = ({
  originalPrice,
  discountedPrice,
  validity,
  savings,
  percentage,
}) => {
  return (
    <Card className="p-4 sm:p-6 bg-emerald-500 rounded-lg relative border border-gray-200 w-full max-w-[20rem] sm:max-w-sm md:max-w-md mx-auto">
      <div className="relative -top-6 -right-6 flex justify-end">
        <div className="bg-gradient-to-r from-[#FDE68A] to-[#FACC15] text-slate-800 px-8 py-1 text-sm font-medium ">
          Max Savings
        </div>
      </div>
      <CardContent className='p-4'>
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-semibold text-white">{validity} Access</h3>
          <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-lg self-start mt-2">
            {percentage} off + {savings} total savings
          </span>
        </div>
        <div className="mb-2">
          <span className="text-emerald-200 line-through text-sm">Rs. {originalPrice}</span>
        </div>
        <div className="text-4xl font-bold mb-6 text-white">Rs. {discountedPrice}</div>
        <Button className="w-full bg-gradient-to-r from-[#FDE68A] to-[#FACC15] text-black mb-4 hover:from-[#FDE68A] hover:to-[#F59E0B]">
          Subscribe →
        </Button>
        <p className="text-xs text-center text-emerald-100">Valid for {validity}</p>
      </CardContent>
    </Card>
  );
};

export default YearlyCard;