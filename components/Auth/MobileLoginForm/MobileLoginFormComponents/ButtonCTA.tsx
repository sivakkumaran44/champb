import React from 'react';
import { Button } from '@/components/ui/button';
interface ButtonCTAProps {
  buttonText: string;
}
const ButtonCTA: React.FC<ButtonCTAProps> = ({ buttonText }) => (
  <Button
    type="submit"
    className="w-full sm:w-[410px] rounded-lg font-semibold py-2 bg-emerald-700 text-white hover:bg-green-900"
  >
    {buttonText}
  </Button>
);
export default ButtonCTA;