import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import card from '@/public/assets/img/Cardimg.png';

interface Subscription {
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface SubscriptionCardsProps {
  subscriptions: Subscription[];
}

export default function GoldCard({ subscriptions }: SubscriptionCardsProps) {
  return (
    <div className='p-6 flex flex-wrap justify-center'>
      {subscriptions.map((subscription: Subscription, index: number) => (
        <Card key={index} className="w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col">
          <CardHeader className="bg-pink-100 p-4 w-full flex justify-center items-center">
            <Image 
              src={card} 
              alt={`${subscription.title} Logo`} 
              width={200} 
              height={200}
              className="object-contain" 
            />
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <CardTitle className="text-xl font-bold text-center text-slate-700 mb-2">{subscription.title}</CardTitle>
            <p className="text-sm text-center text-slate-700 mb-4">{subscription.description}</p>
            <div className="flex justify-between items-start">
              <ul className="text-sm space-y-2 mb-4">
                {subscription.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <div className="text-xl font-bold text-orange-500">{subscription.price}</div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between items-center p-4 bg-gray-50 mt-auto">
            <Button variant="secondary" className='bg-slate-500 text-white'>More Info</Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
