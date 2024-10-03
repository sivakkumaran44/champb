import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import subscriptionData from '@/components/data/subscriptionData.json';

const Subscription = () => {
  const { title, description, price, features, image } = subscriptionData;

  return (
    <Card className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-pink-50 p-4 flex justify-center">
        <Image 
          src={image} 
          alt={`${title} Logo`} 
          width={100} 
          height={100}
        />
      </CardHeader>
      <CardContent className="p-4 relative">
        <CardTitle className="text-xl font-bold text-center mb-2">{title}</CardTitle>
        <p className="text-sm text-center text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-start">
          <ul className="text-sm space-y-2">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
          <div className="text-xl font-bold text-orange-500">{price}</div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center p-4 bg-gray-50">
        <div className="flex-grow">
          <Button variant="outline">More Info</Button>
        </div>
        <div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Subscription;
