"use client";
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { CircleChevronRight } from 'lucide-react';
import TestspecificinstructionsData from '@/components/data/Testspecificinstructions.json';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useRouter } from 'next/navigation';
const Testspecificinstructions = () => {
  const [agreed, setAgreed] = useState(false);
  const instructions = TestspecificinstructionsData;
  const router = useRouter(); 
  const handleCheckedChange = (checked: CheckedState) => {
    setAgreed(checked === true); 
  };
  const handleGoBack = () => {
    router.back();
  };
  const handleGoNext = () => {
    router.push('/generalinstructions/testspecificinstructions/testscreen'); 
  };
  return (
    <div className="flex flex-col min-h-screen p-8 bg-white  mt-24">
      <h2 className="text-xl text-slate-700 font-bold mb-4">{instructions.title}</h2>

      <div className="mb-6">
        <h3 className="font-semibold">{instructions.examStructure.title}</h3>
        <ol className="list-decimal pl-5 mt-2">
          {instructions.examStructure.details.map((detail, index) => (
            <li key={index}>
              {typeof detail === 'string' ? (
                detail
              ) : (
                <>
                  {detail.title}
                  <ul className="list-disc pl-5 mt-1">
                    {detail.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">{instructions.markingScheme.title}</h3>
        <ol className="list-decimal pl-5 mt-2">
          {instructions.markingScheme.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ol>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-blue-50 p-16">
        <div className="flex items-center space-x-2 mb-6">
          <Checkbox id="agreement" checked={agreed} onCheckedChange={handleCheckedChange} />
          <label htmlFor="agreement" className="text-sm text-gray-700">
            {instructions.agreement}
          </label>
        </div>

        <div className="flex justify-between">
        
          <Button 
            variant="outline" 
            className="bg-emerald-100 text-emerald-800 hover:bg-green-200 border border-[#334155]"
            onClick={handleGoBack} 
          >
            <CircleChevronRight className="mr-2 text-lg" />
            {instructions.buttons[0].text}
          </Button>
          <Button 
            variant="outline" 
            className="bg-white  text-emerald-800 hover:bg-gray-100 border border-[#065F46]" 
            disabled={!agreed}
            onClick={handleGoNext}
          >
            {instructions.buttons[1].text}
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Testspecificinstructions;
