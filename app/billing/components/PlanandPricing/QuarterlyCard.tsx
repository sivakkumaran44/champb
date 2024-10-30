import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';

interface QuarterlyCardProps {
  originalPrice: number;
  discountedPrice: number;
  validity: string;
  savings: string;
  percentage: string;
}

const QuarterlyCard: React.FC<QuarterlyCardProps> = ({
  originalPrice,
  discountedPrice,
  validity,
  savings,
  percentage,
}) => {
  return (
    <Card className="p-4 sm:p-6 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 relative border border-gray-200 w-full max-w-[20rem] sm:max-w-sm md:max-w-md mx-auto">
      <div className="relative -top-6 -right-6 flex justify-end">
        <div className="bg-gradient-to-r from-[#D946EF] to-[#60A5FA] text-white text-sm px-6 py-3 
                   font-medium 
                   rounded-tr-xl 
                   rounded-bl-xl 
                   hover:bg-blue-600 
                   transition-colors 
                   duration-200"
>
          Trending
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-semibold mb-2">{validity} Access</h3>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-lg self-start">
            {percentage} off + {savings} total savings
          </span>
        </div>
        <div className="mb-2">
          <span className="text-gray-400 line-through text-sm">Rs. {originalPrice}</span>
        </div>
        <div className="text-4xl font-bold mb-6">Rs. {discountedPrice}</div>
        <Button
          className="w-full bg-gradient-to-r from-[#D946EF] to-[#60A5FA] hover:from-purple-600 hover:to-blue-600 text-white mb-4"
        >
          Subscribe →
        </Button>
        <p className="text-xs text-center text-gray-500">Valid for {validity}</p>
      </CardContent>
    </Card>
  );
};

export default QuarterlyCard;
