"use client"
import { Checkbox } from '@/components/ui/checkbox';

interface CheckboxAgreementProps {
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function CheckboxAgreement({ isChecked, onCheckedChange }: CheckboxAgreementProps) {
  return (
    <div className="flex flex-col items-center p-4  ">
      <div className="flex items-center">
        <Checkbox 
          id="agreement" 
          checked={isChecked} 
          onCheckedChange={onCheckedChange} 
        />
        <label htmlFor="agreement" className="ml-2 text-slate-700">
          I have read and understood the platform disclaimer. By checking this box, I agree to abide by the terms and conditions outlined therein.
        </label>
      </div>
    </div>
  );
}
