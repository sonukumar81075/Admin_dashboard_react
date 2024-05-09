import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '18-24',
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      name: '25-29',
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      name: '30-34',
      uv: 15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
    {
      name: '35-39',
      uv: 8.22,
      pv: 9800,
      fill: '#82ca9d',
    },
    {
      name: '40-49',
      uv: 8.63,
      pv: 3908,
      fill: '#a4de6c',
    },
    {
      name: '50+',
      uv: 2.63,
      pv: 4800,
      fill: '#d0ed57',
    },
    {
      name: 'unknow',
      uv: 6.67,
      pv: 4800,
      fill: '#ffc658',
    },
  ];
  
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
export default function BuyerProfileChart() {
  return (
    <div className='w-[20.5rem] md:w-[24rem]  h-[16rem] flex flex-col  bg-white p-4 reounded-sm border border-gray-200 '>
        <strong className='tet-gray-700 font-medium'>Buyer Profile</strong>
      <div className="w-full mt-3 flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart cx="35%" cy="45%" innerRadius="10%" outerRadius="100%" barSize={10} data={data}>
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
    </ResponsiveContainer>
      </div>
    </div>
  )
}
