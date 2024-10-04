import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import subscriptionData from '@/components/data/subscriptionData.json';
import card from '@/public/assets/img/Cardimg.png';

const GoldCard = () => {
  const { title, description, price, features } = subscriptionData;

  return (
    <div className='p-6'>
      <Card className="w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-pink-100 p-4 w-full flex justify-center items-center">
          <Image 
            src={card} 
            alt={`${title} Logo`} 
            width={200} 
            height={200}
            className="object-contain" 
          />
        </CardHeader>
        <CardContent className="p-4 relative">
          <CardTitle className="text-xl font-bold text-center mb-2">{title}</CardTitle>
          <p className="text-sm text-center text-gray-600 mb-4">{description}</p>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <ul className="text-sm space-y-2 mb-4 md:mb-0">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            <div className="text-xl font-bold text-orange-500">{price}</div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50">
          <div className="flex-grow mb-4 md:mb-0">
            <Button variant="secondary">More Info</Button>
          </div>
          <div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GoldCard;
