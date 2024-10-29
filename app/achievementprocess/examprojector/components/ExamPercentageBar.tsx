"use client";

import { Trophy } from "lucide-react";
import data from '../../data/data.json'; 

interface ProgressBarProps {
  value?: number;
}

export default function Component({ value = data.additionalData.progress }: ProgressBarProps) {
  const getLevelColor = (value: number) => {
    if (value < 25) return {
      base: 'bg-gradient-to-b from-[#99F6E4] to-[#2DD4BF]', 
      inner: 'bg-gradient-to-b from-[#14B8A6] to-[#14B8A6]',
      trophyColor: 'bg-gradient-to-br from-[#61DF61] to-[#168416]',
      borderColor: '#209220',
      boxShadow: 'shadow-inner shadow-[0px_0px_47.34px_rgba(1, 96, 1, 0.60)]', 
    };
    if (value < 50) return {
      base: 'bg-gradient-to-b from-[#FFC190] to-[#C35A2A]',
      inner: 'radial-gradient(64.20% 64.20% at 32.10% 32.10%, #DA9062 0%, #C67341 100%)',
      trophyColor: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]',
      borderColor: '#D99B19',
      boxShadow: 'shadow-inner shadow-[0px_0px_47.34px_rgba(217, 155, 25, 0.60)]', 
    };
    if (value < 75) return {
      base: 'bg-gradient-to-b from-[#ECEFF6] to-[#B5B5B6]',
      inner: 'bg-gradient-to-b from-[#6B7280] to-[#6B7280]',
      trophyColor: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]',
      borderColor: '#D99B19',
      boxShadow: 'shadow-inner shadow-[0px_0px_47.34px_rgba(217, 155, 25, 0.60)]', 
    };
    return {
      base: 'bg-gradient-to-b from-[#EDB120] to-[#D99B19]',
      inner: 'bg-gradient-to-b from-[#FECC2B] to-[#FECC2B]',
      trophyColor: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]',
      borderColor: '#FFD700',
      boxShadow: 'shadow-inner shadow-[0px_0px_47.34px_rgba(255, 215, 0, 0.60)]', 
    };
  };

  const getProgressMessage = (value: number) => {
    if (value < 25) return "Start with Find My Level test series";
    if (value < 50) return "Keep Practicing, Stay Focused";
    if (value < 75) return "You're Getting There, Champion!";
    if (value < 100) return "Bravo! You're almost there!";
    return "Congratulations! You've achieved 100%!";
  };

  const { base, inner, trophyColor, borderColor, boxShadow } = getLevelColor(value);
  const progressMessage = getProgressMessage(value);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="relative h-12">
        <div className="absolute inset-0 bg-[#E0F2FE] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${base}`}
            style={{ width: `${value}%` }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="relative w-20 h-20">
            <div
              className={`absolute w-20 h-20 rounded-full ${base}`}
            />
            <div
              className={`absolute w-14 h-14 rounded-full ${inner} left-3 top-3`}
            />
            <div
              className={`absolute w-16 h-16 opacity-25 mix-blend-overlay rounded-full border border-white left-2 top-2`}
            />
            <div
              className="absolute left-1/2 top-1/2 text-white text-xl font-semibold -translate-x-1/2 -translate-y-1/2 text-center"
            >
              {value}%
            </div>
          </div>

          <div className="items-center justify-end">
            <div className="w-24 h-24 relative ">
              <div
                style={{
                  width: 70.71,
                  height: 70.71,
                  left: 20,
                  top: 0,
                  position: 'absolute',
                  transform: 'rotate(45deg)',
                  transformOrigin: '0 0',
                  background: trophyColor,
                  boxShadow: boxShadow,
                  borderRadius: 10.52,
                }}
              />
              <div
                style={{
                  width: 70.83,
                  height: 70.83,
                  left: 23.58,
                  top: 14.58,
                  position: 'absolute',
                  background: value < 100 ? 'linear-gradient(159deg, #79F07A 0%, #4CC14C 50%, #1F921F 100%)' : 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                  borderRadius: 10.52,
                }}
              />
              <div
                style={{
                  width: 47.92,
                  height: 47.92,
                  left: 36.04,
                  top: 26.04,
                  position: 'absolute',
                  background: value < 100
                    ? 'radial-gradient(61.48% 60.76% at 28.57% 30.38%, #0FDB0C 0%, #089604 100%), radial-gradient(92.10% 173.57% at 628.93% -291.34%, rgba(255, 255, 255, 0.29) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(0, 89, 0, 0) 0%, rgba(0, 89, 0, 0.20) 100%)'
                    : 'linear-gradient(180deg, rgba(255, 215, 0, 0.5) 0%, rgba(255, 215, 0, 0.20) 100%)', 
                  boxShadow: boxShadow,
                  borderRadius: 5.26,
                  border: `8.42px ${borderColor} solid`,
                }}
              />
              <div
                style={{
                  width: 56.44,
                  height: 56.44,
                  left: 31.78,
                  top: 21.78,
                  position: 'absolute',
                  opacity: 0.47,
                  borderRadius: 14.25,
                  border: `1.02px ${borderColor} solid`,
                }}
              />
              <div
                style={{
                  width: 47.92,
                  height: 47.92,
                  left: 36.04,
                  top: 26.04,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Trophy style={{ color: "white" }} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-xs py-4">
        <span className="text-gray-600">{progressMessage}</span>
        <span className="text-gray-600">49 Days</span>
      </div>
    </div>
  );
}
