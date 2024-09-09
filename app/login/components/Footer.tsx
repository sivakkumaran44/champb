import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 space-y-8 px-4 md:px-0">
      <Card className="bg-emerald-300 border-none rounded-2xl">
        <CardContent className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Here to help</h2>
          <p className="text-gray-700 mb-6 max-w-2xl text-lg">
            Whether you have questions, need assistance, or just want to explore your options, our team is ready to support you every step of the way. Don&apos;t hesitate to reach out
          </p>
          <Button 
            variant="green" 
            size="lg"
            className=" text-white py-6 px-8"
            asChild
          >
            <Link href="https://wa.me/your_whatsapp_number">
              <span className="flex items-center space-x-2 text-lg">
                Ask your Doubts
                <FaWhatsapp className="w-6 h-6 ml-2" />
              </span>
            </Link>
          </Button>
        </CardContent>
      </Card>
      <div className="relative">
        <hr className="border-t border-black absolute left-[-50vw] right-[-50vw] w-[200vw]" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 py-4">
        <p className="mb-4 md:mb-0">Copyrights 2024 | bChamp</p>
        <div className="w-full md:w-px h-px md:h-6 bg-gray-300 my-4 md:my-0 md:mx-4"></div>
        <div className="flex space-x-6">
          <Link href="#" className="bg-emerald-100 p-2 rounded-full">
            <FaFacebookF size={20} className="text-emerald-500" />
          </Link>
          <Link href="#" className="bg-emerald-100 p-2 rounded-full">
            <FaInstagram size={20} className="text-emerald-500" />
          </Link>
          <Link href="#" className="bg-emerald-100 p-2 rounded-full">
            <FaYoutube size={20} className="text-emerald-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;