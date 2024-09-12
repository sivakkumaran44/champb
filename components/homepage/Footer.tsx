import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Images from '@/public/assets/img/Group 1199.svg'

const Footer: React.FC = () => {
  return (
    <footer className="mt-6">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-emerald-300 border-none rounded-xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row-reverse items-center space-y-3 md:space-y-0 md:space-x-4">
              <Image 
                src={Images}
                alt="Helping hands"
                width={0}
                className="w-full md:w-2/5 max-w-full h-auto rounded-lg object-cover flex-none"
              />
              <div className="text-center md:text-left md:flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Here to help</h2>
                <p className="text-gray-700 mb-4 max-w-xl text-sm sm:text-base">
                  Whether you have questions, need assistance, or just want to explore your options, our team is ready to support you every step of the way.
                </p>
                <Button 
                  variant="default" 
                  size="default"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white py-2 px-4"
                  asChild
                >
                  <Link href="https://wa.me/your_whatsapp_number">
                    <span className="flex items-center space-x-2 text-base">
                      Ask your Doubts
                      <FaWhatsapp className="w-5 h-5 ml-2" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="w-full bg-slate-900 h-px mt-6"></div>
      
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 py-3">
          <p className="mb-2 md:mb-0 text-sm">Copyrights 2024 | bChamp</p>
          <div className="flex space-x-4">
            <Link href="#" className="bg-emerald-100 p-1.5 rounded-full">
              <FaFacebookF size={16} className="text-emerald-500" />
            </Link>
            <Link href="#" className="bg-emerald-100 p-1.5 rounded-full">
              <FaInstagram size={16} className="text-emerald-500" />
            </Link>
            <Link href="#" className="bg-emerald-100 p-1.5 rounded-full">
              <FaYoutube size={16} className="text-emerald-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;