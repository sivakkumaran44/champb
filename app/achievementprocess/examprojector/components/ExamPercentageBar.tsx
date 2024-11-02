"use client";
import data from '../../data/data.json';
import { Clock, Trophy } from "lucide-react";

interface ProgressBarProps {
  value?: number;
}
type StyleWithMediaQueries = React.CSSProperties & {
  '@media (min-width: 640px)'?: React.CSSProperties;
};

export default function Component({ value = data.additionalData.progress }: ProgressBarProps) {
  const getLevelColor = (value: number) => {
    if (value < 25) return {
      base: 'bg-gradient-to-b from-[#99F6E4] to-[#2DD4BF]',
      inner: 'bg-[#14B8A6]',
      border: '#6FE9D6',
    };
    if (value < 50) return {
      base: 'bg-gradient-to-b from-[#FFC190] to-[#C35A2A]',
      inner: 'bg-gradient-to-b from-[#DA9062] to-[#C67341]',
      border: '#C76030',
    };
    if (value < 75) return {
      base: 'bg-gradient-to-b from-[#ECEFF6] to-[#B5B5B6]',
      inner: 'bg-[#6B7280]',
      border: '#ACACAC',
    };
    return {
      base: 'bg-gradient-to-b from-[#EDB120] to-[#D99B19]',
      inner: 'bg-[#FECC2B]',
      border: '#F6CD62',
    };
  };

  const getProgressMessage = (value: number) => {
    if (value < 25) return data.additionalData.progressMessages["25"];
    if (value < 50) return data.additionalData.progressMessages["50"];
    if (value < 75) return data.additionalData.progressMessages["75"];
    return data.additionalData.progressMessages["100"];
  };

  const { base, inner, border } = getLevelColor(value);
  const progressMessage = getProgressMessage(value);

  const getTrophyStyles = (value: number) => {
    if (value === 100) {
      return {
        topSquare: { background: 'linear-gradient(123deg, #FDE047 0%, #EAB308 100%)' },
        middleSquare: { background: 'linear-gradient(159deg, #FDE68A 0%, #FACC15 50%, #CA8A04 100%)' },
        innerSquare: {
          background: 'radial-gradient(61.48% 60.76% at 28.57% 30.38%, #FEF9C3 0%, #EAB308 100%)',
          border: '8.42px #EEBC15 solid'
        },
        outerRing: { border: '1.02px #FDE047 solid' },
        center: {
          background: 'radial-gradient(41.29% 41.29% at 75.22% 48.85%, #A16207 0%, #EDB810 100%)',
          border: '3.33px #F1FFF1 solid'
        }
      };
    }
    return {
      topSquare: { background: 'linear-gradient(123deg, #61DF61 0%, #168416 100%)' },
      middleSquare: { background: 'linear-gradient(159deg, #79F07A 0%, #4CC14C 50%, #1F921F 100%)' },
      innerSquare: {
        background: 'radial-gradient(61.48% 60.76% at 28.57% 30.38%, #0FDB0C 0%, #089604 100%)',
        border: '8.42px #209220 solid'
      },
      outerRing: { border: '1.02px #AFFFAF solid' },
      center: {
        background: 'radial-gradient(41.29% 41.29% at 75.22% 48.85%, #316331 0%, #8BDCC8 100%)',
        border: '3.33px #F1FFF1 solid'
      }
    };
  };

  const trophyStyles = getTrophyStyles(value);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="relative h-12 mb-6 ">
        <div className="absolute inset-0 bg-[#E0F2FE] rounded-full sm:rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full sm:rounded-full ${base}`}
            style={{ width: `${value}%` }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 relative">
            <div className={`absolute inset-0 rounded-full ${base}`} />
            <div 
              className={`absolute inset-2 rounded-full ${inner}`}
              style={{
                boxShadow: 'inset 0px 0px 45px #5B1510',
                border: `8px solid ${border}`,
                '@media (min-width: 640px)': {
                  border: `10px solid ${border}`
                }
              } as StyleWithMediaQueries}
            />
            <div className="absolute inset-1 rounded-full opacity-25 mix-blend-overlay border border-white" />
            <span className="relative text-white text-lg sm:text-xl font-semibold">{value}%</span>
          </div>

          <div className="flex items-center justify-end">
            <div className="w-8 h-20 sm:w-8 sm:h-20 relative">
              <div
                style={{
                  width: 53.03,
                  height: 53.03,
                  left: 37.5,
                  top: 0,
                  position: 'absolute',
                  transform: 'rotate(45deg)',
                  transformOrigin: '0 0',
                  borderRadius: 7.89,
                  ...trophyStyles.topSquare,
                  '@media (min-width: 640px)': {
                    width: 70.71,
                    height: 70.71,
                    left: 50,
                    borderRadius: 10.52,
                  }
                } as StyleWithMediaQueries}
              />
              <div
                style={{
                  width: 53.12,
                  height: 53.12,
                  left: 10.94,
                  top: 10.94,
                  position: 'absolute',
                  borderRadius: 7.89,
                  ...trophyStyles.middleSquare,
                  '@media (min-width: 640px)': {
                    width: 70.83,
                    height: 70.83,
                    left: 14.58,
                    top: 14.58,
                    borderRadius: 10.52,
                  }
                } as StyleWithMediaQueries}
              />
              <div
                style={{
                  width: 35.94,
                  height: 35.94,
                  left: 19.53,
                  top: 19.53,
                  position: 'absolute',
                  borderRadius: 3.95,
                  ...trophyStyles.innerSquare,
                  '@media (min-width: 640px)': {
                    width: 47.92,
                    height: 47.92,
                    left: 26.04,
                    top: 26.04,
                    borderRadius: 5.26,
                  }
                } as StyleWithMediaQueries}
              />
              <div
                style={{
                  width: 42.33,
                  height: 42.33,
                  left: 16.34,
                  top: 16.34,
                  position: 'absolute',
                  opacity: 0.47,
                  borderRadius: 10.69,
                  ...trophyStyles.outerRing,
                  '@media (min-width: 640px)': {
                    width: 56.44,
                    height: 56.44,
                    left: 21.78,
                    top: 21.78,
                    borderRadius: 14.25,
                  }
                } as StyleWithMediaQueries}
              />
              <div
                style={{
                  width: 32.5,
                  height: 30.25,
                  left: 21.25,
                  top: 21.25,
                  position: 'absolute',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '@media (min-width: 640px)': {
                    width: 43.33,
                    height: 40.33,
                    left: 28.33,
                    top: 28.33,
                    borderRadius: 6.67,
                  },
                
                } as StyleWithMediaQueries}
              >
                <Trophy size={20} color="white" />
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <p className="text-sm sm:text-lg font-medium flex-grow">{progressMessage}</p>
          <Clock className="w-5 h-5 mr-2 text-blue-500" />
          <span className="text-sm sm:text-base font-medium">
            {data.additionalData.daysLeft} days left
          </span>
        </div>
        </div>
       
  
  );
}
