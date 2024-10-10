"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SelectYear from './SelectYear';
import Disclaimer from './Disclaimer';
import CheckboxAgreement from './CheckboxAgreement';
import { Button } from '@/components/ui/button';
import TestTypeNavigation from '../../process/components/TestTypeNavigation';

export default function ExamApplicationForm() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleNavigate = () => {
    if (isChecked) {
      router.push('/dashboard/examselectionprocess/successprobability');
    } else {
      alert("Please read and accept the disclaimer before proceeding.");
    }
  };

  return (
    <div className="relative w-full max-w-5xl">
    <TestTypeNavigation/>
      <div className="hidden lg:flex h-14 mb-6 border border-slate-200 bg-slate-100 text-slate-700 text-xl rounded-lg justify-center items-center">
        Exam Selection Probability
      </div>

      <SelectYear />
      <Disclaimer />

      <CheckboxAgreement isChecked={isChecked} onCheckedChange={handleCheckedChange} />
<div className='flex justify-center'>   
 <Button className=" text-white bg-emerald-500 hover:bg-emerald-500" onClick={handleNavigate}>
        Check success probability
      </Button>
      </div>
  
    </div>
  );
}
