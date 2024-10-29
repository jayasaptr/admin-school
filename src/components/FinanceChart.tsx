'use client';

import Image from 'next/image';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expanse: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expanse: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expanse: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expanse: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expanse: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expanse: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expanse: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expanse: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expanse: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expanse: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expanse: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expanse: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expanse"
            stroke="#FAE27C"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
