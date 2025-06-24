import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { StatCard } from './StatCard';

// Data for Funnel Count Card
const funnelData = [
  { name: 'Discovery', value: 200, dealValue: 200, days: 2, color: 'bg-red-400', percentage: 33.3 },
  { name: 'Qualified', value: 100, dealValue: 100, days: 2, color: 'bg-yellow-400', percentage: 16.7 },
  { name: 'In conversation', value: 50, dealValue: 100, days: -1, color: 'bg-indigo-900', percentage: 8.3 },
  { name: 'Negotiations', value: 20, dealValue: 50, days: 8, color: 'bg-green-400', percentage: 3.3 },
  { name: 'Closed won', value: 20, dealValue: 50, days: 10, color: 'bg-purple-500', percentage: 3.3 },
];

// Data for Sources Card
const sourcesData = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' },
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' },
  { name: 'Instagram', value: 1000, percentage: 10, color: '#38B2AC' },
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#6EE7B7' },
];

const COLORS = sourcesData.map(d => d.color);

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return null; // No labels inside pie chart as per design
};

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Funnel Count Card */}
      <StatCard title="Funnel count">
        <div className="flex items-center mb-4">
          <p className="text-4xl font-bold">600</p>
          <p className="ml-2 text-muted-foreground">active leads</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 flex overflow-hidden">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={`${stage.color} h-2.5`}
              style={{ width: `${stage.percentage}%` }}
              title={`${stage.name}: ${stage.value}`}
            />
          ))}
        </div>
        <div className="space-y-3">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 text-sm">
              <div className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full ${stage.color} mr-3`}></span>
                <span className="text-muted-foreground">{stage.name}</span>
              </div>
              <span className="font-semibold justify-self-end">{stage.value}</span>
              <span className="text-muted-foreground justify-self-end">$ {stage.dealValue}</span>
              <span className="text-muted-foreground justify-self-end relative">
                {stage.days > 0 ? `${stage.days} days` : ''}
                {stage.name === 'In conversation' && (
                  <div className="absolute -bottom-7 -right-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
                    average time on this stage
                    <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 -top-1 right-1/2 -translate-x-1/2"></div>
                  </div>
                )}
              </span>
            </div>
          ))}
        </div>
      </StatCard>

      {/* Sources Card */}
      <StatCard title="Sources">
        <div className="flex items-start justify-between">
            <div className="w-1/2 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip 
                    contentStyle={{ background: '#333', border: 'none', borderRadius: '0.5rem' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Pie
                    data={sourcesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                  >
                    {sourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 pl-4 space-y-4 relative">
              {sourcesData.map((source) => (
                <div key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full mr-3" style={{backgroundColor: source.color}}></span>
                    <span className="text-muted-foreground">{source.name}</span>
                  </div>
                  <span className="text-muted-foreground justify-self-end">$ {source.value}</span>
                  <span className="font-semibold justify-self-end">{source.percentage}%</span>
                </div>
              ))}
              <div className="absolute -bottom-5 right-0 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2">
                from leads total
                 <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 -top-1 right-4"></div>
              </div>
            </div>
        </div>
      </StatCard>
    </div>
  );
};

export default StatsCardGrid;
