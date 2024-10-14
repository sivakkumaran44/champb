import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'

interface ThreeColorBarData {
  correctanswered: number
  Incorrectanswered: number
  UncoveredAnswered: number
  color1: string
  color2: string
  color3: string
  text: string
  name?: string 
}

interface ThreeColorBarProps {
  data: ThreeColorBarData
  isActive: boolean
  isMainBar: boolean
}

const ThreeColorBar: React.FC<ThreeColorBarProps> = ({ data, isActive, isMainBar }) => {
  const totalAnswers = data.correctanswered + data.Incorrectanswered + data.UncoveredAnswered
  const centerText = totalAnswers > 0 ? `${((data.correctanswered / totalAnswers) * 100).toFixed(1)}%` : '0%'

  const getColor = (color: string, type: 'color1' | 'color2' | 'color3') => {
    if (!isMainBar) return color
    if (isActive) return color
    if (type === 'color1') return "#475569"
    if (type === 'color2') return "#94A3B8"
    return color   
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${!isMainBar ? 'ml-4' : ''}`}>
      <div className="w-full h-8 max-w-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[data]} layout="vertical">
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis dataKey="name" type="category" hide />
            {data.color1 && (
              <Bar dataKey="correctanswered" stackId="a" fill={getColor(data.color1, 'color1')} radius={[4, 0, 0, 4]}>
                <Label value={centerText} position="center" fill="#000" fontSize={10} />
              </Bar>
            )}
            {data.color2 && (
              <Bar dataKey="Incorrectanswered" stackId="a" fill={getColor(data.color2, 'color2')} radius={0} />
            )}
            {data.color3 && (
              <Bar dataKey="UncoveredAnswered" stackId="a" fill={getColor(data.color3, 'color3')} radius={[0, 4, 4, 0]} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium text-gray-700">{data.text}</span>
      </div>
    </div>
  );
};

export default ThreeColorBar