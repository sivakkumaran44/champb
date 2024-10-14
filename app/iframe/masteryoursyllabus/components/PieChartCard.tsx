import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface ChartData {
  name: string
  value: number
  color: string 
}

interface DashboardCardProps {
  title: string
  data: ChartData[]
}

const PieChartCard: React.FC<DashboardCardProps> = ({ title, data }) => {
  return (
    <div className="flex items-center w-[220px] h-[60px]">
      <div className="w-12 h-12 mr-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={15}
              outerRadius={24}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-slate-700 mb-1">{title}</h2>
        <div className="flex space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PieChartCard