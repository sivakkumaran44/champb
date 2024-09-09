import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Card */}
      <Card className="bg-emerald-300 border-none rounded-2xl">
        <CardContent className="p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Here to help</h2>
          <p className="text-gray-700 mb-6 max-w-2xl text-base sm:text-lg">
            Whether you have questions, need assistance, or just want to explore your options, our team is ready to support you every step of the way. Don't hesitate to reach out.
          </p>
          <Button
            variant="green"
            size="lg"
            className="w-full sm:w-auto text-white py-3 px-4 sm:py-4 sm:px-6 rounded-md hover:bg-green-700"
            asChild
          >
            <Link href="https://wa.me/your_whatsapp_number">
              <span className="flex items-center justify-center space-x-2 text-base sm:text-lg">
                Ask your Doubts
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </span>
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="relative">
        <hr className="border-t border-black absolute left-0 right-0 w-full" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 py-4">
        <p className="mb-4 sm:mb-0 text-sm sm:text-base">Copyrights 2024 | bChamp</p>
        <div className="w-full sm:w-px h-px sm:h-6 bg-gray-300 my-4 sm:my-0 sm:mx-4"></div>
        <div className="flex space-x-4 sm:space-x-6">
          <Link href="#" className="bg-emerald-100 p-2 rounded-full">
            <FaFacebookF size={18} className="text-emerald-500" />
          </Link>
          <Link href="#" className="bg-emerald-100 p-2 rounded-full">
            <FaInstagram size={18} className="text-emerald-500" />
          </Link>
          <Link href="#" className="bg-emerald-100 p-2 rounded-full">
            <FaYoutube size={18} className="text-emerald-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;