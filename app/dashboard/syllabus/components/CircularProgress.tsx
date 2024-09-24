import React from 'react';
interface CircularProgressProps {
  percentage: number;
  onClick: () => void;
  isSelected: boolean;
  isDisabled: boolean;
  
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, onClick, isSelected, isDisabled }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };
    const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const redStrokeDasharray = `${circumference * 0.1} ${circumference * 0.9}`;

  const greenColor = isDisabled ? '#808080' : '#00C49F';
  const redColor = isDisabled ? '#A9A9A9' : '#F87171';
  const backgroundColor = isDisabled ? '#D3D3D3' : '#E0E0E0';

  return (
    <div 
    className={`relative w-32 h-32 cursor-pointer ${isSelected ? 'scale-105' : ''} ${isDisabled ? 'opacity-50' : ''}`} 
    onClick={handleClick}
  >
        <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={backgroundColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={greenColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <circle
          className="transition-all duration-300 ease-in-out"
          stroke={redColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={redStrokeDasharray}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xl font-bold ${isDisabled ? 'text-gray-500' : 'text-gray-700'}`}>
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;