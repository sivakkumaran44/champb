import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';

interface MonthlyCardProps {
  originalPrice: number;
  discountedPrice: number;
  validity: string;
  savings: string;
  percentage: string;
}

const MonthlyCard: React.FC<MonthlyCardProps> = ({
  originalPrice,
  discountedPrice,
  validity,
  percentage,
}) => {
  return (
    <Card className="p-4 sm:p-6 bg-white rounded-lg relative border border-gray-200 w-full max-w-[20rem] sm:max-w-sm md:max-w-md mx-auto ">
      <div className='mb-10'></div>
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center "> 
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">{validity} Access</h3>
          <span className="bg-emerald-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full">
            Save {percentage}
          </span>
        </div>
        <div className="mb-2">
          <span className="text-gray-400 line-through text-xs sm:text-sm">Rs. {originalPrice}</span>
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Rs. {discountedPrice}</div>
      </CardContent>

      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mb-4 text-sm sm:text-base">
        Subscribe →
      </Button>
      <p className="text-xs text-center text-gray-500">Valid for {validity}</p>
    </Card>
  );
};

export default MonthlyCard;
