"use client";
import React, { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, HelpCircle, PenLine } from "lucide-react";

interface TestInfo {
  id: string;
  title: string;
  description: string;
  duration: number;
  questions: number;
  isFree: boolean;
}

const MockTestPageClient: React.FC<TestInfo> = ({ title, description, duration, questions, isFree }) => {
  const handleTakeTest = useCallback(() => {
    const testWindow = window.open("/generalinstructions", "mozillaWindow", "popup,width=800,height=600");
    
    if (!testWindow) {
      alert('Please allow pop-ups for this site to take the test.');
      return;
    }

    testWindow.onload = () => {
      const script = testWindow.document.createElement('script');
      script.textContent = `
        (function() {
          // Disable context menu and keyboard shortcuts
          document.addEventListener('contextmenu', e => e.preventDefault());
          document.addEventListener('copy', e => e.preventDefault());
          document.addEventListener('cut', e => e.preventDefault());
          document.addEventListener('paste', e => e.preventDefault());
          document.addEventListener('keydown', e => {
            if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 's')) {
              e.preventDefault();
            }
          });
          document.body.style.userSelect = 'none';
          document.body.style.webkitUserSelect = 'none';
          document.body.style.msUserSelect = 'none';
          document.body.style.mozUserSelect = 'none';

          // Warn user before leaving the page
          window.addEventListener('beforeunload', e => {
            e.preventDefault();
            e.returnValue = '';
          });

          // Hide content during print
          const style = document.createElement('style');
          style.textContent = '@media print { body { display: none; } }';
          document.head.appendChild(style);
        })();
      `;
      testWindow.document.body.appendChild(script);
    };

  }, []);

  return (
    <Card className="mb-4 w-full max-w-4xl bg-slate-100 border border-slate-300 rounded-lg relative">
      <CardContent className="p-4 sm:p-6">
        {isFree && (
          <div className="absolute -top-3 -right-3">
            <span className="bg-slate-700 border-none text-white text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-xl">
              FREE
            </span>
          </div>
        )}
        <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-2 pr-16">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span>{duration} Minutes</span>
          </div>
          <div className="flex items-center sm:ml-4">
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span>{questions} Questions</span>
          </div>
        </div>
        <Button
          className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
          onClick={handleTakeTest} 
        >
          <PenLine className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm">TAKE TEST</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default MockTestPageClient;
