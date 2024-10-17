import React from 'react';
import { Button } from "@/components/ui/button"; // Make sure this import is correct
import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <Button
    onClick={onClick}
    type="button"
    id="close-number-verification"
    name="close-number-verification"
    variant="ghost"
    className="absolute right-2 top-2 w-8 h-8 p-0"
  >
    <X className="h-5 w-5" />
  </Button>
);

export default CloseButton;
