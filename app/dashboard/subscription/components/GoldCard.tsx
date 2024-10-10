import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import card from '@/public/assets/img/Cardimg.png'
interface Subscription {
  title: string
  description: string
  price: string
  features: string[]
}

interface SubscriptionCardsProps {
  subscriptions: Subscription[]
}

export default function Component({ subscriptions }: SubscriptionCardsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {subscriptions.map((subscription, index) => (
          <Card key={index} className="w-full max-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader className="bg-pink-100 p-4 flex justify-center items-center">
              <Image 
                src={card}
                alt={`${subscription.title} Logo`}
                className="object-contain "
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl font-bold text-center text-slate-700 mb-2">{subscription.title}</CardTitle>
              <p className="text-sm text-center text-slate-600 mb-4">{subscription.description}</p>
              <div className="flex justify-between items-start mb-4">
  <ul className="text-sm space-y-2">
    {subscription.features.map((feature, featureIndex) => (
      <li key={featureIndex} className="flex items-center">
        <span className="mr-2 text-green-500">•</span>
        {feature}
      </li>
    ))}
  </ul>
  <div className="text-2xl font-bold text-orange-500 ml-4 sm:ml-8">
    {subscription.price}
  </div>
</div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-6 bg-gray-50">
              <Button variant="outline" className="w-[45%]">More Info</Button>
              <Button className="w-[45%] bg-green-600 hover:bg-green-700 text-white">Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}