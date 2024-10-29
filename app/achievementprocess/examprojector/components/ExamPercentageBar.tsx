"use client";

import { Trophy } from "lucide-react";

interface ProgressBarProps {
  value?: number;
}

export default function Component({ value = 10 }: ProgressBarProps) {
  const getLevelColor = (value: number) => {
    if (value === 100) {
      return {
        base: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)', 
        inner: 'linear-gradient(0deg, #FFD700 0%, #FFD700 100%)',
        trophyColor: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)', 
        borderColor: '#FFD700', 
        boxShadow: '0px 0px 47.34px rgba(255, 215, 0, 0.60) inset', 
      };
    }
     return {
      base: 'linear-gradient(180deg, #99F6E4 0%, #2DD4BF 100%)',
      inner: 'linear-gradient(0deg, #14B8A6 0%, #14B8A6 100%)',
      trophyColor: 'linear-gradient(123deg, #61DF61 0%, #168416 100%)',
      borderColor: '#209220',
      boxShadow: '0px 0px 47.34px #016803 inset', 
    };
  };

  const { base, inner, trophyColor, borderColor, boxShadow } = getLevelColor(value);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="relative h-12">
        <div className="absolute inset-0 bg-[#E0F2FE] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full`}
            style={{ width: `${value}%`, background: base }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <div style={{ width: 80, height: 80, position: 'relative' }}>
            <div
              style={{
                width: 80,
                height: 80,
                position: 'absolute',
                background: base,
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: 55,
                height: 55,
                position: 'absolute',
                background: inner,
                borderRadius: '50%',
                left: 12.5,
                top: 12.5,
              }}
            />
            <div
              style={{
                width: 65,
                height: 65,
                position: 'absolute',
                opacity: 0.25,
                mixBlendMode: 'overlay',
                borderRadius: '50%',
                border: '1px white solid',
                left: 7.5,
                top: 7.5,
              }}
            />
            <div
              style={{
                left: '50%',
                top: '50%',
                position: 'absolute',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Anek Tamil',
                fontWeight: '600',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              {value}%
            </div>
          </div>

          {/* Trophy Section */}
          <div style={{ width: 100, height: 100, position: 'relative' }}>
            <div
              style={{
                width: 70.71,
                height: 70.71,
                left: 50,
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
                left: 14.58,
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
                left: 26.04,
                top: 26.04,
                position: 'absolute',
                background: value < 100
                  ? 'radial-gradient(61.48% 60.76% at 28.57% 30.38%, #0FDB0C 0%, #089604 100%), radial-gradient(92.10% 173.57% at 628.93% -291.34%, rgba(255, 255, 255, 0.29) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(0, 89, 0, 0) 0%, rgba(0, 89, 0, 0.20) 100%)'
                  : 'linear-gradient(180deg, rgba(255, 215, 0, 0.5) 0%, rgba(255, 215, 0, 0.20) 100%)', 
                boxShadow: boxShadow, // Dynamic box shadow based on value
                borderRadius: 5.26,
                border: `8.42px ${borderColor} solid`, // Use borderColor for the trophy border
              }}
            />
            <div
              style={{
                width: 56.44,
                height: 56.44,
                left: 21.78,
                top: 21.78,
                position: 'absolute',
                opacity: 0.47,
                borderRadius: 14.25,
                border: `1.02px ${borderColor} solid`, // Use borderColor for the trophy border
              }}
            />
            <div
              style={{
                width: 47.92,
                height: 47.92,
                left: 26.04,
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
  );
}
